<template>
  <div class="education-page">
    <smaller-panel :title="$t('menu.education')">
                  <h4>{{$t('educationPage.school')}}</h4>
                  <p>{{content.schoolYears}}</p>
                  <h4>{{$t('educationPage.foundation')}}</h4>
                  <p>{{$t('educationPage.years')}}</p>
                  <h4>{{$t('educationPage.university')}}</h4>
                  <p>{{$t('educationPage.year')}}</p>
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