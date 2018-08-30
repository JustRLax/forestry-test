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

//scene
$('.scene__items__cat').on("click", function(e){
  $(this).toggleClass('meow');
  e.preventDefault();
});

// Menu Click
$('.main-header__menu').on("click", function(e){
  $(this).toggleClass('active');
  $('.main-header__links').toggleClass('active');
  e.preventDefault();
});

$('.intro .scene__sun').on("click", function(e){
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
		$('.no-touch .intro').addClass('hide');
		$('.no-touch .footer').addClass('show');
	} else {
		$('.no-touch .intro').removeClass('hide');
		$('.no-touch .footer').removeClass('show');
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
	$('.intro').addClass('invisible');
	$('body').addClass('loading');

	function parallax() {
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
}

$(window).on("load", function() {
	if($('body.no-touch').length) {
		setTimeout(function(){
			$('.intro').addClass('animate');
			$('body').removeClass('loading');
		}, 1000);
	}
	parallax();
});

//Keep Ratio Images
if($('.video-bg').length) {
  $('.video-bg').keepRatio({ ratio: 16/9, calculate: 'height' });
}

//Footer
$('.scene__sun--footer').on("click", function(e){
  $('.footer .form').addClass('active');
  $(this).addClass('active');
  $('#name').focus();
  e.preventDefault();
});
$('.form').on("click", '.close', function(e){
  $('.footer .form').removeClass('active');
  $('.scene__sun--footer').removeClass('active');
  e.preventDefault();
});

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbWVudS5qcyIsIjJfc2xpZGVycy5qcyIsIjNfbGlnaHRib3guanMiLCI0X3BhcmFsbGF4LmpzIiwiNV9rZWVwLXJhdGlvLmpzIiwiNl9mb290ZXIuanMiLCJ6X2VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FDQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVhbCB3aXRoIFdQIGpRdWVyeSBub0NvbmZsaWN0XG4kID0galF1ZXJ5O1xuXG52YXIgQnJvd3NlckRldGVjdCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuc2VhcmNoU3RyaW5nKHRoaXMuZGF0YUJyb3dzZXIpIHx8IFwiT3RoZXJcIjtcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCBcIlVua25vd25cIjtcbiAgfSxcbiAgc2VhcmNoU3RyaW5nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZztcbiAgICAgIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9IGRhdGFbaV0uc3ViU3RyaW5nO1xuXG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKGRhdGFbaV0uc3ViU3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZWFyY2hWZXJzaW9uOiBmdW5jdGlvbiAoZGF0YVN0cmluZykge1xuICAgIHZhciBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcnYgPSBkYXRhU3RyaW5nLmluZGV4T2YoXCJydjpcIik7XG4gICAgaWYgKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9PT0gXCJUcmlkZW50XCIgJiYgcnYgIT09IC0xKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhydiArIDMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpO1xuICAgIH1cbiAgfSxcblxuICBkYXRhQnJvd3NlcjogW1xuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJFZGdlXCIsIGlkZW50aXR5OiBcIk1TIEVkZ2VcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk1TSUVcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlRyaWRlbnRcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkZpcmVmb3hcIiwgaWRlbnRpdHk6IFwiRmlyZWZveFwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiT3BlcmFcIiwgaWRlbnRpdHk6IFwiT3BlcmFcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk9QUlwiLCBpZGVudGl0eTogXCJPcGVyYVwifSxcblxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJDaHJvbWVcIiwgaWRlbnRpdHk6IFwiQ2hyb21lXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJTYWZhcmlcIiwgaWRlbnRpdHk6IFwiU2FmYXJpXCJ9XG4gIF1cbn07XG5cbkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xuJChcImh0bWxcIikuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSkuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgQnJvd3NlckRldGVjdC52ZXJzaW9uKTtcbiIsIi8qKlxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIChodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3Nlci5jb20vKVxuICpcbiAqIGpRdWVyeS5icm93c2VyLm1vYmlsZSB3aWxsIGJlIHRydWUgaWYgdGhlIGJyb3dzZXIgaXMgYSBtb2JpbGUgZGV2aWNlXG4gKlxuICoqL1xuKGZ1bmN0aW9uKGEpeyhqUXVlcnkuYnJvd3Nlcj1qUXVlcnkuYnJvd3Nlcnx8e30pLm1vYmlsZT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XG5cbmlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIClcblx0eyQoXCJib2R5XCIpLmFkZENsYXNzKFwidG91Y2hcIik7fVxuXHRlbHNleyQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tdG91Y2hcIik7fVxuIiwiY29uc3QgY2wgPSBuZXcgY2xvdWRpbmFyeS5DbG91ZGluYXJ5KHtjbG91ZF9uYW1lOiBcImp1c3RpbmxheGFtYW5hXCIsIHNlY3VyZTogdHJ1ZX0pO1xuY29uc3QgY2xvdWRpbmFyeV91cmwgPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL1wiO1xuY29uc3QgY2xvdWRpbmFyeV9mZXRjaF91cmwgPSBjbG91ZGluYXJ5X3VybCArIFwiL2ltYWdlL2ZldGNoL1wiO1xuIiwiKGZ1bmN0aW9uKCQpe1xuIiwiLy9zY2VuZVxuJCgnLnNjZW5lX19pdGVtc19fY2F0Jykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnbWVvdycpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTWVudSBDbGlja1xuJCgnLm1haW4taGVhZGVyX19tZW51Jykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICQoJy5tYWluLWhlYWRlcl9fbGlua3MnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcuaW50cm8gLnNjZW5lX19zdW4nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCgnLm1haW4taGVhZGVyX19saW5rcycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJy5tYWluLWhlYWRlciAubW9iaWxlLWxpbmsnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCh0aGlzKS5uZXh0KCcuZHJvcGRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIG1vYmlsZU5hdkhlaWdodCgpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy9Nb2JpbGUgSGVpZ2h0IE92ZXJmbG93XG5mdW5jdGlvbiBtb2JpbGVOYXZIZWlnaHQgKCkge1xuICB2YXIgbmF2SGVpZ2h0ID0gJCgnLm1haW4taGVhZGVyX19uYXYnKS5vdXRlckhlaWdodCgpICsgNjA7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gIGlmIChuYXZIZWlnaHQgPiB3aW5kb3dIZWlnaHQpIHtcbiAgICAkKCcubWFpbi1oZWFkZXJfX2xpbmtzJykuYWRkQ2xhc3MoXCJvdmVyZmxvd1wiKTtcbiAgfSBlbHNlIHtcbiAgICAkKCcubWFpbi1oZWFkZXJfX2xpbmtzJykucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvd1wiKTtcbiAgfVxufVxuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIG1vYmlsZU5hdkhlaWdodCk7IC8vQ2hlY2sgd2luZG93IHdpZHRoIG9uIHJlc2l6ZVxuJCh3aW5kb3cpLnRyaWdnZXJIYW5kbGVyKFwicmVzaXplXCIpOyAvLyBJbml0aWFsIHdpbmRvdyBjaGVja1xuIiwiIiwiIiwiZnVuY3Rpb24gZGV0ZWN0U2Nyb2xsKCkge1xuXHR2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRpZihzY3JvbGxUb3AgPj0gMTAwMCkge1xuXHRcdCQoJy5uby10b3VjaCAuaW50cm8nKS5hZGRDbGFzcygnaGlkZScpO1xuXHRcdCQoJy5uby10b3VjaCAuZm9vdGVyJykuYWRkQ2xhc3MoJ3Nob3cnKTtcblx0fSBlbHNlIHtcblx0XHQkKCcubm8tdG91Y2ggLmludHJvJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcblx0XHQkKCcubm8tdG91Y2ggLmZvb3RlcicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG5cdH1cblxufVxuXG4vL1Rocm90dGxpbmcgRnVuY3Rpb25cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB3YWl0KSB7XG5cdHZhciB0aW1lID0gRGF0ZS5ub3coKTtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGlmICgodGltZSArIHdhaXQgLSBEYXRlLm5vdygpKSA8IDApIHtcblx0XHRcdGZuKCk7XG5cdFx0XHR0aW1lID0gRGF0ZS5ub3coKTtcblx0XHR9XG5cdH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZShkZXRlY3RTY3JvbGwsIDI1KSk7XG5cblxuaWYoJCgnYm9keS5uby10b3VjaCcpLmxlbmd0aCkge1xuXHQkKCcuaW50cm8nKS5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG5cdCQoJ2JvZHknKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG5cdGZ1bmN0aW9uIHBhcmFsbGF4KCkge1xuXHRcdGlmKCQoJy5mb3JlZ3JvdW5kJykubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBza3lDaGFuZ2UgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3NreS0tZGFyaycpLFxuXHRcdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHRcdHRvOiAnMTgwcHgnLFxuXHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdCctLXNreSc6IHtcblx0XHRcdFx0XHRcdGZyb206IC4wMSxcblx0XHRcdFx0XHRcdHRvOiAuOTlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c2t5Q2hhbmdlLnN0YXJ0KCk7XG5cblx0XHRcdGNvbnN0IGdyb3VuZE1vdmUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX2ZvcmVncm91bmQnKSxcblx0XHRcdFx0ZnJvbTogJzAnLFxuXHRcdFx0XHR0bzogJzUwMHB4Jyxcblx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHQnLS1mZyc6IHtcblx0XHRcdFx0XHRcdGZyb206ICcwcHgnLFxuXHRcdFx0XHRcdFx0dG86ICctMjAwcHgnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdFx0Y29uc3QgZm9yZWdyb3VuZE1vdmUgPSBiYXNpY1Njcm9sbC5jcmVhdGUoe1xuXHRcdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWdyb3VuZCcpLFxuXHRcdFx0XHRmcm9tOiAnMCcsXG5cdFx0XHRcdHRvOiAnNTAwcHgnLFxuXHRcdFx0XHRwcm9wczoge1xuXHRcdFx0XHRcdCctLXR5Jzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJzBweCcsXG5cdFx0XHRcdFx0XHR0bzogJy0yMDBweCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Zm9yZWdyb3VuZE1vdmUuc3RhcnQoKTtcblxuXHRcdFx0Y29uc3QgYmxvY2tTaG93ID0gYmFzaWNTY3JvbGwuY3JlYXRlKHtcblx0XHRcdFx0ZWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19wcm9qZWN0LS1maXhlZCcpLFxuXHRcdFx0XHRmcm9tOiAndG9wLWJvdHRvbScsXG5cdFx0XHRcdHRvOiAnbWlkZGxlLWJvdHRvbScsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0Jy0tYm8nOiB7XG5cdFx0XHRcdFx0XHRmcm9tOiAwLFxuXHRcdFx0XHRcdFx0dG86IDFcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCctLWJ0Jzoge1xuXHRcdFx0XHRcdFx0ZnJvbTogJy0yMDBweCcsXG5cdFx0XHRcdFx0XHR0bzogJzBweCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0YmxvY2tTaG93LnN0YXJ0KCk7XG5cdFx0fVxuXHRcdGlmICgkKCcuZm9vdGVyJykubGVuZ3RoKSB7XG5cdFx0Y29uc3QgZm9vdGVyUmlzZSA9IGJhc2ljU2Nyb2xsLmNyZWF0ZSh7XG5cdFx0XHRlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX3Byb2plY3QtLWZpeGVkJyksXG5cdFx0XHRmcm9tOiAnbWlkZGxlLXRvcCcsXG5cdFx0XHR0bzogJ2JvdHRvbS10b3AnLFxuXHRcdFx0ZGlyZWN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3N1bi0tZm9vdGVyJyksXG5cdFx0XHRwcm9wczoge1xuXHRcdFx0XHQnLS1yaXNlJzoge1xuXHRcdFx0XHRcdGZyb206ICc0MDBweCcsXG5cdFx0XHRcdFx0dG86ICcwJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9vdGVyUmlzZS5zdGFydCgpO1xuXHR9XG5cdH1cbn1cblxuJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblx0aWYoJCgnYm9keS5uby10b3VjaCcpLmxlbmd0aCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdCQoJy5pbnRybycpLmFkZENsYXNzKCdhbmltYXRlJyk7XG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblx0XHR9LCAxMDAwKTtcblx0fVxuXHRwYXJhbGxheCgpO1xufSk7XG4iLCIvL0tlZXAgUmF0aW8gSW1hZ2VzXG5pZigkKCcudmlkZW8tYmcnKS5sZW5ndGgpIHtcbiAgJCgnLnZpZGVvLWJnJykua2VlcFJhdGlvKHsgcmF0aW86IDE2LzksIGNhbGN1bGF0ZTogJ2hlaWdodCcgfSk7XG59XG4iLCIvL0Zvb3RlclxuJCgnLnNjZW5lX19zdW4tLWZvb3RlcicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICQoJy5mb290ZXIgLmZvcm0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCcjbmFtZScpLmZvY3VzKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuJCgnLmZvcm0nKS5vbihcImNsaWNrXCIsICcuY2xvc2UnLCBmdW5jdGlvbihlKXtcbiAgJCgnLmZvb3RlciAuZm9ybScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCgnLnNjZW5lX19zdW4tLWZvb3RlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG4iLCJ9KShqUXVlcnkpO1xuIl19
