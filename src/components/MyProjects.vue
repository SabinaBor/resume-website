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
            <v-card>
              <v-card-title class="headline">
                <v-row justify="space-between">
                  {{titles[0]}}
                  <v-btn
                      text
                      @click="dialog = false"
                      flat
                  >
                    закрыть
                  </v-btn>
                </v-row>
              </v-card-title>
            <InfoTB/>
            </v-card>
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
            <v-card>
              <v-card-title class="headline">
                <v-row justify="space-between">
                  {{titles[1]}}
                  <v-btn
                      text
                      @click="dialog1 = false"
                      flat
                  >
                    закрыть
                  </v-btn>
                </v-row>
              </v-card-title>
            <RessSeatFinder/>
            </v-card>
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
            <v-card>
              <v-card-title class="headline">
                <v-row justify="space-between">
                  {{titles[2]}}
                <v-btn
                    text
                    @click="dialog2 = false"
                    flat
                >
                  закрыть
                </v-btn>
                </v-row>
              </v-card-title>
            <HumanAssisEnv/>
            </v-card>
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

.v-card__title{
  background-color: #F48FB1;
}

button.v-btn {
  background-color: #F48FB1 !important;
  font-size: small;
}
</style>