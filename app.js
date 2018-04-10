console.log('Up and running!');

$(function() {

	$('#start').one("click", function(){
			
			let i = 100;
			let timer = setInterval(function(){
				i--;
				$('#box').html(i);
					if (i < 0 ) {
						clearInterval(timer);
						$('.loseAlert').css("display", "block");
						}
			}, 1000);

			$('#losePlayAgain').click(function() {
	    	$('.loseAlert').css("display", "none");
	    	location.reload();
			});

			$('#reset').click(function() {
				location.reload();
			});

	
		/* TO DO LIST
			-reset button?
			Create your own alert box for winner and loser
			display as none
			when function is called upon, change css display to "block" so it will reappear in the screen
			look at possible overlay on full screen w/ alert
			add button to exit */


		
// Jackie Chan //
		$('#column5Card1').on("click", function() {	
				if ($('.twoCards').length < 2) {
					$('#row1Card5').css({'display' : 'block'}).fadeIn("fast").addClass("clicked").addClass("twoCards");
				}	
			let checkChan1 = function () {
				if ($('#row3Card2').is(':visible') && $('#row1Card5').is(':visible')) {
						$('#row1Card5').delay(1000).addClass("matched").fadeOut(1500);
						$('#column5Card1').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#row3Card2').delay(1000).addClass("matched").fadeOut(1500);
						$('#column2Card3').delay(1000).fadeOut(100).removeClass('yinYangRemove');
						$('#gong')[0].play();
						$('#chanList').css({'transform' : 'scale(1.3)', 'color' : 'black'}).fadeOut(4000);
				}
			}
				if ($('.clicked').length === 2) {
					checkChan1();
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




	