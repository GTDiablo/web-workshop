import { ThemeProvider } from "styled-components"
import { LightTheme } from "../src/store/ui/themes/light"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={LightTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
}