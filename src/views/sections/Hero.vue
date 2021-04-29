<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading
            size="text-h2"
            title="Добро пожаловать на базу отдыха 'Волжанка'"
            weight="medium"
          />

          <base-body>
            База отдыха "Волжанка" расположена на левом берегу р. Волга в 1,5 км ниже с. Курочкино Приволжского района, на площади 2,1 га. Всего 20 минут от г. Ульяновск и вы попадаете в удивительный мир природы, где рядом с березовой рощей растут ели, сосны, можжевельник.
            <br>
            Можно прогуляться по аллеям, помечтать у причала, полюбоваться лотосами, отведать вкусного шашлыка с мангала, расположенного около каждого номера, попариться в сауне на дровах...
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Узнать больше
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">или</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Забронировать дом
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
