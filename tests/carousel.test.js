/**
 * @file carousel.test.js
 * @description End-to-end test for the image carousel component
 * @module tests/carousel
 */
import { test, expect } from '@playwright/test';

test.describe('Arcane Gallery Test 🎠', () => {
	// Shared emoji for this file domain
	const fileEmoji = '🎠';

	test.describe('Automatic Slideshow Navigation', () => {
		test('should initialize and navigate through slides automatically', async ({ page }) => {
			// Navigate to the carousel demo page
			await page.goto('/carousel-demo.html');
			console.info(`${fileEmoji} 🧪 Initiating test: automatic slide progression`);

			// Verify the page title
			await expect(page).toHaveTitle('Image Carousel - Rogue-like Form Crawler');

			// Verify carousel is rendered with proper ARIA role
			const carousel = page.locator('[role="tablist"]');
			await expect(carousel).toBeVisible();

			// Verify we have 3 indicators (dots) for our slides with tabs role
			const indicators = page.locator('[role="tab"]');
			await expect(indicators).toHaveCount(3);

			// Verify first indicator is active using ARIA attribute
			const firstIndicator = page.locator('[role="tab"][aria-selected="true"]').first();
			await expect(firstIndicator).toBeVisible();

			// Wait for the auto-transition to the second slide (slightly longer than the interval)
			await page.waitForTimeout(5500);

			// Verify second indicator is now active using ARIA attribute
			const secondIndicator = page.locator('[role="tab"]').nth(1);
			await expect(secondIndicator).toHaveAttribute('aria-selected', 'true');

			console.info(`${fileEmoji} 🔄 Automatic slide transition confirmed`);
		});
	});

	test.describe('Manual Control Interaction', () => {
		test('should respond to button controls', async ({ page }) => {
			// Navigate to the carousel demo page
			await page.goto('/carousel-demo.html');
			console.info(`${fileEmoji} 🖱️ Testing manual carousel controls`);

			// Click the "Next Vision" button using role
			await page.getByRole('button', { name: 'Next Vision' }).click();

			// Verify second slide is active using ARIA attribute
			const secondIndicator = page.locator('[role="tab"]').nth(1);
			await expect(secondIndicator).toHaveAttribute('aria-selected', 'true');

			// Click the "Previous Vision" button using role
			await page.getByRole('button', { name: 'Previous Vision' }).click();

			// Verify first slide is active again using ARIA attribute
			const firstIndicator = page.locator('[role="tab"]').nth(0);
			await expect(firstIndicator).toHaveAttribute('aria-selected', 'true');

			// Click the "Pause Transitions" button using role
			await page.getByRole('button', { name: 'Pause Transitions' }).click();

			// Wait long enough for auto-transition (if it were working)
			await page.waitForTimeout(5500);

			// Verify we're still on the first slide (autoplay was paused)
			await expect(firstIndicator).toHaveAttribute('aria-selected', 'true');

			// Click the "Resume Transitions" button using role
			await page.getByRole('button', { name: 'Resume Transitions' }).click();

			// Wait for the auto-transition
			await page.waitForTimeout(5500);

			// Verify we've moved to the next slide
			await expect(secondIndicator).toHaveAttribute('aria-selected', 'true');

			console.info(`${fileEmoji} 🎛️ Manual control interaction verified`);
		});
	});

	test.describe('Keyboard Accessibility', () => {
		test('should support keyboard navigation', async ({ page }) => {
			// Navigate to the carousel demo page
			await page.goto('/carousel-demo.html');
			console.info(`${fileEmoji} ⌨️ Testing keyboard navigation rituals`);

			// Focus on the carousel - find by ARIA roledescription
			await page.locator('[aria-roledescription="carousel"]').click();

			// Press right arrow key to go to next slide
			await page.keyboard.press('ArrowRight');

			// Verify second slide is active using ARIA attribute
			const secondIndicator = page.locator('[role="tab"]').nth(1);
			await expect(secondIndicator).toHaveAttribute('aria-selected', 'true');

			// Press left arrow key to go back to first slide
			await page.keyboard.press('ArrowLeft');

			// Verify first slide is active again using ARIA attribute
			const firstIndicator = page.locator('[role="tab"]').nth(0);
			await expect(firstIndicator).toHaveAttribute('aria-selected', 'true');

			// Press End key to go to last slide
			await page.keyboard.press('End');

			// Verify third slide is active using ARIA attribute
			const thirdIndicator = page.locator('[role="tab"]').nth(2);
			await expect(thirdIndicator).toHaveAttribute('aria-selected', 'true');

			// Press Home key to go back to first slide
			await page.keyboard.press('Home');

			// Verify first slide is active again
			await expect(firstIndicator).toHaveAttribute('aria-selected', 'true');

			console.info(`${fileEmoji} 🔑 Keyboard navigation rituals completed successfully`);
		});
	});
});
