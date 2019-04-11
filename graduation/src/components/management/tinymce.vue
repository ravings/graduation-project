<template>
  <div class="block">
    <!-- <div v-html="value"></div>
    {{value}} -->
    <el-input type="textarea" v-model="value"></el-input>
    <Editor id="tinymce" v-model="value" :init="configInit" :key="flag"></Editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'  //  注意导入silver文件的主题，mobile文件的移动端的主题
import Editor from '@tinymce/tinymce-vue'
//  引入这些插件
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
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
      configInit: {
        language_url: '/tinymce/skins/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        height: 500,
        //  添加插件
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,  // 去水印
      }
    }
  },
  activated () {
    this.flag++;
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
  },
  watch: {
    value (val) {
      if (val) this.$emit('input', this.value);
    }
  },
  beforeDestroy () {
    // tinymce.get(this.flag).destroy();
  }
}
</script>
