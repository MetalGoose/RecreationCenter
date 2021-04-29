<template>
  <v-card
    id="home-reservation-card"
    class="mx-auto"
    max-width="550"
    height="100%"
    hover
  >
    <v-carousel
      dark
      height="300px"
      class="white--text align-end"
    >
      <v-carousel-item
        v-for="(image,i) in cardBgImages"
        :key="i"
        :src="image"
        reverse-transition="fade-transition"
        transition="fade-transition"
      />
    </v-carousel>
    <v-card-text
      class="text--primary"
    >
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>{{ description }}</v-card-subtitle>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
      <v-card-title style="color: green">
        {{ price }}
      </v-card-title>
    </v-card-text>
    <v-spacer />
    <v-card-actions>
      <v-btn
        color="green"
        text
      >
        Бронировать
      </v-btn>

      <v-btn
        color="blue"
        text
      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: String,
      subtitle: String,
      description: String,
      price: String,
      cardBgImages: Array,
    },
    data () {
      return {
        show: false,
      }
    },
  }
</script>
