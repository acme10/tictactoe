function initvariable()
{
	curr_id='';
	
	playerid=1;

	board=new Array(3);
	for(var i =0;i<3;i++)
	{
		board[i]=new Array(3);
		for(var j=0;j<3;j++)
		{
			board[i][j]=0;
		}
	}
}