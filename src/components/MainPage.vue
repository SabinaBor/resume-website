<template>
  <div class="main-page">
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
          <v-tab><a href="#about-part">Обо мне</a></v-tab>
          <v-tab><a href="#skill-part">Навыки</a></v-tab>
          <v-tab><a href="#education-part">Образование</a></v-tab>
          <v-tab><a href="#project-part">Мои проекты</a></v-tab>
          <v-tab><a href="#contact-part">Контакты</a></v-tab>
          <v-tab><a href="#link-part">Ссылки</a></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-3"
        class="overflow-auto"
        max-height="600"
    >
      <div class="some-part" id='about-part'>
        <About></About>
      </div>
      <div class="some-part" id='skill-part'>
        <Skills></Skills>
      </div>
      <div class="some-part" id='education-part'>
        <Education></Education>
      </div>
      <div class="some-part" id='project-part' style="margin-top: 30%">
        <MyProjects></MyProjects>
      </div>
      <div class="some-part" id='contact-part' style="margin-top: 30%">
        <Contacts></Contacts>
      </div>
      <div class="some-part" id='link-part' style="margin-top: 30%">
        <Links></Links>
      </div>
      <v-container style="height: 1000px;">
      </v-container>
    </v-sheet>
  </v-card>
  </div>
</template>

<script>
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Education from "@/components/Education";
import Links from "@/components/Links";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";

export default {
  name: 'MainPage',
  data() {
    return {}
  },
  components: {
    About,
    Contacts,
    Education,
    Links,
    MyProjects,
    Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-toolbar__title {
  margin-left: 3%;
}

#about-part:before {
  height: 300px!important;
}

.some-part:before {
  height: 150px;
  display: block;
  content: '';
}

a:link {
  color: rgba(255,255,255,0.5);
  text-decoration: none;
}

a:visited {
  color: white;
  text-decoration: none;
}

#about-part {
  margin-top: 15%;
}

@media screen and (max-width: 600px) {

  #about-part {
    margin-top: 30%;
  }

  .v-toolbar__title {
    font-size: x-small;
    margin-left: 2%;
  }

  .v-toolbar__content {
    height: 103px;
  }

  .v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title {
    font-size: x-large;
  }

  .some-part:before {
    height: 100px;
  }
}

</style>
