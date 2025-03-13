import { expect, test } from '@playwright/test';

/**
 * Test the initial form page interactions
 */
test('Initial Form Page - Navigation and Interaction', async ({ page }) => {
	// Navigate to the initial form page
	await page.goto('/www/forms/initial.html');

	// Verify the page title
	await expect(page).toHaveTitle('Initial Form - Rogue-like Form Crawler');

	// Fill out the form
	await page.fill('#name', 'Test User');
	await page.fill('#email', 'testuser@example.com');
	await page.fill('#age', '30');
	await page.fill('#feedback', 'This is a test feedback.');

	// Click the 'Go to Next Form' button
	await page.click('button:has-text("Go to Next Form")');

	// Verify navigation to the next form
	await expect(page).toHaveURL('/www/forms/next-form.html');
});
