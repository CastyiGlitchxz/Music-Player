const Songs = {
    Song1: "You Will Know Our Names",
    Song2: "Guar Plains",
    Song3: "You Will Recall our Names"
}

const Art = {
    AlbumArt1: "https://th.bing.com/th/id/R.91f6ea5a6e532e6bc9ac4a047156ddef?rik=MzObvgJb0iCPQw&pid=ImgRaw&r=0",
    AlbumArt3: "https://th.bing.com/th/id/OIP.pP7Q3dNBlkZrnOEQ7EnktgHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7"
}


//Controls Song Info

const SongInfo = {
    Artist: "Xenoblade Chronicles Ost",
    Song_Name: Songs.Song1,
    Album_Art: Art.AlbumArt1
}



document.getElementById("AlbumArt").src = SongInfo.Album_Art;
document.getElementById("SongName").innerHTML = SongInfo.Song_Name;
document.getElementById("Artist").innerHTML = SongInfo.Artist;

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

function Forward() {
    console.log(Songs);
}





//test code

if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
      title: SongInfo.Song_Name,
      artist: SongInfo.Artist,
      album: 'Whenever You Need Somebody',
      artwork: [
        { src: SongInfo.Album_Art,   sizes: '96x96',   type: 'image/png' },
        { src: SongInfo.Album_Art, sizes: '128x128', type: 'image/png' },
        { src: SongInfo.Album_Art, sizes: '192x192', type: 'image/png' },
        { src: SongInfo.Album_Art, sizes: '256x256', type: 'image/png' },
        { src: SongInfo.Album_Art, sizes: '384x384', type: 'image/png' },
        { src: SongInfo.Album_Art, sizes: '512x512', type: 'image/png' },
      ]
    });
  
    navigator.mediaSession.setActionHandler('Play', function() {});
    navigator.mediaSession.setActionHandler('seekbackward', function() {});
    navigator.mediaSession.setActionHandler('seekforward', function() {});
    navigator.mediaSession.setActionHandler('previoustrack', function() {});
    navigator.mediaSession.setActionHandler('nexttrack', function() {});
  
  }