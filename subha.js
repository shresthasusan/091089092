

let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
    nav_link = document.getElementById('nav-list'),
    childlist = nav_link.children,
	container = document.getElementsByClassName('container')

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
	if(container[0].style.zIndex == "-1"){
		container[0].style.zIndex = "2";
	}
		else{container[0].style.zIndex = "-1";
	}

	}

);

childlist[0].addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

childlist[1].addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

childlist[2].addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

childlist[3].addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});


