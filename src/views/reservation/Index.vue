<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Reservation',

    metaInfo: { title: 'Reservation' },

    extends: View,

    mixins: [
      LoadSections(['reservation']),
    ],

    props: {
      id: {
        type: String,
        default: 'reservation',
      },
    },
  }
</script>
