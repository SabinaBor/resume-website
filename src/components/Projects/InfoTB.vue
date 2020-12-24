<template>
  <v-card>
    <br>
    <v-card-text>
      {{content.text}}
    </v-card-text>
    <h2 style="color: #2c3e50">Галерея</h2>
    <div class="img-container">
      <v-layout column>
        <p>Главная страница:</p>
      <img src="../../images/infotb/MainBodySection.png">
        <v-banner single-line/>
        <br>
        <p>Её продолжение:</p>
      <img src="../../images/infotb/MainBodySection2.png">
        <v-banner single-line/>
        <br>
        <p>Страница, где можно задать вопрос эксперту:</p>
        <img src="../../images/infotb/AskAnExpertPage.png">
      </v-layout>
    </div>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
name: "InfoTB",
  data () {
    return {
      content: {
        title: 'Info-TB платформа',
        text: 'Этот проект был сделан для курса Software Engineering в университете Гронингена. Это была' +
            ' командная работа. В моей команде было 6 человек: Alex Tutea, Tudor Hamdan, Richard Westerhof, ' +
            'Radu Catarambol, Merijn Schroder и я. Нашим ментором была Alina Matei. ' +
            'Первые двое человек были ответственны за Backend, остальные же,' +
            ' в том числе и я, занимались Frontend-ом. В общем у нас ушло 3 месяца на реализацию того, что хотела от' +
            ' нас клиентка, которая была PHD студентом Медицинского университета в Гронингене. Мы использовали для работы' +
            ' Slack, чтобы обсуждать проект, и Trello, чтобы следить за процессом выполнения задач.'
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