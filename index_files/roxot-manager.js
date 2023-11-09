(function (c) {
    if (isEngineInited()){
        return;
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 1;
    script.src = c.managerUrl;
    script.dataset.roxotInited = 'true';

    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);

    window.rom = window.rom || {cmd: [], icmd: []};
    window.rom.icmd = window.rom.icmd || [];
    window.rom.icmd.push(c);

    function isEngineInited(){
        return  document.querySelectorAll('[data-roxot-inited]').length;
    }
})({"publisherId":"d5578689-faf6-44b3-a2a3-a88ab66b67e9","publisher":"Shkulev media holding","adBlockMode":"main","iframeSspList":[],"managerUrl":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/common-engine.js?v=s-699ff0f0-1901-4ecd-8f53-942157a5651a","wrapperUrl":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/wrapper.js?v=s-699ff0f0-1901-4ecd-8f53-942157a5651a","placementConfigTemplate":"https:\/\/cdn.skcrtxr.com\/wrapper-builder\/placement\/__PLACEMENT_ID__?v=d-1699541519","gfsPlacementOptionsTemplate":"https:\/\/cdn.skcrtxr.com\/wrapper-builder\/gfs-placement\/__PLACEMENT_ID__?v=d-1699541519","isLanguageSpecific":false,"hostConfig":{"woman.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"wday.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"v1.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"vokrugsveta.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"ufa1.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"tolyatty.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"thegirl.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"starhit.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"psychologies.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"parents.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"nn.ru\/community":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"nn.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"ngs55.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"ngs24.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"ngs.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"maximonline.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"love.ngs.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"love.e1.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"e1.ru\/talk\/forum":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"e1.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"161.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"116.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"mydecor.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"msk1.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"marieclaire.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"ircity.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"fontanka.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"elle.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"doctorpiter.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"chita.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"93.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"76.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"72.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"29.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"74.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"63.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"59.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"45.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":false},"woman.ru\/forum\/":{"wrapperOptions":[],"isAcceptableAdsEnabled":false}},"isBrowserSpecific":false,"isOsSpecific":false,"isDeviceTypeSpecific":false,"isGeoSpecific":false,"isGetParamSpecific":false,"dynamicUrlTemplate":"","wrapperConfig":{"uMeta":{"enabled":true},"engineFileName":"common-engine.js","adfox":{"hb":{"timeout":1000}},"prebid":{"path":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/prebid.js?v=s-699ff0f0-1901-4ecd-8f53-942157a5651a"},"videojsLibs":{"path":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/video-libs.js?v=s-699ff0f0-1901-4ecd-8f53-942157a5651a"},"pageUrlVariableName":"roxotPlusPageUrl","stubVideoPath":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/video-ad?v=s-699ff0f0-1901-4ecd-8f53-942157a5651a","adfoxIntegrationType":"direct","yandexIntegrationType":"common","openRtbHost":"https:\/\/openrtb.skcrtxr.com"},"lazyLoading":[],"geoSpecificUrl":"https:\/\/geo-worker.skcrtxr.com\/api\/geo\/region","openRtbApiGetUserInfoUrl":"https:\/\/skcrtxr.com\/open-rtb-api\/get-user-bidders-info","syncCookiesUrl":"https:\/\/skcrtxr.com\/user-sync-api\/sync","monetizationStatsUrl":"https:\/\/worker.sttsmntz.ru\/stats\/format","umeUrl":"https:\/\/bidder.skcrtxr.com\/get-imp","umeCryptoUrl":"https:\/\/bidder.skcrtxr.com\/crypto\/get-imp"})