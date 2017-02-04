var keyBoard = document.getElementsByClassName("key");

function animateKey(arg) {
    keyBoard[arg].style.borderRadius = '30%';
    window.onkeyup = function(e) {
        keyBoard[arg].style.borderRadius = '0%';
    }
}

function keyHandler(create) {
    window.onkeydown = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if (key == 32 || mute == true) {
            document.getElementById("mute").style.backgroundColor = "red";
            for (var i = 0; i < create.length; i++) {
                create[i].volume(0);
                document.getElementById("volumelvl").innerHTML = "muted";
            }
        }
        if (key == 17) {
            document.getElementById("mute").style.backgroundColor = '';
            for (var i = 0; i < create.length; i++) {
                create[i].volume(1);
                document.getElementById("volumelvl").innerHTML = "max volume";
            }
        }

        if (key == 107) {
            document.getElementById("volumeup").style.backgroundColor = 'red';
            document.getElementById("mute").style.backgroundColor = '';
            for (var i = 0; i < create.length; i++) {
                create[i].volume(create[i].volume() + 0.1);
                document.getElementById("volumelvl").innerHTML = Math.round(create[i].volume() * 100) / 100;
            }
            window.onkeyup = function(e) {
                document.getElementById("volumeup").style.backgroundColor = '';
            }
        }

        if (key == 109) {
            document.getElementById("volumedown").style.backgroundColor = 'red';
            for (var i = 0; i < create.length; i++) {
                create[i].volume(create[i].volume() - 0.1);
                document.getElementById("volumelvl").innerHTML = Math.round(create[i].volume() * 100) / 100;
                if (create[i].volume() == 0) {
                    document.getElementById("mute").style.backgroundColor = 'red';
                }
            }
            window.onkeyup = function(e) {
                document.getElementById("volumedown").style.backgroundColor = '';
            }
        }
        if (key == 106) {
            document.getElementById("loop").style.backgroundColor = 'red';
            for (var i = 0; i < create.length; i++) {
                create[i].loop(true); 
        }
    }

        switch (key) {
            case 81:
                showKey(0);
                create[0].play();
                animateKey(0);
                break;
            case 87:
                showKey(1);
                create[1].play();
                animateKey(1);
                break;
            case 69:
                showKey(2);
                create[2].play();
                animateKey(2);
                break;
            case 82:
                showKey(3);
                create[3].play();
                animateKey(3);
                break;
            case 84:
                showKey(4);
                create[4].play();
                animateKey(4);
                break;
            case 89:
                showKey(5);
                create[5].play();
                animateKey(5);
                break;
            case 85:
                showKey(6);
                create[6].play();
                animateKey(6);
                break;
            case 73:
                showKey(7);
                create[7].play();
                animateKey(7);
                break;
            case 79:
                showKey(8);
                create[8].play();
                animateKey(8);
                break;
            case 80:
                showKey(9);
                create[9].play();
                animateKey(9);
                break;
            case 219:
                showKey(10);
                create[10].play();
                animateKey(10);
                break;
            case 221:
                showKey(11);
                create[11].play();
                animateKey(11);
                break;
            case 220:
                showKey(12);
                create[12].play();
                animateKey(12);
                break;
            default:
                document.getElementById("pressedkey").innerHTML = "Out of range";
        }
        e.preventDefault();
    }
}
