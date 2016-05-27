var curr_id,playerid,board;
var Coord= {
	'bol_1_1':[1,1],
	'bol_1_2':[2,1],
	'bol_1_3':[3,1],

	'bol_2_1':[1,2],
	'bol_2_2':[2,2],
	'bol_2_3':[3,2],

	'bol_3_1':[1,3],
	'bol_3_2':[2,3],
	'bol_3_3':[3,3]
};

$(document).ready(function () {
	initvariable();

	$('.boxes').mousedown(function(){
		curr_id=$(this).attr('id');
	});
	$('.boxes').mouseup(function(){
		if(curr_id == $(this).attr('id')){
			box=this;
			x=Coord[curr_id];
			a=x[0]-1;b=x[1]-1;
			putsign(box,a,b);
		}
	});
	$(document).mouseup(function(){
		curr_id='';
	});

	function putsign(box,a,b){
		if(playerid===1){
			//put X
			if(($(box.children[0]).text())==='-'){
				$(box.children[0]).text('X');
				playerid=0;
				board[a][b]=1;
			}
			else if(($(box.children[0]).text())==='X'){
				$(box.children[0]).text('-');
				playerid=0;
				board[a][b]=0;
			}
		}
		else {
			//put O
			if(($(box.children[0]).text())==='-'){
				$(box.children[0]).text('O');
				playerid=1;
				board[a][b]=-1;
			}
			else if(($(box.children[0]).text())==='O'){
				$(box.children[0]).text('-');
				playerid=1;
				board[a][b]=0;
			}
		}
	}

	function WinCon(){
		switch (board[0][0]+board[0][1]+board[0][2]) {
			case 3:
				Won(1,0,0,0,2);
				break;
			case -3:
				Won(-1,0,0,0,2);
				break;
			default:
				;
		}

		switch (board[1][0]+board[1][1]+board[1][2]) {
			case 3:
				Won(1,1,1,0,2);
				break;
			case -3:
				Won(-1,1,1,0,2);
				break;
			default:
				;
		}

		switch (board[2][0]+board[2][1]+board[2][2]) {
			case 3:
				Won(1,2,2,0,2);
				break;
			case -3:
				Won(-1,2,2,0,2);
				break;
			default:
				;
		}

		switch (board[0][0]+board[1][1]+board[2][2]) {
			case 3:
				Won(1,0,2,0,2);
				break;
			case -3:
				Won(-1,0,2,0,2);
				break;
			default:
				;
		}

		switch (board[2][0]+board[1][1]+board[0][2]) {
			case 3:
				Won(1,2,0,0,2);
				break;
			case -3:
				Won(-1,2,0,0,2);
				break;
			default:
				;
		}

		switch (board[0][0]+board[1][0]+board[2][0]) {
			case 3:
				Won(1,0,2,0,0);
				break;
			case -3:
				Won(-1,0,2,0,0);
				break;
			default:
				;
		}

		switch (board[0][1]+board[1][1]+board[2][1]) {
			case 3:
				Won(1,0,2,1,1);
				break;
			case -3:
				Won(-1,0,2,1,1);
				break;
			default:
				;
		}
		switch (board[0][2]+board[1][2]+board[2][2]) {
			case 3:
				Won(1,0,2,2,2);
				break;
			case -3:
				Won(-1,0,2,2,2);
				break;
			default:
				;
		}
	}
	function Won(p_won,rs,re,cs,ce) {

	}

	function createLineElement(x, y, length, angle) {
		var line = document.createElement("div");
		var styles = 'border: 1px solid black; '
			+ 'width: ' + length + 'px; '
			+ 'height: 0px; '
			+ '-moz-transform: rotate(' + angle + 'rad); '
			+ '-webkit-transform: rotate(' + angle + 'rad); '
			+ '-o-transform: rotate(' + angle + 'rad); '  
			+ '-ms-transform: rotate(' + angle + 'rad); '  
			+ 'position: absolute; '
			+ 'top: ' + y + 'px; '
			+ 'left: ' + x + 'px; ';
			line.setAttribute('style', styles);  
		return line;
}

	function createLine(x1, y1, x2, y2) {
		var a = x1 - x2,
		b = y1 - y2,
		c = Math.sqrt(a * a + b * b);

		var sx = (x1 + x2) / 2,
		sy = (y1 + y2) / 2;

		var x = sx - c / 2,
		y = sy;

		var alpha = Math.PI - Math.atan2(-b, a);

	    return createLineElement(x, y, c, alpha);
	}

});
