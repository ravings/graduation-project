<template>
  <div class="block">
    <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
    <!-- <div v-html="tinymceHtml"></div> -->
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'  //  注意导入silver文件的主题，mobile文件的移动端的主题
import Editor from '@tinymce/tinymce-vue'
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
  data () {
    return {
      tinymceHtml: '',
      init: {
        skin_url: '/tinymce/skins/ui/oxide',
        height: 500,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false
      }
    }
  },
  components: {
    'Editor': Editor
  },
  mounted () {
    tinymce.init({})
  }
}
</script>
