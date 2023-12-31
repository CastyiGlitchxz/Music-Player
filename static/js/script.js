const Songs = ['You Will Know Our Names', 'Guar Plains', 'You Will Recall our Names']

const AlbumArt = ['https://th.bing.com/th/id/R.91f6ea5a6e532e6bc9ac4a047156ddef?rik=MzObvgJb0iCPQw&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/OIP.pP7Q3dNBlkZrnOEQ7EnktgHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7']


//Controls Song Info

const SongInfo = {
    Artist: "Xenoblade Chronicles Ost",
    Song_Name: Songs.Song1,
    Album_Art: AlbumArt
}


Songs.forEach(element => {
    let NextUp = document.getElementById("NextUp");

    const NTrack = document.createElement("div");
    NTrack.setAttribute("class", "NextTrack");
    NextUp.appendChild(NTrack);

    const Artwork = document.createElement("img");
    Artwork.setAttribute("src", AlbumArt);
    NTrack.appendChild(Artwork);

    const TrackTitle = document.createElement("h6");
    TrackTitle.innerHTML = element;
    NTrack.appendChild(TrackTitle);
});


document.getElementById("AlbumArt").src = SongInfo.Album_Art;
document.getElementById("SongName").innerHTML = Songs[0];
document.getElementById("Artist").innerHTML = SongInfo.Artist;

let MusicTime = document.getElementById("MusicTime");

document.getElementById("iBackground").src = AlbumArt;

function OpenNU() {
  let NextUp = document.getElementById("NextUp")

  if (window.screen.width <= 600) {
      if (NextUp.style.marginTop === "152.5%") {
      NextUp.style.marginTop = "56%";
      NextUp.style.transition = "all 1s";
    } else if (NextUp.style.marginTop = "56%") {
      NextUp.style.marginTop = "152.5%";
      NextUp.style.transition = "all 1s";
    }
  } else {
    if (NextUp.style.marginTop === "15.2%") {
      NextUp.style.marginTop = "42.5%";
      NextUp.style.transition = "all 1s";
    } else if (NextUp.style.marginTop = "42.5%") {
      NextUp.style.marginTop = "15.2%";
      NextUp.style.transition = "all 1s";
    }
  }
}


//Controls Media Display thingy for all devices

if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
      title: Songs[0],
      artist: SongInfo.Artist,
      album: 'Xenoblade Chronicles',
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
  
  };