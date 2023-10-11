import { expect, test } from '@playwright/test';

test('home page has welcome message', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to the waqq.ly prototype!' })).toBeVisible();
});
