//Video Popup
$('.play').magnificPopup({
    type: 'iframe',
  	preloader: false,
    fixedContentPos: true,
    fixedBgPos: true,
    showCloseBtn: true,
    closeOnBgClick: true,
    enableEscapeKey: true,
    removalDelay: 700
});

//Form Popup
$('.no-touch .open-modal').magnificPopup({
	type: 'inline',
  fixedContentPos: true,
  fixedBgPos: true,
  showCloseBtn: true,
  closeOnBgClick: true,
  removalDelay: 500,
  enableEscapeKey: true
});

$('.touch .open-modal').magnificPopup({
	type: 'inline',
  fixedContentPos: false,
  fixedBgPos: true,
  showCloseBtn: true,
  removalDelay: 500,
  closeOnBgClick: true,
  enableEscapeKey: true
});
