import { ThemeProvider } from "styled-components"
import { LightTheme, store } from "../src/store"
import { Provider } from "react-redux"
import { withRouter } from 'storybook-addon-react-router-v6';
import { GlobalStyles } from "../src/components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={LightTheme}>
      <Story />
    </ThemeProvider>
  ),


  (Story) => (
    <Provider store={store}>
          <Story />
    </Provider>
  ),
  withRouter,
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]