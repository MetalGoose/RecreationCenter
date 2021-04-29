<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-home',
          title: 'Шарокий выбор домов и комнат на любой вкус',
          text: 'Поможем подобрать удобное место для вас, ваших близких и гостей.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Услуги фотографа',
          text: 'Запечатлим памятные моменты вашей жизни.',
        },
        {
          icon: 'mdi-map-clock-outline',
          title: 'Удобное расположение',
          text: 'База отдыха находится в 20 минутах езды от города. Так же рядом есть остановка общественного транспорта.',
        },
        {
          icon: 'mdi-phone-alert',
          title: 'Обратный звонок',
          text: 'Заказжите обратный звонок и наши менеджеры свяжутся с вами в любое удобное для вас время.',
        },
      ],
    }),
  }
</script>
