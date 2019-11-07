;(function(){
	var calc = function(){
		var docElement = document.documentElement;
		var clientWidthValue = docElement.clientWidth/10;
		docElement.style.fontSize = clientWidthValue + 'px';
	}
	calc();
	window.addEventListener('resize',calc);
})();