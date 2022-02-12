<template>
  <div class="row collections-carousel-row">
    <div class="col collections-carousel-col">
      <Carousel class="collections-carousel" :settings="settings" :breakpoints="breakpoints" :touch-drag="false" :mouse-drag="false">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">
            <category-of-collection-item />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CategoryOfCollectionItem from 'components/Collection/CategoryOfCollectionItem'

export default {
  name: 'CategoryCollectionsCarousel',
  components: {
    CategoryOfCollectionItem,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 300px and up
      300: {
        itemsToShow: 1.5,
        snapAlign: 'start' // center
      },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'start' // center
      },
      // 1024 and up
      1024: {
        itemsToShow: 4.5,
        snapAlign: 'start'
      }
    }
  })
}
</script>

<style lang="scss">
.collections-carousel-row {
  .collections-carousel-col {
    .collections-carousel {

      margin-right: 20px;
      margin-left: 20px;

      .carousel__item {
        width: 100%;
      }

      .carousel__slide {
        padding: 10px;
      }

      .carousel__prev,
      .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
      }

      .carousel__prev--in-active,
      .carousel__next--in-active {
        display: none;
      }
    }
  }
}
</style>
