function getters() {
	//1. get element by id
	const myH1Title = document.getElementById('myTitle');

	//2. get elements by tag name
	const myLis = document.getElementsByTagName('li');

	//3. query selector
	const myTitle = document.querySelector('#myTitle');

	//4. query selector all
	const allParagraphs = document.querySelectorAll('.paragraph');
}
