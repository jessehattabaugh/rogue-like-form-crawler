import { expect, test } from '@playwright/test';

/**
 * @file index.test.js
 * @description End-to-end test for verifying that the index page contains an H1 element
 * and that its color changes between consecutive page loads.
 */
test.describe('Index Page Occult Test 🏰', () => {

	test('H1 element should exist and change color between page loads 🏰💫', async ({ page }) => {
		console.info('🏰🔥 Initiating test: load index.html for H1 verification.');

		// Load the page for the first time
		await page.goto('http://localhost:3000/');
		const h1First = await page.$('h1');
		expect(h1First).not.toBeNull();
		const colorFirst = await page.evaluate((el) => {
			return window.getComputedStyle(el).color;
		}, h1First);
		console.debug(`🏰🌟 First load H1 color: ${colorFirst}`);

		// Load the page a second time
		await page.goto('http://localhost:3000/');
		const h1Second = await page.$('h1');
		expect(h1Second).not.toBeNull();
		const colorSecond = await page.evaluate((el) => {
			return window.getComputedStyle(el).color;
		}, h1Second);
		console.debug(`🏰💥 Second load H1 color: ${colorSecond}`);

		// Verify that the H1 color is different on consecutive loads
		expect(colorFirst).not.toBe(colorSecond);
		console.info('🏰⚡ H1 color mutation confirmed between consecutive page loads.');
	});
});