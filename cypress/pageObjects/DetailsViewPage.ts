export default class DetailsViewPage {
  private get _element() {
    return this._cy.get(".v-application__wrap .v-main");
  }

  constructor(private _cy: Cypress.cy & CyEventEmitter) {}

  public get Title() {
    return this._element.find(".v-card-title");
  }

  public get Text() {
    return this._element.find(".v-card-text");
  }
}
