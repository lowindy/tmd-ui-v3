import { reactive, Ref, unref } from 'vue';

/*
 * @Description: 登录验证
 * @Date: 2021-08-12 14:57:20
 * @LastEditTime: 2021-08-12 14:57:55
 */
export const formRules = reactive({
  userName: [{ required: true, message: '用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

export async function validForm<T extends Object = any>(formRef: Ref<any>) {
  const form = unref(formRef);
  if (!form) return;
  try {
    const data = await form.validate();
    return data as T;
  } catch (error) {
    console.warn(JSON.stringify(error));
  }
}
