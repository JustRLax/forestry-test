const skyChange = basicScroll.create({
	elem: document.querySelector('.sky--dark'),
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
	elem: document.querySelector('.intro__foreground'),
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
