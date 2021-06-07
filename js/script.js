$(function() {
	//выпадающий список выбор языка
document.querySelectorAll('.select .trigger').forEach(function(trigger){
	trigger.onclick = function() {
		var select = this.parentElement;
		if (select.classList.contains('active')) {
			select.classList.remove('active');
		} else {
			select.classList.add('active');
			onClickClose(select.querySelector('.select-popup'), select);
		}
		return false;
	}
});
function onClickClose(elem, parent) { // вызвать в момент показа окна, где elem - окно
    function outsideClickListener(event) {
        if (!elem.contains(event.target) && isVisible(elem) && !parent.contains(event.target)) {  // проверяем, что клик не по элементу и элемент виден
             parent.classList.remove('active');
             document.removeEventListener('click', outsideClickListener);
        }
    }
    document.addEventListener('click', outsideClickListener)
}
function isVisible(elem) { //открыто ли условное окно
   return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
}
	
	//появление анимации при прокрутке	
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
	
	

	//слайдер по годам
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		slidesPerView: 7,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		initialSlide: 4,
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
		initialSlide: 4,
    });
	

	//галерея партнеры
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
			  slidesPerView: 2,
			slidesPerGroup: 2
			},
			800: {
			  slidesPerView: 4,
			slidesPerGroup: 4
			}
		 }
    });
	
	

	
	//мобильное меню
	const iconMenu = document.querySelector('.icon-mob');
	const menuBody = document.querySelector('.section-nav');
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active-mob');
			menuBody.classList.toggle('_active-mob');
		});
	}

	//прокрутка при клике
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

	//прилипающий блок
	var $window = $(window),
		$target = $(".fixed-block");
	$window.on('scroll',function() {
		$h = $('.technology-flex').offset().top;
		var scrollTop = parseInt($window.scrollTop(), 10) + 160;
		if (scrollTop >= $h && !$target.hasClass('fixed-block-active')) {
			$target.addClass("fixed-block-active");
		} else if ($target.hasClass('fixed-block-active') && scrollTop < $h) {
			$target.removeClass("fixed-block-active");
		}
		$('.technology-list .scroll-page').each(function() {
			var targetClass = $(this).data('goto');
			if (scrollTop > $(targetClass).offset().top) {
				$('.technology-list .scroll-page.active').removeClass('active');
				$(this).addClass('active');
			}
			else {
				$(this).removeClass('active');
			}
		});
		return;
	});
});
