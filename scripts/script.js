// Declarations
var menuButton = document.querySelector('.menubutton');
var darkBg = document.querySelector('.darkbghide');
var menuBox = document.querySelector('.menu');
var html = document.querySelector('html');
var exitButton = document.querySelector('.menu button');
var balloonGuy = document.querySelector('.balloonguy');
var section = document.querySelectorAll('.section');
var waveImg = document.querySelectorAll('.wave');
var article = document.querySelectorAll('.article')

// Functions

function sectionInViewport(element) {
var rect = element.getBoundingClientRect();
  return (
        rect.top < 400
	);
}

document.addEventListener('scroll', function () {
	if (sectionInViewport(section[0])) {
		section[0].classList.remove('sectionHidden');
	}
	if (sectionInViewport(section[1])) {
		section[1].classList.remove('sectionHidden');
		waveImg[0].classList.remove('sectionHidden');
		waveImg[1].classList.remove('sectionHidden');
	}
	if (sectionInViewport(section[2])) {
		section[2].classList.remove('sectionHidden');
	}
	if (sectionInViewport(section[3])) {
		section[3].classList.remove('sectionHidden');
		section[4].classList.remove('sectionHidden');
		waveImg[2].classList.remove('sectionHidden');
	}
});

function articleInViewport(element) {
var rect = element.getBoundingClientRect();
  return (
        rect.top < 600
	);
}

document.addEventListener('scroll', function () {
	if (articleInViewport(article[0])) {
		article[0].classList.add('articlemoveright');
	}
	if (articleInViewport(article[1])) {
		article[1].classList.add('articlemoveleft');
	}
	if (articleInViewport(article[2])) {
		article[2].classList.add('articlemoveright');
	}
	if (articleInViewport(article[3])) {
		article[3].classList.add('articlemoveleft');
	}
	if (articleInViewport(article[4])) {
		article[4].classList.add('articlemoveright');
	}
	if (articleInViewport(article[5])) {
		article[5].classList.add('articlemoveleft');
	}
});

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
	if (balloonGuy.classList.contains('balloonstop')) {
		balloonGuy.src = "scripts/img/balloonguy.svg";
		setTimeout(function() {
			//Helaas was er geen andere mogelijkheid (met classList werkte het niet). Ik heb style moeten gebruiken :(
			balloonGuy.style.webkitAnimationPlayState = 'running';
		}, 50);
		balloonGuy.classList.remove('balloonstop');
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
			//Helaas was er geen andere mogelijkheid (met classList werkte het niet). Ik heb style moeten gebruiken :(
			balloonGuy.style.webkitAnimationPlayState = 'paused';
		}, 200);
		balloonGuy.classList.add('balloonstop');

	}
}

// EventHandlers

menuButton.addEventListener('click', menuAppear);
exitButton.addEventListener('click', menuDisappear);
darkBg.addEventListener('click', menuDisappear);
balloonGuy.addEventListener('animationend', balloon);
balloonGuy.addEventListener('click', balloonFalls);

