<template>
  <div id="content">
  <v-layout>
    <v-flex>
      <div class="pl-6 pr-4 pt-4 pb-2">
        <v-card color="#DCE775" shaped>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-banner single-line/>
          <v-card-text>
            <slot>
              No content defined
            </slot>
          </v-card-text>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: ['title']
}
</script>

<style scoped>
  .v-card__title {
    justify-content: center;
    color: #2c3e50;
  }

  #content {
    width: 700px;
    margin-left: 22%;
  }

  @media screen and (max-width: 600px) {
    #content {
      width: 100%;
      margin-left: 0;
    }
  }

</style>