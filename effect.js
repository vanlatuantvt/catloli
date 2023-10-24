$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});


$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		let toRemove = document.querySelector("#hii");
		document.querySelector("#bg").remove();
		toRemove.remove();
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		var audio = $('.song')[0];
        audio.play();
		setTimeout(nextone,7000);
		function nextone(){
			$('body').css('backgroud-color','#FFF');
			$('body').addClass('peach-after');

		}
		setTimeout(() => {
			$('.bannar').addClass('bannar-come');
			setTimeout(()=>{$('.heartbeat').addClass('heartbeat2');},3000);
			$('.balloon-border').animate({top:-500},8000);
			$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
			$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
			loopOne();
			loopTwo();
			loopThree();
			loopFour();
			loopFive();
			loopSix();
			loopSeven();
		}, 9000);
		setTimeout(()=>{
			document.querySelector(".heartbeat").remove();
			vw = $(window).width()/2;
		   $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		   $('#b1').attr('id','b11');
		   $('#b2').attr('id','b22')
		   $('#b3').attr('id','b33')
		   $('#b4').attr('id','b44')
		   $('#b5').attr('id','b55')
		   $('#b6').attr('id','b66')
		   $('#b7').attr('id','b77')
		   $('#b11').animate({top:240, left: vw-350},500);
		   $('#b22').animate({top:240, left: vw-250},500);
		   $('#b33').animate({top:240, left: vw-150},500);
		   $('#b44').animate({top:240, left: vw-50},500);
		   $('#b55').animate({top:240, left: vw+50},500);
		   $('#b66').animate({top:240, left: vw+150},500);
		   $('#b77').animate({top:240, left: vw+250},500);
		   $('.balloons').css('opacity','0.9');
		   $('.balloons h2').fadeIn(3000);
		   $(this).fadeOut('slow').delay(1000).promise().done(function(){
			$('#story').fadeIn('slow');
		 });
		},23000);
	});
	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	
	$('#story').click(function(){
		$('.heartbeat').addClass('.heartbeat')
		$(this).fadeOut('slow');
		
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==8){
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		msgLoop(0);
		$(this).fadeOut('slow').delay(22000).promise().done(function(){
			$('#no').fadeIn('slow');
			$('#yes').fadeIn('slow');
		});
	});
	$('#no').click(function(){	
const video = document.getElementById("video");
const acceptButton = document.getElementById("no");
const main = document.getElementById("main");
let hasClicked;

window.onbeforeunload = function( ) {
	if(hasClicked) return true;
};

function buttonClick(event) {
	event.preventDefault();
	if(hasClicked) hasClicked = true;
	$('.video').addClass('videoOn');
	main.hidden = true;
	video.play();
	videoClick();
}

function videoClick(event) {
	if(event) event.preventDefault();
	const { documentElement } = document;
	if(documentElement.requestFullscreen) documentElement.requestFullscreen();
	else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
	else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
	else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
}

acceptButton.addEventListener("click", buttonClick);
video.addEventListener("click", videoClick);
	});
});

$('#yes').click(() =>{
	alert("yêu nó thì nhắn tin với nó đi haha")
	window.open('https://www.facebook.com/profile.php?id=100092968517593');
})

//alert('hello');