<template>
  <q-page>
    <category-collections-carousel />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CategoryCollectionsCarousel from 'components/CategoryCollectionsCarousel'

export default defineComponent({
  name: 'PageIndex',
  components: { CategoryCollectionsCarousel }
})
</script>
