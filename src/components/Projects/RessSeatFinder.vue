<template>
  <v-card>
    <br>
    <v-card-text>
      {{ $t('projectsPage.ress_text') }}
    </v-card-text>
    <h2 style="color: #2c3e50">{{ $t('projectsPage.gallery') }}</h2>
    <div class="img-container">
      <v-layout column>
        <p>{{ $t('projectsPage.infotb_img1') }}:</p>
        <img src="../../images/ressSeatFinder/res1.png">
        <v-banner single-line/>
        <br>
        <p>{{ $t('projectsPage.ress_img1') }}:</p>
        <img src="../../images/ressSeatFinder/res2.png">
        <v-banner single-line/>
        <br>
        <p>{{ $t('projectsPage.ress_img2') }}:</p>
        <img src="../../images/ressSeatFinder/res3.png">
        <v-banner single-line/>
      </v-layout>
    </div>

    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
name: "RessSeatFinder",
  data () {
    return {
      content: {
        title: 'Restaurant seat-finder',
        text: 'Этот проект был создан для курса Requirements Engineering and Software Startups в университете Гронингена.' +
            ' Это была командная работа. В моей команде было 3 человека: Illarion Oralin, Richard Westerhof и я.' +
            ' Илларион работал на Backend частью, а Ричард и я занимались Frontend-ом. На этот проект у нас был один месяц.' +
            ' Мы использовали для работы Whatsapp, чтобы обсуждать проект, и Trello, чтобы следить за процессом выполнения задач.'
      }
    }
  }
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