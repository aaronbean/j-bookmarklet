javascript:(function() {
	window.j = function() {
		function J(element)
		{
			if (element.childNodes.length > 0) 
			for (var i = 0; i < element.childNodes.length; i++) {
				J(element.childNodes[i]);
			}

			if (element.nodeType == Node.TEXT_NODE && element.nodeValue != '') {
				element.textContent = element.textContent.replace(/[a-z]/g, 'j').replace(/[A-Z]/g, 'J');
			}
		}
		var html = document.getElementsByTagName('html')[0];
			J(html);
		};
	j();
})();
