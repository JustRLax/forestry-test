const instance = basicScroll.create({
	elem: document.querySelector('.scroll'),
	from: '0',
	to: '40px',
	props: {
		'--opacity': {
			from: .01,
			to: .99
		}
	}
});
instance.start();
console.log('hello');
