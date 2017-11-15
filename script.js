jQuery(function($) {

    /***********************************
     Global Variables
     ************************************/
    var $window = $(window);
    var $body = $('body');
    /***********************************
     Scrollers
     ************************************/
    function scrollTo(object, speed) {
        var $object;
        var scroll;
        if (typeof speed === "undefined" || speed === null) {
            speed = 1500;
        }

        if (typeof object === 'string') {
            $object = $(object);
            scroll = $object.offset().top - 70;
        } else if (object instanceof $) {
            $object = object;
            scroll = $object.offset().top - 70;
        } else if ($.isNumeric(object)) {
            scroll = object;
        } else {
            $object = $('body');
            scroll = $object.offset().top - 70;
        }

        scroll = (scroll >= 0) ? scroll : 0;
        $('body, html').animate({
            scrollTop: scroll
        }, speed);
    }

    $('a[data-scrollTo]').click(function(e) {
        var target = $(this).attr('data-scrollTo');
        scrollTo(target);
        e.preventDefault();
    });
    $('#backtotop').click(function() {
        scrollTo(0);
    });
    $('.next-section').click(function() {
        var $btn = $(this);
        var $parent = $btn.parents('section');
        var parentindex = $('section').index($parent);
        var $nextparent = $('section').eq(parentindex + 1);
        scrollTo($nextparent);
    });
    /***********************************
     Element Animation
     ************************************/
   

    function animate() {
        $('[data-animate]').each(function() {
            var $this = $(this);
            if ($this.isOnScreen()) {
                var animation = $this.attr('data-animate');
                var delay = $this.attr('data-animate-delay') ? $this.attr('data-animate-delay') : 0;
                setTimeout(function() {
                    $this.addClass('animated').addClass(animation);
                }, delay);
            }
        });
    }

   

    /* Site Audio
     ************************/
    var audio = new Audio('audio/audio.ogg', 'audio/audio.mp3');
    var $audioControl = $('#demonica-audio-control');
    var audioPlay = $audioControl.length > 0 ? true : false;
    if (audioPlay == true) {
        if (audio.canPlayType('audio/mpeg;')) {
            audioPlay = true;
            audio.type = 'audio/mpeg';
            audio.src = 'audio/audio.mp3';
        } else if (audio.canPlayType('audio/ogg;')) {
            audioPlay = true;
            audio.type = 'audio/ogg';
            audio.src = 'audio/audio.ogg';
        } else {
            audioPlay = false;
            $audioControl.remove();
        }

        if (audioPlay === true) {
            audio.play();
            audio.volume = 0.75;
            $audioControl.on('click', 'a', function(e) {
                if (audioPlay === true) {
                    audio.pause();
                    audioPlay = false;
                    $('i', $audioControl).removeClass().addClass('fa fa-play');
                } else {
                    audio.play();
                    audioPlay = true;
                    $('i', $audioControl).removeClass().addClass('fa fa-pause');
                }

                e.preventDefault();
            });
        }
    }
});