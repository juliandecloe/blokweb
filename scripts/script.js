// JavaScript Document
var menuButton = document.querySelector('.menubutton');
var darkBg = document.querySelector('.darkbghide');
var menuBox = document.querySelector('.menu');
var html = document.querySelector('html');
var exitButton = document.querySelector('.menu button');
var balloonGuy = document.querySelector('.balloonguy');

function menuAppear() {
	darkBg.classList.remove('darkbghide');
	menuBox.classList.add('menuslide');
	document.body.classList.add('overflow');
	html.classList.add('overflow');
}

function menuDisappear() {
	darkBg.classList.add('darkbghide');
	menuBox.classList.remove('menuslide');
	menuBox.classList.add('menuslideback');
	setTimeout(function() {
		menuBox.classList.remove('menuslideback');
	}, 500);
	document.body.classList.remove('overflow');
	html.classList.remove('overflow');
}

function balloon() {
	balloonGuy.classList.remove('balloonguy');
	setTimeout(function() {
		balloonGuy.classList.add('balloonguy');
	}, 15000);
}

function balloonFalls() {
	if (balloonGuy.classList.contains('stopclick')) {
		balloonGuy.src = "scripts/img/balloonframe4.svg";
	} else {
		balloonGuy.src = "scripts/img/balloonframe1.svg";
		setTimeout(function() {
			balloonGuy.src = "scripts/img/balloonframe2.svg";
		}, 50);
		setTimeout(function() {
			balloonGuy.src = "scripts/img/balloonframe3.svg";
		}, 100);
		setTimeout(function() {
			balloonGuy.src = "scripts/img/balloonframe4.svg";
		}, 150);
		setTimeout(function() {
			var rect = balloonGuy.getBoundingClientRect();
			balloonGuy.style.top = rect.top + "px";
			balloonGuy.style.transform = null;
			balloonGuy.classList.remove('balloonguy');
		}, 200);
		balloonGuy.classList.add('stopclick');

	}
}

menuButton.addEventListener('click', menuAppear);
exitButton.addEventListener('click', menuDisappear);
darkBg.addEventListener('click', menuDisappear);
balloonGuy.addEventListener('animationend', balloon);
balloonGuy.addEventListener('click', balloonFalls);
