//Works
var host;
if (location.hostname === "investportal-ui.aplex") { host = "http://investportal-ui.aplex"; }
else { host = "http://zolotaryow.aplex.ru/invest"; }

let notiaudio = [
    new Audio(host + '/audios/chat_open.mp3'),
    new Audio(host + '/audios/chat_close.mp3')
];
const OpenChat = () => {
    window.setTimeout(function () {
        $('#chat-lightbox').removeClass('lightbox-closed');
        notiaudio[0].play();
    }, 10000);
}
const CloseChat = () => {
    var close = $('#chat-lightbox header img');

    close.click(function () {
        $('#chat-lightbox').addClass('lightbox-closed');
        notiaudio[1].play();
    });
}

const OnlineChat = () => {
    OpenChat();
    CloseChat();
}

const MarketingHeadBannerAdaptive = () => {
    let vw = $(this).width();
    let margin;
    if (vw == 1024 || vw == 1280 || vw < 1280) {
        margin = "7%";
    }
    else if (vw == 1280 || vw == 1366 || vw < 1366) {
        margin = "6%";
    }
    else if (vw == 1366 || vw == 1400 || vw < 1400) {
        margin = "6%";
    }
    else if (vw == 1400 || vw == 1600 || vw < 1600) {
        margin = "5%";
    }
    else if (vw == 1600 || vw == 1800 || vw < 1800) {
        margin = "5%";
    }
    else { margin = "5%"; }

    $('.banner-block').css("margin-left", margin);

}
const HomePageHorizontalAdaptiveLine = () => {
    let vw = $(this).width();
    let margin;
    if (vw == 1280) {
        margin = "5px";
    }
    else if (vw == 1024 || vw == 1280 || vw < 1280) {
        margin = "-2px";
    }
    else if (vw == 1280 || vw == 1366 || vw < 1366) {
        margin = "4%";
    }
    else if (vw == 1366 || vw == 1400 || vw < 1400) {
        margin = "-8%";
    }
    else if (vw == 1400 || vw == 1600 || vw < 1600) {
        margin = "-7px";
    }
    else if (vw == 1600 || vw == 1800 || vw < 1800) {
        margin = "2%";
    }
    else { margin = "2%"; }

    $('#promo > header hr').css({ "position": "relative", "top": margin });
}
const VideoPlayerUI = (player) => {
    var video = $(player).get(0);
    var watch = $('.video-player > .play img');
    var pause = $('.video-player .controls .pause');
    var sc = [$('.video-player .controls .sound'), $('.video-player .controls .nosound')];
    watch.click(function () {
        var scc;
        $(this).addClass('watching');
        video.play();
        pause.removeClass('watching');
        sc[0].removeClass('watching');

        video.volume = 1;

        sc[0].removeClass('watching');
    });


    pause.click(function () {
        watch.removeClass('watching');
        video.pause();
        pause.addClass('watching');
        sc[0].addClass('watching');
        sc[1].addClass('watching');
    });

    sc[1].click(function () {
        $(this).addClass('watching');
        sc[0].removeClass('watching');

        video.volume = 1;
    });
    sc[0].click(function () {
        $(this).addClass('watching');
        sc[1].removeClass('watching');

        video.volume = 0;

    });
}
$(document).ready(function () {
    

    //OnlineChat();
    MarketingHeadBannerAdaptive();
    HomePageHorizontalAdaptiveLine();

    $(window).resize(MarketingHeadBannerAdaptive);
    $(window).resize(HomePageHorizontalAdaptiveLine);


    


});


//Paths

const LastMenuLists = () => {
    let els = [$('#menu-image'), $('.header > #header_bottom .hb_bottom footer nav')];

    var menufont = els[1].css("font-size");

    els[0].css("font-size", menufont);
}

$(document).ready(function () {
    LastMenuLists();
    $(window).resize(LastMenuLists);

    
});