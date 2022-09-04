import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeStop, 1000));


function timeStop(timerefresh) {
    let pause = timerefresh.seconds;
    console.log(pause)
    localStorage.setItem("videoplayer-current-time", pause)
}


player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).then(function (pause) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});