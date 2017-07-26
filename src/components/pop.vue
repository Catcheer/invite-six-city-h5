<template>
  <section class="pop-wrap">
    <section class="pop-box text-center">
      <img class="width_80 margin-top_40 margin-bottom_24" :src="popObj.imgSrc" alt="">
      <p class="color-fff font-size_30">{{popObj.text}}</p>
    </section>
  </section>
</template>

<script>


import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'


export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      popObj: state => state.popObj,
    })
  }


}
</script> 