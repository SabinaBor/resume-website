<template>
  <v-card>
    <v-card-title class="headline">
      {{content.title}}
    </v-card-title>
    <br>
    <v-card-text>
      {{content.text}}
    </v-card-text>

    <v-divider></v-divider>

  </v-card>
</template>

<script>
export default {
name: "HumanAssisEnv",
  data () {
    return {
      content: {
        title: 'Human-assisted Smart Environments',
        text: 'Этот проект был создан для финального проекта на бакалавре. Я выполняла это одна, пользовалась фреймворком' +
            ' Apache Cordova (Phone Gap). Целью было создать мобильное приложение. Нет возможности закинуть фотографии проекта,' +
            ' однако могу показать на собеседовании.'
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

@media screen and (max-width: 600px) {
}

</style>