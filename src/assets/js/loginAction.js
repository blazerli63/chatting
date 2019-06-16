import $ from 'jquery';
import Vue from 'vue';
// import Vuex from 'vuex';
import axios from 'axios';
// Vue.use(axios);
Vue.prototype.$axios = axios;
// Vue.use(Vuex);


var queryUrl = 'http://10.10.28.8:9090/index.php';
// var queryUrl = 'http://www.duck07.com/index.php';
var info = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36";
var packageId = 'packageId';
var packageVal = '';

function getPackageId(){
    packageVal = localStorage.getItem(packageId)
    if(packageVal == null){
        localStorage.setItem(packageId,1);
        return 1;
    }
    return packageVal;
}

function setPackageId(){
    packageVal = localStorage.getItem(packageId);
    if(packageVal == null){
        localStorage.setItem(packageId,1);
    }else{
        localStorage.setItem(packageId,packageVal++);
    }
}

function loginFun(userName,password){
    var action = '?action=api.passport.passwordLogin&body_format=json&lang=1';
    var data = {'action':'api.passport.passwordLogin','body':{'@type':'type.googleapis.com/site.ApiPassportPasswordLoginRequest','loginName':userName,'password':password},'header':{'_4':queryUrl,'_8':'1','_6':info},'packageId':getPackageId()};

    var response = syncQueryFun(action,data);
    var res = JSON.parse(response);
    var preSessionId = res.body.preSessionId;
    return preSessionId;
}

function loginSession(preSessionId,userName){
    var action = '?action=api.site.login&body_format=json';
    var data = {"action":"api.site.login","body":{"@type":"type.googleapis.com/site.ApiSiteLoginRequest","preSessionId":preSessionId,"loginName":userName,"isRegister":false,"thirdPartyKey":""},"header":{"_4":"./index.php","_8":"1","_6":info},"packageId":getPackageId()};
    var response = syncQueryFun(action,data);
    var res = JSON.parse(response);
    var sessionId = res.body.sessionId;
    return sessionId;
}

function getSiteConfig(sessionId){
    var action = '?action=api.site.config&body_format=json&lang=1';
    var data = {"action":"api.site.config","body":{"@type":"type.googleapis.com/site.ApiSiteConfigRequest"},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = syncQueryFun(action,data);
    console.log(response);
    return response;

}

function getGroupList(sessionId){
    var action = '?action=api.group.list&body_format=json&lang=1';
    var data = {"action":"api.group.list","body":{"@type":"type.googleapis.com/site.ApiGroupListRequest","offset":0,"count":200},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = syncQueryFun(action,data);
    console.log(response);
    return response;
}

function getFriendList(sessionId){
    var action = '?action=api.friend.list&body_format=json&lang=1';
    var data = {"action":"api.friend.list","body":{"@type":"type.googleapis.com/site.ApiFriendListRequest","offset":0,"count":200},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = syncQueryFun(action,data);
    console.log(response);
    return response;
}

function getUserProfile(sessionId){
    var action = '?action=api.user.profile&body_format=json&lang=1';
    var data = {"action":"api.user.profile","body":{"@type":"type.googleapis.com/site.ApiUserProfileRequest"},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = syncQueryFun(action,data);
    console.log(response);
    return response;
}

function getPluginList(sessionId){
    var action = '?action=api.plugin.list&body_format=json&lang=1';
    var data = {"action":"api.plugin.list","body":{"@type":"type.googleapis.com/site.ApiPluginListRequest","offset":0,"count":200,"usageType":"PluginUsageIndex"},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = syncQueryFun(action,data);
    console.log(response);
    return response;
}

function getCtsSync(sessionId){
    var action = '?action=im.cts.sync&body_format=json&lang=1';
    var data = {"action":"im.cts.sync","body":{"@type":"type.googleapis.com/site.ImCtsSyncRequest","u2Count":200,"groupCount":200},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = queryFun(action,data);
    console.log(response);
    return response;
}

function getFriendProfile(sessionId,userId){
    var action = '?action=api.friend.profile&body_format=json&lang=1';
    var data = {"action":"api.friend.profile","body":{"@type":"type.googleapis.com/site.ApiFriendProfileRequest","userId":userId},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = queryFun(action,data);
    console.log(response);
    return response;
}

function getCtsMessage(sessionId,fromUserId,roomType,toUserId,msgId,timeServer){
    var action = '?action=api.friend.profile&body_format=json&lang=1';
    var data = {"action":"im.cts.message","body":{"@type":"type.googleapis.com/site.ImCtsMessageRequest","message":{"fromUserId":fromUserId,"roomType":roomType,"toUserId":toUserId,"msgId":msgId,"timeServer":timeServer,"text":{"body":"aaaaaa"},"type":"MessageText"}},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = queryFun(action,data);
    console.log(response);
    return response;
}

function getFriendUpdate(sessionId,userId){
    var action = '?action=api.friend.update&body_format=json&lang=1';
    // {"action":"api.friend.update","body":{"@type":"type.googleapis.com/site.ApiFriendUpdateRequest","userId":"0f90e7c10b57490838f2b1bea6d4583669e5d12f","values":[{"type":"ApiFriendUpdateIsMute","isMute":true}]},"header":{"_3":"a584d5a7-8e87-4dc8-b0bb-66df68a4aed8","_4":"http://localhost:9090/index.php","_8":"1","_6":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"},"packageId":52}
    var data = {"action":"api.friend.update","body":{"@type":"type.googleapis.com/site.ApiFriendUpdateRequest","userId":userId,"values":[{"type":"ApiFriendUpdateRemark","remark":"test123"}]},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = queryFun(action,data);
    console.log(response);
    return response;
}

function funFriendDelete(sessionId,toUserId){
    var action = '?action=api.friend.delete&body_format=json&lang=1';
    var data = {"action":"api.friend.delete","body":{"@type":"type.googleapis.com/site.ApiFriendDeleteRequest","toUserId":toUserId},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = queryFun(action,data);
    console.log(response);
    return response;
}

function funAddFriendApply(sessionId,toUserId,queryStr){
    var action = '?action=api.friend.apply&body_format=json&lang=1';
    var data = {"action":"api.friend.apply","body":{"@type":"type.googleapis.com/site.ApiFriendApplyRequest","toUserId":toUserId,"greetings":queryStr},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":getPackageId()};
    var response = queryFun(action,data);
    console.log(response);
    return response;
}

function funCtsUpdate(sessionId){
    var action = '?action=im.cts.updatePointer&body_format=json&lang=1';
    var data = {"action":"im.cts.updatePointer","body":{"@type":"type.googleapis.com/site.ImCtsUpdatePointerRequest","u2Pointer":"9","groupsPointer":{}},"header":{"_3":sessionId,"_4":queryUrl,"_8":"1","_6":info},"packageId":58};
    var response = queryFun(action,data);
    console.log(response);
    return response;
}

function queryFun(url,Strdata){
    var api = queryUrl + url;
    let postData = JSON.stringify(Strdata);
    axios.post(api,postData).then((response)=>{
        setPackageId();
        console.log(response);
    },(err)=>{
        console.log(err);
    });
}

function syncQueryFun(url,Strdata){
    
    var api = queryUrl + url;
    let postData = JSON.stringify(Strdata);
    var result ='';
    $.ajax({
        type : "post",
        url : api,
        async : false,
        data: postData,
        success : function(resp){
           result = resp;
           setPackageId();
        }
    });
    return result;
}


export{
    loginFun,
    getPackageId,
    setPackageId,
    loginSession,
    getSiteConfig,
    getGroupList,
    getFriendList,
    getUserProfile,
    getPluginList,
    getCtsSync,
    getFriendProfile,
    getCtsMessage,
    getFriendUpdate,
    funFriendDelete,
    funAddFriendApply,
    funCtsUpdate
}