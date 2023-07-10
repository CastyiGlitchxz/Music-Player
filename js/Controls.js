function Play() {
    if (document.getElementById("Audio").paused == true) {
        document.getElementById("Audio").play();
    } else if (document.getElementById("Audio").paused == false) {
        document.getElementById("Audio").pause();
    }
    MusicTime.max = document.getElementById("Audio").duration;
}

function ChangeTime() {
    document.getElementById("Audio").currentTime = MusicTime.value
}

function DisplayTime() {
    let x = document.getElementById("Audio").duration;
    let Duration = document.getElementById("Duration");
    Duration.innerHTML = x;

    MusicTime.value = document.getElementById("Audio").currentTime;

    if (document.getElementById("LoopBTN").checked == true) {
        if (document.getElementById("Audio").currentTime == document.getElementById("Audio").duration) {
            document.getElementById("Audio").currentTime = "0";
            document.getElementById("Audio").play();         
        }
    }

}


//Select The Song
function Apply() {
    document.getElementById("Audio").src = document.getElementById("SongApply").value;
}

//Rewind/Play previous song function
function Backwards() {
    if (MusicTime.value >= "1") {
        document.getElementById("Audio").currentTime = "0";
    } else if (MusicTime.value <= "0") {
        console.log("What");
    }
}

function Forward() {
    console.log("Officialy doesn't work");
}