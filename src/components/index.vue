<template>
  <div>
    <!-- <header class="header"> -->
    <div>
      <mt-header fixed title="热聊">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="back()">小程序</mt-button>
        </router-link>
        <mt-button slot="right" icon="more" @click="more()"></mt-button>
      </mt-header>
    </div>
    <!-- </header> -->

    <div class="page-tabbar">
      <div class="page-wrap">
        <!-- 首页 -->
        <mt-tab-container class="page-tabbar-container" v-model="select">
			<mt-tab-container-item id="m_home">
				<iframe data-v-8e24ef92 src="http://www.baidu.com" frameborder="0" class="demo-page"></iframe>
			</mt-tab-container-item>

			<!-- 聊天 -->
			<mt-tab-container-item id="m_tochat">
				<!-- <mt-button type="default">聊天</mt-button> -->
				<chatting-list></chatting-list>
			</mt-tab-container-item>

			<!-- 通讯录 -->
			<mt-tab-container-item id="m_addrBook">
				<contacts></contacts>
				<!-- <header class="index_header">
				<div class="hlist">
					<img src="../assets/imgs/other/ic_duck_contact_add_friend.png" @click="addFriend()">
					<p>新朋友</p>
				</div>
				<div class="hlist">
					<img src="../assets/imgs/other/ic_duck_contacts_group.png" @click="queryGropu()">
					<p>群组</p>
				</div>
				<div class="hlist">
					<img
					src="../assets/imgs/other/ic_duck_contacts_new_friend.png"
					@click="queryFriend()"
					>
					<p>添加好友</p>
				</div>
				</header>
				<div class="page-part">
				<div v-for="(item,index) in this.list" :key="index">
					<div>
					<a href="/toast" class="mint-cell">
						<span class="mint-cell-mask"></span>
						<div class="mint-cell-left"></div>
						<div class="mint-cell-wrapper">
						<div class="mint-cell-title">
							<div>
							<i class="indexicon icon-toast"></i>
							<span>Toast</span>
							</div>
						</div>
						<div class="mint-cell-value is-link">
							<span></span>
						</div>
						<i class="mint-cell-allow-right"></i>
						</div>
						<div class="mint-cell-right"></div>
					</a>
					</div>
				</div>
				</div>-->
			</mt-tab-container-item>

			<!-- 我 -->
			<mt-tab-container-item id="m_id">
				<div class="page-part">
				<!-- <mt-cell v-for="n in 9" :title="'我的 ' + n" /> -->
				</div>
				<router-link to="/">
				<mt-button type="danger" size="large">退出</mt-button>
				</router-link>
			</mt-tab-container-item>
        </mt-tab-container>
      </div>

      <m-tabbar v-model="select">
        <m-tabbar-item id="m_home">
          <img src="../assets/imgs/other/ic_duck_navigation_home_page.png" alt slot="icon-normal">
          <img src="../assets/imgs/other/ic_duck_chat_splash.png" alt slot="icon-active">
          首页
        </m-tabbar-item>
        <m-tabbar-item id="m_tochat">
          <img src="../assets/imgs/other/ic_duck_navigation_message.png" alt slot="icon-normal">
          <img src="../assets/imgs/other/ic_duck_chat_splash.png" alt slot="icon-active">
          聊天
        </m-tabbar-item>
        <m-tabbar-item id="m_addrBook">
          <img src="../assets/imgs/other/ic_duck_navigation_contact.png" alt slot="icon-normal">
          <img src="../assets/imgs/other/ic_duck_chat_splash.png" alt slot="icon-active">
          通讯录
        </m-tabbar-item>
        <m-tabbar-item id="m_id">
          <img src="../assets/imgs/other/ic_duck_navigation_me.png" alt slot="icon-normal">
          <img src="../assets/imgs/other/ic_duck_chat_splash.png" alt slot="icon-active">
          我
        </m-tabbar-item>
      </m-tabbar>
    </div>
  </div>
</template>


<script>
// import topBanner from "./topBanner"
import contacts from "./index/contacts.vue";
import chattingList from "./index/chattingList";
import {
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
} from "../assets/js/loginAction.js";
import mTabbar from "./tabbar.vue";
import mTabbarItem from "./tabbar-item.vue";
export default {
  // name: 'page-tabbar',
  name: "index",
  components: {
    contacts,
    chattingList,
    mTabbar,
    mTabbarItem
  },
  data() {
    return {
      select: "m_home",
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
      funCtsUpdate,
      preSessionId: "",
      list: []
    };
  },
  methods: {
    back() {
      alert(this.$route.params.sessionId);
    },
    more() {
      console.log(this.$route.params.sessionId);
    },
    addFriend() {
      // this.funAddFriendApply();
      console.log("addFriend");
    },
    queryGropu() {
      this.getGroupList(this.$route.params.sessionId);
    },
    queryFriend() {
      var res = this.getFriendList(this.$route.params.sessionId);
      var data = JSON.parse(res);
      var dts = data.body.friends;
      this.list.splice(0, 1, dts);
    }
  }
};
</script>


<style lang='scss'>
.header {
  height: 4.4rem;
  background: #000;
  color: #fff;
  line-height: 4.4rem;
  text-align: center;
  a {
    color: #fff;
    padding: 0 2rem;
  }
}

.page-tabbar {
  overflow: hidden;
  height: 100vh;
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
.demo-page {
  width: 100%;
  height: 40rem;
}
</style>