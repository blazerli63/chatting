<template>
    <section class="row chatting-list">
        <div class="chatting-row">
            <div class="div-avatar">
                <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
            </div>
            <div class="information">
                <div class="info-time">
                    <span class="name">
                        王大牛
                    </span>
                    <span class="date-time">
                        1/6/2019
                    </span>
                </div>
                <div class="last-message">
                    我们已经成为好友，开始聊天吧
                </div>
            </div> 
        </div>
        <div class="chatting-row">
            <div class="div-avatar">
                <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
            </div>
            <div class="information">
                <div class="info-time">
                    <span class="name">
                        王大牛
                    </span>
                    <span class="date-time">
                        1/6/2019
                    </span>
                </div>
                <div class="last-message">
                    我们已经成为好友，开始聊天吧
                </div>
            </div> 
        </div>
        <div class="chatting-row">
            <div class="div-avatar">
                <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
            </div>
            <div class="information">
                <div class="info-time">
                    <span class="name">
                        王大牛
                    </span>
                    <span class="date-time">
                        1/6/2019
                    </span>
                </div>
                <div class="last-message">
                    我们已经成为好友，开始聊天吧
                </div>
            </div> 
        </div>
        <!-- <div class="chatting-row">
            <div class="div-avatar">
                <img src="../../assets/imgs/other/ic_duck_contacts_new_friend.png" >
            </div> 
        </div> -->
    </section>
</template>
<script>
export default {
  props:{
    //betLists:''
  },
  mounted(){
    // console.log('THIS', this.$store.state.app.lotteryName)
  },
  data(){
    return{
      //emptyFlag:false,
     // allAmount:0,
    }
  },
  watch:{
    // emptyFlag(oldVal, newVal){
    //   console.log("newVal" + newVal)
    //   this.allAmount = 0
    //   this.emptyFlag =false
    // }
  },
  methods:{
    switchVideo(){
      
    }  
  }
}
</script>
<style lang="scss">
.chatting-list{
    padding:0 10px;
}
.chatting-row{
    position:relative;
    width: 100%;
    box-sizing: border-box;
    padding-left:60px;
    height: 62px;
    .div-avatar{
        position:absolute;
        width: 60px;
        height: 60px;
        top:0;
        left:0;
    }
    .information{
        position:relative;
        box-sizing: border-box;
        padding:10px;
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        text-align: left;
    }
    .info-time{
        position:relative;
        box-sizing: border-box;
        .name{
            font-size: 15px;
            color:#000;
        }
        .date-time{
            position: absolute;
            right: 0px;
            top:0px;
            font-size: 12px;
            color: gray;
        } 
    }
    .last-message{
        color:gray;
    }
}

</style>


