import { expect, test } from '@playwright/test';

const BASE_URL = 'http://localhost:3000'; // Update this to the correct base URL

// Test navigation from initial form to next form

test('Navigate from Initial Form to Next Form', async ({ page }) => {
	await page.goto(`${BASE_URL}/www/forms/initial.html`);
	await page.click('button:has-text("Go to Next Form")');
	await expect(page).toHaveURL(`${BASE_URL}/www/forms/next-form.html`);
});

// Test navigation from next form to final form

test('Navigate from Next Form to Final Form', async ({ page }) => {
	await page.goto(`${BASE_URL}/www/forms/next-form.html`);
	await page.click('button:has-text("Go to Final Form")');
	await expect(page).toHaveURL(`${BASE_URL}/www/forms/final-form.html`);
});

// Test navigation from final form to initial form

test('Navigate from Final Form to Initial Form', async ({ page }) => {
	await page.goto(`${BASE_URL}/www/forms/final-form.html`);
	await page.click('button:has-text("Go to Initial Form")');
	await expect(page).toHaveURL(`${BASE_URL}/www/forms/initial.html`);
});

// Test navigation from form 1 to form 2

test('Navigate from Form 1 to Form 2', async ({ page }) => {
	await page.goto(`${BASE_URL}/www/forms/form-1.html`);
	await page.click('button:has-text("Go to Form 2")');
	await expect(page).toHaveURL(`${BASE_URL}/www/forms/form-2.html`);
});

// Test navigation from form 2 to form 3

test('Navigate from Form 2 to Form 3', async ({ page }) => {
	await page.goto(`${BASE_URL}/www/forms/form-2.html`);
	await page.click('button:has-text("Go to Form 3")');
	await expect(page).toHaveURL(`${BASE_URL}/www/forms/form-3.html`);
});

// Test navigation from form 3 to form 1

test('Navigate from Form 3 to Form 1', async ({ page }) => {
	await page.goto(`${BASE_URL}/www/forms/form-3.html`);
	await page.click('button:has-text("Go to Form 1")');
	await expect(page).toHaveURL(`${BASE_URL}/www/forms/form-1.html`);
});
