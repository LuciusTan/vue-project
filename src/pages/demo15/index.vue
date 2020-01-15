<template>
  <div>
    <div>Slot插槽</div>
    <div>------------------------------------</div>
    <slot-test>
        <div>123</div>
        <p>456</p>

        <p>666</p>
        <p slot="bottom">888</p>
    </slot-test>
  </div>
</template>
<script>
import slots from '@/components/slot.vue'
export default {
  data() {
    return {

    };
  },
  components:{
      "slot-test":slots
  }
};
</script>