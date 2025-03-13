/**
 * @file initial-form.test.js
 * @description Test the initial form page interactions
 * @module tests/initial-form
 */
import { expect, test } from '@playwright/test';

test.describe('Initial Form Ritual 📝', () => {
	// Shared emoji for this file domain
	const fileEmoji = '📝';

	test('should allow navigation and form interaction', async ({ page }) => {
		// Navigate to the initial form page
		await page.goto('/forms/initial.html');
		console.info(`${fileEmoji} 🧪 Initiating test: form interaction ritual`);

		// Verify the page title
		await expect(page).toHaveTitle('Initial Form - Rogue-like Form Crawler');

		// Fill out the form
		await page.fill('#name', 'Test User');
		await page.fill('#email', 'testuser@example.com');
		await page.fill('#age', '30');
		await page.fill('#feedback', 'This is a test feedback.');

		console.info(`${fileEmoji} ✍️ Form fields inscribed with test data`);

		// Click the 'Go to Next Form' button
		await page.click('button:has-text("Go to Next Form")');

		// Verify navigation to the next form
		await expect(page).toHaveURL('/forms/next-form.html');

		console.info(`${fileEmoji} 🚪 Portal to next form successfully traversed`);
	});
});
