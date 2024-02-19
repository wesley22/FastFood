<template>
    <ion-page>
        <ion-header class="tw-shadow-none">
            <ion-toolbar >
                <ion-buttons slot="start">
                    <ion-back-button default-href="/foods"></ion-back-button>
                </ion-buttons>
                <ion-title>{{foodSelected && foodSelected.category}}</ion-title>
                <ion-icon aria-hidden="true" :icon="bagHandleOutline" slot="end" class="tw-size-6 tw-pr-5 tw-text-[#D71921]"></ion-icon>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="tw-relative tw-h-screen">
                <div class="tw-flex tw-justify-center itw-tems-center tw-shadow-md tw-bg-[#E9ECEF] tw-w-auto tw-h-[239px] tw-rounded-[16px]">
                    <div class="tw-flex tw-justify-center tw-items-center">
                        <img :src="foodSelected && foodSelected.url" class="tw-mx-auto tw-w-[170px]">
                    </div>
                    <ion-fab class="tw-top-[215px] tw-right-[30px]">
                        <ion-fab-button class="">
                        <ion-icon :icon="heartOutline"></ion-icon>
                        </ion-fab-button>
                    </ion-fab>
                </div>
                <div class="tw-pt-5 tw-font-nunito tw-font-bold tw-text-lg">
                    {{foodSelected && foodSelected.name}}
                </div>
                <div class="star-rating tw-pt-3">
                    <span
                    v-for="star in 5"
                    :key="star"
                    :class="{ 'filled': star <= rating }"
                    >
                    &#9733; <!-- Unicode star character -->
                    </span>
                </div>
                <div class="tw-pt-3">
                    <p class="tw-whitespace-normal tw-font-nunito tw-text-base tw-text-[#6C757D] tw-font-semibold">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.</p>
                </div>
                <div class="tw-flex tw-justify-between tw-items-center tw-pt-2">
                    <div class="tw-flex tw-items-center tw-h-full tw-font-nunito tw-font-bold tw-text-3xl tw-text-[#D71921]">P {{foodSelected && foodSelected.price}}</div>
                    <div class="tw-flex tw-items-center">
                        <div class="">
                            <ion-toolbar class="">
                                <ion-buttons>
                                    <ion-button @click="deductQuantity(foodSelected && foodSelected.price)" :disabled="countQuantity <= 1" class="tw-bg-[#DEE2E6] tw-rounded-[12px] tw-w-[32px] tw-h-[32px] tw-text-[#D71921] tw-font-semibold tw-text-xl">-</ion-button>
                                </ion-buttons>
                            </ion-toolbar>
                        </div>
                        <div class="tw-px-3 tw-pt-1">{{ countQuantity }}</div>
                        <div>
                            <ion-toolbar>
                                <ion-buttons>
                                    <ion-button @click="addQuantity(foodSelected.price)"  class="tw-bg-[#DEE2E6] tw-rounded-[12px] tw-w-[32px] tw-h-[32px] tw-text-[#D71921] tw-font-semibold tw-text-xl">+</ion-button>
                                </ion-buttons>
                            </ion-toolbar>
                          
                        </div>
                    </div>
                </div>
                <div class="tw-pt-5">
                    <div class="tw-font-nunito tw-font-bold tw-text-3xl">Beverage</div>
                    <div class="tw-w-343px tw-pt-3">
                        <ion-select color="transparent" class="tw-border tw-border-gray-300 tw-text-left tw-w-full tw-px-4 tw-py-2 tw-text-sm tw-rounded-[16px]" label="Choose Beverages">
                            <ion-select-option value="option1">Option 1</ion-select-option>
                            <ion-select-option value="option2">Option 2</ion-select-option>
                            <ion-select-option value="option3">Option 3</ion-select-option>
                        </ion-select>
                    </div>
                </div>
                <div class="tw-pt-5">
                    <div class="tw-font-nunito tw-font-bold tw-text-3xl tw-pb-5">Add-Ons</div>
                    <div  class="tw-grid tw-grid-cols-1 tw-gap-2">
                        <div v-for="(addon, index) in addons_list" class="tw-grid tw-grid-cols-3 tw-gap-2 tw-bg-[#E9ECEF] tw-rounded-[16px] tw-py-5 " >
                            <div>
                                <img src="../../public/most_popular/food1.png" class="tw-mx-auto tw-w-[88px] ">
                            </div>
                            <div>
                                <div class="tw-font-nunito tw-font-bold tw-text-md">Tomato Sauce</div>
                                <div class="tw-font-nunito">Sauce</div>
                                <div class="tw-font-nunito tw-font-bold tw-text-xl tw-text-[#D71921]">P 49</div>
                            </div>
                            <div>
                                <div class="tw-text-right tw-pr-4">
                                    <ion-checkbox></ion-checkbox>
                                    <div class="tw-flex tw-pt-5">
                                        <div>
                                            <ion-buttons>
                                                <ion-button class="tw-bg-[#DEE2E6] tw-rounded-[12px] tw-w-[32px] tw-h-[32px] tw-text-[#D71921] tw-font-semibold tw-text-xl">-</ion-button>
                                            </ion-buttons>
                                        </div>
                                        <div class="tw-px-3 tw-pt-1">1</div>
                                        <div>
                                            <ion-buttons>
                                                <ion-button class="tw-bg-[#DEE2E6] tw-rounded-[12px] tw-w-[32px] tw-h-[32px] tw-text-[#D71921] tw-font-semibold tw-text-xl">+</ion-button>
                                            </ion-buttons>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tw-py-5">
                    <ion-buttons>
                        <ion-button @click="proceedCheckout()" expand="block" class="tw-bg-[#D71921] tw-rounded-[16px] tw-w-full tw-h-[60px] tw-text-white tw-font-bold">Add to Bag</ion-button>
                    </ion-buttons>
                </div>
                <SuccessModal :is-open="modalOpen" @dismiss="modalOpen = false"></SuccessModal>
            </div>
            
        </ion-content>
    </ion-page>
  </template>
  <script>
    import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonIcon, IonPage,IonFab, IonFabButton,IonButtons ,IonItem,IonSelect,IonSelectOption,IonGrid, IonRow, IonCol,IonCheckbox,IonBackButton} from '@ionic/vue';
    import { bagHandleOutline,chevronDownCircle,heartOutline } from 'ionicons/icons';
    import { ref, computed,onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useFoodsStore } from '@/stores/store.js'
    import SuccessModal from '../component/modal/Success.vue'

    export default {
        components: { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonIcon, IonPage,IonFab, IonFabButton,IonButtons,IonItem,IonSelect,IonSelectOption,IonGrid, IonRow, IonCol, IonCheckbox, SuccessModal, IonBackButton},
        props: {
            food: Object,
        },
        setup() {
            const store = useFoodsStore();
            const route = useRoute()

            const rating = ref(3.5); 
            const modalOpen = ref(false);
            const countQuantity = ref(1)
            const totalAmount = ref(0)

            const fullStars = computed(() => Math.floor(rating.value));
            const halfStar = computed(() => {
                const decimalPart = rating.value - Math.floor(rating.value);
                return decimalPart >= 0.5 ? Math.ceil(rating.value) : 0;
            });
            const setRating = (star) => {
                rating.value = star;
            };
            
            const proceedCheckout =async () => {
                await store.addOrder(foodSelected.value);
                modalOpen.value = true;
            }

            const foodSelected = computed(() => {
                return store.foodList.find(food => food.id === Number(route.params.id));
            });

            const deductQuantity = (num) => {
                countQuantity.value--
                totalAmount.value -= Number(num)
                console.log("totalAmount.value",totalAmount.value)
            }

            const addQuantity = (num) => {
                countQuantity.value++
                console.log("totalAmount.value",num)

                // totalAmount.value = Number(num)
                totalAmount.value += Number(num)
                console.log("totalAmount.value",totalAmount.value)
            }

            onMounted(async () => {
                await store.fetchFoodFromDB()
            })
            return {
                bagHandleOutline,
                chevronDownCircle,
                heartOutline,
                rating,
                fullStars,
                halfStar,
                setRating,
                addons_list : [
                    { url: '../../public/add_on/ketchup.png', name: "Tomato Sauce", category : "Sauce", price : "175", },
                    { url: '../../public/add_on/rice.png', name: "White Rice", category : "Rice", price : "175", },
                ],
                modalOpen,
                proceedCheckout,
                foodSelected,
                store,
                deductQuantity,
                addQuantity,
                countQuantity,
                totalAmount
            }
        },
    };
  </script>
  <style scoped>
  ion-fab-button {
    --background: #FFFF;
    --background-activated: #FFFF;
    --background-hover: #FFFF;
    --border-radius: 18px;
    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    --color: #D71921;
  }
  .star-rating {
    font-size: 20px; /* Adjust the size of the stars */
  }
  
  .star-rating span {
    cursor: pointer;
    color: #ccc; /* Default color of stars */
  }
  
  .star-rating span.filled {
    color: #ffc107; /* Color of filled stars */
  }
  .plus-button {
    --ion-color-primary: #00000; /* Red color */
    --ion-color-primary-rgb: 255, 0, 0; /* Red color */
  }
  ion-select {
        color: var(--ion-color-primary);
        
    }

    ion-select-option {
        @apply tw-text-base;
    }

    ion-select-popup {
        @apply tw-bg-white;
    }

    ion-select-popup-header {
        @apply tw-bg-gray-100 tw-border-b tw-border-gray-300 tw-px-4 tw-py-2;
    }

    ion-select-popup-item {
        @apply tw-px-4 tw-py-2;
    }

    ion-select-popup-item-selected {
        @apply tw-bg-gray-200;
    }
</style>