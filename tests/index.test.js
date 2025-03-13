/**
 * @file index.test.js
 * @description End-to-end test for verifying that the index page contains an H1 element
 * and that its color changes between consecutive page loads.
 */
import { expect, test } from '@playwright/test';

test.describe('Index Page Occult Test 🏰', () => {
	// Shared emoji for this file domain
	const fileEmoji = '🏰';

	test('H1 element should exist and change color between page loads', async ({ page }) => {
		console.info(`${fileEmoji} 🔥 Initiating test: load index.html for H1 verification.`);

		// Load the page for the first time
		await page.goto('/');
		const h1First = await page.$('h1');
		expect(h1First).not.toBeNull();
		const colorFirst = await page.evaluate((el) => {
			return window.getComputedStyle(el).color;
		}, h1First);
		console.debug(`${fileEmoji} 🌟 First load H1 color: ${colorFirst}`);

		// Load the page a second time
		await page.goto('/');
		const h1Second = await page.$('h1');
		expect(h1Second).not.toBeNull();
		const colorSecond = await page.evaluate((el) => {
			return window.getComputedStyle(el).color;
		}, h1Second);
		console.debug(`${fileEmoji} 💥 Second load H1 color: ${colorSecond}`);

		// Verify that the H1 color is different on consecutive loads
		expect(colorFirst).not.toBe(colorSecond);
		console.info(`${fileEmoji} ⚡ H1 color mutation confirmed between consecutive page loads.`);
	});
});
