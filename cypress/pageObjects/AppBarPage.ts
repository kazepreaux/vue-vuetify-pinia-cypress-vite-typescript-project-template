export default class AppBarPage {
  private get _element() {
    return this._cy.get(".v-application__wrap .v-toolbar");
  }

  constructor(private _cy: Cypress.cy & CyEventEmitter) {}

  public get Title() {
    return this._element.find(".v-toolbar-title .v-toolbar-title__placeholder");
  }

  public get MenuButton() {
    return this._element.find(".menu-button");
  }
}
