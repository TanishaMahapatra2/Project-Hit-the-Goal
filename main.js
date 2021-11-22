
var canvas=new fabric.Canvas("myCanvas");

var ball="";
var ball_x=0;
var ball_y=0;
var hole_x=800;
var hole_y=400;
var hole="";

block_image_width = 5;
block_image_height = 5;

function load_img()
{
	fabric.Image.fromURL("golf-h.png",function(Img){
hole=Img;
hole.scaleToWidth(50);
hole.scaleToHeight(50);
hole.set({
top:hole_y,left:hole_x
	});
	canvas.add(hole);
});
}
function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
ball=Img;
ball.scaleToWidth(50);
ball.scaleToHeight(50);
ball.set({
top:ball_y,left:ball_x
	});
	canvas.add(ball);
	
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==hole_x) && (ball_y==hole_y))
	{
		canvas.remove(ball);
				document.getElementById("h3").innerHTML="Great job, you have hit the goal🏆";
		document.getElementById("myCanvas").style.borderColor="violet";
		document.getElementById("h3").style.color="blue";
		document.getElementById("myCanvas").style.backgroundImage= "url('win.png')";
		document.getElementById("won").innerHTML="Hurray! You Won";
		document.getElementById("won").style.color="#FF1493";
		document.getElementById("won").style.backgroundColor= "#EA8DEC";
		}
		
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '39')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '37')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
	if(ball_y>=0)
	{
		ball_y=ball_y-block_image_height;
		console.log("block_image_height = " + block_image_height);
		console.log("when Up arrow key is pressed, X= " + ball_x + " , Y =" + ball_y);
		canvas.remove(ball);
		new_image();
		
	}
	}

	function down()
	{
		if(ball_y<=450)
	{
		ball_y=ball_y+block_image_height;
		console.log("block_image_height = " + block_image_height);
		console.log("when Down arrow key is pressed, X= " + ball_x + " , Y =" + ball_y);
		canvas.remove(ball);
		new_image();
	}
	}

	function right()
	{
	if(ball_x>=5)
	{
		ball_x=ball_x-block_image_width;
		console.log("block_image_width = " + block_image_width);
		console.log("when Right arrow key is pressed, X= " + ball_x + " , Y =" + ball_y);
		canvas.remove(ball);
		new_image();
	}
	}

	function left()
	{
		if(ball_y<=1050)
	{
		ball_x=ball_x+block_image_width;
		console.log("block_image_width = " + block_image_width);
		console.log("when Left arrow key is pressed, X= " + ball_x + " , Y =" + ball_y);
		canvas.remove(ball);
		new_image();
	}
	}
}



