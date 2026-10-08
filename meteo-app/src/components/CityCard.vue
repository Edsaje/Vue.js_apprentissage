<script>
export default {
  name: 'CityCard',
  props: ['name', 'weather', 'temperature', 'updatedAt'],
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
    {{ updatedAt?.toLocaleString() }}
  </p>
</template>

<style scoped></style>
