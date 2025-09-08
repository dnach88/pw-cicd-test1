import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {
    async openLoginPage() {
        await this.goToUrl('/login');
    }

    async userLogin(username: string, password: string) {
        await this.basePageFill(this.page.getByLabel('Username'), username); // Using getByLabel as an example
        await this.basePageFill('#password', password); // Using CSS selector as an example
        await this.basePageClick('xpath=//button[contains(.,"Login")]'); // Using XPath selector as an example
    }

    async assertFailedUsername() {
        await this.basePageExpectVisible(this.page.locator('#flash'));

        await expect(this.page.locator('#flash')).toContainText('Your username is invalid!');
    }

}


