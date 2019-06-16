<template>
    
    <div style="position: relative; width:100%;height:100%;" class="site_login_div">
        <!-- <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> -->
        <div>

            <div class="mobile_logo_div">
                <img class="mobile_logo" src="../assets/imgs/login/mobile_logo.png"/>
            </div>

            <div class="login-header">
                <span class="login_phone_tip_font" data-local-value="loginTip">登录</span>
            </div>

            <div class="login_name_div">
                <img class="img" src='../assets/imgs/login/loginName.png'/>
                <input v-model="userName" type="text" class="input_login_site" >
                <div class="clearLoginName" @click="clearData">
                    <img src="../assets/imgs/msg/btn-x.png" class="clear_img" >
                </div>
                <img src="../assets/imgs/msg/msg_failed.png" class="img-failed">               
            </div>
            <div class="line"></div>

            <div class="login_name_div">
                <img src="../assets/imgs/login/pwd.png" class="img">
                <input v-model="userPwd" type="password" class="input_login_site" >
                <div class="clearLoginName" @click="showPwd">
                    <img src="../assets/imgs/login/hide_pwd.png" class="pwd_img">
                </div>
                <img src="../assets/imgs/msg/msg_failed.png" class="img-failed">
            </div>
            <div class="line"></div>

            <router-view></router-view>
            <div class="login_button_div">
                <mt-button type="default" class="login_button" v-on:click="userLogin">
                    <span class="span_btn_tip">登录</span>
                    <!-- 登录 -->
                </mt-button>
                <!-- <button type="button" class="login_button" @click="queryLogin">
                    <span class="span_btn_tip">登录</span> -->
                    <!-- <router-link to='index' class="span_btn_tip">登录</router-link> -->
                <!-- </button> -->
            </div>

            <div class="register_span_div">
                <span style="color: RGBA(0, 0, 0, 0.2);" data-local-value="noAccountTip">还没有账户？</span> 
                <!-- <span data-local-value="registerContentTip" style="color: rgba(76,59,177,1)">去注册</span> -->
                <router-link to='register' style="color: rgba(76,59,177,1)">去注册</router-link>
                
            </div>

        </div>


        <input type="hidden" data="" class="session_id" />
        <input type="hidden" data="" class="domain" />
    </div>

</template>

<script>
import $ from 'jquery';

// import {loginPassport} from '../assets/js/login.js';
// import {ZalyAction} from '../assets/js/zalyAction.js';
// import {getLanguageName,getLanguage} from '../assets/js/zalyKey.js';
// import {requestSiteConfig} from '../assets/js/zalyBaseWs.js';

import {loginFun,loginSession} from '../assets/js/loginAction.js';



const queryUrl='';
const userName='';
const userPwd='';
const preSessionId='';
// const responseData='';
export default {
    // url,userName,userPwd,
    data(){
        return{
            msg:'this is login',
            queryUrl:'http://localhost:9090/index.php',
            userName:'',
            userPwd:'',
            loginFun,
            loginSession,
            preSessionId:'',
            // loginPassport,
            // handleClientSendRequest,
            // handleClientReceivedMessage,
            // ZalyAction
        }
    },
    // updated(){
        
    // },
    methods:{
        checkLogin(){
            var usr = this.userName;
            var pwd = this.userPwd;
            if(usr == '' || usr == undefined || usr.length <0){
                return false;
            }
            if(pwd == '' || pwd == undefined || pwd.length <0){
                return false;
            }
            return true;
        },
        userLogin(){
            if(!this.checkLogin()){//检查用户输入
                alert("请输入用户名或密码！");
                return;
            } 

            this.preSessionId = this.loginFun(this.userName,this.userPwd);
            console.log("preSessionId==="+this.preSessionId);
            this.preSessionId = this.loginSession(this.preSessionId,this.userName);
            console.log("preSessionId==="+this.preSessionId);

            
            // this.getSiteConfig(this.preSessionId);
            // this.getGroupList(this.preSessionId);
            // this.getFriendList(this.preSessionId);
            // this.getUserProfile(this.preSessionId);
            // this.getPluginList(this.preSessionId);
            // this.getCtsSync(this.preSessionId);
            // this.getFriendProfile(this.preSessionId);
            // this.getCtsMessage(this.preSessionId);
            // this.getFriendUpdate(this.preSessionId);
            // this.funFriendDelete(this.preSessionId);
            // this.funAddFriendApply(this.preSessionId);
            // this.funCtsUpdate(this.preSessionId);

            this.$router.push({name:'index',params:{sessionId:this.preSessionId}});
        },
        clearData(){
            
        },
        showPwd(){

        }
    }
}
</script>


<style>
.login_div{
    position: absolute;
    top: 0rem;
    right: 0rem;
    height: 100%;
    width: 100%;
    display: block;
    font-size: 10.66px;
    -webkit-tap-highlight-color: transparent;
    color: -internal-root-color;
}
.mobile_logo_div{
    display: flex;
    justify-content: center;
    font-size: 10.66px;
    -webkit-tap-highlight-color: transparent;
    color: -internal-root-color;
}
.mobile_logo {
    margin-top: 2rem;
    width: 5rem;
    height: 5rem;
    font-size: 10.66px;
}

.login-header{
    text-align: center;
    display: none;
    margin-top: 5rem;
    font-size: 10.66px;
    -webkit-tap-highlight-color: transparent;
    color: -internal-root-color;
}

.img{
    width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
    flex: 1;
    margin-left: .5rem;
}

.register_site {
    font-size: 1.88rem;
    font-family: PingFangSC-Regular;
    color: rgba(20,16,48,1);
    vertical-align: middle;
    outline: none;
    border-style: none;
}

.login_name_div{
    margin-top: 2rem;

    position: relative;
    font-size: 1.88rem;
    font-family: PingFangSC-Regular;
    color: rgba(20,16,48,1);

    -webkit-tap-highlight-color: transparent;

    display: flex;
}

.input_login_site{
    font-size: 1.88rem;
    font-family: PingFangSC-Regular;
    vertical-align: middle;
    outline: none;
    border-style: none;

    background-color: rgb(232, 240, 254) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;

    padding: 1px 0px;

    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;

    font: 400 13.3333px Arial;

    -webkit-writing-mode: horizontal-tb !important;

    -webkit-tap-highlight-color: transparent;

    line-height: 3rem; 
    flex: 8;
    height: 2rem;
}

.img-failed{
    flex: 1;
    height: 2rem;
    margin-left: -2.5rem;
    display: none;
    margin-right: .5rem;
}
.clearLoginName{
    cursor: pointer;
    font-size: 1.88rem;
    font-family: PingFangSC-Regular;
    color: rgba(20,16,48,1);
}

.clear_img{
    flex: 1;
    height: 2rem;
    margin-left: -2.5rem;
    margin-right: .5rem;
}
.pwd_img{
    flex: 1;
    height: 1rem;
    width: 2rem;
    margin-left: -2.5rem;
    margin-right: .5rem;
}
.line{
    width: 100%;
    height: 1px;
    margin: -2px auto;
    background: rgba(153,153,153,1);
    border-radius: 0.42rem;
    overflow: hidden;
}
.login_button_div{
    margin-top: 2rem;
    display: flex;
}
.login_button{
    height: 2.69rem;
    background: rgba(76,59,177,1);
    border-radius: 0.66rem;
    outline: none;
    cursor: pointer;
    padding: 1px 6px;
    align-items: flex-start;
    text-align: center;
    box-sizing: border-box;
    border-width: 2px;
    border-style: outset;
    border-image: initial;
    
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    margin: 0em;
    font: 400 13.3333px Arial;
    -webkit-writing-mode: horizontal-tb !important;
    -webkit-appearance: button;
    -webkit-tap-highlight-color: transparent;

    flex: 1;
}
.span_btn_tip{
    width: 3.33rem;
    height: 1.67rem;
    font-size: 1.67rem;
    font-family: PingFangSC-Regular;
    color: rgba(255,255,255,1);
    line-height: 1.67rem;
    vertical-align: middle;

    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    font: 400 13.3333px Arial;
}
.register_span_div{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 3px;
}
</style>