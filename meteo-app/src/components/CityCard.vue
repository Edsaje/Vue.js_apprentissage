<script>
import { format } from 'timeago.js'
export default {
  name: 'CityCard',
  props: ['name', 'weather', 'temperature', 'updatedAt'],
  computed: {
    formattedDate() {
      return format(this.updatedAt)
    }
  }
};
</script>

<template>
  <h3>{{name}}</h3>
  <p>
    {{ weather }}
  </p>
  <p>
     {{ temperature }}
  </p>
  <p>
    {{ formattedDate }}
  </p>
</template>

<style scoped></style>
