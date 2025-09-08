// Creates a Playwright fixture that initializes Page Object Manager (PomManager) for each test
// This allows tests to access various page objects (LoginPage, Secure Page etc.) through the manager
// The fixture also provides a valid user object for authentication

import { test as base } from '@playwright/test';
import PomManager from '../pages/ManagePage';
import { validUser } from '../test-data/validUser';

type MyFixtures = {
    pm: PomManager;
    validUser: { username: string; password: string };
};

export const test = base.extend<MyFixtures>({
    // reuse playwright page object
    // create the PomManager with the page object and hand it to the test
    pm: async ({ page }, use) => {
        await use(new PomManager(page));
    },

    // plain value fixture (available to all tests)
    validUser,
});

export { expect } from '@playwright/test';