import { test, expect } from '@playwright/test';

// Test the Enter button functionality on the index page

test('Enter button navigates to initial form with view transition', async ({ page }) => {
	// Navigate to the index page
	await page.goto('http://localhost:3000/index.html');

	// Click the Enter button
	await page.click('#enter-button');

	// Wait for the navigation to complete
	await page.waitForNavigation();

	// Verify that the URL is now the initial form page
	await expect(page).toHaveURL('http://localhost:3000/forms/initial.html');

	// Verify that the initial form page content is visible
	await expect(page.locator('.title')).toHaveText('Initial Form');
});
