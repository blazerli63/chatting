import $ from 'jquery';
import {handleClientSendRequest} from './zalyClient.js';
import {getSiteConfigKey,getWebsocketGW} from './zalyKey.js';

var wsObj = "";
function getWsObj(){
    if(wsObj == null){
        wsObj = "";
    }
    return wsObj;
}

var landingPageUrl = "";
function getLandingPageUrl(){
    if(landingPageUrl){
        landingPageUrl = "";
    }
    return landingPageUrl;
}

var config  = localStorage.getItem(getSiteConfigKey());
function getConfig(){
    if(config == null || config == undefined){
        config = localStorage.getItem(getSiteConfigKey());
    }
    return config;
}

var webSocketGw = "";
var enableWebsocketGw = "";
function getEnableWebsocketGw(){
    webSocketGw = getWebsocketGW();
    enableWebsocketGw = localStorage.getItem(webSocketGw);
    if(enableWebsocketGw == null || enableWebsocketGw == undefined){
        enableWebsocketGw = false;
        localStorage.setItem(webSocketGw,"false");
    }
    return enableWebsocketGw;
}

var wsUrlSuffix = "?body_format=json";

var packageId = localStorage.getItem(this.PACKAGE_ID);

function getPackageId(){
    var packageId = localStorage.getItem(this.PACKAGE_ID);

    if(packageId == null) {
        localStorage.setItem(PACKAGE_ID, 1);
    }
    return packageId;
}

var protocol = window.location.protocol;
var host = window.location.host;
// var host = '10.10.28.8:9090';
var pathname = window.location.pathname;
var originDomain = protocol+"//"+host+pathname;

// $(":input").attr("autocapitalize", "off");

function ZalyIm(params)
{
    var config = params.config;
    localStorage.setItem(siteConfigKey, JSON.stringify(config));

    DefaultTitle = config.name;
    document.title = config.name;
    var serverAddressForApi = config.serverAddressForApi;
    localStorage.setItem(apiUrl, serverAddressForApi);
    var loginPluginProfile = params.loginPluginProfile;
    var webSocketGwDomain = config[siteConfigKeys.serverAddressForIM];
    if(webSocketGwDomain == undefined || webSocketGwDomain == null || webSocketGwDomain.length<1 || webSocketGwDomain.indexOf("http://") > -1 ||  webSocketGwDomain.indexOf("https://") > -1) {
        localStorage.setItem(getWebsocketGW(), "false");////是否开启    console.log("webSocketGwDomain ==" + webSocketGwDomain);
            setInterval(function (args) {
                try{
                    syncMsgForRoom();
                }catch (error) {
                }
            }, 1000);
    } else {
        var webSocketGw = webSocketGwDomain + wsUrlSuffix;
        if(webSocketGwDomain.length > 1) {
            localStorage.setItem(websocketGW, "true");////是否开启
            localStorage.setItem(websocketGWUrl, webSocketGw);
            try{
                auth();
            }catch(error) {

            }
        }
    }
    localStorage.setItem(siteLoginPluginKey, JSON.stringify(loginPluginProfile))
    landingPageUrl = loginPluginProfile.landingPageUrl;

    try{
        displayFrontPage();
    }catch (error) {

    }

}


function requestSiteConfig(callback)
{
    var action  = "api.site.config";
    var reqData = {};
    handleClientSendRequest(action, reqData, callback);
}

requestSiteConfig(ZalyIm);

export{
    ZalyIm,
    requestSiteConfig,
    getWsObj,
    getLandingPageUrl,
    getConfig,
    getEnableWebsocketGw,
    getPackageId
}