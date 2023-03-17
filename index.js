function flipColor() {

	let color_area = document.getElementById("clr-area");
	let color_name = document.getElementById("clr-name");
	
	let color = getRandomColor();
	color_area.style.background = color;
	color_name.textContent = color;
}

function getRandomColor() {
	let color = '#';
	let hex = '0123456789ABCDEF';

	for (let i = 0; i < 6; i++){

		let idx = Math.floor(Math.random()*hex.length);
		color += hex[idx];
	}

	return color;
}