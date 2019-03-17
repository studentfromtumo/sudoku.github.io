const label = document.getElementById("label_randomize");
const inputRandom = document.getElementById("randomize");
const solveButton = document.getElementById('solve');
const restart = document.getElementById('restart');
const wait = document.getElementById('wait');

solveButton.addEventListener('click',()=>{
	solver();
})

inputRandom.onchange = () => {
	label.textContent = inputRandom.value;
	random(inputRandom);
}

restart.addEventListener('click',()=>{
	location.reload(true);
})