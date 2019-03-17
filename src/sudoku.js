	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	

	let matrix = [
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0]
	];
	
	
	let arrOfCubes = [];

	function UI(){
		for(let i=0;i<matrix.length;i++){
			for(let j=0;j<matrix[i].length;j++){	
				arrOfCubes.push(new Cube(j*40,i*40,40,40)); 
				arrOfCubes[i*9+j].draw(ctx);
			}
		}
	}

	UI();

	function random(q){
		if(q){
			let x = Math.floor(Math.random()*9);
			let y = Math.floor(Math.random()*9);
			let num = Math.floor(Math.random()*9);
			if(matrix[x][y] === 0 && isValid(x,y,num)){
				matrix[x][y] = num;
				arrOfCubes[x*9+y].innerText(ctx,num);
				arrOfCubes[x*9+y].dontFillText = true;
				q-=1;
				return random(q);
			}
			else{
				return random(q);
			}
		}
		else{
			return true;
		}
	}
	
	random(17);

	function solver(){
		
		for(let i=0;i<9;i++){

			for(let j=0;j<9;j++){
			
				if(matrix[i][j] === 0){

					for(let n=1;n<10;n++){

						if(isValid(i,j,n)){

							matrix[i][j] = n;

							if(solver()){
								return true;
							}

							else{
								matrix[i][j] = 0;
							}	
						}
					}
					return false;
				}
			}

		}
		for(let i=0;i<matrix.length;i++){
			for(let j=0;j<matrix[i].length;j++){
				arrOfCubes[i*9+j].innerText(ctx,matrix[i][j]);
				arrOfCubes[i*9+j].dontFillText = true;
			}
		}
		return true;
	}

		

	function isValid(x,y,num){

		if( sameRow(x,y,num) &&
		sameCol(x,y,num) &&
		sameSquare(x,y,num) ){
			return true;
		}
		return false;


		function sameRow(x,y,num){
			for(let i=0;i<9;i++){
				if(matrix[x][i] == num){
					return false;
				}
			}
			return true;
		}
		function sameCol(x,y,num){
			for(let i=0;i<9;i++){
				if(matrix[i][y] == num){
					return false;
				}
			}
			return true;
		}
		function sameSquare(x,y,num){
			/*For row*/
			if(x < 3){
				x = 0;
			}
			else if(x<6){
				x = 3;
			}
			else{
				x=6;
			}
			/*For column*/
			if(y < 3){
				y = 0;
			}
			else if(y < 6){
				y = 3;
			}
			else{
				y=6;
			}
			for(let i=x;i<x+3;i++){
				
				for(let j=y;j<y+3;j++){

					if(matrix[i][j] == num){
						return false;
					}
				}
			}
			return true;
		}
	}


