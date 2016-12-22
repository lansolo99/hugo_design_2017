
$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Switch desktop/mobile display
function checkSize(){
		//Go mobile
    if ($(".ui.menu .item.no-mobile").css("display") == "none" ){
        $("#mainNav").removeClass("six");
				$("#mainNav").addClass("three");
        $(".ui.menu .item.all").text("Mobile");
    }
		//Go desktop
		else{
			$("#mainNav").removeClass("three");
			$("#mainNav").addClass("six");
      $(".ui.menu .item.all").text("All");
		}
}

;(function(window) {

	'use strict';

	var support = { transitions: Modernizr.csstransitions },
		// transition end event name
		transEndEventNames = { 'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend' },
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		onEndTransition = function( callback ) {
			var onEndCallbackFn = function( ev ) {
				if( support.transitions ) {
				}
				if( callback && typeof callback === 'function' ) { callback.call(this); }
			};
			if( support.transitions ) {
				onEndCallbackFn();
			}
			else {
				onEndCallbackFn();
			}
		},

		current = 0,

		// menu bg
		menuBg = document.querySelector('#fixedNav'),
		// logo
		logo = document.querySelector('.logo'),
		// menu button
		menuCtrl = document.querySelector('button.menu-button'),
		// the navigation wrapper
		nav = document.querySelector('.pages-nav'),
		// the menu nav items

		// check if menu is open
		isMenuOpen = false;


	function init() {
		// buildStack();

		initEvents();
	}


	// event binding
	function initEvents() {
		// menu button click
		menuCtrl.addEventListener('click', toggleMenu);
		logo.addEventListener('mouseover', logoShine);
		logo.addEventListener('mouseout', logoUnshine);



		// keyboard navigation events
		document.addEventListener( 'keydown', function( ev ) {
			if( !isMenuOpen ) return;
			var keyCode = ev.keyCode || ev.which;
			if( keyCode === 27 ) {
				closeMenu();
			}
		} );
	}

	// toggle menu fn
	function toggleMenu() {
		if( isMenuOpen ) {

			closeMenu();
		}
		else {
			openMenu();
			isMenuOpen = true;
		}
	}

	// toggle logoShine
	function logoShine() {
		if( isMenuOpen ) {
		}
		else {
			// add class to Logo
			classie.add(logo, 'logo--shine');
		}
	}


	// toggle logoShine
	function logoUnshine() {
		if( isMenuOpen ) {
		}
		else {
			// add class to Logo
			classie.remove(logo, 'logo--shine');
		}
	}



	// opens the menu
	function openMenu() {

		// unshine Logo
		classie.remove(logo, 'logo--shine');

		// toggle the menu button
		classie.add(menuCtrl, 'menu-button--open');

		// add class to Logo
		classie.add(logo, 'logo--open');

		// add class to Fixed Nav
		classie.add(menuBg, 'menu-bg--open');

		// reveal the menu
		classie.add(nav, 'pages-nav--open');

	}


	// closes the menu
	function closeMenu() {
		// same as opening the current page again
		openPage();
	}

	// opens a page
	function openPage(id) {


		// close menu..
		classie.remove(menuCtrl, 'menu-button--open');
		classie.remove(logo, 'logo--open');
		classie.remove(menuBg, 'menu-bg--open');
		classie.remove(nav, 'pages-nav--open');
		onEndTransition(function() {

			isMenuOpen = false;
		});
	}



	init();

})(window);
