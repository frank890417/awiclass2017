<template lang="pug">
div
  .chatbox_msg(v-for='m in messages')
    span.chatbox_name {{m.name}}
    | : {{m.message}}
    span.smalltime {{m.time}} 
    br
  br
  input.input_name(v-model='name', placeholder='路人')
  input(v-model='temptext', placeholder='留句話吧')
  button(@click='send') 送出

</template>

<script>
import {mapState} from 'vuex'
export default {
  props: [],
  data (){
    return {
      temptext: "",
      name: "",
    }
  },
  methods: {
    send: function(){
      if (this.temptext !=""){
        if (this.name=="")
          window.send("路人",this.temptext);
        else
          window.send(this.name,this.temptext);
        this.temptext="";
      }
    }
  },
  computed:{
    ...mapState(['messages'])
  },
  mounted(){

  }

}
</script>

<style>

</style>
