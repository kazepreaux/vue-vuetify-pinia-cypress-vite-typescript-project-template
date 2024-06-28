import AppContext from "../cypress/contexts/AppContext";

describe("<Home />", () => {
  let context: AppContext;

  beforeEach(() => {
    context = new AppContext(cy).withInterceptors().mount();
  });

  it("renders the HomeView Page on load", () => {
    context.AppBar.Title.should("have.text", "Project Template");

    context.HomeView.Title.should("have.text", "Welcome to you!");
    context.HomeView.SubTitle.should("have.text", "A pre-configured project to help you getting started.");
    context.HomeView.Text.should(
      "contain.text",
      "The application uses Vue 3, Vuetify 3, Pinia 2, Cypress 13, Vite 5 & Typescript 5 and some more. The test framework used for this project is Cypress.",
    );
  });

  describe("Interactive testing", () => {
    it("should open the menu on menu-button click", () => {
      context.AppBar.MenuButton.click();
      context.NavigationDrawer.Items.should("be.visible");
    });

    it("should show details view when clicking each name", () => {
      context.AppBar.MenuButton.click();
      context.NavigationDrawer.Items.should("be.visible");

      context.NavigationDrawer.itemAtIndex(0).should("have.text", "Bob");
      context.NavigationDrawer.itemAtIndex(0).click();
      context.DetailsView.Title.should("have.text", "You selected:");
      context.DetailsView.Text.should("have.text", "Bob");

      context.NavigationDrawer.itemAtIndex(1).should("have.text", "Steve");
      context.NavigationDrawer.itemAtIndex(1).click();
      context.DetailsView.Title.should("have.text", "You selected:");
      context.DetailsView.Text.should("have.text", "Steve");

      context.NavigationDrawer.itemAtIndex(2).should("have.text", "Ben");
      context.NavigationDrawer.itemAtIndex(2).click();
      context.DetailsView.Title.should("have.text", "You selected:");
      context.DetailsView.Text.should("have.text", "Ben");
    });
  });
});
