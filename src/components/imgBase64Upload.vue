<template>
  <el-upload
    class="image-uploader"
    :style="{ width: width + 'px', height: height + 'px' }"
    action="#"
    :show-file-list="false"
    :http-request="httpRequest"
  >
    <img v-if="path && path.length > 0" :src="path" class="image" />
    <i v-else class="el-icon-plus image-uploader-icon"></i>
  </el-upload>
</template>
<script lang="ts">
import { ElMessage } from 'element-plus';
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    path: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
  },
  setup(props, ctx) {
    const allowTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 2;
    const getBase64 = (file: Blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult: string | ArrayBuffer | null;
        reader.readAsDataURL(file);
        reader.onload = function () {
          fileResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(fileResult);
        };
      });
    };
    const httpRequest = (data: { file: Blob }) => {
      if (allowTypes.indexOf(data.file.type) === -1) {
        ElMessage.error('图片格式只支持jpg,png,gif');
        return;
      }
      const fileSize = data.file.size / 1024 / 1024 < maxSize;
      if (!fileSize) {
        ElMessage.error('上传图片大小不能超过 2MB!');
        return;
      }
      // 转base64
      getBase64(data.file)
        .then((fileResult: unknown) => {
          if (fileResult && typeof fileResult === 'string') {
            ctx.emit('upload-completed', fileResult);
            ElMessage.success('图片上传成功');
          } else {
            ElMessage.error('图片上传失败');
          }
        })
        .catch(() => {
          ElMessage.error('图片上传失败');
        });
    };
    return { httpRequest };
  },
});
</script>
<style>
.image-uploader .el-upload {
  border: 1px dashed #dcdfe6;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-uploader .el-upload:hover {
  border-color: #cccccc;
}
.image-uploader-icon {
  font-size: 28px;
  color: #cccccc;
  text-align: center;
}
.image {
  height: 100%;
  width: 100%;
  display: block;
}
</style>
