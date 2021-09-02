<!--
 * @Author: your name
 * @Date: 2021-08-25 13:33:17
 * @LastEditTime: 2021-09-02 15:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmd-ui-v3\src\views\signin.vue
-->
<template>
  <div class="signin-page">
    <div class="mask"></div>
    <div class="mask2"></div>
    <div class="login-content">
      <div class="login-box">
        <!-- <div class="login-img"><img src="@/assets/imgs/common/logo.png" height="60" /></div> -->
        <h3>一脉香橙</h3>
        <div class="login-text">
          <p>欢迎使用一脉香橙管理系统</p>
        </div>
        <div class="login-form">
          <el-form :model="formData" label-position="top" status-icon :rules="formRules" ref="formRef">
            <el-form-item label="用户名" prop="userName">
              <el-input class="cust-input" v-model="formData.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userPwd" class="password-form">
              <el-input class="cust-input" type="password" placeholder="请输入密码" v-model="formData.userPwd" autocomplete="off"></el-input>
            </el-form-item>
            <div class="keep-login">
              <el-checkbox v-model="keepLogin">保持登录</el-checkbox>
              <!-- <el-button type="text">忘记密码</el-button> -->
            </div>
            <el-form-item>
              <el-button type="primary" class="login-btn" @click="cmdLogin()">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import MemberApi from '@/api/member';
import { SigninDto, signinResDto } from '@/types/dtos/signInDto';
import { useStore } from '@/store';
import router from '@/router';
import { ElMessage } from 'element-plus';
import { formRules, validForm } from '@/hooks/login/vaildLogin';
export default defineComponent({
  setup() {
    const store = useStore();
    const formRef = ref();
    const keepLogin = ref(true);
    const formData: SigninDto = reactive({
      userName: '',
      userPwd: '',
    });
    const cmdLogin = async () => {
      const vaildResult = await validForm(formRef);
      if (!vaildResult) return;
      try {
        const res: signinResDto | undefined = await MemberApi.signinApp(formData);
        if (res && res.code === 20000) {
          await store.dispatch('member/getMemberInfoAction');
          router.replace({ path: '/' });
        } else {
          ElMessage.error('账号或密码错误');
        }
      } catch (error) {
        ElMessage.error('登陆失败：' + error);
      }
    };
    return { formData, formRef, formRules, cmdLogin, keepLogin };
  },
});
</script>
