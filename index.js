let flipBtn = document.getElementById('flip-btn');
let color_area = document.getElementById("clr-area");
let color_name = document.getElementById("clr-name");
let simpleMode = document.getElementById('simple-mode');
let hexMode = document.getElementById('hex-mode');

flipBtn.addEventListener('click', flipSimpleColor);

simpleMode.addEventListener('click', () =>{
	flipBtn.removeEventListener('click', flipHexColor);
	flipBtn.addEventListener('click', flipSimpleColor);
	color_area.style.background = 'White';
	color_name.textContent = 'White';
});

hexMode.addEventListener('click', () =>{
	flipBtn.removeEventListener('click', flipSimpleColor);
	flipBtn.addEventListener('click', flipHexColor);
	color_area.style.background = '#FFFFFF';
	color_name.textContent = '#FFFFFF';
});

function flipHexColor() {
	
	let color = getRandomHexColor();
	color_area.style.background = color;
	color_name.textContent = color;
}

function getRandomHexColor() {
	let color = '#';
	let hex = '0123456789ABCDEF';

	for (let i = 0; i < 6; i++){

		let idx = Math.floor(Math.random()*hex.length);
		color += hex[idx];
	}

	return color;
}

function flipSimpleColor() {

	let color = getRandomSimpleColor();
	color_area.style.background = color;
	color_name.textContent = color;
}

function getRandomSimpleColor() {
	let colors = ['Red', 'White', 'Blue', 'Green',
					'Purple', 'Yellow', 'Cyan', 'Aqua',
					'Maroon', 'Teal', 'Coral', 'Olive'];

	let idx = Math.floor(Math.random()*colors.length);

	return colors[idx];
}