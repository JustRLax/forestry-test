if($('.foreground').length) {
	function detectScroll() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 1000) {
      $('.intro').addClass('hide');
    } else {
			$('.intro').removeClass('hide');
		}
  }

  //Throttling Function
  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  window.addEventListener('scroll', throttle(detectScroll, 25));


	const skyChange = basicScroll.create({
		elem: document.querySelector('.scene__sky--dark'),
		from: '0',
		to: '180px',
		props: {
			'--sky': {
				from: .01,
				to: .99
			}
		}
	});
	skyChange.start();

	const groundMove = basicScroll.create({
		elem: document.querySelector('.scene__foreground'),
		from: '0',
		to: '500px',
		props: {
			'--fg': {
				from: '0px',
				to: '-200px'
			}
		}
	});
	groundMove.start();

	const foregroundMove = basicScroll.create({
		elem: document.querySelector('.foreground'),
		from: '0',
		to: '500px',
		props: {
			'--ty': {
				from: '0px',
				to: '-200px'
			}
		}
	});
	foregroundMove.start();

	const portfolioText = basicScroll.create({
		elem: document.querySelector('.portfolio'),
		from: 'top-bottom',
		to: 'middle-bottom',
		props: {
			'--pt': {
				from: 0,
				to: 1
			},
			'--ptt': {
				from: '-40px',
				to: '0px'
			}
		}
	});
	portfolioText.start();

	const blockShow = basicScroll.create({
		elem: document.querySelector('.projects__project--fixed'),
		from: 'top-bottom',
		to: 'middle-bottom',
		props: {
			'--bo': {
				from: 0,
				to: 1
			},
			'--bt': {
				from: '-200px',
				to: '0px'
			}
		}
	});
	blockShow.start();
}

if ($('.footer').length) {
	const footerRise = basicScroll.create({
		elem: document.querySelector('.projects__project--fixed'),
		from: 'middle-top',
		to: 'bottom-top',
		direct: document.querySelector('.scene__sun--footer'),
		props: {
			'--rise': {
				from: '400px',
				to: '0'
			}
		}
	});
	footerRise.start();

	const footerShow = basicScroll.create({
		elem: document.querySelector('.projects__project--fixed'),
		from: 'top-bottom',
		to: 'middle-bottom',
		direct: document.querySelector('.footer'),
		props: {
			'--ft': {
				from: '0',
				to: '1'
			}
		}
	});
	footerShow.start();
}
