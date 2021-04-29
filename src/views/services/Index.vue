<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Services',

    metaInfo: { title: 'Услуги' },

    extends: View,

    mixins: [
      LoadSections(['services']),
    ],

    props: {
      id: {
        type: String,
        default: 'services',
      },
    },
  }
</script>
