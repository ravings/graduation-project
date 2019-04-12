<template>
    <div>
        <div class="content">
            <div v-html="this.contents[0].content"></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      contents: []
    }
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.$ajax.get('/api/AU_about').then(res => {
        this.contents = res.data;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
