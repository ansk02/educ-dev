
(function(){

	var scrollY = function(){

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

		return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

	}


	var element = document.querySelector('nav')
	/*calcul la position de la page par rapport au top de la fenêtre*/
	var test = element.getBoundingClientRect()

	var top = element.getBoundingClientRect().top + scrollY();
	lWidth = window.screen.width
	var width =  lWidth;

	console.log(lWidth)

	var onScroll = function(){

		/*cette variable vérifie si l'élement à deja la classe fixe? si c'est n'est pas le cas on ajoute par if sinon on retire par else*/
		var hasScrollClass = element.classList.contains('fixed')


		if(scrollY() > top && !hasScrollClass)
		{
			element.classList.add('fixed');
			// element.style.width = auto;
			element.style.width = 100 + "%";

		}else if(scrollY() < top && hasScrollClass){

			element.classList.remove('fixed');
		}
	}


	window.addEventListener('scroll', onScroll)

})()


// (function (argument) {

// 	var onScroll = function(){

// 		console.log('Hello')
// 	}


// 	window.addEventListener('scroll', onScroll)

	
// })()