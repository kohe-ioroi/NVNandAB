// ==UserScript==
// @name         NicoVideo News Noview & ADBlock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ニコニコ動画のニュースを無効化し、動画再生画面の広告を全てブロックします。
// @author       Kohe_Ioroi
// @match        http://www.nicovideo.jp/watch/sm*
// @grant        none
// ==/UserScript==
(function() {
    var element = document.getElementsByClassName("MarqueeContainer");
    element[0].style.display = "none";
    setTimeout(function(){
        var MiniBannerAdContainer = document.getElementsByClassName("MiniBannerAdContainer");
        MiniBannerAdContainer[0].style.display = "none";
        var BottomContaineradContainer = document.getElementsByClassName("BottomContainer-adContainer");
        BottomContaineradContainer[0].style.display = "none";
        var SideFollowAdContainer = document.getElementsByClassName("SideFollowAdContainer");
        SideFollowAdContainer[0].style.display = "none";
        var SuperBannerAdContainer = document.getElementsByClassName("SuperBannerAdContainer");
        SuperBannerAdContainer[0].style.display = "none";},500);

})();