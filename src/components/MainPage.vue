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
        src="https://sun9-28.userapi.com/impf/1Bz3376JBFMPnmAVdA0grULdGRQcB0unkRw-sQ/rutcUBISZY4.jpg?size=1242x414&quality=96&proxy=1&sign=ddd79d6229555e177da8b73ae8f98aef&type=album"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
        ></v-img>
      </template>

      <v-toolbar-title>{{ $t('name')}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab><a href="#about-part">{{ $t('menu.about')}}</a></v-tab>
          <v-tab><a href="#skill-part">{{ $t('menu.skills')}}</a></v-tab>
          <v-tab><a href="#education-part">{{ $t('menu.education')}}</a></v-tab>
          <v-tab><a href="#project-part">{{ $t('menu.projects')}}</a></v-tab>
          <v-tab><a href="#contact-part">{{ $t('menu.contacts')}}</a></v-tab>
          <v-tab><a href="#link-part">{{ $t('menu.links')}}</a></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="700"
    >
      <div class="btn-lng" style="margin-top: 40%; margin-left: 40%; width: 20%">
        <v-row justify="space-between">
          <v-btn color="#F48FB1" dark @click="switchLocale(en)">English</v-btn>
          <v-btn color="#F48FB1" dark @click="switchLocale(ru)">Русский</v-btn>
        </v-row>
      </div>
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
    return {
      en: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
      ru: process.env.VUE_APP_I18N_LOCALE
    }
  },
  components: {
    About,
    Contacts,
    Education,
    Links,
    MyProjects,
    Skills
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.v-toolbar__title {
  margin-left: 3%;
}

#about-part:before {
  height: 100px!important;
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
  margin-top: 0%;
}

@media screen and (max-width: 600px) {

  .btn-lng {
    margin-top: 120%!important;
  }

  #about-part {
    margin-top: 0%;
  }

  #about-part:before {
    height: 50px!important;
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
