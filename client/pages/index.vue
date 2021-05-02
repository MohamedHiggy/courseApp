<template>
  <container>
    <template  v-if="this.courses.courses > 0">
        <a-row type="flex" justify="center" align="middle">
          <a-col v-for="course in this.courses.courses" :key="course.id" :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <card :title="course.title" :link="course.slug">
              <p>{{ course.description}}</p>
            </card>
          </a-col>
        </a-row>
    </template>
    <template  v-else>
        <a-row type="flex" justify="center" align="middle">

            <a-alert
              message="Courses"
              description="somthing wrong in get courses please try again in next time"
              type="info"
              show-icon
            />
        </a-row>
    </template>
  </container>
</template>
<script>
  import container from '../components/Container';
  import card from '../components/card';
  import {mapState} from 'vuex'
  export default {
    async fetch({store}) {
      return await store.dispatch('courses/getAllCourses')
    },
    components: {
      container: container,
      card: card
    },
    computed: {
      ...mapState(['courses'])
    },
  }
</script>
