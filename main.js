var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_preesed=e.keyCode;
    console.log(key_preesed);
    if(e.shiftkey==true&&key_preesed=='80'){
        console.log("p and shift pressed togather");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftkey==true&&key_preesed=='77'){
        console.log("m and shift pressed togather");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(key_preesed=='38'){
        up();
        console.log("up");
    }

    if(key_preesed=='40'){
        down();
        console.log("down");
    }

    if(key_preesed=='37'){
        left();
        console.log("left");
    }

    if(key_preesed=='39'){
        right();
        console.log("right");
    }
    if(key_preesed=='70'){
        new_image('hulk_face.png');
        console.log("f");
    }
    if(key_preesed=='76'){
        new_image('hulk_left_hand.png');
        console.log("l");
    }
    if(key_preesed=='82'){
        new_image('hulk_right_hand.png');
        console.log("r");
    }
    if(key_preesed=='66'){
        new_image('hulkd_body.png');
        console.log("b");
    }
    if(key_preesed=='72'){
        new_image('hulk_legs.png');
        console.log("h");
    }
    
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("bock_image_height="+block_image_height)
        console.log("When up arraow key is pressed x="+player_x+"y="+player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<600){
        player_y=player_y+block_image_height;
        console.log("bock_image_height="+block_image_height)
        console.log("When up arraow key is pressed x="+player_x+"y="+player_y)
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_height;
        console.log("bock_image_height="+block_image_height)
        console.log("When up arraow key is pressed x="+player_x+"y="+player_y)
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<1100){
        player_x=player_x+block_image_height;
        console.log("bock_image_height="+block_image_height)
        console.log("When up arraow key is pressed x="+player_x+"y="+player_y)
        canvas.remove(player_object);
        player_update();
    }
}
}