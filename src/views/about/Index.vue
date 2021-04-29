<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'About',

    metaInfo: { title: 'О нас' },

    extends: View,

    mixins: [
      LoadSections(['about']),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
