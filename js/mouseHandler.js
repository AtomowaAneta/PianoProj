function mouseHandler(create) {
    var mute = document.getElementById("mute");
    var loop = document.getElementById("loop");
    var volumeup = document.getElementById("volumeup");
    var volumedown = document.getElementById("volumedown");
    var keyBoard = document.getElementsByClassName("key");
    mute.onmousedown = function(e) {
        mute.style.backgroundColor = "red";
        for (var i = 0; i < create.length; i++) {
            create[i].volume(0);
            document.getElementById("volumelvl").innerHTML = "muted";
        }
    }
    mute.ondblclick = function(e) {
        mute.style.backgroundColor = '';
        for (var i = 0; i < create.length; i++) {
            create[i].volume(1);
            document.getElementById("volumelvl").innerHTML = "max volume";
        }
    }
    volumeup.onmousedown = function(e) {
        volumeup.style.backgroundColor = 'red';
        document.getElementById("mute").style.backgroundColor = '';
        for (var i = 0; i < create.length; i++) {
            create[i].volume(create[i].volume() + 0.1);
            document.getElementById("volumelvl").innerHTML = Math.round(create[i].volume() * 100) / 100;
        }
        window.onmouseup = function(e) {
            volumeup.style.backgroundColor = '';
        }


    }
    volumedown.onmousedown = function(e) {
        volumedown.style.backgroundColor = 'red';
        document.getElementById("mute").style.backgroundColor = '';
        for (var i = 0; i < create.length; i++) {
            create[i].volume(create[i].volume() - 0.1);
            document.getElementById("volumelvl").innerHTML = Math.round(create[i].volume() * 100) / 100;
        }
        window.onmouseup = function(e) {
            volumedown.style.backgroundColor = '';
        }
    }
    loop.onmousedown = function(e) {
         loop.style.backgroundColor = 'red';
            for (var i = 0; i < create.length; i++) {
                create[i].loop(true); 
        }
            document.getElementById("volumelvl").innerHTML = "Loop mode";
    }
    loop.ondblclick = function(e) {
           loop.style.backgroundColor = '';
            for (var i = 0; i < create.length; i++) {
                create[i].loop(false); 
        }
            document.getElementById("volumelvl").innerHTML = "";
    }


    keyBoard[0].onmousedown = function(e) {
            showKey(0);
            create[0].play();
    }
    keyBoard[1].onmousedown = function(e) {
            showKey(1);
            create[1].play();
    }
    keyBoard[2].onmousedown = function(e) {
            showKey(2);
            create[2].play();
    }
    keyBoard[3].onmousedown = function(e) {
            showKey(3);
            create[3].play();
    }
    keyBoard[4].onmousedown = function(e) {
            showKey(4);
            create[4].play();
    }
    keyBoard[5].onmousedown = function(e) {
            showKey(5);
            create[5].play();
    }
    keyBoard[6].onmousedown = function(e) {
            showKey(6);
            create[6].play();
    }
    keyBoard[7].onmousedown = function(e) {
            showKey(7);
            create[7].play();
    }
    keyBoard[8].onmousedown = function(e) {
            showKey(8);
            create[8].play();
    }
    keyBoard[9].onmousedown = function(e) {
            showKey(9);
            create[9].play();
    }
    keyBoard[10].onmousedown = function(e) {
            showKey(10);
            create[10].play();
    }
    keyBoard[11].onmousedown = function(e) {
            showKey(11);
            create[11].play();
    }
     keyBoard[12].onmousedown = function(e) {
            showKey(12);
            create[12].play();
    }


}
