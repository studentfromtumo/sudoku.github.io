const solveButton = document.getElementById('solve');
const restart = document.getElementById('restart');


solveButton.addEventListener('click',()=>{
	solver();
})

/*inputRandom.onchange = () => {
	label.textContent = inputRandom.value;
	random(inputRandom);
}*/

restart.addEventListener('click',()=>{
	location.reload(true);
})