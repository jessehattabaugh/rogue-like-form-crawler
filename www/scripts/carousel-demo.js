/**
 * @file carousel-demo.js
 * @description Controls for the image carousel demonstration
 */

// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
	// Shared emoji for this file domain
	const fileEmoji = '🎠';

	// Get carousel element
	const carousel = document.getElementById('main-carousel');

	// Get control buttons
	const prevButton = document.getElementById('prev-slide');
	const nextButton = document.getElementById('next-slide');
	const stopAutoplayButton = document.getElementById('stop-autoplay');
	const startAutoplayButton = document.getElementById('start-autoplay');

	// Event listeners for control buttons
	prevButton.addEventListener('click', () => {
		carousel.prevSlide();
		console.debug(`${fileEmoji} ⬅️ Previous slide requested`);
	});

	nextButton.addEventListener('click', () => {
		carousel.nextSlide();
		console.debug(`${fileEmoji} ➡️ Next slide requested`);
	});

	stopAutoplayButton.addEventListener('click', () => {
		carousel.pauseAutoPlay();
		console.info(`${fileEmoji} ⏸️ Auto-play paused`);
	});

	startAutoplayButton.addEventListener('click', () => {
		carousel.resumeAutoPlay();
		console.info(`${fileEmoji} ▶️ Auto-play resumed`);
	});

	// Listen for slide change events
	carousel.addEventListener('slide-change', (event) => {
		const { index, total } = event.detail;
		console.debug(`${fileEmoji} 🔄 Slide changed to ${index + 1}/${total}`);
	});

	console.info(`${fileEmoji} 🔮 Carousel demo initialized`);
});

// Make sure image-carousel and carousel-item components are registered
customElements.define(
	'image-carousel',
	(await import('../components/image-carousel.js')).ImageCarousel,
);
customElements.define(
	'carousel-item',
	(await import('../components/carousel-item.js')).CarouselItem,
);
