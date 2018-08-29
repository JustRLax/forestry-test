// Deal with WP jQuery noConflict
$ = jQuery;

var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf("rv:");
    if (this.versionSearchString === "Trident" && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },

  dataBrowser: [
    {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
    {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
    {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
    {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
    {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
    {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

    {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
    {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
  ]
};

BrowserDetect.init();
$("html").addClass((BrowserDetect.browser).toLowerCase()).addClass((BrowserDetect.browser).toLowerCase() + "-" + BrowserDetect.version);

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )
	{$("body").addClass("touch");}
	else{$("body").addClass("no-touch");}

const cl = new cloudinary.Cloudinary({cloud_name: "justinlaxamana", secure: true});
const cloudinary_url = "https://res.cloudinary.com/justinlaxamana/";
const cloudinary_fetch_url = cloudinary_url + "/image/fetch/";

(function($){

// Menu Click
$('.main-header__menu').on("click", function(e){
  $(this).toggleClass('active');
  $('.main-header__links').toggleClass('active');
  e.preventDefault();
});

$('.main-header .mobile-link').on("click", function(e){
  $(this).toggleClass('active');
  $(this).next('.dropdown').toggleClass('active');
  mobileNavHeight();
  e.preventDefault();
});

//Mobile Height Overflow
function mobileNavHeight () {
  var navHeight = $('.main-header__nav').outerHeight() + 60;
  var windowHeight = $(window).height();
  if (navHeight > windowHeight) {
    $('.main-header__links').addClass("overflow");
  } else {
    $('.main-header__links').removeClass("overflow");
  }
}
$(window).on("resize", mobileNavHeight); //Check window width on resize
$(window).triggerHandler("resize"); // Initial window check



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


	const aboutText = basicScroll.create({
		elem: document.querySelector('.about'),
		from: 'top-bottom',
		to: 'middle-bottom',
		props: {
			'--abt': {
				from: 0,
				to: 1
			},
			'--abv': {
				from: '-40px',
				to: '0px'
			}
		}
	});
	aboutText.start();


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

	const ldShow = basicScroll.create({
		elem: document.querySelector('.preview'),
		from: 'top-bottom',
		to: 'middle-bottom',
		props: {
			'--ldo': {
				from: 0,
				to: 1
			},
			'--ldt': {
				from: '-100px',
				to: '0px'
			},
			'--ldt2': {
				from: '100px',
				to: '0px'
			}
		}
	});
	ldShow.start();


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

//Keep Ratio Images
if($('.video-bg').length) {
  $('.video-bg').keepRatio({ ratio: 16/9, calculate: 'height' });
}

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbWVudS5qcyIsIjJfc2xpZGVycy5qcyIsIjNfbGlnaHRib3guanMiLCI0X3BhcmFsbGF4LmpzIiwiNV9rZWVwLXJhdGlvLmpzIiwiel9lbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVhbCB3aXRoIFdQIGpRdWVyeSBub0NvbmZsaWN0XG4kID0galF1ZXJ5O1xuXG52YXIgQnJvd3NlckRldGVjdCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuc2VhcmNoU3RyaW5nKHRoaXMuZGF0YUJyb3dzZXIpIHx8IFwiT3RoZXJcIjtcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCBcIlVua25vd25cIjtcbiAgfSxcbiAgc2VhcmNoU3RyaW5nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZztcbiAgICAgIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9IGRhdGFbaV0uc3ViU3RyaW5nO1xuXG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKGRhdGFbaV0uc3ViU3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZWFyY2hWZXJzaW9uOiBmdW5jdGlvbiAoZGF0YVN0cmluZykge1xuICAgIHZhciBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcnYgPSBkYXRhU3RyaW5nLmluZGV4T2YoXCJydjpcIik7XG4gICAgaWYgKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9PT0gXCJUcmlkZW50XCIgJiYgcnYgIT09IC0xKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhydiArIDMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpO1xuICAgIH1cbiAgfSxcblxuICBkYXRhQnJvd3NlcjogW1xuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJFZGdlXCIsIGlkZW50aXR5OiBcIk1TIEVkZ2VcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk1TSUVcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlRyaWRlbnRcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkZpcmVmb3hcIiwgaWRlbnRpdHk6IFwiRmlyZWZveFwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiT3BlcmFcIiwgaWRlbnRpdHk6IFwiT3BlcmFcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk9QUlwiLCBpZGVudGl0eTogXCJPcGVyYVwifSxcblxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJDaHJvbWVcIiwgaWRlbnRpdHk6IFwiQ2hyb21lXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJTYWZhcmlcIiwgaWRlbnRpdHk6IFwiU2FmYXJpXCJ9XG4gIF1cbn07XG5cbkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xuJChcImh0bWxcIikuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSkuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgQnJvd3NlckRldGVjdC52ZXJzaW9uKTtcbiIsIi8qKlxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIChodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3Nlci5jb20vKVxuICpcbiAqIGpRdWVyeS5icm93c2VyLm1vYmlsZSB3aWxsIGJlIHRydWUgaWYgdGhlIGJyb3dzZXIgaXMgYSBtb2JpbGUgZGV2aWNlXG4gKlxuICoqL1xuKGZ1bmN0aW9uKGEpeyhqUXVlcnkuYnJvd3Nlcj1qUXVlcnkuYnJvd3Nlcnx8e30pLm1vYmlsZT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XG5cbmlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIClcblx0eyQoXCJib2R5XCIpLmFkZENsYXNzKFwidG91Y2hcIik7fVxuXHRlbHNleyQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tdG91Y2hcIik7fVxuIiwiY29uc3QgY2wgPSBuZXcgY2xvdWRpbmFyeS5DbG91ZGluYXJ5KHtjbG91ZF9uYW1lOiBcImp1c3RpbmxheGFtYW5hXCIsIHNlY3VyZTogdHJ1ZX0pO1xuY29uc3QgY2xvdWRpbmFyeV91cmwgPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL1wiO1xuY29uc3QgY2xvdWRpbmFyeV9mZXRjaF91cmwgPSBjbG91ZGluYXJ5X3VybCArIFwiL2ltYWdlL2ZldGNoL1wiO1xuIiwiKGZ1bmN0aW9uKCQpe1xuIiwiLy8gTWVudSBDbGlja1xuJCgnLm1haW4taGVhZGVyX19tZW51Jykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICQoJy5tYWluLWhlYWRlcl9fbGlua3MnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcubWFpbi1oZWFkZXIgLm1vYmlsZS1saW5rJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICQodGhpcykubmV4dCgnLmRyb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICBtb2JpbGVOYXZIZWlnaHQoKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbi8vTW9iaWxlIEhlaWdodCBPdmVyZmxvd1xuZnVuY3Rpb24gbW9iaWxlTmF2SGVpZ2h0ICgpIHtcbiAgdmFyIG5hdkhlaWdodCA9ICQoJy5tYWluLWhlYWRlcl9fbmF2Jykub3V0ZXJIZWlnaHQoKSArIDYwO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICBpZiAobmF2SGVpZ2h0ID4gd2luZG93SGVpZ2h0KSB7XG4gICAgJCgnLm1haW4taGVhZGVyX19saW5rcycpLmFkZENsYXNzKFwib3ZlcmZsb3dcIik7XG4gIH0gZWxzZSB7XG4gICAgJCgnLm1haW4taGVhZGVyX19saW5rcycpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3dcIik7XG4gIH1cbn1cbiQod2luZG93KS5vbihcInJlc2l6ZVwiLCBtb2JpbGVOYXZIZWlnaHQpOyAvL0NoZWNrIHdpbmRvdyB3aWR0aCBvbiByZXNpemVcbiQod2luZG93KS50cmlnZ2VySGFuZGxlcihcInJlc2l6ZVwiKTsgLy8gSW5pdGlhbCB3aW5kb3cgY2hlY2tcbiIsIiIsIiIsImlmKCQoJy5mb3JlZ3JvdW5kJykubGVuZ3RoKSB7XG5cdGZ1bmN0aW9uIGRldGVjdFNjcm9sbCgpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIGlmKHNjcm9sbFRvcCA+PSAxMDAwKSB7XG4gICAgICAkKCcuaW50cm8nKS5hZGRDbGFzcygnaGlkZScpO1xuICAgIH0gZWxzZSB7XG5cdFx0XHQkKCcuaW50cm8nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuXHRcdH1cbiAgfVxuXG4gIC8vVGhyb3R0bGluZyBGdW5jdGlvblxuICBmdW5jdGlvbiB0aHJvdHRsZShmbiwgd2FpdCkge1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoKHRpbWUgKyB3YWl0IC0gRGF0ZS5ub3coKSkgPCAwKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICAgIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUoZGV0ZWN0U2Nyb2xsLCAyNSkpO1xuXG5cblx0Y29uc3Qgc2t5Q2hhbmdlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3NreS0tZGFyaycpLFxuXHRcdGZyb206ICcwJyxcblx0XHR0bzogJzE4MHB4Jyxcblx0XHRwcm9wczoge1xuXHRcdFx0Jy0tc2t5Jzoge1xuXHRcdFx0XHRmcm9tOiAuMDEsXG5cdFx0XHRcdHRvOiAuOTlcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRza3lDaGFuZ2Uuc3RhcnQoKTtcblxuXHRjb25zdCBncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX2ZvcmVncm91bmQnKSxcblx0XHRmcm9tOiAnMCcsXG5cdFx0dG86ICc1MDBweCcsXG5cdFx0cHJvcHM6IHtcblx0XHRcdCctLWZnJzoge1xuXHRcdFx0XHRmcm9tOiAnMHB4Jyxcblx0XHRcdFx0dG86ICctMjAwcHgnXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0Z3JvdW5kTW92ZS5zdGFydCgpO1xuXG5cdGNvbnN0IGZvcmVncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWdyb3VuZCcpLFxuXHRcdGZyb206ICcwJyxcblx0XHR0bzogJzUwMHB4Jyxcblx0XHRwcm9wczoge1xuXHRcdFx0Jy0tdHknOiB7XG5cdFx0XHRcdGZyb206ICcwcHgnLFxuXHRcdFx0XHR0bzogJy0yMDBweCdcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRmb3JlZ3JvdW5kTW92ZS5zdGFydCgpO1xuXG5cblx0Y29uc3QgYWJvdXRUZXh0ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKSxcblx0XHRmcm9tOiAndG9wLWJvdHRvbScsXG5cdFx0dG86ICdtaWRkbGUtYm90dG9tJyxcblx0XHRwcm9wczoge1xuXHRcdFx0Jy0tYWJ0Jzoge1xuXHRcdFx0XHRmcm9tOiAwLFxuXHRcdFx0XHR0bzogMVxuXHRcdFx0fSxcblx0XHRcdCctLWFidic6IHtcblx0XHRcdFx0ZnJvbTogJy00MHB4Jyxcblx0XHRcdFx0dG86ICcwcHgnXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0YWJvdXRUZXh0LnN0YXJ0KCk7XG5cblxuXHRjb25zdCBwb3J0Zm9saW9UZXh0ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvJyksXG5cdFx0ZnJvbTogJ3RvcC1ib3R0b20nLFxuXHRcdHRvOiAnbWlkZGxlLWJvdHRvbScsXG5cdFx0cHJvcHM6IHtcblx0XHRcdCctLXB0Jzoge1xuXHRcdFx0XHRmcm9tOiAwLFxuXHRcdFx0XHR0bzogMVxuXHRcdFx0fSxcblx0XHRcdCctLXB0dCc6IHtcblx0XHRcdFx0ZnJvbTogJy00MHB4Jyxcblx0XHRcdFx0dG86ICcwcHgnXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0cG9ydGZvbGlvVGV4dC5zdGFydCgpO1xuXG5cdGNvbnN0IGxkU2hvdyA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXcnKSxcblx0XHRmcm9tOiAndG9wLWJvdHRvbScsXG5cdFx0dG86ICdtaWRkbGUtYm90dG9tJyxcblx0XHRwcm9wczoge1xuXHRcdFx0Jy0tbGRvJzoge1xuXHRcdFx0XHRmcm9tOiAwLFxuXHRcdFx0XHR0bzogMVxuXHRcdFx0fSxcblx0XHRcdCctLWxkdCc6IHtcblx0XHRcdFx0ZnJvbTogJy0xMDBweCcsXG5cdFx0XHRcdHRvOiAnMHB4J1xuXHRcdFx0fSxcblx0XHRcdCctLWxkdDInOiB7XG5cdFx0XHRcdGZyb206ICcxMDBweCcsXG5cdFx0XHRcdHRvOiAnMHB4J1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cdGxkU2hvdy5zdGFydCgpO1xuXG5cblx0Y29uc3QgYmxvY2tTaG93ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX3Byb2plY3QtLWZpeGVkJyksXG5cdFx0ZnJvbTogJ3RvcC1ib3R0b20nLFxuXHRcdHRvOiAnbWlkZGxlLWJvdHRvbScsXG5cdFx0cHJvcHM6IHtcblx0XHRcdCctLWJvJzoge1xuXHRcdFx0XHRmcm9tOiAwLFxuXHRcdFx0XHR0bzogMVxuXHRcdFx0fSxcblx0XHRcdCctLWJ0Jzoge1xuXHRcdFx0XHRmcm9tOiAnLTIwMHB4Jyxcblx0XHRcdFx0dG86ICcwcHgnXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0YmxvY2tTaG93LnN0YXJ0KCk7XG59XG5cbmlmICgkKCcuZm9vdGVyJykubGVuZ3RoKSB7XG5cdGNvbnN0IGZvb3RlclJpc2UgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fcHJvamVjdC0tZml4ZWQnKSxcblx0XHRmcm9tOiAnbWlkZGxlLXRvcCcsXG5cdFx0dG86ICdib3R0b20tdG9wJyxcblx0XHRkaXJlY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fc3VuLS1mb290ZXInKSxcblx0XHRwcm9wczoge1xuXHRcdFx0Jy0tcmlzZSc6IHtcblx0XHRcdFx0ZnJvbTogJzQwMHB4Jyxcblx0XHRcdFx0dG86ICcwJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cdGZvb3RlclJpc2Uuc3RhcnQoKTtcblxuXHRjb25zdCBmb290ZXJTaG93ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX3Byb2plY3QtLWZpeGVkJyksXG5cdFx0ZnJvbTogJ3RvcC1ib3R0b20nLFxuXHRcdHRvOiAnbWlkZGxlLWJvdHRvbScsXG5cdFx0ZGlyZWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyksXG5cdFx0cHJvcHM6IHtcblx0XHRcdCctLWZ0Jzoge1xuXHRcdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHRcdHRvOiAnMSdcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRmb290ZXJTaG93LnN0YXJ0KCk7XG59XG4iLCIvL0tlZXAgUmF0aW8gSW1hZ2VzXG5pZigkKCcudmlkZW8tYmcnKS5sZW5ndGgpIHtcbiAgJCgnLnZpZGVvLWJnJykua2VlcFJhdGlvKHsgcmF0aW86IDE2LzksIGNhbGN1bGF0ZTogJ2hlaWdodCcgfSk7XG59XG4iLCJ9KShqUXVlcnkpO1xuIl19
