<template>
 <div><br><h4>Firebase即時留言板(最新10則)</h4>
  <hr>
    <div class='chatbox_msg' v-for="m in messages">
      <span class=chatbox_name>{{m.name}}</span>: {{m.message}}
      <span class='smalltime'>{{m.time}} </span>
      <br>
    </div>
    <br>
    <input class='input_name' v-model='name' placeholder='路人'> 
    <input v-model='temptext' placeholder='留句話吧'> <button @click='send'>送出</button>
  </div> 
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
