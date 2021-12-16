import React from 'react';
import MyConsumer from "../components/MyConsumer";
import Menu from "../components/Menu";
import useTitle from "../hooks/useTitle";

interface ITheme {
    light: {
        color: string;
    },
    dark: {
        color: string;
    }
}

export const themes: ITheme = {
    light: {
        color: 'red'
    },
    dark: {
        color: 'blue'
    }
};

export interface IContext {
    theme: any;
    toggleTheme: () => void;
}

interface IState {
    theme: { color: string };
}

export const ThemeContext = React.createContext<IContext>({
    theme: themes.light,
    toggleTheme: () => {
    },
})

class Playground extends React.Component<any, IState> {
    state: IState = {
        theme: themes.light,
    };
    toggleTheme = (): void => {
        this.setState((state) => (
            {
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }
        ))
    }

    componentDidMount() {
        document.title = 'react-context';
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Menu/>
                <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                    <MyConsumer/>
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default Playground;
