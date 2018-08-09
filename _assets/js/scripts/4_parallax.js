const skyChange = basicScroll.create({
	elem: document.querySelector('.sky--dark'),
	from: '0',
	to: '180px',
	props: {
		'--opacity': {
			from: .01,
			to: .99
		}
	}
});
skyChange.start();

const groundMove = basicScroll.create({
	elem: document.querySelector('.intro__foreground'),
	from: '0',
	to: '500px',
	props: {
		'--bottom': {
			from: '0px',
			to: '200px'
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

const waterMove = basicScroll.create({
	elem: document.querySelector('.intro__water'),
	from: '0',
	to: '500px',
  props: {
		'--ty1': {
			from: '0px',
			to: '10px'
		}
	}
});
waterMove.start();

const cityMove = basicScroll.create({
	elem: document.querySelector('.intro__city'),
	from: '0',
	to: '500px',
  props: {
		'--ty2': {
			from: '0px',
			to: '-20px'
		}
	}
});
cityMove.start();

const hillsFMove = basicScroll.create({
	elem: document.querySelector('.intro__hills-front'),
	from: '0',
	to: '500px',
  props: {
		'--ty3': {
			from: '0px',
			to: '-20px'
		}
	}
});
hillsFMove.start();
