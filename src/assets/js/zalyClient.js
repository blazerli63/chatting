import $ from 'jquery';
import {ZalyAction} from './zalyAction.js';
import {getEnableWebsocketGw} from './zalyBaseWs.js';
import {getLanguage,getHeaderSessionid,getHeaderHostUrl,getHeaderUserClientLang,getHeaderUserAgent,getPACKAGE_ID,getHeaderErrorCode,getHeaderErrorInfo,getErrorSessionCode,getErrorSiteInit} from './zalyKey.js';
import {updatePassportPasswordInvitationCode,registerAndLoginByKeyDown} from './base.js';


function handleClientSendRequest(action, reqData, callback)
{
    try {
        var requestName = ZalyAction.getReqeustName(action);
        var requestUrl  = ZalyAction.getRequestUrl(action);
        requestUrl = 'http://10.10.28.8:9090'+requestUrl;

        var body = {};
        body["@type"] = "type.googleapis.com/"+requestName;
        for(var key in reqData) {
            body[key] = reqData[key];
        }

        var sessionId = $(".session_id").attr("data");
        var header = {};

        var HeaderSessionid = getHeaderSessionid();
        var HeaderHostUrl = getHeaderHostUrl();
        var HeaderUserClientLang = getHeaderUserClientLang();
        var HeaderUserAgent = getHeaderUserAgent();
        header[HeaderSessionid] = sessionId;
        header[HeaderHostUrl] = getEnableWebsocketGw();
        header[HeaderUserClientLang] = getLanguage();
        // console.log(navigator.userAgent);
        header[HeaderUserAgent] = navigator.userAgent;
        header[HeaderUserAgent] = navigator.userAgent;
        var packageId = localStorage.getItem(getPACKAGE_ID());

        var transportData = {
            "action" : action,
            "body": body,
            "header" : header,
            "packageId" : Number(packageId),
        };

        localStorage.setItem(getPACKAGE_ID(), (Number(packageId)+1));

        var transportDataJson = JSON.stringify(transportData);
        $.ajax({
            method: "POST",
            url:requestUrl,
            data: transportDataJson,
            success:function (resp, status, request) {
                var debugInfo = request.getResponseHeader('duckchat-debugInfo');
                if(debugInfo != null) {
                    console.log("debug-info ==" + debugInfo);
                }
					console.log(resp);
				console.log(callback);
                handleClientReceivedMessage(resp, callback);
            }
        });
    } catch(e) {
        console.log(e.message);
        return false;
    }
}

function handleClientReceivedMessage(resp, callback)
{
    var HeaderErrorCode = getHeaderErrorCode();
    var HeaderErrorInfo = getHeaderErrorInfo();
    var ErrorSessionCode = getErrorSessionCode();
    var ErrorSiteInit = getErrorSiteInit();
    try{
        var result = JSON.parse(resp);
        if(result.header != undefined && result.header.hasOwnProperty(HeaderErrorCode)) {
            if(result.header[HeaderErrorCode] != "success") {

                // try{
                //     hideLoading();
                // }catch (error){
                //     console.log(error)
                // }
                if(result.header[HeaderErrorCode] == ErrorSessionCode || result.header[HeaderErrorCode] == ErrorSiteInit) {
                    console.log("resp-----"+resp);

                    localStorage.clear();
                    window.location.href = "./index.php?action=page.logout";
                    return ;
                }

                switch(result.action)
                {
                    case "api.friend.profile":
                        callback(result.body);
                        return;
                    case "api.friend.apply":
                        if(result.header[HeaderErrorCode] == errorFriendIsKey) {
                            callback("error.friend.is");
                            return;
                        }
                    case "api.group.members":
                    case "api.group.profile":
                        callback(result);
                        return;
                    default:
                        alert(result.header[HeaderErrorInfo]);
                        return;
                }

            }
        }
        if(callback instanceof Function && callback != undefined) {
            callback(result.body);
        }
    }catch (error) {
        console.log(error);
    }
}


export{
    handleClientSendRequest,
    handleClientReceivedMessage
}