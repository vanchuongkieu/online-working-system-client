import * as styledComponents from 'styled-components';

export interface IThemeInterface {
  color: {
    primary: string;
    danger: string;
    warning: string;
    success: string;
    light: string;
  };
}

export const theme: IThemeInterface = {
  color: {
    primary: '#1890ff',
    danger: '#ff4d4f',
    warning: '#faad14',
    success: '#52c41a',
    light: '#d4d9e1',
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
