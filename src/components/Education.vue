<template>
  <div class="education-page">
    <smaller-panel :title="content.title">
                  <h4>{{content.school}}</h4>
                  <p>{{content.schoolYears}}</p>
                  <h4>{{content.foundation}}</h4>
                  <p>{{content.years}}</p>
                  <h4>{{content.university}}</h4>
                  <p>{{content.year}}</p>
    </smaller-panel>
  </div>
</template>

<script>
import smallerPanel from "@/components/smallerPanel";

export default {
name: "Education",
  data () {
    return {
      content: {
        title: 'ОБРАЗОВАНИЕ',
        university: 'Университет Гронингена, Гронинген, Нидерланды (бакалавр)',
        year: 'сентябрь 2017 - август 2020',
        foundation: 'Holland International Study Center, Гронинген, Нидерланды (foundation)',
        years: 'сентябрь 2016 - август 2017',
        school: 'Гимназия №40, Тараз, Казахстан',
        schoolYears: '2004 - 2016'
      }
    }
  },
  components: {
  smallerPanel
  }
}
</script>

<style scoped>

p {
  color: #827717;
  font-weight: bold;
}

</style>