<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  selectedVideoIndexes: Array,
});

</script>

<template>
    <div class="seleccionados">
      <h2>Videos Seleccionados</h2>
      <ul>
        <li v-for="(index, videoIndex) in selectedVideoIndexes" :key="index">
          {{ vds.videos[videoIndex].title }}
        </li>
      </ul>
    </div>
  </template>

  <style scoped>
  /* Estilos para el componente Seleccionados.vue */
  .seleccionados {
    background-color: #f2f2f2;
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  </style>