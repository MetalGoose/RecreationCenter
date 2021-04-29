<template>
  <v-container id="home-reservation-card">
    <v-card
      class="mx-auto"
      max-width="560"
    >
      <v-carousel height="300">
        <v-carousel-item
          v-for="(image,i) in cardBgImages"
          :key="i"
          :src="image"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        {{ subTitle }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="blue"
          text
        >
          Подробнее
        </v-btn>

        <v-spacer />

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider />

          <v-card-text>
            {{ description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    props: {
      title: String,
      subTitle: String,
      description: String,
      cardBgImages: Array,
    },
    data () {
      return {
        show: false,
      }
    },
  }
</script>
