<template>
  <v-card>
    <br>
    <v-card-text>
      {{ $t('projectsPage.human_text') }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
name: "HumanAssisEnv",
  data () {
    return {
      dialog2: false
    }
  }
}
</script>

<style scoped>

img {
  width: 100%;
}

@media screen and (max-width: 600px) {
}

</style>