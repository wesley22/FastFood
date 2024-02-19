<template>
    <ion-page>
      <ion-content :fullscreen="true" class="ion-padding">
          <ion-grid class="tw-overflow-hidden">
              <ion-col>
                  <ion-input
                  class="tw-border tw-border-gray-300 tw-rounded-[16px] tw-h-16 placeholder-px-5 "  placeholder="try our new Steak Fries Veggies"
              > <ion-icon aria-hidden="true" :icon="search" slot="start" class="tw-size-6 tw-pl-5 tw-text-[#D71921]"></ion-icon><ion-icon aria-hidden="true" :icon="filterOutline" slot="end" class="tw-size-6 tw-pr-5 tw-text-[#D71921]"></ion-icon></ion-input> 
              </ion-col>
              <ion-col>
                <div class="tw-flex tw-flex-nowrap tw-overflow-x-auto" >
                  <div class="tw-flex tw-flex-nowrap">
                    <div v-for="(category, index) in store.categoryList" :key="index" class="tw-flex-none tw-mr-1 tw-h-auto">
                      <ion-toolbar>
                        <ion-buttons slot="start">
                          <ion-button @click="filterCategory(category)" :class="category != 'All' ? 'tw-bg-[#DEE2E6] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#6C757D] tw-font-bold' : 'tw-bg-[#D71921] tw-rounded-[16px] tw-w-[auto] tw-h-[43px] tw-text-[#FFFFFF] tw-font-bold'">{{category}}</ion-button>
                        </ion-buttons>
                      </ion-toolbar>
                    </div>
                  </div>
                </div>
              </ion-col>
              <ion-col>
                <div class="tw-grid tw-grid-cols-2 tw-gap-4">
                  <div v-for="(food, index) in store.foodList"  class="tw-relative tw-w-[auto] tw-h-[273px] tw-p-5 tw-rounded-lg tw-bg-[#E9ECEF]" @click="router.push({ name : 'FoodPreview', params: {id : food.id} })">
                        <div class="tw-pb-10">
                            <img :src="food.url" class="tw-mx-auto">
                        </div>
                        <div class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-38 tw-p-3">
                        <div class="tw-font-bold tw-text-base tw-font-nunito">{{food.name}}</div>
                        <div class="tw-text-sm tw-font-normal tw-font-nunito">{{food.category}}</div>
                        <div class="tw-flex tw-justify-between tw-pt-5">
                            <h3 class="tw-text-base tw-font-bold tw-text-[#D71921] tw-flex-1">P {{food.price}}</h3>
                            <div class="tw-justify-end ">
                            <div class="star-rating">
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
                <div class="tw-fixed tw-bottom-4 tw-end-0 tw-px-5 tw-transform -translate-x-1/2" v-if="store.addedOrder.length != 0">
            <ion-buttons>
                  <ion-button expand="block" class="tw-bg-[#D71921] tw-rounded-[16px] tw-w-[370px] tw-h-[60px] tw-text-white tw-font-bold" @click="router.push({ name : 'OrderSummary'})">
                    <div class="tw-grid tw-grid-cols-4 tw-gap-2">
                      <div class="">{{ store.addedOrder.length }}</div>
                      <div class="tw-col-span-2">Proceed checkout</div>
                      <div class="">P {{ sumPrice(store.addedOrder) }}</div>
                    </div>
                  </ion-button>
              </ion-buttons>
          </div>
              </ion-col>
             
          </ion-grid>
          
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonImg, IonInput, IonIcon, IonButton, IonButtons} from '@ionic/vue';
  import { search,filterOutline  } from 'ionicons/icons';
  import { ref, computed, onMounted, watch } from 'vue';
  import { useRouter } from 'vue-router';
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
      IonButton, 
      IonButtons, 
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
      
      const sumPrice = (arr) => {
        const prices = arr.map(obj => Number(obj.price));
        console.log(prices)
        const initialValue = 0;
        const sumWithInitial = prices.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue,
        );
        return sumWithInitial;
      }

      const filterCategory = (category) => {
          store.fetchFoodFromDB()
          if (category != "All") {
            const result = store.foodList.filter((food) => food.category == category.toString())
            store.foodList = result
          }else{
            store.fetchFoodFromDB()
          }
      }

      onMounted(() => {
        store.fetchFoodFromDB()
      })

      return {
        search,
        filterOutline,
        filter_category : [
          {name : "All"},
          {name : "Breakfast"},
          {name : "Chicken"},
          {name : "Seafoods"},
          {name : "Dessert"},
        ],
        rating,
        fullStars,
        halfStar,
        setRating,
        router,
        store,
        sumPrice,
        filterCategory
      };
    }
  }
  </script>
  <style scoped>
  

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