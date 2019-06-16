// import $ from 'jquery';
import {getIsRegister} from './base.js';
import {handleClientSendRequest,handleClientReceivedMessage} from './zalyClient.js';
import {zalyjsLoginSuccess,zalyjsApiSiteLogin} from '../sdk/zalyjsNative.js';


///更新邀请码，并且登录site
function failedCallBack(result) {
    try{
        // hideLoading();
        if(result.hasOwnProperty("errorInfo")) {
            alert(result.errorInfo);
        }else {
            if(result != undefined && result !='') {
                alert(result);
            }
        }
    }catch (error){
    }
}

function handlePassportPasswordUpdateInvationCode(results)
{
    var isRegister = true;
    var preSessionId = results.preSessionId;
    cancelLoadingBySelf();
    // zalyjsLoginSuccess(loginName, preSessionId, isRegister, "", failedCallBack);
    zalyjsLoginSuccess(getName(), preSessionId, isRegister, "", failedCallBack);
}

// var loginName_='admin';
// var loginPassword_='admin123';

var name='';
var password='';
function setName(loginName){
    name = loginName;
}

function getName(){
    return name;
}

function setPassword(loginPassword){
    password = loginPassword;
}

function getPassword(){
    return password;
}

//登录
function loginPassport(loginName,loginPassword)
{
    setName(loginName);
    setPassword(loginPassword);
    apiPassportPasswordLogin(loginName,loginPassword,handleApiPassportPasswordLogin);
}

function apiPassportPasswordLogin(loginName,loginPassword,callback)
{
    var action = "api.passport.passwordLogin";
    var name =  loginName ;
    var password =  loginPassword ;

    var reqData = {
        loginName:name,
        password:password,
    };
    handleClientSendRequest(action, reqData, callback);
}


function displayInvitationCode()
{
    hideLoading();
    if(enableInvitationCode != "1") {
        if(isRegister == true) {
            return false;
        }
        isRegister = true;
        // zalyjsLoginSuccess(loginName, preSessionId, isRegister, "", loginFailed);
    } else {
        $(".zaly_login_by_pwd")[0].style.display = "none";
        $(".zaly_site_update-invitecode")[0].style.display = "block";
    }
}

function loginFailNeedRegister()
{
    // displayInvitationCode();
}

function handleApiPassportPasswordLogin(results)
{
    var preSessionId = results.preSessionId;
    // zalyjsLoginSuccess(loginName, preSessionId, isRegister, "", loginFailNeedRegister);
    zalyjsLoginSuccess(getName(), preSessionId, getIsRegister(), "", loginFailNeedRegister);
}




 export{
    loginPassport,
    setName,
    getName,
    setPassword,
    getPassword
 }