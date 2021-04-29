<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-instagram
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Социальные медиа"
      >
        Следите за нашими акциями и новостями в удобной для вас социальной сети. Мы повсюду!
      </base-section-heading>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://instagram.com"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Подписаться

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
