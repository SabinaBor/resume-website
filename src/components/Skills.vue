<template>
  <div class="skills-page">
    <panel :title="content.title">
      <div class="skills-page-content">
      <v-row>
        <v-layout column>
          <list :title="listTitles[0]">
              <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </list>
          <list :title="listTitles[1]">
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
          <list :title="listTitles[2]">
            <v-list-item
                v-for="(item2, i) in items2"
                :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item2"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </list>
          <list :title="listTitles[3]">
              <v-list-item
                  v-for="(additional, i) in additionals"
                  :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="additional"></v-list-item-title>
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
      content: {
        title: "МОИ НАВЫКИ"
      },
      listTitles: ['ЕСТЬ OПЫТ C', 'JavaScript Frameworks', 'ЯЗЫКИ, С КОТОРЫМИ РАБОТАЛА В УНИВЕРСИТЕТЕ', 'ДОПОЛНИТЕЛЬНЫЕ НАВЫКИ'],
      items: ['JavaScript', 'HTML', 'CSS', 'SQLite/Web SQL/Postgresql', 'jQuery'],
      items2: ['C', 'C++', 'Java', 'Python', 'Haskell', 'MATLAB', 'R programming', 'Rascal'],
      javaScriptFrameworks: ['Vue.js', 'node.js', 'Apache Cordova', 'express.js', 'electron.js'],
      additionals: ['Разбираюсь в Git', 'Работала с PostMan']
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

.skills-page-content {
  margin-left: 5%;
  margin-right: 2%;
}

</style>