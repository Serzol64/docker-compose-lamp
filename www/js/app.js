const MarketingHeadBannerAdaptive = () => {
    let vw = $(this).width();
    let margin;
    if(vw == 1024 || vw == 1280 || vw < 1280){
        margin = "7%";
    }
    else if(vw == 1280 || vw == 1366 || vw < 1366){
        margin = "6%";
    }
    else if(vw == 1366 || vw == 1400 || vw < 1400){
        margin = "6%";
    }
    else if(vw == 1400 || vw == 1600 || vw < 1600){
        margin = "5%";
    }
    else if(vw == 1600 || vw == 1800 || vw < 1800){
        margin = "5%";
    }
    else{ margin = "5%"; }

    $('.banner-block').css("margin-left", margin);
    
}
const HomePageHorizontalAdaptiveLine = () => {
    let vw = $(this).width();
    let margin;
    if(vw == 1024 || vw == 1280 || vw < 1280){
        margin = "-10%";
    }
    else if(vw == 1280 || vw == 1366 || vw < 1366){
        margin = "-9%";
    }
    else if(vw == 1366 || vw == 1400 || vw < 1400){
        margin = "-2%";
    }
    else if(vw == 1400 || vw == 1600 || vw < 1600){
        margin = "-2%";
    }
    else if(vw == 1600 || vw == 1800 || vw < 1800){
        margin = "-8%";
    }
    else{ margin = "-8%"; }

    $('#promo > header hr').css({"position": "relative", "top": margin});
}

$(document).ready(function () {
    MarketingHeadBannerAdaptive();
    HomePageHorizontalAdaptiveLine();

    $(window).resize(MarketingHeadBannerAdaptive);
    $(window).resize(HomePageHorizontalAdaptiveLine);
});