<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Contacts',

    metaInfo: { title: 'Контакты' },

    extends: View,

    mixins: [
      LoadSections(['contacts']),
    ],

    props: {
      id: {
        type: String,
        default: 'contacts',
      },
    },
  }
</script>
