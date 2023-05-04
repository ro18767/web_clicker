"use strict";


/*

    <audio loop controls id="audio">
        <source src="">
    </audio>

*/
class AudioSetting {
    domElement = document.createElement("div");
    musicControlElement = document.createElement("label");
    musicCheckbox = document.createElement("input");
    sfxControlElement = document.createElement("div");
    sfxCheckbox = document.createElement("input");
    constructor() {
        this.domElement.classList.add('AudioSetting');

        this.musicCheckbox.setAttribute('type', 'checkbox');

        this.musicControlElement.append('music:', this.musicCheckbox);
        this.domElement.append(this.musicControlElement);

        let musicSaver = new Saver('AudioSetting.music.enabled', true);
        let music = new Audio('/src/audio/music/Валентин Стрыкало - Так гріє.mp3');
        music.loop = true;

        this.musicCheckbox.checked = musicSaver.value;

        this.musicCheckbox.addEventListener('change', (e) => {
            musicSaver.value = this.musicCheckbox.checked;
            if (musicSaver.value) music.play();
            if (!musicSaver.value) music.pause();
        });

        this.sfxCheckbox.setAttribute('type', 'checkbox');

        this.sfxControlElement.append('sfx:', this.sfxCheckbox);
        this.domElement.append(this.sfxControlElement);


        let sfxSaver = new Saver('AudioSetting.sfx.enabled', true);

        this.sfxCheckbox.checked = sfxSaver.value;

        this.sfxCheckbox.addEventListener('change', (e) => {
            sfxSaver.value = this.sfxCheckbox.checked;
        });


        this.sfxControlElement.setAttribute('type', 'checkbox');
        this.domElement.append(this.sfxControlElement);




        window.addEventListener('click', () => {
            this.musicCheckbox.dispatchEvent(new Event('change'));
        }, { once: true });

    }
    playDamage() {
        if (!this.sfxCheckbox.checked) return;
        let sound = new Audio('/src/audio/SFX/Damage.wav');
        sound.play();
    }
}