<template>
  <el-drawer v-model="showDrawer" :with-header="false" :before-close="handleClose" size="400px">
    <el-form label-position="top" label-width="80px" class="setting-drawer">
      <el-form-item label="组件大小">
        <el-row :gutter="10">
          <el-col :span="6"><el-button :type="getSizeClass(cptSizeEnum.Default)" @click="setCptSize(cptSizeEnum.Default)">默认</el-button></el-col>
          <el-col :span="6"><el-button :type="getSizeClass(cptSizeEnum.Medium)" @click="setCptSize(cptSizeEnum.Medium)">中等</el-button></el-col>
          <el-col :span="6"><el-button :type="getSizeClass(cptSizeEnum.Small)" @click="setCptSize(cptSizeEnum.Small)">小型</el-button></el-col>
          <el-col :span="6"><el-button :type="getSizeClass(cptSizeEnum.Mini)" @click="setCptSize(cptSizeEnum.Mini)">超小</el-button></el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="圆角设置">
        <el-row :gutter="10">
          <el-col :span="6"
            ><el-button :type="getRadiusClass(radiusSizeEnum.Default)" @click="setRadius(radiusSizeEnum.Default)">默认</el-button></el-col
          >
          <el-col :span="6"><el-button :type="getRadiusClass(radiusSizeEnum.Round)" @click="setRadius(radiusSizeEnum.Round)">圆角</el-button></el-col>
          <el-col :span="6"
            ><el-button :type="getRadiusClass(radiusSizeEnum.Material)" @click="setRadius(radiusSizeEnum.Material)">直角</el-button></el-col
          >
        </el-row>
      </el-form-item>
      <el-form-item label="颜色设置">
        <div class="color-setting">
          <span
            class="color-box"
            @click="setColor(color.primary)"
            v-for="color in colorList()"
            :key="color.primary"
            :style="{ 'background-color': color.primary }"
          >
            <i :class="getColor == color.primary ? 'el-icon-check' : ''"></i>
          </span>
        </div>
      </el-form-item>
      <el-form-item label="风格设置"> </el-form-item>
    </el-form>
  </el-drawer>
</template>
<script lang="ts">
import { useStore } from '@/store';
import { cptSizeEnum, radiusSizeEnum } from '@/types/storeDto/setting';
import { colorList } from '@/types/storeDto/theme';
import { computed, defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  emits: ['closeDlg'],
  setup(_porps, context) {
    const store = useStore();
    const state = reactive({
      showDrawer: false,
    });
    const handleClose = () => {
      state.showDrawer = false;
      context.emit('closeDlg');
    };
    const cmdInit = () => {
      state.showDrawer = true;
    };
    // setting radius
    const getRadiusClass = (type: radiusSizeEnum) => {
      return store.state.setting.settingCfg.radiusSize === type ? 'primary' : 'default';
    };
    const setRadius = (radius: radiusSizeEnum) => {
      store.dispatch('setting/setRadiusAction', radius);
    };
    // setting cptsize
    const getSizeClass = (type: cptSizeEnum) => {
      return store.state.setting.settingCfg.cptSize === type ? 'primary' : 'default';
    };
    const setCptSize = (size: cptSizeEnum) => {
      store.dispatch('setting/setCptSizeAction', size);
      window.location.reload();
    };
    // theme color
    const getColor = computed(() => {
      return store.state.theme.color;
    });
    const setColor = (color: string) => {
      store.dispatch('theme/setColorAction', color);
    };
    return {
      ...toRefs(state),
      handleClose,
      cmdInit,
      setCptSize,
      cptSizeEnum,
      radiusSizeEnum,
      getSizeClass,
      setRadius,
      getRadiusClass,
      colorList,
      setColor,
      getColor,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/style/base/var.scss';
.setting-drawer {
  padding: 30px;
  .color-setting {
    flex-direction: row;
    align-items: center;
    display: flex;
    .color-box {
      margin-right: 10px;
      width: 26px;
      height: 26px;
      display: block;
      border-radius: var(--border-radius);
      background-color: #409eff;
      line-height: 26px;
      font-size: 18px;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>
