<template>
  <div class="width_750  margin-x-auto">
    <transition name="fade">
      <pop v-if="popObj.show"></pop>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import Pop from './components/pop'
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  name: 'app',
  components: {
    Pop
  },
  computed: {
    ...mapState({
      popObj: state => state.popObj
    })
  },
  created() {

  }
}


</script>

