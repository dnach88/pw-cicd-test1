import { test, expect } from '../fixtures/pom.fixture';

test.describe('Checkboxes flow', () => {

    test('Check the first checkbox and uncheck the second', async ({ pm, page }) => {
        await pm.checkboxesPage.openCheckboxesPage();
        await pm.checkboxesPage.checkFirstBox();
        
        // await expect(page).toHaveScreenshot(
        //     'checkboxes-after-check.png',
        // {maxDiffPixelRatio: 0.02}       
        // );
        
        await expect(pm.checkboxesPage.locator('form#checkboxes')).toBeVisible();
    });

    test('Uncheck both checkboxes', async ({ pm }) => {
        await pm.checkboxesPage.openCheckboxesPage();
        await pm.checkboxesPage.uncheckFirstBox();
        await pm.checkboxesPage.uncheckSecondBox();
        await pm.checkboxesPage.assertChecboxesState(false, false);    
    });
});