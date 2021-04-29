<template>
  <div id="reservation">
    <v-img
      :max-height="maxHeight"
      :src="require('@/assets/reservation-img.jpg')"
      class="white--text"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="500"
          width="100%"
        >
          <base-heading
            size="text-h2"
            title="Номерной фонд"
            weight="medium"
          />
        </v-responsive>
      </v-container>
    </v-img>
    <v-container class="grey lighten-5">
      <v-row>
        <template v-for="(item, n) in users">
          <v-col
            :key="n"
          >
            <reservation-card
              style="flex: 1 1 auto;"
              :subtitle="item.subtitle"
              :description="item.description"
              :card-bg-images="item.cardBgImages"
              :title="item.title"
              :price="item.price"
            />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import ReservationCard from '../../components/base/ReservationCard.vue'
  export default {
    name: 'SectionReservation',
    components: { ReservationCard },
    provide: {
      theme: { isDark: false },
    },
    data () {
      return {
        users: [
          {
            title: 'КОТТЕДЖ №1',
            subtitle: 'В любую погоду отдыхающим будет приятно отдохнуть под навесом на просторной веранде коттеджа, оборудованной мангалом. ',
            description: 'Коттедж расположен в нескольких шагах от живописного берега Волги. В распоряжении отдыхающих -  просторный холл и 3 уютные спальни с двуспальной кроватью, санузлом и душевой кабиной в каждой. Коттедж рассчитан на 6 человек, но, при необходимости, можно разместить еще 4-х гостей на двух диванах в холле.',
            price: '11 000 р. (завтраки включены)',
            cardBgImages: [
              require('@/assets/ReservationImg/1/00.jpg'),
              require('@/assets/ReservationImg/1/01.jpg'),
              require('@/assets/ReservationImg/1/02.jpg'),
            ],
          },
          {
            title: 'КОТТЕДЖ №2',
            subtitle: 'Возле коттеджа расположена беседка, оборудованная мангалом.',
            description: 'Коттедж расположен недалеко от берега Волги. В распоряжении отдыхающих -  просторный холл и 7 уютных спален с двуспальной кроватью, санузлом и душевой кабиной в каждой. В одной из комнат - двуспальная кровать и полутороспальная кровать. Коттедж рассчитан на единовременное размещение до 21 человек: 15 основных спальных мест и 6 дополнительных (за отдельную плату*).',
            price: '27 500 р. (завтраки включены)',
            cardBgImages: [
              require('@/assets/ReservationImg/2/00.jpg'),
              require('@/assets/ReservationImg/2/01.jpg'),
              require('@/assets/ReservationImg/2/02.jpg'),
            ],
          },
          {
            title: 'КОТТЕДЖ №3',
            subtitle: 'Коттедж обладает отличительной особенностью - одна из спален имеет отдельный вход. В каждой спальне есть отдельный санузел с душевой кабиной.',
            description: 'В распоряжении отдыхающих -  просторный холл и 4 уютные спальни с двуспальными кроватями. Коттедж рассчитан на 8 человек, но, при необходимости, можно разместить 2х гостей на диване в холле (за дополнительную плату*).',
            price: '17 500 р. (завтраки включены)',
            cardBgImages: [
              require('@/assets/ReservationImg/3/00.jpg'),
              require('@/assets/ReservationImg/3/01.jpg'),
              require('@/assets/ReservationImg/3/02.jpg'),
            ],
          },
          {
            title: 'КОТТЕДЖ №4',
            description: 'Коттедж способен единовременно разместить до 20 человек (16 основных спальных мест + 4 дополнительных). В распоряжении отдыхающих большой холл и 8 комфортабельных спален, 6 из которых с двуспальными кроватями, одна с односпальной и спальня с двухспальной и полутороспальной кроватями, в каждой спальне есть санузел с душевой кабиной.',
            price: '21 700 (завтраки включены)',
            cardBgImages: [
              require('@/assets/ReservationImg/4/00.jpg'),
              require('@/assets/ReservationImg/4/01.jpg'),
              require('@/assets/ReservationImg/4/02.jpg'),
            ],
          },
          {
            title: 'КОТТЕДЖ №5',
            subtitle: 'Рядом с коттеджем расположены 2 беседки, оборудованные мангалами.',
            description: 'В коттедже общей площадью 136 кв.м могут свободно разместиться до 11-13 человек. Отличительной особенностью постройки является наличие 3 отдельных входов, два из которых ведут в спальни с двуспальными кроватями, а третий вход - в холл и 4 спальни: в трёх из них по 2 односпальные кровати, а в четвертой - 1 односпальная кровать. Каждая спальня оборудована отдельным санузлом и душевой кабиной.',
            price: '19 000 (завтраки включены)',
            cardBgImages: [
              require('@/assets/ReservationImg/5/00.jpg'),
              require('@/assets/ReservationImg/5/01.jpg'),
              require('@/assets/ReservationImg/5/02.jpg'),
            ],
          },
          {
            title: 'КОТТЕДЖ №6',
            subtitle: 'В любую погоду отдыхающим будет приятно отдохнуть под навесом на просторной веранде коттеджа, оборудованной мангалом.',
            description: 'В распоряжении отдыхающих -  просторный холл и 7 уютных спален с двуспальной кроватью, в одной из которых есть дополнительная полутороспальная кровать, санузлом и душевой кабиной в каждой. Коттедж рассчитан на единовременное размещение до 19 человек: 15 основных спальных мест и 4 дополнительных (за отдельную плату*) на диване в спальне и в холле.',
            price: '22 000 (завтраки включены)',
            cardBgImages: [
              require('@/assets/ReservationImg/6/00.jpg'),
              require('@/assets/ReservationImg/6/01.jpg'),
              require('@/assets/ReservationImg/6/02.jpg'),
            ],
          },
        ],
      }
    },
    computed: {
      maxHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '30vh' : '20vh'
        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
