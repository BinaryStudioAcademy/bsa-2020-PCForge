declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: {
      danger: React.CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}
