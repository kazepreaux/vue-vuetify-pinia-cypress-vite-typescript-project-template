export default class NavigationDrawerPage {
  private get _element() {
    return this._cy.get(".v-navigation-drawer .v-navigation-drawer__content");
  }

  constructor(private _cy: Cypress.cy & CyEventEmitter) {}

  public get Items() {
    return this._element.find(".v-list-item");
  }

  public itemAtIndex(index: number) {
    return this._element.find(".v-list-item:nth-of-type(" + (index + 1) + ")");
  }
}
