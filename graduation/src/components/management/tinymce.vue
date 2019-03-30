<template>
  <div class="block">
    <!-- <div v-html="value"></div> -->
    <!-- {{value}} -->
    <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
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
    tinymceHtml: String
  },
  components: {
    'Editor': Editor
  },
  data () {
    return {
      value: '',
      status: 0,
      init: {
        language_url: '/tinymce/skins/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        height: 500,
        //  添加插件
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        content_style:
        `
            *                         { padding:0; margin:0; }
            html, body                { height:100%; }
            img                       { max-width:100%; display:block;height:auto; }
            a                         { text-decoration: none; }
            iframe                    { width: 100%; }
            p                         { line-height:1.6; margin: 0px; }
            table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
            .mce-object-iframe        { width:100%; box-sizing:border-box; margin:0; padding:0; }
            ul,ol                     { list-style-position:inside; }
        `,
        insert_button_items: 'image link | inserttable',

        paste_retain_style_properties: 'all',
        paste_word_valid_elements: '*[*]',        // word需要它
        paste_data_images: true,                  // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
        paste_convert_word_fake_lists: false,     // 插入word文档需要该属性
        paste_webkit_styles: 'all',
        paste_merge_formats: true,
        nonbreaking_force_tab: false,
        paste_auto_cleanup_on_paste: false,

        init_instance_callback: function (editor) {
          editor.on('input change undo redo', () => {
            this.$emit('input', editor.getContent());
          })
        }
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  watch: {
    tinymceHtml (val) {
      if (window.tinymce.activeEditor) {
          if (this.status === 0 || window.tinymce.activeEditor.getContent() !== val) {
            if (val == null) {
              val = ''
            }
            window.tinymce.activeEditor.setContent(val)
          }
          this.status = 2
        }
    }
  }
}
</script>
