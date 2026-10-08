<script>
export default {
  name: 'App',
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
  <router-view />
  <button @click="$router.push('/villes')">Cliquez bande d'escalopes</button>
</template>

<style scoped></style>
