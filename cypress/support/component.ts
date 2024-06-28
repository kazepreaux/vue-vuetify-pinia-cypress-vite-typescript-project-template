import "./commands";
import { mount } from "cypress/vue";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "./overrides.css";
import { ComponentOptionsMixin, DefineComponent, ExtractPropTypes, PublicProps } from "vue";
import { createPinia, Pinia, setActivePinia } from "pinia";
import { buildRouter } from "../../src/plugins/router";
import { createMemoryHistory } from "vue-router";
import { vuetifyInstance } from "../../src/plugins/vuetify";

function customMount(
  Comp: DefineComponent<
    NonNullable<unknown>,
    NonNullable<unknown>,
    NonNullable<unknown>,
    NonNullable<unknown>,
    NonNullable<unknown>,
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    NonNullable<unknown>,
    string,
    PublicProps,
    Readonly<ExtractPropTypes<NonNullable<unknown>>>,
    NonNullable<unknown>,
    NonNullable<unknown>
  >,
  options: Parameters<typeof mount>[1] = {},
) {
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];

  // Add router plugin
  options.global.plugins.push({
    install(app) {
      app.use(buildRouter(createMemoryHistory()));
    },
  });

  options.global.plugins.push(vuetifyInstance);
  options.global.plugins.push(pinia);

  return mount(Comp, options);
}

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      customMount: typeof customMount;
    }
  }
}

let pinia: Pinia;

beforeEach(() => {
  pinia = createPinia();
  setActivePinia(pinia);
});

Cypress.Commands.add("customMount", customMount);
