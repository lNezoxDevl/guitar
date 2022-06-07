"use strict"

const reviewsSwiper = document.querySelector(".swiper-reviews");


if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		autoHeight: true,
		// Optional parameters
		loop: true,

		// If we need pagination
		pagination: {

			el: '.swiper-pagination',
			clickable: true
		}

	});
}
