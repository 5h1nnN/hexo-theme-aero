document.addEventListener('DOMContentLoaded', function() {
    if (window.__musicPlayerInited__) return;
    window.__musicPlayerInited__ = true;
    
    // 检查配置是否存在
    if (typeof musicConfig === 'undefined' || !musicConfig.playlist || musicConfig.playlist.length === 0) {
        return;
    }

    const playlist = musicConfig.playlist;
    let currentSongIndex = 0;
    let isPlaying = false;

    // 获取DOM元素
    const audio = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.getElementById('progressContainer');
    const songTitle = document.getElementById('songTitle');
    const albumArt = document.getElementById('albumArt');
    const widget = document.querySelector('.music-widget');

    // 初始化播放器
    function loadSong(song) {
        songTitle.innerText = `${song.title} - ${song.artist}`;
        audio.src = song.url;
        albumArt.style.backgroundImage = `url("${song.cover}")`;
        
        // 重置进度条
        progressBar.style.width = '0%';
    }

    // 播放歌曲
    function playSong() {
        widget.classList.add('playing');
        playIcon.classList.remove('ri-play-large-fill');
        playIcon.classList.add('ri-pause-large-fill');
        audio.play().catch(e => console.log("Auto-play prevented:", e));
        isPlaying = true;
    }

    // 暂停歌曲
    function pauseSong() {
        widget.classList.remove('playing');
        playIcon.classList.remove('ri-pause-large-fill');
        playIcon.classList.add('ri-play-large-fill');
        audio.pause();
        isPlaying = false;
    }

    // 切换播放状态
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    // 上一首
    prevBtn.addEventListener('click', () => {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = playlist.length - 1;
        }
        loadSong(playlist[currentSongIndex]);
        playSong();
    });

    // 下一首
    nextBtn.addEventListener('click', () => {
        currentSongIndex++;
        if (currentSongIndex > playlist.length - 1) {
            currentSongIndex = 0;
        }
        loadSong(playlist[currentSongIndex]);
        playSong();
    });

    // 更新进度条
    audio.addEventListener('timeupdate', (e) => {
        const { duration, currentTime } = e.srcElement;
        if(isNaN(duration)) return;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    });

    // 当前歌曲结束后自动播放下一首
    audio.addEventListener('ended', () => {
        nextBtn.click();
    });

    // 初始加载第一首
    loadSong(playlist[currentSongIndex]);
    
    if (musicConfig.autoplay) {
        playSong();
    }
});