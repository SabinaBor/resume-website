<template>
  <v-list flat disabled color="#DCE775">
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

</style>