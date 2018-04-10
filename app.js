console.log('Up and running!');

$(function() { // jquery method for document.ready

	$('#start').one("click", function(){ // this sets timer to allow only 1 click - also this is wrapped on the entire page, NOTHING happens (JS) until start button is clicked
			// which means you cannot start playing or flipping cards until button is clicked.
			let i = 100; // seconds starts at 100
			let timer = setInterval(function(){ //set interval for timer (function)
				i--; //1 sec removed every interval
				$('#box').html(i); //displays on html portion of button
					if (i < 0 ) { // if timer shows less than 0 seconds
						clearInterval(timer); // stops the timer
						$('.loseAlert').css("display", "block"); // lose alert pops up b/c we changed display from NONE to BLOCK
						}
			}, 1000); // waits one second to pop up

			$('#losePlayAgain').click(function() { // if play again button on lose alert is clicked, then...
	    	$('.loseAlert').css("display", "none"); // display changes to none so that alert disappears
	    	location.reload(); // and the page is reloaded/refresh essentially "reset" timer and cards
			});

			$('#reset').click(function() { // if reset button at bottom of page is pressed then page refreshes or "Resets"
				location.reload();
			});

// Jackie Chan //
		$('#column5Card1').on("click", function() {	 //if yin yang in this position is clicked
				if ($('.twoCards').length < 2) { // will check to see if twoCards class is less than 2
					$('#row1Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards"); 
				}	// if so, then change display to block to show Asian pic, fade in fast, add a class of clicked and twoCards
			let checkChan1 = function () {
				if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) { // if these cards are visible (display changed to 'block' upon click)
						$('#row1Card5').delay(1000).addClass("matched").fadeOut(1500); // next 4 lines remove cards w/ effects and add class matched (CSS) and also remove yin yang class
						$('#column5Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row3Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play(); // play gong sound, actual sound located [0] -
						$('#chanList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000); // remove name from list, transform to 1.3% the size and fadeout
				}
			}
				if ($('.clicked').length === 2) { // if clicked class is equal to 2, then check Function
					checkChan1();
				}
					
				if ($('.clicked').length === 2) { // if clicked class is equal to 2, then remove both cards w/ clicked class and remove the class itself
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");	
							setTimeout(function() { // however set a timer so it doesn't remove right away
								$('.twoCards').removeClass("twoCards"); //  need a few seconds to show more than twoCards class that way, only 2 cards can be shown at once per line 28
								}, 2100);	//timer to remove at 2.1 secs				
				}

				if ($('.yinYangRemove').length === 0) { //remember line 34 and 36, if matched the yinYangRemove class is removed and if it equals 0
					setTimeout(function() { // all cards are no longer on the game board, which means...
					$('.winAlert').css("display", "block"); //WINNER alert pops up, the display was set to none, but now it will show as blocked
					clearInterval(timer);
					}, 2100); // give is a few seconds so the final cards can complete their animation and disappear instead of alert popping up instantly.
					$('#playAgain').click(function() { // alert is popped up and at the bottom theres a play again button
    				$('.winAlert').css("display", "none"); // if clicked the Win alert disappears b/c we put display back to none
    			location.reload(); // and page refreshes with 100 secs on timer and all cards/Yin Yangs back on the game board
    			})
				}	
		}); // REPEAT FOR ALL 24 CARDS!!!!!!

		$('#column2Card3').on("click", function() {	 
				if ($('.twoCards').length < 2) {	
					$('#row3Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");		
				}	
			let checkChan2 = function () {
				if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
						$('#row3Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row1Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();	
						$('#chanList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);;		
				}
			}	
				if ($('.clicked').length === 2) {
					checkChan2();
				}	

				if ($('.clicked').length === 2) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);	
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}	
		});

	// Jet Li //

		$('#column4Card1').on("click", function() {	
				if ($('.twoCards').length < 2) {
					$('#row1Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");			
				}	
			let checkLi1 = function () {
				if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
						$('#row1Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row1Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();
						$('#liList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}	
				if ($('.clicked').length === 2) {
					checkLi1();
				}	

				if ($('.clicked').length === 2) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);	
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}		
		});

		$('#column6Card1').on("click", function() {
				if ($('.twoCards').length < 2) {	
	  			$('#row1Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");			
				}			
			let checkLi2 = function () {		
				if ($('#row1Card6').is(':visible') && $('#row1Card4').is(':visible')) {
						$('#row1Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row1Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();
						$('#liList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);			
				}
			}
				if ($('.clicked').length === 2) {
					checkLi2();
				}

				if ($('.clicked').length === 2) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);	
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});

	// Daniel Wu//
		$('#column1Card1').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row1Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkWu1 = function () {
				if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
						$('#row1Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row4Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#wuList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkWu1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}		

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}												
		});

		$('#column1Card4').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row4Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkWu2 = function () {
				if ($('#row4Card1').is(':visible') && $('#row1Card1').is(':visible')) {
						$('#row4Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row1Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();
						$('#wuList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);			
				}	
			}
				if ($('.clicked').length > 1) {
					checkWu2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}	

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});

	// Donnie Yen//
		$('#column2Card1').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row1Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkYen1 = function () {
				if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
						$('#row1Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row3Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#yenList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkYen1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}		

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}												
		});

		$('#column4Card3').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row3Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkYen2 = function () {
				if ($('#row3Card4').is(':visible') && $('#row1Card2').is(':visible')) {
						$('#row3Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row1Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');		
						$('#gong')[0].play();
						$('#yenList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);		
				}	
			}
				if ($('.clicked').length > 1) {
					checkYen2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});			

	//Tony Jaa
		$('#column3Card1').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row1Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");		
				}
			let checkJaa1 = function () {
				if ($('#row2Card6').is(':visible') && $('#row1Card3').is(':visible')) {
						$('#row1Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row2Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#jaaList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkJaa1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}		

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}											
		});

		$('#column6Card2').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row2Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkJaa2 = function () {
				if ($('#row2Card6').is(':visible') && $('#row1Card3').is(':visible')) {
						$('#row2Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row1Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');		
						$('#gong')[0].play();
						$('#jaaList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);		
				}	
			}
				if ($('.clicked').length > 1) {
					checkJaa2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});

	//Steven Yeun
		$('#column1Card2').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row2Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");	
				}
			let checkYeun1 = function () {
				if ($('#row3Card3').is(':visible') && $('#row2Card1').is(':visible')) {
						$('#row2Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row3Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#yeunList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
		}
				if ($('.clicked').length > 1) {
					checkYeun1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}													

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}	
		});

		$('#column3Card3').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row3Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkYeun2 = function () {
				if ($('#row3Card3').is(':visible') && $('#row2Card1').is(':visible')) {
						$('#row3Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row2Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#yeunList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);				
				}	
			}
				if ($('.clicked').length > 1) {
					checkYeun2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});			

	//Steve Ngo
		$('#column2Card2').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row2Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");		
				}
			let checkNgo1 = function () {
				if ($('#row4Card4').is(':visible') && $('#row2Card2').is(':visible')) {
						$('#row2Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row4Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#ngoList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkNgo1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}													

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});

		$('#column4Card4').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row4Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkNgo2 = function () {
				if ($('#row4Card4').is(':visible') && $('#row2Card2').is(':visible')) {
						$('#row4Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row2Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();
						$('#ngoList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);			
				}	
		}
				if ($('.clicked').length > 1) {
					checkNgo2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});			

	//Bruce Lee
		$('#column3Card2').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row2Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");			
				}
			let checkLee1 = function () {
				if ($('#row3Card5').is(':visible') && $('#row2Card3').is(':visible')) {
						$('#row2Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row3Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#leeList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkLee1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}		

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}											
		});

		$('#column5Card3').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row3Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkLee2 = function () {
				if ($('#row3Card5').is(':visible') && $('#row2Card3').is(':visible')) {
						$('#row3Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row2Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();
						$('#leeList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);			
				}	
			}				
				if ($('.clicked').length > 1) {
					checkLee2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});

		//Sung Kang
		$('#column4Card2').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row2Card4').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkKang1 = function () {
				if ($('#row3Card6').is(':visible') && $('#row2Card4').is(':visible')) {
						$('#row2Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row3Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#kangList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkKang1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}	

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}											
		});

		$('#column6Card3').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row3Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkKang2 = function () {
				if ($('#row3Card6').is(':visible') && $('#row2Card4').is(':visible')) {
						$('#row3Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row2Card4').delay(1000).addClass("matched").fadeOut(1500);
						$('#column4Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#kangList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);				
				}	
			}
				if ($('.clicked').length > 1) {
					checkKang2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});			

		//John Cho
		$('#column5Card2').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row2Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkCho1 = function () {
				if ($('#row4Card5').is(':visible') && $('#row2Card5').is(':visible')) {
						$('#row2Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row4Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#choList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkCho1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}		

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}												
		});

		$('#column5Card4').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row4Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkCho2 = function () {
				if ($('#row4Card5').is(':visible') && $('#row2Card5').is(':visible')) {
						$('#row4Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row2Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card2').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();
						$('#choList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);			
				}	
			}
				if ($('.clicked').length > 1) {
					checkCho2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});			

		//Ken Jeong
		$('#column2Card4').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row4Card2').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");			
				}
			let checkJeong1 = function () {
				if ($('#row4Card6').is(':visible') && $('#row4Card2').is(':visible')) {
						$('#row4Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row4Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#jeongList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkJeong1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				} 														

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});

		$('#column6Card4').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row4Card6').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkJeong2 = function () {
				if ($('#row4Card6').is(':visible') && $('#row4Card2').is(':visible')) {
						$('#row4Card6').delay(1000).addClass("matched").fadeOut(1500);
						$('#column6Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row4Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');	
						$('#gong')[0].play();
						$('#jeongList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);			
				}	
			}
				if ($('.clicked').length > 1) {
					checkJeong2();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});			

		//Daniel Dae Kim
		$('#column1Card3').on("click", function() {
				if ($('.twoCards').length < 2) {	
					$('#row3Card1').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkKim1 = function () {
				if ($('#row4Card3').is(':visible') && $('#row3Card1').is(':visible')) {
						$('#row3Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row4Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#kimList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);	
				}
			}
				if ($('.clicked').length > 1) {
					checkKim1();
				}
					
				if ($('.clicked').length > 1) {
							$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
							setTimeout(function() {
								$('.twoCards').removeClass("twoCards");
								}, 2100);
				}													

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});

		$('#column3Card4').on("click", function() {
				if ($('.twoCards').length < 2) {
	  			$('#row4Card3').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}
			let checkKim2 = function () {
				if ($('#row4Card3').is(':visible') && $('#row3Card1').is(':visible')) {
						$('#row4Card3').delay(1000).addClass("matched").fadeOut(1500);
						$('#column3Card4').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row3Card1').delay(1000).addClass("matched").fadeOut(1500);
						$('#column1Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#kimList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);				
				}	
			}
				if ($('.clicked').length > 1) {
					checkKim2();
				}
					
				if ($('.clicked').length > 1) {
						$('.clicked').delay(2000).fadeOut(100).removeClass("clicked");
						setTimeout(function() {
							$('.twoCards').removeClass("twoCards");
							}, 2100);
				}

				if ($('.yinYangRemove').length === 0) {
					setTimeout(function() {
					$('.winAlert').css("display", "block");
					clearInterval(timer);
					}, 2100);
					$('#playAgain').click(function() {
    				$('.winAlert').css("display", "none");
    			location.reload();
    			})
				}
		});	
	});	
});




	