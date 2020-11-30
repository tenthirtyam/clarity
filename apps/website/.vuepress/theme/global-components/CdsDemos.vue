<template>
  <div>
    <!--    <h2 cds-layout="m-b:xl">{{ componentName | capitalize }} Code</h2>-->
    <section cds-layout="m-b:xl" v-for="story in component.stories">
      <h2 cds-layout="m-b:md">{{ story.storyName | capitalize }}</h2>
      <CdsDemo :code="story.code" />
    </section>
  </div>
</template>

<script>
import demos from '../../../data/core-demos.json';

export default {
  name: 'CdsDemos',
  props: ['componentName'],
  computed: {
    component: function () {
      console.log(demos.coreStories.find(s => s.componentName === this.componentName));
      return demos.coreStories.find(s => s.componentName === this.componentName);
    },
  },
};
</script>

<style scoped lang="scss"></style>
