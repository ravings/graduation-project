<template>
  <div>
    <div class="content">
      <el-input type="textarea" v-model="value"></el-input>
      <Editor id="tinymce" v-model="value" :init="init" :key="flag"></Editor>
      <div v-html="value"></div>
    </div>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'  //  注意导入silver文件的主题，mobile文件的移动端的主题
import Editor from '@tinymce/tinymce-vue'
//  引入这些插件
import 'tinymce/plugins/image'  // 插入上传图片插件
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'  // 插入表格插件
import 'tinymce/plugins/lists'  // 列表插件
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'  // 字数统计插件
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
export default {
  name: 'tinymce',
  props: {
    // tinymceHtml: String
  },
  components: {
    'Editor': Editor
  },
  data () {
    return {
      value: '',
      flag: 0,
      status: 0,
      // configInit: {
      init: {
        language_url: '/tinymce/skins/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        height: 500,
        //  添加插件
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
          // 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat',
        branding: false,  // 去水印 //是否禁用“Powered by TinyMCE”
        images_upload_handler: (blobInfo, success, failure) => {
          // const img = 'data:image/jpeg;base64,' + blobInfo.base64();
          // console.log(blobInfo);
          // console.log(blobInfo.blob());
          // success(img)
          this.imagesUpload(blobInfo, success, failure);
        }
      }
    }
  },
  activated () {
    // this.flag++;
  },
  mounted () {
    // this.init();
    tinymce.init({});
  },
  methods: {
    // init(){
    //   tinymce.init({
    //     ...this.configInit
    //   })
    // }
    // sendContent(){
    //   this.$emit('input', this.value);
    // }
    imagesUpload(blobInfo, success, failure) {
      let formdata = new FormData();
      formdata.append('file', blobInfo.blob())
      this.$ajax.post('/api/upload/tinymceUpload',formdata).then(res => {
        success(res.data.url);
        // console.log(res);
      }).catch(err => {
        failure(err);
      })
    }
  },
  watch: {
    value(val) {
      // if (val) this.$emit('input', this.value);
    }
  },
  beforeDestroy() {
    // tinymce.get(this.flag).destroy();
  }
}
</script>

<style lang="less" scoped>
.content{
  // width: 1000px;
  margin-right: 20px;
}
</style>
