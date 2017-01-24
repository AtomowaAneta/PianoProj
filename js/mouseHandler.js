function mouseHandler(create) {
    var mute = document.getElementById("mute");
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

    document.getElementsByClassName("key").onmousedown = function(e) {
        if (document.getElementsByClassName("key") == 0) {

            showKey(0);
            create[0].play();

        }

    }
}
