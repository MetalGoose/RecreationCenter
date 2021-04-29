<template>
  <base-section id="features">
    <base-section-heading title="К вашим услугам">
      Наша база отдыха предоставляет множество услуг своим клиентам. Каждый найдет здесь то, что ему подходит.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      features: [
        {
          title: 'Занятия с личным тренером',
          icon: 'mdi-arm-flex',
          text: 'Занятия йогой и тренажерный зал помогут провести время с пользой.',
        },
        {
          title: 'Дикая природа',
          icon: 'mdi-image-size-select-actual',
          text: 'Территория базы находится на побережье реки Волга рядом с живописной березовой рощей',
        },
        {
          title: 'Ресторан и кафе-мороженное',
          icon: 'mdi-ice-pop',
          text: 'К вашим услугам ресторан восточной кухни и кафе-мороженное, которое, несомненно, порадует вас и ваших детей!',
        },
        {
          title: 'Можно с животными!',
          icon: 'mdi-cat',
          text: 'На территории базы находится отель для ваших питомцев. Можно отдыхать и не беспокоиться за своих маленьких друзей!',
        },
        {
          title: 'Корпоративы и праздники',
          icon: 'mdi-cake-variant',
          text: 'Наши ведущие помогут сделать ваше торжество незабываемым!',
        },
        {
          title: '24/7 Поддержка',
          icon: 'mdi-help-circle-outline',
          text: 'Наша служба поддержки работает круглосуточно',
        },
      ],
    }),
  }
</script>
