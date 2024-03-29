var mouseEvent= "empty";

var last_position_x , last_position_y;

color="black";
width_line=2;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_x=e.clientX-canvas.offsetLeft;
    var current_position_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.arc(current_position_x, current_position_y, 40,0,2*Math.PI);
        ctx.stroke();
    }

    last_position_x=current_position_x;
    last_position_y=current_position_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
