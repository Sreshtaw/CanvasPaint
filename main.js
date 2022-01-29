canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
var mouseevent= "empty";
var last_position_x,last_postion_y;
color= "orange";
width_of_line= 2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown (e){
    color= document.getElementById("color").value;

    width_of_line= document.getElementById("width").value;

    mouseevent="mouseDown";}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
    mouseevent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
    mouseevent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove (e){
    current_position_x = e.clientX-canvas.offsetLeft;
    current_position_y = e.clientY-canvas.offsetTop;
    if (mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y=");
        console.log("x="+last_position_x+"y="+last_postion_y);
        ctx.moveTo(last_position_x , last_postion_y);
        console.log("current position of x and y=");
        console.log("x="+ current_position_x+ "y="+ current_position_y);
        ctx.lineTo(current_position_x , current_position_y);
        ctx.stroke();
        
    }
    last_position_x=current_position_x;
    last_postion_y=current_position_y;
}