<template>
  <v-card>
    <br>
    <v-card-text>
      {{  $t('projectsPage.infotb_text')  }}
    </v-card-text>
    <h2 style="color: #2c3e50">{{ $t('projectsPage.gallery') }}</h2>
    <div class="img-container">
      <v-layout column>
        <p>{{ $t('projectsPage.infotb_img1') }}:</p>
      <img src="../../images/infotb/MainBodySection.png">
        <v-banner single-line/>
        <br>
        <p>{{ $t('projectsPage.infotb_img2') }}:</p>
      <img src="../../images/infotb/MainBodySection2.png">
        <v-banner single-line/>
        <br>
        <p>{{ $t('projectsPage.infotb_img3') }}:</p>
        <img src="../../images/infotb/AskAnExpertPage.png">
      </v-layout>
    </div>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
name: "InfoTB"
}
</script>

<style scoped>

  .v-card__title{
    background-color: #DCE775;
  }

  img {
    width: 100%;
  }

</style>