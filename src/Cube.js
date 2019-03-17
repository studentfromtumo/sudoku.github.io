function Cube(x,y,w,h){
		this.x = x;	/*X coord*/
		this.y = y;	/*Y coord*/
		this.w = w;	/*Width*/
		this.h = h;	/*Height*/
		this.dontFillText = false;

		this.draw = function(ctx){
			ctx.rect(this.x,this.y,this.w,this.h);
			ctx.lineWidth = "2";
			ctx.stroke();
		}

		this.innerText = function(ctx,value){
			if(!this.dontFillText){
				ctx.font = "20px Arial";
				ctx.fillStyle = "#222222"
				ctx.textAlign = 'center';
				ctx.fillText(`${value}`,this.x+20,this.y+28);
			}
		}
}