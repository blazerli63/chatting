<template>
  <section class="contact-out">
    <header class="index_header">
        <div class="hlist">
            <img src="../../assets/imgs/other/ic_duck_contact_add_friend.png" @click="addFriend()">
            <p>新朋友</p>
        </div>
        <div class="hlist">
            <img src="../../assets/imgs/other/ic_duck_contacts_group.png" @click="queryGropu()">
            <p>群组</p>
        </div>
        <div class="hlist">
            <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" @click="queryFriend()">
            <p>添加好友</p>
        </div>
    </header>
    <div class="page-part">
        <mt-index-list :show-indicator="false">
            <mt-index-section index="A">
                <mt-cell title="Aaron">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png">
                    </div>                                  
                </mt-cell>
                <mt-cell title="Alden">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
                    </div> 
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Aaron">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png">
                    </div>                                  
                </mt-cell>
                <mt-cell title="Alden">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
                    </div> 
                </mt-cell>
            </mt-index-section> 
            <mt-index-section index="C">
                <mt-cell title="Aaron">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png">
                    </div>                                  
                </mt-cell>
                <mt-cell title="Alden">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
                    </div> 
                </mt-cell>
                 <mt-cell title="Aaron">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png">
                    </div>                                  
                </mt-cell>
                <mt-cell title="Alden">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
                    </div> 
                </mt-cell>
                 <mt-cell title="Aaron">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png">
                    </div>                                  
                </mt-cell>
                <mt-cell title="Alden">
                    <div class="div-avatar">
                        <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
                    </div> 
                </mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    //betLists:''
  },
  mounted() {
    // console.log('THIS', this.$store.state.app.lotteryName)
  },
  data() {
    return {
      // allAmount:0,
    };
  },
  watch: {

  },
  methods: {
    addFriend() {
      // this.funAddFriendApply();
      console.log("addFriend");
    },
    queryGropu() {
      //this.getGroupList(this.$route.params.sessionId);
    },
    queryFriend() {
    },
    switchVideo() {

    }
  }
};
</script>
<style lang="scss">
.contact-out{
    .page-part{
        position: relative;
        width: 100%;
    }
    .out-flex{
        position: relative;
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-content: center;
    }
    .mint-cell-value{
        order:1;
    }
    .mint-cell-title{
        order:2;
    }
    .div-avatar{
        padding-left:0px;
        padding-right:5px;
        padding-top:5px;
        padding-bottom:5px;
    }
    .mint-indexsection-index{
        text-align: left;
    }
}

</style>


