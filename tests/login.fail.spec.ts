import { test , expect } from '../fixtures/pom.fixture';

test('Test should pass now', async ({ pm }) => {
    await pm.loginPage.openLoginPage();
    await pm.loginPage.userLogin('invalidUser', 'invalidPass');
    await pm.loginPage.assertFailedUsername();
});