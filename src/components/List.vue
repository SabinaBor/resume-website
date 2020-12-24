<template>
  <v-list flat disabled color="#DCE775">
    <v-banner single-line/>
    <v-subheader>{{title}}:</v-subheader>

    <v-list-item-group
        color="primary"
    >
      <slot>
        No content defined
      </slot>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
name: "List",
  props: ['title']
}
</script>

<style scoped>

.v-subheader {
  font-weight: bold;
  color: #2c3e50;
}

</style>