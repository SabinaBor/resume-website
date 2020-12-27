<template>
  <div class="links-page">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <smaller-panel :title="$t('menu.links')">
      <div class="links-page-content">
      <v-row justify="space-between">
        <a href="https://github.com/SabinaBor" class="fa fa-github">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/sabina-boranbayeva-5a79111b7" class="fa fa-linkedin">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/sabinaboranbayeva/" class="fa fa-instagram">
          Instagram
        </a>
        <a href="https://twitter.com/SabinaB2" class="fa fa-twitter">twitter</a>
      </v-row>
      </div>
    </smaller-panel>
  </div>
</template>

<script>
import smallerPanel from "@/components/smallerPanel";

export default {
  name: "Links",
  components: {
    smallerPanel
  },
  data () {
    return {
      content: {
        title: 'МОИ ССЫЛКИ'
      }
    }
  }
}
</script>

<style scoped>

  a:link {
    color: #2c3e50;
    text-decoration: none;
  }

  a:visited {
    color: #2c3e50;
   text-decoration: none;
  }

  a:hover {
    color: #2c3e50;
    text-decoration: none;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
  }



  .links-page-content {
    margin-left: 3%;
    margin-right: 3%;
  }

</style>