var keyArray = ["h1", "c2", "cis2", "d2", "dis2", "e2", "f2", "fis2", "g2", "gis2", "a2", "ais2", "h2"];
var soundArr = [];


function createKeyboard() {
    for (var i = 0; i <= keyArray.length - 1; i++) {
        soundArr[i] = new Howl({
            src: ["samples1/" + keyArray[i] + ".wav"],
            volume: 1,
        });
    }
    return soundArr;
}


function main() {
    var create = createKeyboard();
    document.getElementById("volumelvl").innerHTML = "max volume";
    keyHandler(create);
    mouseHandler(create);

}

function showKey(key) {
    document.getElementById("pressedkey").innerHTML = keyArray[key];
}