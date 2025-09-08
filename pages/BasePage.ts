// BasePage stores common functionality for all pages. Class is protected so only extending classes can access it.
import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
    // Page is protected so only extending classes can access it.
    // Page is readonly so it cannot be reassigned.
    // Constructor shorthand automatically creates the field and assigns the value.
    constructor(protected readonly page: Page) { }

    // Navigate to a specific URL path.
    protected async goToUrl(path: string) {
        await this.page.goto(path);
    }


    protected async basePageClick(selector: string | Locator) {
        await this.toLocator(selector).click();
    }

    protected async basePageFill(selector: string | Locator, value: string) {
        await this.toLocator(selector).fill(value);
    }

    protected async basePageExpectVisible(selector: string | Locator) {
        await expect(this.toLocator(selector)).toBeVisible();
    }

    public locator(selector: string | Locator): Locator {
        return this.toLocator(selector);
    }

    protected toLocator(selector: string | Locator): Locator {
        return typeof selector === 'string'
            ? this.page.locator(selector)
            : selector; // If it's a string, convert to Locator; if already Locator, return as is.
    }
}