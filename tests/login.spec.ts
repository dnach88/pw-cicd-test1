import { test, expect } from '../fixtures/pom.fixture';

test.describe('Login flow', () => {

    test('Login with valid credentials', async ({ pm, validUser }) => {
        await pm.loginPage.openLoginPage();
        await pm.loginPage.userLogin(validUser.username, validUser.password);
        await pm.securePage.assertSuccess();
    });

    test('Login with invalid username', async ({ pm }) => {
        await pm.loginPage.openLoginPage();
        await pm.loginPage.userLogin('invalidUser', 'SuperSecretPassword!');
        await pm.loginPage.assertFailedUsername();

        await expect(pm.loginPage.locator('#flash')).toBeVisible();
    });    
});