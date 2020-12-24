<template>
  <div class="contacts-page">
    <smaller-panel :title="content.title">
      <p><b>email:</b> s.boranbayeva0712@gmail.com</p>
      <p><b>телефон:</b> +7 (701) 670 16 72</p>
    </smaller-panel>
  </div>
</template>

<script>
import smallerPanel from "@/components/smallerPanel";

export default {
  name: "Contacts",
  components: {
    smallerPanel
  },
  data () {
    return {
      content: {
        title: 'МОИ КОНТАКТЫ'
      }
    }
  }
}
</script>

<style scoped>

</style>