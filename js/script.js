$(function() {
// animation on scroll
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 5;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
	
	

	// slider by years
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		slidesPerView: 7,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		initialSlide: 3,
		breakpoints: {
			320: {
			  slidesPerView: 2
			},
			640: {
			  slidesPerView: 3
			},
			800: {
			  slidesPerView: 7
			}
		 }
		
    });
    var galleryTop = new Swiper('.gallery-top', {
      thumbs: {
        swiper: galleryThumbs
      },
		initialSlide: 3,
    });
	

	// gallery partners
	var swiper = new Swiper('.page-partners .swiper-container', {		
		slidesPerView: 4,
		slidesPerGroup: 4,
		loop: true,
		spaceBetween: 30,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},

		breakpoints: {
			320: {
			  slidesPerView: 2
			},
			800: {
			  slidesPerView: 4
			}
		 }
    });
	
	

	
	// mobile menu
	const iconMenu = document.querySelector('.icon-mob');
	const menuBody = document.querySelector('.section-nav');
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active-mob');
			menuBody.classList.toggle('_active-mob');
		});
	}

	// rollover when clicking
	const menuLinks = document.querySelectorAll('.scroll-page[data-goto]');
	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});

		function onMenuLinkClick(e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.nav').offsetHeight;

				if (iconMenu.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					iconMenu.classList.remove('_active');
					menuBody.classList.remove('_active');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();
			}
		}
	}

	// sticky block
	/*var $window = $(window),
		$target = $(".fixed-block");
	$window.on('scroll',function() {
		$h = $('.advantages-flex').offset().top;
		var scrollTop = parseInt($window.scrollTop(), 10) + 160;
		if (scrollTop >= $h && !$target.hasClass('fixed-block-active')) {
			$target.addClass("fixed-block-active");
		} else if ($target.hasClass('fixed-block-active') && scrollTop < $h) {
			$target.removeClass("fixed-block-active");
		}
		$('.advantages-list .scroll-page').each(function() {
			var targetClass = $(this).data('goto');
			if (scrollTop > $(targetClass).offset().top) {
				$('.advantages-list .scroll-page.active').removeClass('active');
				$(this).addClass('active');
			}
			else {
				$(this).removeClass('active');
			}
		});
		return;
	});*/
});

