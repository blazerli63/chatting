import $ from 'jquery';

var HeaderInvalid    = "_0";
var HeaderErrorCode  = "_1";
var HeaderErrorInfo  = "_2";
var HeaderSessionid  = "_3";
var HeaderHostUrl    = "_4";
var HeaderReferer    = "_5";
var HeaderUserAgent  = "_6";
var HeaderAllowCache = "_7";
var HeaderUserClientLang = "_8";
var HeaderApplicationVersion = "_10";

function getHeaderInvalid(){
    return HeaderInvalid;
}

function getHeaderErrorCode(){
    return HeaderErrorCode;
}

function getHeaderErrorInfo(){
    return HeaderErrorInfo;
}

function getHeaderSessionid(){
    return HeaderSessionid;
}

function getHeaderHostUrl(){
    return HeaderHostUrl;
}

function getHeaderReferer(){
    return HeaderReferer;
}

function getHeaderUserAgent(){
    return HeaderUserAgent;
}

function getHeaderAllowCache(){
    return HeaderAllowCache;
}

function getHeaderUserClientLang(){
    return HeaderUserClientLang;
}

function getHeaderApplicationVersion(){
    return HeaderApplicationVersion;
}

var MessageType = {
    MessageInvalid : "MessageInvalid",
    MessageNotice  : "MessageNotice",
    MessageText    : "MessageText",
    MessageImage   : "MessageImage",
    MessageAudio   : "MessageAudio",
    MessageWeb     : "MessageWeb",
    MessageWebNotice : "MessageWebNotice",
    MessageDocument:"MessageDocument",
    MessageVideo:"MessageVideo",
    MessageRecall:"MessageRecall",

    // event message start
    MessageEventFriendRequest : "MessageEventFriendRequest",
    MessageEventStatus  : "MessageEventStatus",   // -> StatusMessage
    MessageEventSyncEnd :"MessageEventSyncEnd",
};


var SetSpeakerType = {
    AddSpeaker    : "AddSpeaker",    //add new speakers
    RemoveSpeaker  : "RemoveSpeaker",    //remove old speakers
    CloseSpeaker  : "CloseSpeaker",    //close speaker function
}

var UserClientLangZH = "1";
var UserClientLangEN = "0";

var FriendRelation = {
    FriendRelationInvalid : "FriendRelationInvalid",
    FriendRelationFollow  : "FriendRelationFollow",
    FriendRelationFollowForGroup : "FriendRelationFollowForGroup",
    FriendRelationFollowForWeb   : "FriendRelationFollowForWeb",
}

var MessageStatus  = {
    MessageStatusSending : "MessageStatusSending",
    MessageEventStatus : "MessageEventStatus",
    MessageStatusFailed : "MessageStatusFailed",
    MessageStatusServer : "MessageStatusServer",
    MessageEventSyncEnd : "MessageEventSyncEnd",
}


var ApiUserUpdateType  = {
    ApiUserUpdateInvalid  : "ApiUserUpdateInvalid",
    ApiUserUpdateAvatar   : "ApiUserUpdateAvatar",
    ApiUserUpdateNickname :"ApiUserUpdateNickname",
    ApiUserUpdateCustom :"ApiUserUpdateCustom",
}


var DataWriteType = {
    WriteUpdate : "WriteUpdate",
    WriteAdd : "WriteAdd",
    WriteDel : "WriteDel"
}

var FileType =  {
    FileInvalid : "0",
    FileImage : "1", // the server should find the exactly extension, ex: http://php.net/manual/en/function.mime-content-type.php
    FileAudio : "2", // the server should find the exactly extension, ex: http://php.net/manual/en/function.mime-content-type.php
    FileDocument:"3",
    FileVideo:"4",
}

var ApiGroupUpdateType  = {
    ApiGroupUpdateInvalid : "ApiGroupUpdateInvalid",
    ApiGroupUpdateName    : "ApiGroupUpdateName",
    ApiGroupUpdatePermissionJoin : "ApiGroupUpdatePermissionJoin",
    ApiGroupUpdateCanGuestReadMessage : "ApiGroupUpdateCanGuestReadMessage",
    ApiGroupUpdateDescription : "ApiGroupUpdateDescription",
    ApiGroupUpdateAdmin      : "ApiGroupUpdateAdmin",
    ApiGroupUpdateSpeaker     : "ApiGroupUpdateSpeaker",
    ApiGroupUpdateIsMute      : "ApiGroupUpdateIsMute"
}

var GroupJoinPermissionType  = {
    GroupJoinPermissionPublic   : "GroupJoinPermissionPublic",
    GroupJoinPermissionMember   : "GroupJoinPermissionMember",
    GroupJoinPermissionAdmin    : "GroupJoinPermissionAdmin",
}

var GroupDescriptionType  = {
    GroupDescriptionText : "GroupDescriptionText",
    GroupDescriptionMarkdown : "GroupDescriptionMarkdown",
}

var GroupMemberType = {
    GroupMemberGuest    : "GroupMemberGuest",
    GroupMemberNormal   : "GroupMemberNormal",
    GroupMemberAdmin    : "GroupMemberAdmin",
    GroupMemberOwner    : "GroupMemberOwner",
}

var ApiFriendUpdateType =  {
    ApiFriendUpdateInvalid  : "ApiFriendUpdateInvalid",
    ApiFriendUpdateRemark   : "ApiFriendUpdateRemark",
    ApiFriendUpdateIsMute   : "ApiFriendUpdateIsMute",
}


var PluginUsageType = {
    PluginUsageNone:"PluginUsageNone",
    PluginUsageIndex:"PluginUsageIndex",
    PluginUsageLogin:"PluginUsageLogin",
    PluginUsageU2Message:"PluginUsageU2Message",
    PluginUsageTmpMessage:"PluginUsageTmpMessage",
    PluginUsageGroupMessage:"PluginUsageGroupMessage",
    PluginUsageAccountSafe:"PluginUsageAccountSafe",
}


var PluginLoadingType = {
    PluginLoadingNewPage:"PluginLoadingNewPage",
    PluginLoadingFloat:"PluginLoadingFloat",
    PluginLoadingMask:"PluginLoadingMask",
    PluginLoadingChatbox:"PluginLoadingChatbox",
    PluginLoadingFullScreen:"PluginLoadingFullScreen"

};

var KeepSocket  = "KeepSocket";

var websocketGW = "enable_websocket_gw";
function getWebsocketGW(){
    if(websocketGW == null || websocketGW == undefined){
        websocketGW = "enable_websocket_gw";
    }
    return websocketGW;
}

var websocketGWUrl = "websocket_gw_url";
var apiUrl = "server_address_for_api";

var ErrorSessionCode = "error.session";
var PageLoginAction  = "page.index";
var ErrorSiteInit = "error.site.init";
var errorFriendIsKey = "error.friend.is";
var errorGroupNotExitsKey = "error.group.notExists";

function getErrorSessionCode(){
    return ErrorSessionCode;
}

function getErrorSiteInit(){
    return ErrorSiteInit;
}

var sessionId = $(".session_id").attr("data");
var domain    = $(".domain").attr("data");

var siteConfigKeys = {
    logo : "logo",
    name : "name",
    respGW : "respGW",
    httpGW : "httpGW",
    masters : "masters",
    serverAddressForIM : "serverAddressForIM",
    loginPluginId : "loginPluginId",
    enableTmpChat :"enableTmpChat",
    enableRealName : "enableRealName",
    enableWidgetWeb : "enableWidgetWeb",
    siteIdPubkBase64 : "siteIdPubkBase64",
    enableCreateGroup : "enableCreateGroup",
    enableInvitationCode: "enableInvitationCode",
};

function getSiteConfigKey(){
    var siteConfigKey = "site_config";
    return siteConfigKey;
}


var siteLoginPluginKey = "site_login_plugin";



// CONNECTING：值为0，表示正在连接。
// OPEN：值为1，表示连接成功，可以通信了。
// CLOSING：值为2，表示连接正在关闭。
// CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

var WS_CONNTENTING = 0;
var WS_OPEN = 1;
var WS_CLOSING = 2;
var WS_CLOSED = 3;

function getPACKAGE_ID(){
    var PACKAGE_ID = "packageId";    
    return PACKAGE_ID;
}


var lockReconnect = false;

var U2_MSG = "MessageRoomU2";
var GROUP_MSG = "MessageRoomGroup";
var roomKey  = "room_";
var roomMsgUnReadNum = "room_msg_unread_num_";
var roomListMsgUnReadNum = "room_list_msg_unread_num";
var roomListKey = "room_list";
var MaxStorageStore=3;


var JUMP_U2Profile = "u2Profile";
var JUMP_U2Msg = "u2Msg";
var JUMP_GroupProfile = "groupProfile";
var JUMP_GroupMsg = "groupMsg";

var DISPLAY_HOME = "home";
var DISPLAY_CHAT = "chat";
var DISPLAY_APPLY_FRIEND_LIST = "apply_friend_list";

var defaultCountKey = 200;
var chatSessionIdKey = "chat_session_id";
var localPotiner    = "group_pointer_";
var profileKey = "profile_";
var friendRelationKey = "user_id_relation_";
var friendCustomKey = "user_custom_";
var msgMuteKey = "msg_mute_";
var msgUnReadMuteKey = "msg_unread_mute_";
var roomListMsgMuteUnReadNumKey = "room_list_msg_mute_unread_num";
var applyFriendListNumKey = "apply_friend_list_num";
var chatTypeKey = "chat_type";
var WidgetChat = "widget_chat";
var ServiceChat = "service_chat";
var DefaultChat = "default_chat";
var MobileChat = "mobile_chat";
var speakerUserIdsKey="speaker_userIds_";
var newSiteTipKey = "site_tip";
var defaultPluginDisplay="display_plugin";

var DefaultTitle = "DuckChat 聊天室";

////session Storage
var userIdsKey  = "user_ids";
var groupIdsKey = "group_ids";
var sendMsgImgUrlKey = "msg_img_url_";
var msgIdInChatSessionKey = "msgId_in_chatSession_";
var reqProfile = "req_profile_";
var selfInfoAvatar="self_avatar";

var uploadImgForMsg  = "uploadImgForMsg";
var uploadImgForSelfAvatar = "uploadImgForSelfAvatar";
var uploadFileForMsg = "uploadFileForMsg";

var ProfileTimeout =  1000*60*60*24*30;////1个月
var reqTimeout = 1000*60*5;///5分钟

var defaultUserName = "匿名";

var downloadFileUrl = "./index.php?action=http.file.downloadFile";

function getLanguage() {
    var nl = navigator.language;
    if ("zh-cn" == nl || "zh-CN" == nl) {
        return UserClientLangZH;
    }
    return UserClientLangEN;
}

function getLanguageName() {
    var nl = navigator.language;
    if ("zh-cn" == nl || "zh-CN" == nl) {
        return "zh";
    }
    return "en";
}

var languageName = getLanguageName();
var languageNum = getLanguage();

var uploadFileUrl = './index.php?action=http.file.uploadWeb';
var isSyncingMsg = false;
var isPreSyncingMsgTime="";


var soundNotificationKey = "sound_notification";
var isDisplayFrontPageKey = "is_display_front_page";


export{
    getLanguage,
    getLanguageName,
    getHeaderInvalid,
    getHeaderErrorCode,
    getHeaderErrorInfo,
    getHeaderSessionid,
    getHeaderHostUrl,
    getHeaderReferer,
    getHeaderUserAgent,
    getHeaderAllowCache,
    getHeaderUserClientLang,
    getHeaderApplicationVersion,
    getSiteConfigKey,
    getWebsocketGW,
    getPACKAGE_ID,
    getErrorSessionCode,
    getErrorSiteInit
}