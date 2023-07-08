//Controls Song Info
const Artist = "Xenoblade Chronicles OST";
const Song_Name = "You Will know Our Names";
const Album_Art = "https://th.bing.com/th/id/R.91f6ea5a6e532e6bc9ac4a047156ddef?rik=MzObvgJb0iCPQw&pid=ImgRaw&r=0";

document.getElementById("AlbumArt").src = Album_Art;
document.getElementById("SongName").innerHTML = Song_Name;
document.getElementById("Artist").innerHTML = Artist;

let MusicTime = document.getElementById("MusicTime");


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

//test code

if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
      title: Song_Name,
      artist: Artist,
      album: 'Whenever You Need Somebody',
      artwork: [
        { src: Album_Art,   sizes: '96x96',   type: 'image/png' },
        { src: Album_Art, sizes: '128x128', type: 'image/png' },
        { src: Album_Art, sizes: '192x192', type: 'image/png' },
        { src: Album_Art, sizes: '256x256', type: 'image/png' },
        { src: Album_Art, sizes: '384x384', type: 'image/png' },
        { src: Album_Art, sizes: '512x512', type: 'image/png' },
      ]
    });
  
    navigator.mediaSession.setActionHandler('Play', function() {});
    navigator.mediaSession.setActionHandler('seekbackward', function() {});
    navigator.mediaSession.setActionHandler('seekforward', function() {});
    navigator.mediaSession.setActionHandler('previoustrack', function() {});
    navigator.mediaSession.setActionHandler('nexttrack', function() {});
  
  }