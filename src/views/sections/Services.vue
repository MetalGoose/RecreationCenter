<template>
  <section id="services">
    <v-img
      :max-height="maxHeight"
      :src="require('@/assets/services-img.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .5), rgba(0,0,0,.4)"
    >
      <v-responsive
        class="d-flex align-center mx-auto"
        height="100%"
        max-width="200"
        width="100%"
      >
        <base-heading
          size="text-h2"
          title="Услуги"
          weight="medium"
        />
      </v-responsive>
    </v-img>
    <v-card
      class="d-flex align-center mx-auto"
      height="80%"
      max-width="70%"
    >
      <v-tabs
        color="blue accent-4"
      >
        <v-tab
          v-for="item in items"
          :key="item.title"
        >
          {{ item.title }}
        </v-tab>

        <v-tab-item
          v-for="(item, index) in items"
          :key="index"
        >
          <p
            style="padding: 20px"
            class="text-justify"
          >
            {{ item.text }}
          </p>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(image, i) in item.images"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="require(`@/assets/ServicesImg/${item.folder}/${image}`)"
                  aspect-ratio="1"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </section>
</template>

<script>
  export default {
    name: 'Services',
    data () {
      return {
        tab: null,
        items: [
          {
            title: 'ОРГАНИЗАЦИЯ СВАДЕБ И БАНКЕТОВ',
            folder: 'Wedding',
            images: [
              '1.jpg',
              '2.jpg',
              '3.jpg',
              '4.jpg',
              '5.jpg',
              '6.jpg',
            ],
            text: 'Наш комплекс предлагает Вам возможности для проведения торжеств: дней рождения, свадеб, выездных регистраций, банкетов, корпоративов. • Ресторан до 60 человек • Гриль-бар на берегу до 30 человек • 6 открытых беседок • Закрытая отапливаемая беседка до 15 человек • Оборудованная звуком и светом сцена на берегу реки • Организация развлекательных мероприятий и концертов, детской анимации • Организация рыбалки и охоты',
          },
          {
            title: 'ПРОВЕДЕНИЕ КОНФЕРЕНЦИЙ',
            folder: 'Conferences',
            images: [
              '1.jpg',
              '2.jpg',
              '3.jpg',
            ],
            text: 'Предлагаем своим клиентам конференц-услуги любого формата: корпоративные мероприятия, тимбилдинги, cеминары, конференции. К Вашим услугам оборудованный Конференц-зал до 70 человек. • Мультимедийный проектор. • Экран. • Звукоусилительная аппаратура. • Микрофоны (радиомикрофоны / шнуровой микрофон) • Флип-чарты и маркер. • Организация комплексных обедов и ужинов, кофе-брейков, фуршетов, банкетов.',
          },
          {
            title: 'АКТИВНЫЙ ОТДЫХ',
            folder: 'Active',
            images: [
              '1.jpg',
              '2.jpg',
              '3.jpg',
              '4.jpg',
            ],
            text: 'Волжанка предлагает незабываемый отдых и яркие впечатления на земле, воде и воздухе для активных людей! • Тренажерный зал • 2 бильярдных зала • Дартс • Аэрохоккей • Корт для мини футбола • Волейбольная площадка • Лодки, катамараны, каяки, катера • велосипеды, мопеды, квадрациклы • Тир для стрельбы из пневматических винтовок, лука и арбалета • Зимой ледяная горка, каток, лыжи, тюбинг • Пейнтбол, Laser Tag',
          },
          {
            title: 'БАНИ',
            folder: 'Baths',
            images: [
              '1.jpg',
              '2.jpg',
              '3.jpg',
              '4.jpg',
            ],
            text: 'Предлагаем Вам посетить финскую сауну, турецкий хамам, бассейн и массажный кабинет. Для любителей погорячее русская банька: большая и малая, плавающая банька на воде. Спа-программа с банщиком в русских традициях: прогрев липовыми вениками на сене. Медово-кофейный пилинг с пропаркой дубовыми вениками. Помывка лыковым мочалом.',
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
