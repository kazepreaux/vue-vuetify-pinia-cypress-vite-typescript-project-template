import { ThemeDefinition, createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#2a2a2a",
    surface: "#1f1f1f",
    "on-surfance": "#ffffff",
    primary: "#ffffff",
    secondary: "#ffffff",
    error: "#B00020",
    info: "#2196F3",
    success: "#00d452",
    warning: "#FB8C00",
  },
};

export const vuetifyInstance = createVuetify({
  components: { ...components, ...labsComponents },
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark,
    },
  },
});
