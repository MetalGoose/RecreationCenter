<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, index) in users"
      :key="index"
      cols="3"
      sm="12"
    >
      <home-reservation-card
        :sub-title="item.subtitle"
        :description="item.description"
        :card-bg-images="item.cardBgImages"
        :title="item.title"
      />
    </v-col>
  </v-row>
</template>

<script>
  import HomeReservationCard from '../components/base/HomeReservationCard.vue'
  export default {
    components: {
      HomeReservationCard,
    },

  }
</script>
