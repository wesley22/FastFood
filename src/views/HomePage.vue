<template>
  <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-grid class="tw-overflow-hidden">
        <ion-row class="tw-items-start">
          <ion-col class="tw-order-1 ">
            <ion-img src="../../public/logo.png" class="tw-max-w-auto tw-h-[92px] tw-mx-auto"></ion-img>
          </ion-col>
          <ion-col size="8" size-md="6" size-lg="8" class="tw-order-2">
            <div class="box tw-font-nunito tw-text-base tw-font-normal">Anneoyong, Chou!</div>
            <div class="box tw-font-nunito tw-text-2xl tw-font-bold  ">What do you want to eat?</div>
          </ion-col>
        </ion-row>
        <ion-col>
            <ion-input
            class="tw-border tw-border-gray-300 tw-rounded-[16px] tw-h-16 placeholder-px-5"  placeholder="try our new Steak Fries Veggies"
          > <ion-icon aria-hidden="true" :icon="search" slot="start" class="tw-size-6 tw-pl-5 tw-text-[#D71921]"></ion-icon></ion-input> 
        </ion-col>
        <!-- SPECIAL OFFER -->
        <ion-row>
          <ion-col>
            <div class="tw-font-nunito tw-text-2xl tw-font-bold">Special Offers!</div>
          </ion-col>
          <ion-col size="auto" class="tw-flex tw-items-stretch tw-text-[#D71921]">
              <div style="width: 70px" class="tw-font-nunito tw-text-base tw-font-bold tw-self-center">View All </div>
              <div class="tw-self-end">
                <ion-icon  :icon="chevronForwardOutline" class="tw-font-nunito tw-text-base tw-font-normal" ></ion-icon>
              </div>
          </ion-col>
        </ion-row>
        <ion-row class="tw-pt-3">
          <ion-content class="ion-padding-none tw-w-[314px] tw-h-[145px]" scroll-x="true">
            <div class="tw-flex tw-flex-nowrap">
              <div v-for="(image, index) in images" :key="index" class="tw-flex-none tw-mr-4 tw-h-auto">
                <img :src="image.url" class="tw-rounded-lg tw-shadow-md">
              </div>
            </div>
          </ion-content>
        </ion-row>
        <!-- END SPECIAL OFFER -->
        <!-- CATEFORY -->
        <ion-row>
          <ion-col>
            <div class="tw-font-nunito tw-text-2xl tw-font-bold">Category</div>
          </ion-col>
        </ion-row>
        <ion-row class="tw-pt-3">
          <ion-content class="ion-padding-none tw-w-[200px] tw-h-[300px]" scroll-x="true">
            <div class="tw-flex tw-flex-nowrap">
              <div v-for="(image, index) in category_images" :key="index" class="tw-flex-none tw-mr-4 tw-h-auto">
                <img :src="image.url" class="tw-rounded-lg tw-shadow-md">
                <p class="tw-absolute tw-bottom-10 tw-pl-5 tw-text-white tw-text-base ">{{image.name}}</p>
              </div>
            </div>
          </ion-content>
        </ion-row>
        <!--END  CATEFORY -->
        <!--WHATS NEW -->
        <ion-row>
          <ion-col class="">
            <div class="tw-font-nunito tw-text-2xl tw-font-bold">What’s New?</div>
          </ion-col>
        </ion-row>
        <ion-row class="tw-pt-3">
            <div class="">
                <img src="../../public/new/new.png" class="tw-rounded-lg tw-shadow-md">
            </div>
        </ion-row>
        <!--END WHATS NEW -->
        <ion-row class="tw-pt-5">
          <ion-col>
            <div class="tw-font-nunito tw-text-2xl tw-font-bold">Most Popular</div>
          </ion-col>
        </ion-row>
          <div class="tw-grid tw-grid-cols-2 tw-gap-4">
            <div v-for="(image, index) in store.foodList" class="tw-relative tw-w-[auto] tw-h-[273px] tw-p-5 tw-rounded-lg tw-bg-[#E9ECEF]" @click="router.push({ name : 'FoodPreview', params: {id : image.id} })">
              <div class="tw-pb-10">
                <img :src="image.url" class="tw-mx-auto">
              </div>
              <div class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-38 tw-p-3">
                <div class="tw-font-bold tw-text-base tw-font-nunito">{{image.name}}</div>
                <div class="tw-text-sm tw-font-normal tw-font-nunito">{{image.category}}</div>
                <div class="tw-flex tw-justify-between tw-pt-5">
                  <h3 class="tw-text-base tw-font-bold tw-text-[#D71921] tw-flex-1">P {{image.price}}</h3>
                  <div class="tw-justify-end ">
                    <div class="star-rating ">
                      <span
                        v-for="star in 5"
                        :key="star"
                        :class="{ 'filled': star <= rating }"
                      >
                        &#9733; <!-- Unicode star character -->
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
      </ion-grid>
        <div class="tw-fixed tw-bottom-4 tw-end-0 tw-px-5 tw-transform -translate-x-1/2">
            <button @click="router.push({ name : 'FoodsList' })" class="tw-bg-[#D71921] tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-text-sm tw-h-[60px] tw-w-[161px] tw-rounded-[16px] tw-shadow-lg">
            Order Now
          </button>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRouter } from "vue-router";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonImg, IonInput, IonIcon, IonFab, IonFabButton, IonFabList} from '@ionic/vue';
import { search,chevronForwardOutline, chevronUpCircle  } from 'ionicons/icons';
import { ref, computed, onMounted } from 'vue';
import { useFoodsStore } from '@/stores/store.js'
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonInput,
    IonIcon,
    IonFab, 
    IonFabButton, 
    IonFabList
  },
  setup() {
    const router = useRouter();
    const store = useFoodsStore();

    const rating = ref(3.5); 
    const fullStars = computed(() => Math.floor(rating.value));
    const halfStar = computed(() => {
      const decimalPart = rating.value - Math.floor(rating.value);
      return decimalPart >= 0.5 ? Math.ceil(rating.value) : 0;
    });
    const setRating = (star) => {
      rating.value = star;
    };

    // const popularFoods = computed(() => {
    //     return store.categoryList && store.categoryList.filter((category) => category != "Chicken");
    // });


    //START MOUNTED
    onMounted(() => {
      store.fetchFoodFromDB()
    })
    //END MOUNTED

    return {
      search,
      chevronForwardOutline,
      images: [
        { url: '../../public/special_offer/offer1.png' },
        { url: '../../public/special_offer/offer1.png' },
      ],
      category_images : [
        { url: '../../public/category/category1.png', name: "Chicken" },
        { url: '../../public/category/category1.png', name: "Pork" },
        { url: '../../public/category/category1.png', name: "Beef" },
        { url: '../../public/category/category1.png', name: "Cake" },
      ],
      // popular_images : [
      //   { url: '../../public/most_popular/food1.png', name: "Chicken", category : "Dessert", price : "175" },
      //   { url: '../../public/most_popular/food2.png', name: "Pork", category : "Meat", price : "172" },
      //   { url: '../../public/most_popular/food3.png', name: "Beef", category : "Chicken", price : "185" },
      //   { url: '../../public/most_popular/food4.png', name: "Cake", category : "Chicken", price : "175" },
      //   { url: '../../public/most_popular/food4.png', name: "Cake", category : "Chicken", price : "175" },
      //   { url: '../../public/most_popular/food4.png', name: "Cake", category : "Chicken", price : "175" },
      //   { url: '../../public/most_popular/food4.png', name: "Cake", category : "Chicken", price : "175" },
      // ],
      rating,
      fullStars,
      halfStar,
      setRating,
      chevronUpCircle,
      router,
      store,
      // popularFoods
    };
  }
}
</script>

<style scoped>
/* Define styles fo

/* Define styles for the image */
ion-fab-button {
  --background: #FFFF;
  --background-activated: #FFFF;
  --background-hover: #FFFF;
  --border-radius: 18px;
  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  --color: #D71921;
}

html, body {
  overflow: hidden;
}

.star-rating {
  font-size: 14px; /* Adjust the size of the stars */
}

.star-rating span {
  cursor: pointer;
  color: #ccc; /* Default color of stars */
}

.star-rating span.filled {
  color: #ffc107; /* Color of filled stars */
}
</style>
