"use strict";


/*

    <audio loop controls id="audio">
        <source src="">
    </audio>

*/
class AudioSetting {
    domElement = document.createElement("div");
    musicControlElement = document.createElement("input");
    sfxControlElement = document.createElement("div");

    constructor() {
        this.domElement.classList.add('AudioSetting');

        this.musicControlElement.setAttribute('type', 'checkbox');
        this.domElement.append(this.musicControlElement);
        
        let music_enabledSaver = new Saver('AudioSetting.music.enabled', true);
        let music = new Audio('/src/audio/music/Валентин Стрыкало - Так гріє.mp3');
        music.loop = true;

        this.musicControlElement.checked = music_enabledSaver.value;

        this.musicControlElement.addEventListener('change', (e) => {
            music_enabledSaver.value = this.musicControlElement.checked;
            if (music_enabledSaver.value) music.play();
            if (!music_enabledSaver.value) music.pause();
        });



        this.sfxControlElement.setAttribute('type', 'checkbox');
        this.domElement.append(this.sfxControlElement);




        window.addEventListener('click', () => {
            this.musicControlElement.dispatchEvent(new Event('change'));
        });

    }
}