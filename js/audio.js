var audioPlayer = function () {
    "use strict";

    // Private variables
    var _currentTrack = 0;
    var _elements = {
        audio: document.getElementById("audio"),
        playerButtons: {
            largeToggleBtn: document.getElementById("smile-button"),
            nextTrackBtn: document.querySelector(".content__nav-button--next"),
            previousTrackBtn: document.querySelector(".content__nav-button--prev"),
        },
        images: document.getElementById("faces"),
    };

    var initPlayer = function () {

        //Large toggle button clicked.
        _elements.playerButtons.largeToggleBtn.addEventListener("click", function (e) {
            if (_elements.audio.paused) {
                _setImage();
                _elements.audio.play();
            } else {
                _setImage();
                _elements.audio.pause();
            }
        }, false);

        //Next track button clicked.
        _elements.playerButtons.nextTrackBtn.addEventListener("click", function (e) {
            if (_currentTrack < 2) {
                _currentTrack++;
                _elements.audio.pause();
                _setImageNext();
                _setTrack();
            }
            else {
                _currentTrack -= 2;
                _elements.audio.pause();
                _setImageNext();
                _setTrack();
            }
        }, false);

        //Previous track button clicked.
        _elements.playerButtons.previousTrackBtn.addEventListener("click", function (e) {
            if (_currentTrack >= 1) {
                _currentTrack--;
                _elements.audio.pause();
                _setImageNext();
                _setTrack();
            }
            else {
                _currentTrack += 2;
                _elements.audio.pause();
                _setImageNext();
                _setTrack();
            }
        }, false);
    };

    var _setImage = function () {
        if (_elements.audio.paused) {
            document.getElementById("smile-button").src = _elements.images.children[0].src;
        } else {
            document.getElementById("smile-button").src = _elements.images.children[1].src;
        }
    }

    var _setImageNext = function () {
        if (_elements.audio.paused) {
            document.getElementById("smile-button").src = _elements.images.children[1].src;
        } else {
            document.getElementById("smile-button").src = _elements.images.children[0].src;
        }
    }

    var _setTrack = function () {
        var songURL = _elements.audio.children[_currentTrack].src;

        _elements.audio.setAttribute("src", songURL);
        _elements.audio.load();

        //_playBack();
    };

    var _playBack = function () {
        if (_elements.audio.paused) {
            _setImage();
            _elements.audio.play();
        } else {
            _setImage();
            _elements.audio.pause();
        }
    };

    return {
        initPlayer: initPlayer
    };
};
(function () {
    var player = new audioPlayer();

    player.initPlayer();
})();