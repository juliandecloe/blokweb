// JavaScript Document
var menuButton = document.querySelector('.menubutton');
var darkBg = document.querySelector('.darkbghide');
var menuBox = document.querySelector('.menu');
var html = document.querySelector('html');
var exitButton = document.querySelector('.menu button');

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

menuButton.addEventListener('click', menuAppear);
exitButton.addEventListener('click', menuDisappear);