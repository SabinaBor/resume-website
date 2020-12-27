<template>
  <div class="contacts-page">
    <smaller-panel :title="$t('menu.contacts')">
      <p><b>email:</b> s.boranbayeva0712@gmail.com</p>
      <p><b>{{$t('contactsPage.phone')}}:</b> +7 (701) 670 16 72</p>
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
    }
  }
}
</script>

<style scoped>

</style>