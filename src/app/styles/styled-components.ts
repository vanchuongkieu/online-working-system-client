import * as styledComponents from 'styled-components';

export interface IThemeInterface {
  home: {
    borderColor: string;
  };
}

export const theme: IThemeInterface = {
  home: {
    borderColor: '#dddddd',
  },
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export {css, createGlobalStyle, keyframes, ThemeProvider};
export default styled;
