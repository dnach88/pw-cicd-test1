import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { SecurePage } from "./SecurePage";
import { CheckboxesPage } from "./CheckboxesPage";

export default class ManagePage {
    constructor(private readonly page: Page) { }

    //
    private _login?: LoginPage;
    private _secure?: SecurePage;
    private _checkboxes?: CheckboxesPage;

    get loginPage(): LoginPage {
        if (!this._login) {
            this._login = new LoginPage(this.page);
        }
        return this._login;
    }
    get securePage(): SecurePage {
        return this._secure ??= new SecurePage(this.page);
    }

    get checkboxesPage(): CheckboxesPage {
        return this._checkboxes ??= new CheckboxesPage(this.page);
    }

}