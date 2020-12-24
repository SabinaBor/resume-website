<template>
  <div class="projects-page">
    <smaller-panel :title="content.title">
      <div class="btn-group">
        <v-layout column>
          <v-dialog
              v-model="dialog"
              width="700"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  dark
                  v-bind="attrs"
                  v-on="on">
                {{ titles[0] }}
              </v-btn>
            </template>
            <InfoTB/>
          </v-dialog>
          <br>
          <v-dialog
              v-model="dialog1"
              width="700"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  dark
                  v-bind="attrs"
                  v-on="on">
                {{ titles[1] }}
              </v-btn>
            </template>
            <RessSeatFinder/>
          </v-dialog>
          <br>
          <v-dialog
              v-model="dialog2"
              width="700"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  dark
                  v-bind="attrs"
                  v-on="on">
                {{ titles[2] }}
              </v-btn>
            </template>
            <HumanAssisEnv/>
          </v-dialog>
        </v-layout>
      </div>
    </smaller-panel>
  </div>
</template>

<script>
import smallerPanel from "@/components/smallerPanel";
import InfoTB from "@/components/Projects/InfoTB";
import RessSeatFinder from "@/components/Projects/RessSeatFinder";
import HumanAssisEnv from "@/components/Projects/HumanAssisEnv";

export default {
  name: "MyProjects",
  data() {
    return {
      content: {
        title: 'МОИ ПРОЕКТЫ'
      },
      dialog: false,
      dialog1: false,
      dialog2: false,
      titles: ['Info-TB платформа', 'Restaurant seat-finder', 'Human-assisted Smart Environments']
    }
  },
  components: {
    smallerPanel,
    InfoTB,
    RessSeatFinder,
    HumanAssisEnv
  }
}
</script>

<style scoped>

button.v-btn {
  background-color: #F48FB1 !important;
  font-size: small;
}
</style>