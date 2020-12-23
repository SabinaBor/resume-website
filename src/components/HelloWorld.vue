<template>
  <v-card class="overflow-hidden">
    <v-app-bar
        height="300"
        absolute
        color="#F48FB1"
        dark
        shrink-on-scroll
        prominent
        src="https://sun9-47.userapi.com/impf/sKb0NE0NLJ2P6vVHz_cYhrbNVmbi8vfy80DbqQ/EqHPhAgG2ko.jpg?size=1242x414&quality=96&proxy=1&sign=73541a6f6c3641c5ce8bf68db409bf07&type=album"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
        ></v-img>
      </template>

      <v-toolbar-title>САБИНА БОРАНБАЕВА</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Обо мне</v-tab>
          <v-tab>Навыки</v-tab>
          <v-tab>Образование</v-tab>
          <v-tab>Мои проекты</v-tab>
          <v-tab>Контакты</v-tab>
          <v-tab>Ссылки</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imageBanner: 'ginger.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-toolbar__title {
  margin-left: 3%;
}

@media screen and (max-width: 600px) {
  .v-toolbar__title {
    font-size: x-small;
    margin-left: 0;
  }
}

</style>
