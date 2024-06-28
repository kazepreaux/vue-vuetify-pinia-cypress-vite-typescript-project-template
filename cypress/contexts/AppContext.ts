import IContext from "./IContext";
import App from "../../src/App.vue";
import AppBarPage from "../pageObjects/AppBarPage";
import HomeViewPage from "../pageObjects/HomeViewPage";
import NavigationDrawerPage from "../pageObjects/NavigationDrawerPage";
import DetailsViewPage from "../pageObjects/DetailsViewPage";

export default class AppContext implements IContext {
  private _appBar: AppBarPage;
  private _homeView: HomeViewPage;
  private _navigationDrawer: NavigationDrawerPage;
  private _detailsView: DetailsViewPage;

  constructor(private _cy: Cypress.cy & CyEventEmitter) {
    this._appBar = new AppBarPage(this._cy);
    this._homeView = new HomeViewPage(this._cy);
    this._navigationDrawer = new NavigationDrawerPage(this._cy);
    this._detailsView = new DetailsViewPage(this._cy);
  }

  public get AppBar() {
    return this._appBar;
  }

  public get NavigationDrawer() {
    return this._navigationDrawer;
  }

  public get HomeView() {
    return this._homeView;
  }

  public get DetailsView() {
    return this._detailsView;
  }

  public withInterceptors = () => {
    // Here add your interceptors
    return this;
  };

  public mount = () => {
    this._cy.customMount(App);

    return this;
  };
}
