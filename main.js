// JSON is in the form of 
// [ { "tweet" : "" } ]

(function () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.json', true);
	xhr.addEventListener('load', function(event) {
		if (xhr.status >= 200 && xhr.status < 304) {
				buildList(xhr.responseText);
		}
	});

	xhr.send(null);
})();

function buildList(items) {
	var items = JSON.parse(items);
	var list = '';

	items.forEach(function(object) {
		list+='<li><a href="https://twitter.com/intent/tweet?text=' + object.tweet.replace("#", "&hashtags=") + '" target="_blank">' + object.tweet + '</a></li>';
	});

	document.getElementById('list').insertAdjacentHTML('beforeend', list);
}
