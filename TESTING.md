# 🧪 Testing Rituals: Ensuring the Integrity of the Labyrinth

This document outlines the procedures for testing the Rogue-like Form Crawler (RLFC) using Playwright. Our tests focus on end-to-end interactions, ensuring that the labyrinth behaves as expected for real users.

## 📜 Testing Guidelines

### General Principles

-   **End-to-End Focus:** Tests must interact with actual HTML pages in the `/www` directory.
-   **User-Centric:** Focus on what real users would see and interact with.
-   **No Mocks:** Avoid mock objects, unit tests, or test fixtures.
-   **Browser Compatibility:** Ensure tests run on all modern browsers.

### Test Structure

-   **Test Files:** Correspond to actual pages in the `/www` directory.
-   **Test Naming:** Use descriptive names that reflect the user journey or interaction being tested.

## 🛠️ Tools of the Trade

-   **Playwright:** Our chosen tool for end-to-end testing.
-   **JSDoc Annotations:** Include type annotations to guide the initiated.

## 🔮 Example Test: Initial Page Load

This example demonstrates how to test the initial page load of the RLFC.

```javascript
// filepath: /home/jesse/rogue-like-form-crawler/tests/initial-page-load.spec.js
/**
 * @file Initial page load test for RLFC
 * @module tests/initial-page-load
 */

import { test, expect } from '@playwright/test';

test.describe('Initial Page Load', () => {
	// Shared emoji for this file
	const fileEmoji = '🕯️';

	test('should display the correct title and elements', async ({ page }) => {
		// Navigate to the initial page
		await page.goto('/www/index.html');

		// Check the page title
		await expect(page).toHaveTitle('Rogue-like Form Crawler');

		// Check for the presence of the enter button
		const enterButton = page.locator('#enter-button');
		await expect(enterButton).toBeVisible();

		// Log the successful test
		console.info(`${fileEmoji} ✅ Initial page loaded successfully.`);
	});
});
```

## 🧪 Additional Tests

### Form Interaction Test

```javascript
// filepath: /home/jesse/rogue-like-form-crawler/tests/form-interaction.spec.js
/**
 * @file Form interaction test for RLFC
 * @module tests/form-interaction
 */

import { test, expect } from '@playwright/test';

test.describe('Form Interaction', () => {
	// Shared emoji for this file
	const fileEmoji = '🔮';

	test('should navigate to the first form and interact', async ({ page }) => {
		// Navigate to the initial page
		await page.goto('/www/index.html');

		// Click the enter button
		await page.click('#enter-button');

		// Wait for navigation to the first form
		await page.waitForURL('/www/forms/initial.html');

		// Check for the presence of a form element
		const formElement = page.locator('form');
		await expect(formElement).toBeVisible();

		// Log the successful test
		console.info(`${fileEmoji} ✅ Form interaction test passed.`);
	});
});
```

## 📄 Documentation Index

-   [README.md](README.md) - The initial incantation
-   [ROADMAP.md](ROADMAP.md) - The path of development
-   [STYLE_GUIDE.md](STYLE_GUIDE.md) - The aesthetic principles of our craft
-   [CHANGELOG.md](CHANGELOG.md) - The history of our summoning
-   [www/components/README.md](www/components/README.md) - The catalog of our ritual components
