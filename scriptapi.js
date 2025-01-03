const CLIENT_ID = '74491f83d9414a2e8ccde18f3ecf26e8';
const CLIENT_SECRET = '2b8cb597d4204c229cf0ba360d4c3543';
const REFRESH_TOKEN = 'AQAvlU5pgDn0GSqpRFdEj4Mro4t0DDvdCt4Rp2DjjGs0yqhhKJlEw53iWhKKlYKjSuAaU8kZqFLSVMKAfyLetvo9-5dinLgpD-_BE3o5Ivc_byZ4CxHFyy6yZ3gSRCNWxk0';

// Function to get an access token
async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=refresh_token&refresh_token=' + REFRESH_TOKEN
    });
    const data = await response.json();
    return data.access_token;
}

// Function to get the current user's information
async function getCurrentUser() {
    const accessToken = await getAccessToken();
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });
    const data = await response.json();
    return data;
}

// Function to get the current user's currently playing track
async function getCurrentTrack() {
    const accessToken = await getAccessToken();
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });
    const data = await response.json();
    return data;
}

// Function to display the artist and song
async function displayCurrentTrack() {
    const currentTrack = await getCurrentTrack();
    if (currentTrack.item) {
        const artist = currentTrack.item.artists[0].name;
        const song = currentTrack.item.name;
        console.log(`Currently playing: ${artist} - ${song}`);
    } else {
        console.log('No song is currently playing.');
    }
}

displayCurrentTrack();

// ... (rest of the code remains the same)

// ... (rest of the code remains the same)

// Function to display the artist, song, and album cover in the HTML page
async function displayCurrentTrack() {
    const currentTrack = await getCurrentTrack();
    if (currentTrack.is_playing) {
        const artist = currentTrack.item.artists[0].name;
        const song = currentTrack.item.name;
        const albumCoverUrl = currentTrack.item.album.images[0].url;
        const progress = currentTrack.progress_ms;
        const duration = currentTrack.item.duration_ms;
        const artistElement = document.getElementById('artist');
        const songElement = document.getElementById('song');
        const albumCoverElement = document.getElementById('album-cover');
        const progressBarElement = document.getElementById('progress-bar');
        artistElement.textContent = artist;
        songElement.textContent = song;
        albumCoverElement.src = albumCoverUrl;
        progressBarElement.style.width = `${(progress / duration) * 100}%`;
    } else {
        const artistElement = document.getElementById('artist');
        const songElement = document.getElementById('song');
        const albumCoverElement = document.getElementById('album-cover');
        const progressBarElement = document.getElementById('progress-bar');
        artistElement.textContent = '';
        songElement.textContent = 'Nothing is playing';
        albumCoverElement.src = 'cybersonglogo.svg';
        progressBarElement.style.width = '0%';
    }
}

setInterval(displayCurrentTrack, 5000);

