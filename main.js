canvas = document.getElementById("carCanvas");
ctx = canvas.getContext("2d");

white_car_width = 150;
white_car_height = 100;

white_car_image = "white car.png";

white_car_x = 10;
white_car_y = 10;


blue_car_width = 150;
blue_car_height = 100;

blue_car_image = "blue car.png";

blue_car_x = 10;
blue_car_y = 100;


background_img = "racing.jpg";

function img_come() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    white_car_imgTag = new Image();
    white_car_imgTag.onload = uploadwhite_car;
    white_car_imgTag.src = white_car_image;

    blue_car_imgTag = new Image();
    blue_car_imgTag.onload = uploadblue_car;
    blue_car_imgTag.src = blue_car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadwhite_car() {
    ctx.drawImage(white_car_imgTag, white_car_x, white_car_y, white_car_width, white_car_height);
}
function uploadblue_car() {
    ctx.drawImage(blue_car_imgTag, blue_car_x, blue_car_y, blue_car_width, blue_car_height);
}

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
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
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(white_car_y >=0)
    {
        white_car_y = white_car_y -10;
        console.log("when up key is pressed, x = " + white_car_y + "| y = " + white_car_y);
        uploadBackground();
        uploadwhite_car();
        uploadblue_car();
    }
}

function down()
{
    if(white_car_y >=500)
    {
        white_car_y = white_car_y +10;
        console.log("when up key is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadwhite_car();
        uploadblue_car();
    }
}
