<script setup>
import { reactive, ref } from 'vue';

let selectedVideoIndex = ref(null);

function selectVideo(index) {
  selectedVideoIndex.value = index;
}

function isSelected(index) {
  return selectedVideoIndex.value === index;
}

let vds = reactive({ 
  videos: [
    {
      "title": "Introducción a la inteligencia artificial",
      "description": "Aprende los conceptos básicos de la inteligencia artificial en este video introductorio.",
      "views": 12345,
      "likes": 678,
      "dislikes": 12,
      "duration": "12:30",
      "url": "https://i.ytimg.com/vi/ufp7Q7FjwtY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOI0EfQ8bpzV6zQdW8h6msmKr9FQ"
    },
    {
      "title": "Recetas saludables para la semana",
      "description": "Descubre deliciosas recetas saludables que puedes preparar durante toda la semana.",
      "views": 54321,
      "likes": 987,
      "dislikes": 21,
      "duration": "15:45",
      "url": "https://i.ytimg.com/vi/9Xb4LgU0Vnc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgs7_UhbHsG-kp9ZdBB3rnpwDhSg"
    },
    {
      "title": "Rutina de ejercicios en casa",
      "description": "Sigue esta rutina de ejercicios para mantenerte en forma desde la comodidad de tu hogar.",
      "views": 8765,
      "likes": 234,
      "dislikes": 4,
      "duration": "20:10",
      "url": "https://i.ytimg.com/vi/tf3zRHOZ10w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBe6U8JWKlBczNWpQrWP0dTR1uprA"
    },
    {
      "title": "Tutorial de maquillaje natural",
      "description": "Aprende a crear un look de maquillaje natural y radiante con estos consejos y trucos.",
      "views": 34567,
      "likes": 567,
      "dislikes": 9,
      "duration": "8:55",
      "url": "https://i.ytimg.com/vi/nJuncqBRqRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByqIh7Y2kQcb2dUS00M4b28cFjJw"
    },
    {
      "title": "Reseña de la última película",
      "description": "Analizamos en detalle la trama, actuaciones y efectos especiales de la película más reciente.",
      "views": 7654,
      "likes": 123,
      "dislikes": 2,
      "duration": "18:20",
      "url": "https://i.ytimg.com/vi/0rxRVtXyVEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBId46cSDNoS_Wu9x2F3RVx-RlIDg"
    },
    {
      "title": "Vlog de viaje: Explorando Nueva York",
      "description": "Acompáñanos en este emocionante vlog mientras recorremos los lugares más icónicos de Nueva York.",
      "views": 23456,
      "likes": 345,
      "dislikes": 6,
      "duration": "25:30",
      "url": "https://i.ytimg.com/vi/068e3qoqEqg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvVggQk0fILpvHb7J6rgJ9wiQTEA"
    },
    {
      "title": "Consejos para el cuidado de las plantas",
      "description": "Descubre cómo mantener tus plantas felices y saludables con estos consejos de expertos.",
      "views": 6543,
      "likes": 98,
      "dislikes": 1,
      "duration": "10:15",
      "url": "https://i.ytimg.com/vi/0rxRVtXyVEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBId46cSDNoS_Wu9x2F3RVx-RlIDg"
    },
    {
      "title": "Entrevista con un astronauta",
      "description": "Conoce las experiencias en el espacio de un astronauta que vivió en la Estación Espacial Internacional.",
      "views": 5432,
      "likes": 76,
      "dislikes": 3,
      "duration": "14:05",
      "url": "https://i.ytimg.com/vi/aFfWlZ0_OSk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5bB9ogdyvTFqMzWU4kLzfkJYlqQ"
    },
    {
      "title": "Tutorial de guitarra para principiantes",
      "description": "Aprende los conceptos básicos de tocar la guitarra y toca tus primeras canciones en poco tiempo.",
      "views": 9876,
      "likes": 234,
      "dislikes": 5,
      "duration": "22:40",
      "url": "https://i.ytimg.com/vi/dH2xVTWSXCA/hq720_live.jpg?sqp=COTf9aYG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8crW9qrmNIOGSecbV24s3wFlcyg"
    },
    {
      "title": "Recorrido por un parque temático",
      "description": "Disfruta de la emoción y la diversión en nuestro recorrido por las atracciones de este parque temático.",
      "views": 4567,
      "likes": 67,
      "dislikes": 0,
      "duration": "16:30",
      "url": "https://i.ytimg.com/vi/FpODEMhiDJA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWM5VuZbSnXb7hkzWkR4KsGz0bXg"
    },
    {
      "title": "Cocinando platos exóticos",
      "description": "Explora sabores únicos y cocina platos exóticos de diferentes partes del mundo con nosotros.",
      "views": 7654,
      "likes": 123,
      "dislikes": 3,
      "duration": "19:25",
      "url": "https://i.ytimg.com/vi/2vzI438nab4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGGV3yn7f9r1Zc3pS_zsWngIbTHg"
    },
    {
      "title": "Tutorial de baile: Pasos básicos de salsa",
      "description": "Aprende los movimientos básicos de la salsa y sorprende en la pista de baile.",
      "views": 5432,
      "likes": 65,
      "dislikes": 1,
      "duration": "11:15",
      "url": "https://i.ytimg.com/vi/C3HAnnJJev8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQdUIQlMv4aDuNPtdtPgBRLIY49Q"
    },
    {
      "title": "Reseña de videojuegos: Último lanzamiento",
      "description": "Analizamos a fondo el último videojuego que ha causado sensación en el mundo gamer.",
      "views": 8765,
      "likes": 234,
      "dislikes": 6,
      "duration": "17:50",
      "url": "https://i.ytimg.com/vi/n6c3aBqDTpg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsU3fuSgSPRXSItQjqgTYGhTl_5A"
    },
    {
      "title": "Tutorial de origami: Cómo hacer grullas de papel",
      "description": "Aprende la hermosa técnica del origami y crea grullas de papel con este tutorial paso a paso.",
      "views": 2345,
      "likes": 34,
      "dislikes": 0,
      "duration": "9:10",
      "url": "https://www.youtube.com/watch?v=video_id_14"
    },
    {
      "title": "Consejos de moda para el verano",
      "description": "Descubre las últimas tendencias de moda para lucir increíble durante la temporada de verano.",
      "views": 5432,
      "likes": 76,
      "dislikes": 2,
      "duration": "13:40",
      "url": "https://www.youtube.com/watch?v=video_id_15"
    },
    {
      "title": "Viaje en crucero: Experiencia en alta mar",
      "description": "Embárcate en un emocionante viaje en crucero y descubre las maravillas del océano.",
      "views": 9876,
      "likes": 123,
      "dislikes": 4,
      "duration": "21:15",
      "url": "https://www.youtube.com/watch?v=video_id_16"
    },
    {
      "title": "Aprende a tejer tu bufanda",
      "description": "Si siempre quisiste aprender a tejer, este tutorial te guiará para crear tu propia bufanda.",
      "views": 4567,
      "likes": 65,
      "dislikes": 1,
      "duration": "14:20",
      "url": "https://www.youtube.com/watch?v=video_id_17"
    },
    {
      "title": "Documental de vida marina",
      "description": "Sumérgete en las profundidades del océano y descubre la asombrosa vida marina que habita en él.",
      "views": 7654,
      "likes": 234,
      "dislikes": 7,
      "duration": "26:30",
      "url": "https://www.youtube.com/watch?v=video_id_18"
    },
    {
      "title": "Entrenamiento para maratón: Preparación y consejos",
      "description": "Si estás pensando en correr un maratón, estos consejos y entrenamientos te serán de gran ayuda.",
      "views": 2345,
      "likes": 56,
      "dislikes": 0,
      "duration": "16:55",
      "url": "https://www.youtube.com/watch?v=video_id_19"
    },
    {
      "title": "Tour por mi estudio de arte",
      "description": "Descubre dónde sucede la magia en este recorrido por mi espacio de creación artística.",
      "views": 5432,
      "likes": 87,
      "dislikes": 3,
      "duration": "12:05",
      "url": "https://www.youtube.com/watch?v=video_id_20"
    }
  ]
});

// let selectedVideoIndexes = ref([]);
// function selectVideo(index) {
//   const selectedIndex = selectedVideoIndexes.value.indexOf(index);
//   if (selectedIndex === -1) {
//     selectedVideoIndexes.value.push(index);
//   } else {
//     selectedVideoIndexes.value.splice(selectedIndex, 1);
//   }
// }

// function isSelected(index) {
//   return selectedVideoIndexes.value.includes(index);
// }

</script>

<template>
  <div :class="{ oculto: isDireccionesVisible}">
    <div>
      <!-- <h1><p>Estado de selección: {{ selectedStatus }}</p></h1> -->
    </div>
    <div class="clases">
      <div v-for="(video, index) in vds.videos.slice(0, 12)" class="container-videos " >
        <img :src="video.url" :key="index" @click="selectVideo(index)" :class="{ selec: isSelected(index) }" alt="">
        <div class="container-datos">
          <h4>{{ video.title }}</h4>
          <p>{{ video.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* videos */
.container-videos {
  display: inline-block;
  margin-left: 30px;
  margin-bottom: 20px;
}

.container-videos .selec {
  filter: invert(65%) sepia(94%) saturate(3935%) hue-rotate(90deg) brightness(122%) contrast(110%) opacity(0.5);
}
.clases {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  margin-top: 100px;
}
.container-videos {
  height: 300px;
  width: 200px;
  margin-right: 30px;
}

.container-datos {
  width: 100%;
  height: auto;
}
.container-videos>img {
  width: 280px;
  height: 180px;
}
/* Fin de videos */
.oculto {
  display: none;
}
</style>
