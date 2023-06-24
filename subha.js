
// <======== mobile burger Script =======>
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
	container[0].style.zIndex = "-1"
});

childlist[1].addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
	container[0].style.zIndex = "-1"
});

childlist[2].addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
	container[0].style.zIndex = "-1"
});

childlist[3].addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
	container[0].style.zIndex = "-1"
});

// var body = document.getElementsByTagName('body')[0];
// body.style.backgroundColor = 'green';

// // trigger this function every time the user scrolls
// window.onscroll = function (event) {
// 	var scroll = window.pageYOffset;
// 	if (scroll < 300) {
// 		// green
// 		body.style.backgroundColor = 'green';
// 	} else if (scroll >= 300 && scroll < 600) {
// 		// yellow
// 		body.style.backgroundColor = 'yellow';
// 	} else if (scroll >= 600 && scroll < 1200) {
// 		// blue
// 		body.style.backgroundColor = 'blue';
// 	} else if (scroll >= 1200 && scroll < 1800) {
// 		// orange
// 		body.style.backgroundColor = 'orange';
// 	} else if (scroll >= 1800 && scroll < 3000) {
// 		// red
// 		body.style.backgroundColor = 'red';
// 	} else {
// 		// purple
// 		body.style.backgroundColor = 'purple';
// 	}
// }