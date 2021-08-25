<template>
  <div class="page-nav">
    <div class="back" v-if="showBack" @click="goBack"><i class="el-icon-back"></i>返回</div>
    <div class="page-title">{{ title }}</div>
  </div>
</template>
<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: false
    },
    backFn: {
      type: Function,
      default: null
    }
  },
  setup(props) {
    const goBack = () => {
      if (props.backFn === null) {
        router.go(-1);
      } else {
        props.backFn();
      }
    };
    return { goBack };
  }
});
</script>
<style lang="scss" scoped>
.back {
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #dcdfe6;
  margin-right: 15px;
  padding-right: 15px;
  cursor: pointer;
  font-size: 16px;
  i {
    margin-right: 5px;
  }
}
</style>
