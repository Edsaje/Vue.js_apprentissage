<script>
import CitiesList from './views/CitiesList.vue';
export default {
  name: 'App',
  components: {
    CitiesList
  },
  data() {
    return {
      message: 'Bienvenue sur mon app Météo !',
      auteur: 'By: Hibouxe'
    };
  },

  methods: {
    onListClick() {
      alert('click click boom');
    }
  }

};
</script>

<template>
  <h1>{{message}}</h1>
  <p>
    {{ auteur }}
  </p>
  <CitiesList />
  <button @click="onListClick">Cliquez bande d'escalopes</button>
</template>

<style scoped></style>
