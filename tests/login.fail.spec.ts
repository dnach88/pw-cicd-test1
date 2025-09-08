import { test , expect } from '../fixtures/pom.fixture';

test('Deliberate failure test', async ({ pm }) => {
    await pm.loginPage.openLoginPage();
    await pm.loginPage.userLogin('invalidUser', 'invalidPass');
    await pm.securePage.assertSuccess();
});