<template>
  <div class="skills-page">
    <panel :title="$t('menu.skills')">
      <div class="skills-page-content">
      <v-row>
        <v-layout column>
          <list :title="$t('skillsPage.title1')">
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </list>
          <list :title="listTitle">
              <v-list-item
                  v-for="(frame, i) in javaScriptFrameworks"
                  :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="frame"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </list>
        </v-layout>

        <v-spacer/>
        <v-layout column>
          <list :title="$t('skillsPage.title2')">
            <v-list-item
                v-for="(item2, i) in items2"
                :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item2"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </list>
          <list :title="$t('skillsPage.title3')">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="$t('skillsPage.skill1')"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="$t('skillsPage.skill2')"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </list>
        </v-layout>
      </v-row>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import List from "@/components/List";

export default {
  name: "About",
  data() {
    return {
      listTitle: 'JavaScript Frameworks',
      items: ['JavaScript', 'HTML', 'CSS', 'SQLite/Web SQL/Postgresql', 'jQuery'],
      items2: ['C', 'C++', 'Java', 'Python', 'Haskell', 'MATLAB', 'R programming', 'Rascal'],
      javaScriptFrameworks: ['Vue.js', 'node.js', 'Apache Cordova', 'express.js', 'electron.js']
    }
  },
  components: {
    Panel,
    List
  }
}
</script>

<style scoped>

.v-list {
  background-color: #DCE775;
  text-align: left;
}

.v-list-item__content {
  color: #2c3e50;
}


.skills-page-content {
  margin-left: 5%;
  margin-right: 2%;
}

</style>