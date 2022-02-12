<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section class="flex justify-between">
            <div>
              <q-icon name="attach_money"/>
              <q-icon name="lock_open"/>
            </div>
            <div>
              <q-icon name="favorite_border"/>
              67
            </div>
          </q-card-section>
          <q-img
            src="https://picsum.photos/300/200"
          />
        </q-card>

        <div class="q-pt-md">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="notes"
              label="Description"
            >
              <q-card>
                <q-card-section>
                  <div class="Markdownreact__DivContainer-sc-edvquz-0 bHSWKD"><p>This parcel is part of The Sandbox Web3 LAND Sale starting on February 10th at 1PM UTC. This 6x6 Estate M (36 LANDS) is located at (-126,-204) in The Sandbox NFT Metaverse.</p><p>IMPORTANT! In order to redeem this Estate, the winner of the auction should first write to contact@sandbox.game to receive instructions on how transfer this token to The Sandbox team, which will in return transfer the Estate ownership to him/her. More details =&gt;&nbsp;<a class="styles__StyledLink-sc-l6elh8-0 ekTmzq" href="https://medium.com/sandbox-game/the-web-3-land-sale-2c04fb54d3d0" rel="nofollow noopener" target="_blank">https://medium.com/sandbox-game/the-web-3-land-sale-2c04fb54d3d0</a></p></div>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="format_list_bulleted"
              label="About The Sandbox Web3 LAND Sale"
            >
              <q-card>
                <q-card-section>
                  <div class="Markdownreact__DivContainer-sc-edvquz-0 bHSWKD"><p>Introducing the Web3 Hub with our upcoming LAND sale on February 10th at 1PM UTC, in The Sandbox <a class="styles__StyledLink-sc-l6elh8-0 ekTmzq" href="https://medium.com/sandbox-game/the-web-3-land-sale-2c04fb54d3d0" rel="nofollow noopener" target="_blank">https://medium.com/sandbox-game/the-web-3-land-sale-2c04fb54d3d0</a> - This area of our map is the beating heart of decentralization and is all about innovation through technology., featuring Apes of Space, Spores, Blackpool, Mad Mecha, Bears Deluxe, Everdreamsoft, Bubblegum Kids, Knights and of Degen, Arizona, Omnimorphs, Hex Trust,  Bulls on the Block, Multi NFT, The Diggers, eToro and CryptoFoxes. </p><p>With this LAND sale, we are welcoming an exclusive group of collections, brands, DAOs, and individuals are the forefront of technology, who are expanding their presence into our metaverse. Next week’s LAND sale will be your chance to plant your flag in this neighborhood and be closer than ever before to any of the below partners.</p></div>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="list"
              label="Details"
            >
              <q-card>
                <q-card-section>
                  <div class="flex justify-between">
                    <span>Contract Address</span>
                    <span>0x495f...7b5e</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Token ID</span>
                    <span class="ellipsis" style="width: 150px;" @click="copyTextToClipboard('55464657044963196816950587289035428064568320970692304673817341611733178908673')">
                      55464657044963196816950587289035428064568320970692304673817341611733178908673
                    </span>
                  </div>
                  <div class="flex justify-between">
                    <span>Token Standard</span>
                    <span>ERC-1155</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Blockchain</span>
                    <span>Ethereum</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Metadata</span>
                    <span>
                      Editable
                      <q-tooltip>
                        This item's metadata may be changed by its creator
                      </q-tooltip>
                    </span>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>

          </q-list>
        </div>

      </div>
      <div class="col-12 col-md-8">
        <div class="titel text-h5">
          Web3 LAND Sale - 6x6 Estate M [-126,-204]
        </div>
        <div class="text-grey flex justify-between">
          <span>
            Owned by
            TheSandboxGame
            <q-icon name="verified" />
          </span>
          <span>
              <q-icon name="favorite"/>
              67 favorites
          </span>
        </div>
        <q-card class="q-mt-md">
          <q-card-section>
            <div class="text-grey">
              Highest offer
            </div>
            <div>
              <q-icon class="text-h6" name="attach_money" color="light-blue-5"/>
              <span class="text-h6">
                225,000
              </span>
              <span class="text-grey">
                ($1,023,750.00)
              </span>
            </div>
          </q-card-section>
        </q-card>
        <q-expansion-item
          expand-separator
          class="q-mt-md shadow-1 overflow-hidden"
          color="light-blue-5"
          icon="timeline"
          label="Price History"
        >
          <q-card>
            <div class="q-pa-lg text-center">
              <q-icon class="text-h4" name="insights" color="grey"/>
              No item activity yet
            </div>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          class="q-mt-md shadow-1 overflow-hidden"
          color="light-blue-5"
          icon="sell"
          label="Listings"
        >
          <q-card>
            <div class="q-pa-lg text-center">
              <q-icon class="text-h4" name="sell" color="grey"/>
              No listings yet
            </div>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          class="q-mt-md shadow-1 overflow-hidden"
          color="light-blue-5"
          icon="list"
          label="Offers"
        >
          <q-table
            class="my-sticky-header-table"
            :rows="offerRows"
            :columns="offerColumns"
            :rows-per-page-options="[100]"
            row-key="id"
            flat
            bordered
          />
        </q-expansion-item>
      </div>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from 'quasar'
export default {
  name: 'TokenInfo',
  data: () => {
    return {
      offerColumns: [
        { name: 'price', align: 'left', label: 'Price', sortable: true, field: row => row.price },
        { name: 'usd_price', align: 'left', label: 'USD Price', sortable: true, field: row => row.usd_price },
        { name: 'Floor Difference', align: 'left', label: 'Floor Difference', sortable: true },
        { name: 'Expiration', align: 'left', label: 'Expiration', sortable: true, field: row => row.expiration },
        { name: 'From', align: 'left', label: 'From', sortable: true, field: row => row.from }
      ],
      offerRows: [
        {
          id: 1,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 2,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 3,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 4,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 5,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 6,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 7,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 8,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 9,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 10,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        },
        {
          id: 11,
          price: '225,000 SAND',
          usd_price: '$1,023,750.00',
          expiration: 'in 3 days',
          from: 'SaintBayview'
        }
      ]
    }
  },
  methods: {
    copyTextToClipboard (text) {
      copyToClipboard(text)
        .then(() => {
          this.$q.notify('copied to clipboard!')
        })
        .catch(() => {
          // fail
        })
    }
  }
}
</script>

<style scoped>

</style>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  //.q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: white

  .q-table__bottom
    display: none

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
