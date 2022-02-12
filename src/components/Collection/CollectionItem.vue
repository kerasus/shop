<template>
  <q-card v-ripple:cyan @click="goToTokenInfo">
    <q-img
      src="https://picsum.photos/300/200"
    />

    <q-card-section>

      <div class="row collections-list-row">
        <div class="col-12 col-md-6">
          <span class="text-caption text-grey">
          unstopable Pre ...
          </span>
          <br>
          topdog.nft
        </div>
        <div class="col-12 col-md-6 text-right">
          <span class="text-caption text-grey">
            Price
          </span>
          <br>
          <q-icon name="euro" color="info"/>
          <span>
          0.6
          </span>
          <br>
          <span class="text-caption text-grey">
          <q-icon name="data_saver_off"/>
          7 days left
          </span>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions class="flex justify-between">
      <q-icon name="favorite" color="info"/>
      <q-btn flat color="primary" icon="shopping_cart" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'CollectionItem',
  methods: {
    goToTokenInfo () {
      this.$router.push({ name: 'TokenInfo', params: { tokenId: 1 } })
    }
  }
}
</script>

<style scoped>

</style>
