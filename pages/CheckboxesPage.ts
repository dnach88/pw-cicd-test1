import { BasePage } from "./BasePage";
import type { Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class CheckboxesPage extends BasePage {
    // Define locators for the checkboxes
    protected readonly firstBox: Locator;
    protected readonly secondBox: Locator;
    protected readonly form: Locator;

    constructor(page) {
        super(page);
        this.firstBox = page.locator('form#checkboxes input').nth(0);
        this.secondBox = page.locator('form#checkboxes input').nth(1);
        this.form = page.locator('form#checkboxes');
    }

    async openCheckboxesPage() {
        await this.goToUrl('/checkboxes');
        await this.basePageExpectVisible(this.form);
    }

    async checkFirstBox() {
        await this.firstBox.check();
    }

    async uncheckFirstBox() {
        await this.firstBox.uncheck();
    }

    async checkSecondBox() {
        await this.secondBox.check();
    }

    async uncheckSecondBox() {
        await this.secondBox.uncheck();
    }

    async assertChecboxesState(isFirstChecked: boolean, isSecondChecked: boolean) {
        await expect(this.firstBox).toBeChecked({ checked: isFirstChecked });
        await expect(this.secondBox).toBeChecked({ checked: isSecondChecked });
    }

}