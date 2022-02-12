<template>
  <div ref="myListRef" class="row collections-list-row">
    <div
      v-for="(collectionItem, collectionKey) in 30"
      :key="collectionKey"
      transition="flip-right"
      class="col-6 col-sm-4 col-md-3 collections-list-col"
    >
      <collection-item />
    </div>
  </div>
</template>

<script>
import CollectionItem from 'components/Collection/CollectionItem'
export default {
  name: 'CollectionList',
  components: { CollectionItem }
}
</script>

<style lang="scss" scoped>
.collections-list-row {
  .collections-list-col {
    padding: 10px;
  }
}
</style>
