function Scrolldown() {
     window.scroll(0, 0); 
}

window.onload = Scrolldown;
/*==============================================================
    GENERAL VAR'S OBJECT
===============================================================*/
    var general_vars_object = new Object();
        //GENERAL'S
            general_vars_object.current_url = document.URL;
            general_vars_object.scroll_pos_y = $(window).scrollTop();
            general_vars_object.is_mobile = null;
            general_vars_object.timer_1 = null
            general_vars_object.audio_on_off = true;
            general_vars_object.wait_to_start_site_on_preload_complete = null;
            general_vars_object.game_canvas_get_ajax_one = true;
            general_vars_object.game_canvas_ajax = null;
            general_vars_object.game_canvas_ajax_timer = null;
            general_vars_object.game_canvas_is_playing = false;
            general_vars_object.select_char_selected = null;
            general_vars_object.secure_loader_scroll = true;
            general_vars_object.bug_test = 0;
            general_vars_object.facebook_lens_anim_timer = null;
            general_vars_object.facebook_lens_anim_frames = 0;
            general_vars_object.facebook_lens_anim_height = 0;
            general_vars_object.videoImagesLoad = null;
            general_vars_object.palace = null;
            general_vars_object.imgvideo = 0;
            general_vars_object.imgvideo_on_off = false;
            general_vars_object.size = 12;
        //NAVIGATOR'S
            general_vars_object.is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
            general_vars_object.is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
            general_vars_object.is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
            general_vars_object.is_safari = navigator.userAgent.indexOf("Safari") > -1;
            general_vars_object.is_Opera = navigator.userAgent.indexOf("Presto") > -1;
            if ((general_vars_object.is_chrome)&&(general_vars_object.is_safari)) {general_vars_object.is_safari=false;}
            //if (general_vars_object.is_safari) alert('Safari');
         //AUDIO
             general_vars_object.media_principal_music_on_finish_load = false;
             general_vars_object.media_principal_music_stop = false;
             general_vars_object.media_principal_music_video_stop = false;
             general_vars_object.media_prevent_sound_loop = true;
             general_vars_object.media_prevent_sound_loop_timer = false;
             general_vars_object.media_prevent_sound_loop_when_game_is_finish = false;


/*==============================================================
    START SKROLLR
===============================================================*/
    var skrollr_var = skrollr.init({
        edgeStrategy: 'set',
        render: function(data) {
            general_vars_object.scroll_pos_y = data.curTop;
            //console.log(general_vars_object.scroll_pos_y);
            scroll_javascript_control();
        },
        easing: {
            WTF: Math.random,
            inverted: function(p) {
                return 1-p;
            }
        }
    });

/*==============================================================
    SCROLL JAVASCRIPT CONTROL
===============================================================*/
    function scroll_javascript_control(){
        //$('.scroll_posicion').html(general_vars_object.scroll_pos_y);

        //GENERAL SCROLL
        if(general_vars_object.scroll_pos_y > 0 & general_vars_object.secure_loader_scroll == true){
            $('html, body').stop().animate({
                scrollTop: (0)
            }, 0);
        }
        //GET HD IMAGES
        if(general_vars_object.scroll_pos_y >= 36000 && general_vars_object.videoImagesLoad == false) {
            general_vars_object.videoImagesLoad = true;
            $('.video .sequence:not(.titlesVideo,.imgvideo,.char,.titleEnd, .scroll_heaven)').each(function(){
                $(this).append('<img src="'+$(this).data('src')+'"/>');
            });
            $('.video .sequence.imgvideo img').each(function(){
                $(this).attr('src',$(this).data('src'));
            });
        }
        if(general_vars_object.scroll_pos_y > 10000 && general_vars_object.palace == false) {
            general_vars_object.palace = true;
            $('.palacio_broken, .cloud_top').each(function(){
                $(this).append('<img src="'+$(this).data('src')+'"/>');
            });

        }
        //FOOTER
        if (general_vars_object.scroll_pos_y > 10000) {
            $('.facebook_lens').fadeOut(400);
            $('footer').addClass('footer');
            $('footer').css("background", "url(images/14_happy_year/intacto_bar2.png) no-repeat scroll 0 0 transparent");
            //$('footer .facebook_link, footer .twitter_link, footer .web_link').css("background", "url(images/14_happy_year/buttons2.png) no-repeat scroll 0 0 transparent");
        } else {
            $('footer').removeClass('footer');
            $('footer').css("background", "url(images/intacto_bar.png) no-repeat scroll 0 0 transparent");
            //$('footer .facebook_link, footer .twitter_link, footer .web_link').css("background", "url(images/buttons.png) no-repeat scroll 0 0 transparent");
        }


        //AUDIO SCROLL CONTROL
        if(general_vars_object.audio_on_off == true & general_vars_object.media_principal_music_on_finish_load == true & general_vars_object.game_canvas_is_playing == false){

            //BACKGROUND MUSIC
            if(general_vars_object.scroll_pos_y >= 0 & general_vars_object.scroll_pos_y < 84900 ){
                $("#01_Loop").jPlayer("play");
                $("#08_RevengeSound").jPlayer("stop");
                $("#09_loop").jPlayer("stop");
                $("#09_tema").jPlayer("stop");
            }
            if(general_vars_object.scroll_pos_y >= 84900 & general_vars_object.scroll_pos_y < 115000 & general_vars_object.media_prevent_sound_loop_when_game_is_finish == false ){
                $("#01_Loop").jPlayer("stop");
                $("#08_RevengeSound").jPlayer("play");
                $("#09_loop").jPlayer("stop");
                $("#09_tema").jPlayer("stop");
            }
            if(general_vars_object.scroll_pos_y > 115000 & general_vars_object.scroll_pos_y < 126000){
                $("#01_Loop").jPlayer("stop");
                $("#08_RevengeSound").jPlayer("stop");
                $("#09_loop").jPlayer("play");
                $("#09_tema").jPlayer("stop");
                $('.facebook_lens').css('display','none');
            }
            if(general_vars_object.scroll_pos_y > 126000){
                $("#01_Loop").jPlayer("stop");
                $("#08_RevengeSound").jPlayer("stop");
                $("#09_loop").jPlayer("stop");
                $("#09_tema").jPlayer("play");
            }

            //SOUNDS
            if(!general_vars_object.is_mobile){
                if(general_vars_object.scroll_pos_y > 3800 & general_vars_object.scroll_pos_y < 4100 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#02_ZoomOutKing").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 5560 & general_vars_object.scroll_pos_y < 5700 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#03_coin1").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 5850 & general_vars_object.scroll_pos_y < 6000 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#03_coin2").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 15700 & general_vars_object.scroll_pos_y < 16000 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#04_FlatCrowd").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 30450 & general_vars_object.scroll_pos_y < 30750 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#05_Thunder1").jPlayer("stop");
                    $("#05_Thunder1").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 33500 & general_vars_object.scroll_pos_y < 33900 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#05_Thunder2").jPlayer("stop");
                    $("#05_Thunder2").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 42000 & general_vars_object.scroll_pos_y < 42600 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#06_CrowdWin").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 74500 & general_vars_object.scroll_pos_y < 74700 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_Crush").jPlayer("stop");
                    $("#07_Crush").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 75400 & general_vars_object.scroll_pos_y < 75600 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_RobotArm").jPlayer("stop");
                    $("#07_RobotArm").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 77500 & general_vars_object.scroll_pos_y < 77700 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_Crush2").jPlayer("stop");
                    $("#07_Crush2").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 78400 & general_vars_object.scroll_pos_y < 78600 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_RobotArm2").jPlayer("stop");
                    $("#07_RobotArm2").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 80550 & general_vars_object.scroll_pos_y < 80750 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_Crush3").jPlayer("stop");
                    $("#07_Crush3").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 81400 & general_vars_object.scroll_pos_y < 81600 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_RobotArm3").jPlayer("stop");
                    $("#07_RobotArm3").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 83550 & general_vars_object.scroll_pos_y < 83750 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_Crush4").jPlayer("stop");
                    $("#07_Crush4").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 84400 & general_vars_object.scroll_pos_y < 84600 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#07_RobotArm4").jPlayer("stop");
                    $("#07_RobotArm4").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 86000 & general_vars_object.scroll_pos_y < 86500 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#08_March").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 104100 &  general_vars_object.scroll_pos_y < 104500 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#08_March").jPlayer("stop");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 129000 & general_vars_object.scroll_pos_y < 131040 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#09_Shouts").jPlayer("stop");
                    refresh_media_prevent_sound_loop();
                }
                if(general_vars_object.scroll_pos_y > 131040 & general_vars_object.scroll_pos_y < 131540 & general_vars_object.media_prevent_sound_loop == true){
                    general_vars_object.media_prevent_sound_loop = false;
                    $("#09_Shouts").jPlayer("play");
                    refresh_media_prevent_sound_loop();
                }
            }

        }

        //FINAL IMG VIDEO
        if(general_vars_object.scroll_pos_y > 141200 & general_vars_object.imgvideo_on_off == false){
            general_vars_object.imgvideo_on_off = true;

            general_vars_object.imgvideo_timer = setInterval(function() {
                if(general_vars_object.imgvideo < general_vars_object.size){
                    $(".imgvideo img").eq(general_vars_object.imgvideo).css('display','block');
                    $(".imgvideo img").eq(general_vars_object.imgvideo-1).css('display','none');

                    general_vars_object.imgvideo++;
                }else{
                    general_vars_object.imgvideo = 0;

                    $(".imgvideo img").eq(general_vars_object.imgvideo).css('display','block');
                    $(".imgvideo img").eq(general_vars_object.imgvideo-1).css('display','none');
                    general_vars_object.imgvideo++;
                }
            }, 180);
        }
        if(general_vars_object.scroll_pos_y <= 141200 & general_vars_object.imgvideo_on_off == true){
            general_vars_object.imgvideo_on_off = false;
            clearTimeout(general_vars_object.imgvideo_timer);
            $('.imgvideo img').hide();
            $('.imgvideo img:eq(0)').show();
        }
    }





function refresh_media_prevent_sound_loop(){
    clearTimeout(general_vars_object.media_prevent_sound_loop_timer);
    general_vars_object.media_prevent_sound_loop_timer = setTimeout(function () {
        general_vars_object.media_prevent_sound_loop = true;
    }, 150);
}

$(document).ready(function() {
    //MOBILE
        //DETECT IF MOBILE
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ){
            general_vars_object.is_mobile = true;
        }
        else {
            general_vars_object.is_mobile = false;
        }
        if(general_vars_object.is_mobile){
            $(".select_player_text img").attr( "src", "images/texts/cartel_game_mobile.png");
        }
        //IF MOBILE
            if(general_vars_object.is_mobile){
                $("footer, .want_more_btn").css({
                    'transform': 'translate3d(0px, -20px, 1px) scale3d(1.4, 1.4, 1.4)',
                    '-webkit-transform': 'translate3d(0px, -20px, 1px) scale3d(1.4, 1.4, 1.4)',
                    '-moz-transform': 'translate3d(0px, -20px, 1px) scale3d(1.4, 1.4, 1.4)'
                });
                $(".audio_on_off").css({
                    'font-size': '30px'
                });
            }
        //ON ORIENTATION CHANGE
            if (general_vars_object.is_mobile == true){
                var viewport_attr_timer;
                function get_orientation_on_ini()
                {
                    switch(window.orientation)
                    {
                        case -90:
                        case 90:
                            //alert($(window).width());
                            $(".meta_viewport").attr( "content", "width=1920, initial-scale=0.3,  minimum-scale=0.3, maximum-scale=0.3");
                            $('.warning_mobile_message').css('display','none');
                            $("#wrapper, footer, section,.sequence, .scroll_home, .chrome_optimized, .skrollable, .audio_on_off").css({
                                'opacity': '1',
                                'visibility':'visible'
                            });
                            break;
                        default:
                            //alert($(window).width());
                            //$(".meta_viewport").attr( "content", "width=device-width");
                            $(".meta_viewport").attr( "content", "width=device-width, initial-scale=0.3,  minimum-scale=0.3, maximum-scale=0.3");
                            $('.warning_mobile_message').css('display','block');
                            $("#wrapper, footer, section, .sequence, .scroll_home, .chrome_optimized, .skrollable, .audio_on_off").css({
                                'opacity': '0',
                                'visibility':'hidden'
                            });
                            //alert('Please Turn horizontally (Landscape) your device.');
                            break;
                    }
                }
                get_orientation_on_ini();

                function get_orientation_on_ini_change()
                {
                    switch(window.orientation)
                    {
                        case -90:
                        case 90:
                            //alert($(window).width());
                            $(".meta_viewport").attr( "content", "width=1920, initial-scale=0.3,  minimum-scale=0.3, maximum-scale=0.3");
                            $('.warning_mobile_message').css('display','none');
                            $("#wrapper, footer, section,.sequence, .scroll_home, .chrome_optimized, .skrollable, .audio_on_off").css({
                                'opacity': '1',
                                'visibility':'visible'
                            });
                            location.reload();
                            break;
                        default:
                            //alert($(window).width());
                            //$(".meta_viewport").attr( "content", "width=device-width");
                            $(".meta_viewport").attr( "content", "width=device-width, initial-scale=0.3,  minimum-scale=0.3, maximum-scale=0.3");
                            $('.warning_mobile_message').css('display','block');
                            $("#wrapper, footer, section, .sequence, .scroll_home, .chrome_optimized, .skrollable, .audio_on_off").css({
                                'opacity': '0',
                                'visibility':'hidden'
                            });
                            //alert('Please Turn horizontally (Landscape) your device.');
                            break;
                    }
                }

                window.addEventListener('orientationchange', get_orientation_on_ini_change);
            }


    $("html").niceScroll({styler:"fb",cursorcolor:"#da0000"});
    $('.nicescroll-rails').css('display','none');

    //FACEBOOK LENS OUT
        $(".facebook_lens img").hover(function() {
            $('.facebook_lens').fadeOut(400);
        });

    /*==============================================================
     MEDIA LOADER
     ===============================================================*/
        $(function(){
        window.media_loader = function media_loader() {
            general_vars_object.media_principal_music_on_finish_load = true;
            if (general_vars_object.is_safari){
                $("#01_Loop").jPlayer({
                    ready: function () {
                        if(general_vars_object.audio_on_off == true){
                            $(this).jPlayer("setMedia", {
                                mp3:"media/mp3/01_Loop.mp3"
                            }).jPlayer("play");
                        } else {
                            $(this).jPlayer("setMedia", {
                                mp3:"media/mp3/01_Loop.mp3"
                            });
                        }
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: true,
                    wmode: "window"
                });

                $("#02_ZoomOutKing").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/02_ZoomOutKing.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#03_coin1").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/03_coin1.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#03_coin2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/03_coin2.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#04_FlatCrowd").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/04_FlatCrowd.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#05_Thunder1").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/05_Thunder1.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#05_Thunder2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/05_Thunder2.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#06_CrowdWin").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/06_CrowdWin.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_Crush.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_RobotArm.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_Crush2.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_RobotArm2.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush3").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_Crush3.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm3").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_RobotArm3.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush4").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_Crush4.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm4").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/07_RobotArm4.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#08_RevengeSound").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/08_RevengeSound.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: true,
                    wmode: "window"
                });

                $("#08_March").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/08_March.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#09_Shouts").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/09_Shouts.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: false,
                    wmode: "window"
                });

                $("#09_loop").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/09_loop.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: true,
                    wmode: "window"
                });

                $("#09_tema").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            mp3:"media/mp3/09_tema.mp3"
                        });
                    },
                    swfPath: "js/",
                    supplied: "mp3",
                    loop: true,
                    wmode: "window"
                });
            }
                else
            {
                $("#01_Loop").jPlayer({
                    ready: function () {
                        if(general_vars_object.audio_on_off == true){
                            $(this).jPlayer("setMedia", {
                                oga:"media/ogg/01_Loop.ogg"
                            }).jPlayer("play");
                        } else {
                            $(this).jPlayer("setMedia", {
                                oga:"media/ogg/01_Loop.ogg"
                            });
                        }
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: true,
                    wmode: "window"
                });

                $("#02_ZoomOutKing").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/02_ZoomOutKing.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#03_coin1").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/03_coin1.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#03_coin2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/03_coin2.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#04_FlatCrowd").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/04_FlatCrowd.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#05_Thunder1").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/05_Thunder1.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#05_Thunder2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/05_Thunder2.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#06_CrowdWin").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/06_CrowdWin.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_Crush.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_RobotArm.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_Crush2.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm2").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_RobotArm2.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush3").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_Crush3.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm3").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_RobotArm3.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_Crush4").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_Crush4.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#07_RobotArm4").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/07_RobotArm4.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#08_RevengeSound").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/08_RevengeSound.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: true,
                    wmode: "window"
                });

                $("#08_March").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/08_March.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#09_Shouts").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/09_Shouts.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: false,
                    wmode: "window"
                });

                $("#09_loop").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/09_loop.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: true,
                    wmode: "window"
                });

                $("#09_tema").jPlayer({
                    ready: function () {
                        $(this).jPlayer("setMedia", {
                            oga:"media/ogg/09_tema.ogg"
                        });
                    },
                    swfPath: "js/",
                    supplied: "oga",
                    loop: true,
                    wmode: "window"
                });
            }


        }
    });

    /*==============================================================
        JQUERY SCROLL CONTROL
    ===============================================================*/


    /*==============================================================
        AUDIO ON  - OFF
    ===============================================================*/
        $(document).on("click", ".audio_on", function (e) {
            e.preventDefault();
            if(general_vars_object.audio_on_off == true){
              general_vars_object.audio_on_off = false;
              $("#01_Loop, #02_ZoomOutKing, #03_coin1, #03_coin2, #04_FlatCrowd, #05_Thunder1, #05_Thunder2, #06_CrowdWin, #07_Crush, #07_RobotArm, #07_Crush2, #07_RobotArm2, #07_Crush3, #07_RobotArm3, #07_Crush4, #07_RobotArm4, #08_March, #08_RevengeSound, #09_Shouts, #09_loop, #09_tema").jPlayer("option", "volume", '0');
              $('.audio_on_off').removeClass('audio_on');
              $('.audio_on_off').addClass('audio_off');
              $('.audio_on_off').html('Sound OFF');
            }
        });
        $(document).on("click", ".audio_off", function (e) {
            e.preventDefault();
            if(general_vars_object.audio_on_off == false){
                general_vars_object.audio_on_off = true;
                $("#01_Loop, #02_ZoomOutKing, #03_coin1, #03_coin2, #04_FlatCrowd, #05_Thunder1, #05_Thunder2, #06_CrowdWin, #07_Crush, #07_RobotArm, #07_Crush2, #07_RobotArm2, #07_Crush3, #07_RobotArm3, #07_Crush4, #07_RobotArm4, #08_March, #08_RevengeSound, #09_Shouts, #09_loop, #09_tema").jPlayer("option", "volume", '100');
                $('.audio_on_off').removeClass('audio_off');
                $('.audio_on_off').addClass('audio_on');
                $('.audio_on_off').html('Sound ON');
            }

        });
    /*==============================================================
        Load Game
    ===============================================================*/
        if(general_vars_object.is_mobile == false){
                $( ".realism a" )
                    .mouseenter(function() {
                        $(".hover_realism").stop().animate({opacity: 1}, 100);
                        $(".anim3").stop().animate({left: "-30px"}, 400);
                        $(".realism-anim").stop().css("display", "none");
                        $(".realism-animate").stop().css({visibility:"visible"});
                    })
                    .mouseleave(function() {
                        $(".hover_realism").stop().animate({opacity: 0}, 100);
                        $(".anim3").stop().animate({left: "0px"}, 400);
                        $(".realism-animate").stop().css({visibility:"hidden"});
                        $(".realism-anim").stop().css("display", "block");
                    });

                $( ".flat a" )
                    .mouseenter(function() {
                        $(".hoverflat").stop().animate({opacity: 1}, 100);
                        $(".anim1").stop().animate({left: "30px"}, 400);
                        $(".flat-anim").stop().css("display", "none");
                        $(".flat-animate").stop().css({visibility:"visible"});
                    })
                    .mouseleave(function() {
                        $(".hoverflat").stop().animate({opacity: 0}, 100);
                        $(".anim1").stop().animate({left: "0px"}, 400);
                        $(".flat-animate").stop().css({visibility:"hidden"});
                        $(".flat-anim").stop().css("display", "block");
                    });

                $(".flat-animate, .realism-animate").jani({ frameWidth: 300, frameHeight: 436, speed: 125, totalFrames: 8 });
                $(".flat-animate, .realism-animate").jani.play();


                $(document).on("click", ".init_select_player", function () {
                    if(general_vars_object.game_canvas_get_ajax_one == true){
                        general_vars_object.game_canvas_get_ajax_one = false;

                        general_vars_object.game_canvas_is_playing = true;

                        $("#01_Loop, #02_ZoomOutKing, #03_coin1, #03_coin2, #04_FlatCrowd, #05_Thunder1, #05_Thunder2, #06_CrowdWin, #07_Crush, #07_RobotArm, #07_Crush2, #07_RobotArm2, #07_Crush3, #07_RobotArm3, #07_Crush4, #07_RobotArm4, #08_March, #09_Shouts, #09_loop, #09_tema").jPlayer("stop");

                        general_vars_object.bug_test ++;

                        general_vars_object.select_char_selected = $(this).attr('select_char');
                        $(".canvas_container").css('z-index', '999999');
                        $(".canvas_container").css('display', 'block');

                        history.pushState(1, 'Flat Vs Realism', general_vars_object.current_url + 'Game_Start?select_char=' + general_vars_object.select_char_selected);

                        general_vars_object.game_canvas_ajax = $.ajax({
                            type: 'POST',
                            url: 'game.html',
                            cache: false,
                            success: function (data) {
                                $('.canvas_container').append('<div class="canvas_game"></div>');
                                $(".canvas_game").html(data);
                                $(".canvas_container .canvas_game:eq(1)").remove();

                                clearTimeout(general_vars_object.game_canvas_ajax_timer );
                                general_vars_object.game_canvas_ajax_timer  = setTimeout(function () {
                                    $(".wrapper").css('display', 'none');
                                }, 3000);
                            },
                            error: function(jqXHR, exception) {
                                if (jqXHR.status === 0) {
                                    console.log('Not connect.\n Verify Network.');
                                } else if (jqXHR.status == 404) {
                                    console.log('Requested page not found. [404]');
                                } else if (jqXHR.status == 500) {
                                    console.log('Internal Server Error [500].');
                                } else if (exception === 'parsererror') {
                                    console.log('Requested JSON parse failed.');
                                } else if (exception === 'timeout') {
                                    console.log('Time out error.');
                                } else if (exception === 'abort') {
                                    console.log('Ajax request aborted.');
                                } else {
                                    console.log('Uncaught Error.\n' + jqXHR.responseText);
                                }
                            }
                        });

                        $(this).find(".loader").fadeIn(1000);
                        setTimeout(function() {
                            $(".loader").fadeOut(800);
                        }, 20000);
                    }

                });

           }


    /*==============================================================
        VIDEO
    ===============================================================*/
        var $doc = $(document);
        var $win = $(window);

        // dimensions - we want to cache them on window resize
        var windowHeight, windowWidth;
        var fullHeight, scrollHeight;
        var streetImgWidth = 1920, streetImgHeight = 1080;
        calculateDimensions();

        var currentPosition = -1, targetPosition = 0;
        var $videoContainer = $('.sequence');
        var video = $('.sequence > img')[0];

        function calculateDimensions() {
            windowWidth = $win.width();
            windowHeight = $win.height();
            fullHeight = $('.video').height();
            scrollHeight = fullHeight - windowHeight;
        }

        function handleResize() {
            calculateDimensions();
            resizeBackgroundImage();
            handleScroll();
        }

        function handleScroll() {
            targetPosition = $win.scrollTop() / scrollHeight;
        }

        function resizeBackgroundImage(){
            // get image container size
            var scale = Math.max( windowHeight/streetImgHeight , windowWidth/streetImgWidth );
            var width = scale * streetImgWidth , height = scale * streetImgHeight;
            var left = (windowWidth-width)/2, top = (windowHeight-height)/2;
            $videoContainer
                .width(width).height(height)
                .css('position','fixed')
                .css('left',left+'px')
                .css('top',top+'px');
        }

        $win.resize( handleResize );

        handleResize();





    /*==============================================================
        LOADER
    ===============================================================*/
         $(".wrapper").queryLoader2({
            barColor: "#6e6d73",
            backgroundColor: " ",
            percentage: true,
            barHeight: false,
            minimumTime: 100,
            onComplete : function() {
                //INIT
                //LOADER MEDIA START
                    media_loader();
                //SOUND ON - OFF
                    $('.audio_on_off').fadeIn('fast');

                $("html, body").animate({scrollTop: "0px"}, 1);
                general_vars_object.secure_loader_scroll = false;
                $('.video .sequence:not(.titlesVideo,.imgvideo,.char,.titleEnd, .scroll_heaven) img').remove();
                $('.video .sequence.imgvideo img').attr('src','');
                $('.palacio_broken img, .cloud_top img').remove();
                //INIT SCROLL BAR
                    $('.nicescroll-rails').fadeIn('fast');
                    $('#ascrail2000-hr div').remove();

            }
        });

});

//STOP MUSIC SITE IN GAME BATTLE INIT
function stop_music_pre_load() {
    $(".jplayer_script_loc").remove();
    $("body").append('<script class="jplayer_script_loc" src="js/jquery.jplayer.min.js"></script>');
    $("#08_RevengeSound").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                oga:"media/ogg/08_RevengeSound.ogg",
                aac:"media/aac/08_RevengeSound.aac"
            });
        },
        swfPath: "js/",
        supplied: "oga, aac",
        loop: true,
        wmode: "window"
    });
    $("#08_RevengeSound").jPlayer("stop");
    $(".jplayer_script_loc").remove();
}
//CLOSE AND SCROOLL TO CANVAS GAME 115000
    function remove_canvas_game() {
        $(".canvas_container").css('z-index', '-1');
        $(".canvas_container").css('display', 'none');
        $(".wrapper").css('display', 'block');
        $(".canvas_game, .canvas_game_img_peloads").remove();

        //REFRESH SITE MEDIA
            general_vars_object.media_prevent_sound_loop_when_game_is_finish = true;
            general_vars_object.game_canvas_is_playing = false;
            $(".jplayer_script_loc").remove();
            $("body").append('<script class="jplayer_script_loc" src="js/jquery.jplayer.min.js"></script>');
            media_loader();

        general_vars_object.game_canvas_get_ajax_one = true;
        general_vars_object.game_canvas_ajax = null;
        general_vars_object.select_char_selected = null;
        history.pushState(1, 'Flat Vs Realism', general_vars_object.current_url);

        $('html, body').stop().animate({
            scrollTop: (115010)
        }, 1000, function(){
            general_vars_object.media_prevent_sound_loop_when_game_is_finish = false;
        });
    }





