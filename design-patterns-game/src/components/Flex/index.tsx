import React, { FC, ReactElement } from 'react';
import styles from './index.less';

interface IFlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  itemSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
  itemOrder?: number;
  itemGrow?: number;
  style?: object;
  className?: string;
  onClick?: any;
}

interface IFlexStyle {
  flexDirection?: any;
  flexWrap?: any;
  WebkitFlexWrap?: any;
  justifyContent?: any;
  alignItems?: any;
  WebkitAlignItems?: any;
  alignSelf?: any;
  WebkitAlignSelf?: any;
  order?: any;
  WebkitJustifyContent?: any;
  flexGrow?: any;
  WebkitFlexGrow?: any;
  flexShrink?: any;
  WebkitFlexShrink?: any;
}

const Flex: FC<IFlexProps> = ({
  direction,
  wrap,
  justify,
  alignItems,
  itemOrder,
  itemSelf,
  itemGrow,
  onClick,
  className,
  style,
  children,
}): ReactElement => {
  let newStyle: IFlexStyle = {};
  if (direction) {
    newStyle['flexDirection'] = direction;
  }
  if (wrap) {
    newStyle['flexWrap'] = wrap;
    newStyle['WebkitFlexWrap'] = wrap;
  }
  if (justify) {
    newStyle['justifyContent'] = justify;
    newStyle['WebkitJustifyContent'] = justify;
  }
  if (alignItems) {
    newStyle['alignItems'] = alignItems;
    newStyle['WebkitAlignItems'] = alignItems;
  }
  if (itemSelf) {
    newStyle['alignSelf'] = itemSelf;
    newStyle['WebkitAlignSelf'] = itemSelf;
  }
  if (itemOrder) {
    newStyle['order'] = itemOrder;
  }
  newStyle['flexGrow'] = itemGrow || 0;
  newStyle['WebkitFlexGrow'] = itemGrow || 0;
  newStyle['flexShrink'] = 0;
  newStyle['WebkitFlexShrink'] = 0;
  let clazz = styles.flex;
  if (className) {
    clazz = clazz + ' ' + className;
  }

  return (
    <div className={clazz} style={{ ...newStyle, ...style }} onClick={onClick}>
      {children}
    </div>
  );
};
export default Flex;
