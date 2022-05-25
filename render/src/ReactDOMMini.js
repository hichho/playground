// ref: https://www.youtube.com/watch?v=CGpMlWVcHok
// ref: https://github.com/prometheansacrifice/my-react-dom

// import the guts of react
import ReactReconciler from "react-reconciler";

// magically update text color when too dark
import { isDark } from "./brightnessChecker";

let reconciler = ReactReconciler({
  // configs for how to talk to the host environment
  // aka host config
  supportsMutation: true,

  // 1. make stuff
  createInstance: (
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) => {
    // this gets called whenever there is a new host component
    // that we wanna put on the screen
    // we kinda only care about type and props
    // type is html tag element name
    // props is all element props (html + react)
    console.log(type, props);
    let el = document.createElement(type);
    ["alt", "className", "src", "rel", "href", "target"].forEach(k => {
      if (props[k]) el[k] = props[k];
    });

    if (props.style) {
      const styles = Object.entries(props.style);
      styles.forEach(kv => {
        el.style[kv[0]] = kv[1];
      });
    }

    if (props.onClick) {
      el.addEventListener("click", props.onClick);
    }

    // react reconciler doesn't have the notion of what a DOM or any host env is,
    // and returning this merely allows the reconciler to pass it back to
    // us at other functions to do stuff with them later.
    // react doesn't care AT ALL the shape of this return value
    return el;
  },
  createTextInstance: (
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) => {
    // a text instance is the bit between the elements, when you have
    // text strings
    // e.g. <div>Click Here! <button/></div> --> the "Click Here!" is the what this function handles
    return document.createTextNode(text);
  },

  // 2. add stuff to containers
  appendChildToContainer: (container, child) => {
    container.appendChild(child);
  },
  appendChild: (container, child) => {
    container.appendChild(child);
  },
  appendInitialChild: (container, child) => {
    container.appendChild(child);
  },

  // 3. remove stuff (on an update cycle, stuff is removed and then added again)
  removeChildFromContainer: (container, child) => {
    container.removeChild(child);
  },
  removeChild: (parentInstance, child) => {
    parentInstance.removeChild(child);
  },
  insertInContainerBefore: (container, child, before) => {
    // used when adding stuff in the middle of a list, instead of at the end
    container.insertBefore(child, before);
  },
  insertBefore: (parentInstance, child, before) => {
    parentInstance.insertBefore(child, before);
  },

  // useEffect related
  // render phase
  prepareUpdate: (
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) => {
    // the return should return a "what's changed"
    let payload;
    if (oldProps.style !== newProps.style) {
      // check for contrast with color
      if (
        newProps.style.ensureAccessibility &&
        newProps.style.backgroundColor
      ) {
        if (isDark(newProps.style.backgroundColor)) {
          newProps.style.color = "white";
        } else {
          newProps.style.color = "black";
        }
      }
      //   console.log("change calculated!", newProps.style);
      payload = { newStyles: newProps.style };
    }
    return payload;
  },
  // commit phase
  commitUpdate: (
    instance, // the DOM element instance to commit the update to
    updatePayload, // the payload from prepareUpdate
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ) => {
    // update new styles
    if (updatePayload.newStyles) {
      const styles = Object.entries(updatePayload.newStyles);
      styles.forEach(kv => {
        instance.style[kv[0]] = kv[1];
      });
    }
  },
  commitTextUpdate: (textInstance, oldText, newText) => {
    textInstance.nodeValue = newText;
  },
  finalizeInitialChildren: () => { },
  getChildHostContext: () => { },
  getPublicInstance: () => { },
  getRootHostContext: () => { },
  prepareForCommit: () => { },
  resetAfterCommit: () => { },

  shouldSetTextContent: (type, props) => {
    if (props.children) {
      const children = props.children;
      console.log(children);
    }
    return false;
  }
});

let ReactDOMMini = {
  render: (whatToRender, div) => {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, e =>
      console.log("container updated!", e)
    );
  }
};

export default ReactDOMMini;
