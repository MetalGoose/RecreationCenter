<template>
  <section
    id="contacts"
  >
    <v-img
      :max-height="maxHeight"
      :src="require('@/assets/contact.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="300"
          width="100%"
        >
          <base-heading
            size="text-h2"
            title="Контакты"
            weight="medium"
          />
        </v-responsive>
      </v-container>
    </v-img>
    <base-section
      height="100%"
      space="0"
    >
      <base-section
        id="contactsInfo"
        space="20"
      >
        <v-container>
          <v-row>
            <v-col
              v-for="(data, i) in contactsData"
              :key="i"
              cols="12"
              md="6"
            >
              <base-info-card
                align="center"
                dark
                v-bind="data"
              />
            </v-col>
          </v-row>
        </v-container>
        <div
          class="d-flex flex-column justify-space-between align-center"
          style="padding: 20px"
        >
          <v-img
            :src="require('@/assets/Map.png')"
            :max-width="'70%'"
          />
        </div>
      </base-section>
    </base-section>
  </section>
</template>

<script>
  export default {
    name: 'SectionContacts',
    data: () => ({
      contactsData: [
        {
          title: 'Загородный комплекс «Волжанка» расположен в Ульяновской области, Калининский район, деревня Юрьевское, 170504',
          icon: 'mdi-map-marker-circle',
        },
        {
          title: 'По любым вопросам обращайтесь:',
          icon: 'mdi-phone',
          text: '+7 (918) 969-05-51',
        },
      ],
    }),
    provide: {
      theme: { isDark: true },
    },
    computed: {
      maxHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '30vh' : '20vh'
        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
