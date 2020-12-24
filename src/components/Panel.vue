<template>
  <v-layout>
    <v-flex xs10 offset-xs1>
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
</style>