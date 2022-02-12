<template>
  <q-card v-ripple:cyan @click="goToCollectionList(1)">
    <q-img
      src="https://picsum.photos/300/200"
    />

    <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Become Unstoppable</div>
      <div class="text-caption text-grey">
        Your chance to explore and own an exclusive set of .nft domains
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn outline rounded color="primary" label="live" class="q-mx-auto" @click="goToCollectionList(1)" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'CategoryOfCollectionItem',
  methods: {
    goToCollectionList (categoryId) {
      this.$router.push({ name: 'CollectionList', params: { categoryId } })
    }
  }
}
</script>

<style scoped>

</style>
