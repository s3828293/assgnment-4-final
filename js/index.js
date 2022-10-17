window.addEventListener("load", function () {
	
	var sound1 = new Audio("sound/building.mp3");
	var sound2 = new Audio("sound/family.mp3");
	var sound3 = new Audio("sound/food.mp3");
	var sound4 = new Audio("sound/lock.mp3");
	var sound5 = new Audio("sound/love.mp3");
	var sound6 = new Audio("sound/money.mp3");
	var sound7 = new Audio("sound/music.mp3");
	var sound8 = new Audio("sound/shield.mp3");
	var sound9 = new Audio("sound/sleep.mp3");
	
	document.getElementById('img1').addEventListener('click', function () {sound1.play(); });  
	document.getElementById('img2').addEventListener('click', function () {sound2.play(); });
	document.getElementById('img3').addEventListener('click', function () {sound3.play(); });
	document.getElementById('img4').addEventListener('click', function () {sound4.play(); });
	document.getElementById('img5').addEventListener('click', function () {sound5.play(); }); 
	document.getElementById('img6').addEventListener('click', function () {sound6.play(); }); 
	document.getElementById('img7').addEventListener('click', function () {sound7.play(); }); 
	document.getElementById('img8').addEventListener('click', function () {sound8.play(); }); 
	document.getElementById('img9').addEventListener('click', function () {sound9.play(); });	
});