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



function detectScroll() {
	var scrollTop = $(window).scrollTop();
	if(scrollTop >= 1000) {
		$('.intro').addClass('hide');
		$('.footer').addClass('show');
	} else {
		$('.intro').removeClass('hide');
		$('.footer').removeClass('show');
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


if($('body.no-touch').length) {
	if($('.foreground').length) {
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
	}
}

//Keep Ratio Images
if($('.video-bg').length) {
  $('.video-bg').keepRatio({ ratio: 16/9, calculate: 'height' });
}

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbWVudS5qcyIsIjJfc2xpZGVycy5qcyIsIjNfbGlnaHRib3guanMiLCI0X3BhcmFsbGF4LmpzIiwiNV9rZWVwLXJhdGlvLmpzIiwiel9lbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0EiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWFsIHdpdGggV1AgalF1ZXJ5IG5vQ29uZmxpY3RcbiQgPSBqUXVlcnk7XG5cbnZhciBCcm93c2VyRGV0ZWN0ID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5icm93c2VyID0gdGhpcy5zZWFyY2hTdHJpbmcodGhpcy5kYXRhQnJvd3NlcikgfHwgXCJPdGhlclwiO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50KSB8fCB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLmFwcFZlcnNpb24pIHx8IFwiVW5rbm93blwiO1xuICB9LFxuICBzZWFyY2hTdHJpbmc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGF0YVN0cmluZyA9IGRhdGFbaV0uc3RyaW5nO1xuICAgICAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS5zdWJTdHJpbmc7XG5cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlYXJjaFZlcnNpb246IGZ1bmN0aW9uIChkYXRhU3RyaW5nKSB7XG4gICAgdmFyIGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBydiA9IGRhdGFTdHJpbmcuaW5kZXhPZihcInJ2OlwiKTtcbiAgICBpZiAodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID09PSBcIlRyaWRlbnRcIiAmJiBydiAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKHJ2ICsgMykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZy5sZW5ndGggKyAxKSk7XG4gICAgfVxuICB9LFxuXG4gIGRhdGFCcm93c2VyOiBbXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkVkZ2VcIiwgaWRlbnRpdHk6IFwiTVMgRWRnZVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiTVNJRVwiLCBpZGVudGl0eTogXCJFeHBsb3JlclwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiVHJpZGVudFwiLCBpZGVudGl0eTogXCJFeHBsb3JlclwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiRmlyZWZveFwiLCBpZGVudGl0eTogXCJGaXJlZm94XCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJPcGVyYVwiLCBpZGVudGl0eTogXCJPcGVyYVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiT1BSXCIsIGlkZW50aXR5OiBcIk9wZXJhXCJ9LFxuXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkNocm9tZVwiLCBpZGVudGl0eTogXCJDaHJvbWVcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlNhZmFyaVwiLCBpZGVudGl0eTogXCJTYWZhcmlcIn1cbiAgXVxufTtcblxuQnJvd3NlckRldGVjdC5pbml0KCk7XG4kKFwiaHRtbFwiKS5hZGRDbGFzcygoQnJvd3NlckRldGVjdC5icm93c2VyKS50b0xvd2VyQ2FzZSgpKS5hZGRDbGFzcygoQnJvd3NlckRldGVjdC5icm93c2VyKS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBCcm93c2VyRGV0ZWN0LnZlcnNpb24pO1xuIiwiLyoqXG4gKiBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgKGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2VyLmNvbS8pXG4gKlxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIHdpbGwgYmUgdHJ1ZSBpZiB0aGUgYnJvd3NlciBpcyBhIG1vYmlsZSBkZXZpY2VcbiAqXG4gKiovXG4oZnVuY3Rpb24oYSl7KGpRdWVyeS5icm93c2VyPWpRdWVyeS5icm93c2VyfHx7fSkubW9iaWxlPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpfSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcblxuaWYoIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKVxuXHR7JChcImJvZHlcIikuYWRkQ2xhc3MoXCJ0b3VjaFwiKTt9XG5cdGVsc2V7JChcImJvZHlcIikuYWRkQ2xhc3MoXCJuby10b3VjaFwiKTt9XG4iLCJjb25zdCBjbCA9IG5ldyBjbG91ZGluYXJ5LkNsb3VkaW5hcnkoe2Nsb3VkX25hbWU6IFwianVzdGlubGF4YW1hbmFcIiwgc2VjdXJlOiB0cnVlfSk7XG5jb25zdCBjbG91ZGluYXJ5X3VybCA9IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vanVzdGlubGF4YW1hbmEvXCI7XG5jb25zdCBjbG91ZGluYXJ5X2ZldGNoX3VybCA9IGNsb3VkaW5hcnlfdXJsICsgXCIvaW1hZ2UvZmV0Y2gvXCI7XG4iLCIoZnVuY3Rpb24oJCl7XG4iLCIvLyBNZW51IENsaWNrXG4kKCcubWFpbi1oZWFkZXJfX21lbnUnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCgnLm1haW4taGVhZGVyX19saW5rcycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJy5tYWluLWhlYWRlciAubW9iaWxlLWxpbmsnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCh0aGlzKS5uZXh0KCcuZHJvcGRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIG1vYmlsZU5hdkhlaWdodCgpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy9Nb2JpbGUgSGVpZ2h0IE92ZXJmbG93XG5mdW5jdGlvbiBtb2JpbGVOYXZIZWlnaHQgKCkge1xuICB2YXIgbmF2SGVpZ2h0ID0gJCgnLm1haW4taGVhZGVyX19uYXYnKS5vdXRlckhlaWdodCgpICsgNjA7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gIGlmIChuYXZIZWlnaHQgPiB3aW5kb3dIZWlnaHQpIHtcbiAgICAkKCcubWFpbi1oZWFkZXJfX2xpbmtzJykuYWRkQ2xhc3MoXCJvdmVyZmxvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICAkKCcubWFpbi1oZWFkZXJfX2xpbmtzJykucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvd1wiKTtcbiAgfVxufVxuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIG1vYmlsZU5hdkhlaWdodCk7IC8vQ2hlY2sgd2luZG93IHdpZHRoIG9uIHJlc2l6ZVxuJCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKFwicmVzaXplXCIpOyAvLyBJbml0aWFsIHdpbmRvdyBjaGVja1xuIiwiIiwiIiwiZnVuY3Rpb24gZGV0ZWN0U2Nyb2xsKCkge1xuXHR2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRpZihzY3JvbGxUb3AgPj0gMTAwMCkge1xuXHRcdCQoJy5pbnRybycpLmFkZENsYXNzKCdoaWRlJyk7XG5cdFx0JCgnLmZvb3RlcicpLmFkZENsYXNzKCdzaG93Jyk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnLmludHJvJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblx0XHQkKCcuZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblx0fVxuXG59XG5cbi8vVGhyb3R0bGluZyBGdW5jdGlvblxuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHdhaXQpIHtcblx0dmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCh0aW1lICsgd2FpdCAtIERhdGUubm93KCkpIDwgMCkge1xuXHRcdFx0Zm4oKTtcblx0XHRcdHRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdH1cblx0fVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKGRldGVjdFNjcm9sbCwgMjUpKTtcblxuXG5pZigkKCdib2R5Lm5vLXRvdWNoJykubGVuZ3RoKSB7XG5cdGlmKCQoJy5mb3JlZ3JvdW5kJykubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgc2t5Q2hhbmdlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fc2t5LS1kYXJrJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzE4MHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLXNreSc6IHtcblx0XHRcdFx0XHRmcm9tOiAuMDEsXG5cdFx0XHRcdFx0dG86IC45OVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0c2t5Q2hhbmdlLnN0YXJ0KCk7XG5cblx0XHRjb25zdCBncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fZm9yZWdyb3VuZCcpLFxuXHRcdFx0ZnJvbTogJzAnLFxuXHRcdFx0dG86ICc1MDBweCcsXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHQnLS1mZyc6IHtcblx0XHRcdFx0XHRmcm9tOiAnMHB4Jyxcblx0XHRcdFx0XHR0bzogJy0yMDBweCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdGNvbnN0IGZvcmVncm91bmRNb3ZlID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kJyksXG5cdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHR0bzogJzUwMHB4Jyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLXR5Jzoge1xuXHRcdFx0XHRcdGZyb206ICcwcHgnLFxuXHRcdFx0XHRcdHRvOiAnLTIwMHB4J1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9yZWdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdGNvbnN0IHBvcnRmb2xpb1RleHQgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpbycpLFxuXHRcdFx0ZnJvbTogJ3RvcC1ib3R0b20nLFxuXHRcdFx0dG86ICdtaWRkbGUtYm90dG9tJyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLXB0Jzoge1xuXHRcdFx0XHRcdGZyb206IDAsXG5cdFx0XHRcdFx0dG86IDFcblx0XHRcdFx0fSxcblx0XHRcdFx0Jy0tcHR0Jzoge1xuXHRcdFx0XHRcdGZyb206ICctNDBweCcsXG5cdFx0XHRcdFx0dG86ICcwcHgnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRwb3J0Zm9saW9UZXh0LnN0YXJ0KCk7XG5cblx0XHRjb25zdCBibG9ja1Nob3cgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19wcm9qZWN0LS1maXhlZCcpLFxuXHRcdFx0ZnJvbTogJ3RvcC1ib3R0b20nLFxuXHRcdFx0dG86ICdtaWRkbGUtYm90dG9tJyxcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdCctLWJvJzoge1xuXHRcdFx0XHRcdGZyb206IDAsXG5cdFx0XHRcdFx0dG86IDFcblx0XHRcdFx0fSxcblx0XHRcdFx0Jy0tYnQnOiB7XG5cdFx0XHRcdFx0ZnJvbTogJy0yMDBweCcsXG5cdFx0XHRcdFx0dG86ICcwcHgnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRibG9ja1Nob3cuc3RhcnQoKTtcblx0fVxuXG5cdGlmICgkKCcuZm9vdGVyJykubGVuZ3RoKSB7XG5cdFx0Y29uc3QgZm9vdGVyUmlzZSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX3Byb2plY3QtLWZpeGVkJyksXG5cdFx0XHRmcm9tOiAnbWlkZGxlLXRvcCcsXG5cdFx0XHR0bzogJ2JvdHRvbS10b3AnLFxuXHRcdFx0ZGlyZWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3N1bi0tZm9vdGVyJyksXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHQnLS1yaXNlJzoge1xuXHRcdFx0XHRcdGZyb206ICc0MDBweCcsXG5cdFx0XHRcdFx0dG86ICcwJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9vdGVyUmlzZS5zdGFydCgpO1xuXHR9XG59XG4iLCIvL0tlZXAgUmF0aW8gSW1hZ2VzXG5pZigkKCcudmlkZW8tYmcnKS5sZW5ndGgpIHtcbiAgJCgnLnZpZGVvLWJnJykua2VlcFJhdGlvKHsgcmF0aW86IDE2LzksIGNhbGN1bGF0ZTogJ2hlaWdodCcgfSk7XG59XG4iLCJ9KShqUXVlcnkpO1xuIl19
