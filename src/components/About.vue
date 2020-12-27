<template>
  <div class="about-page">
    <panel :title="$t('menu.about')">
      <v-card-text>
        {{ $t('aboutPage.text')}}
      </v-card-text>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  name: "About",
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>