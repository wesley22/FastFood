<template>
    <ion-page>
        <ion-header class="tw-shadow-none">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/foods"></ion-back-button>
            </ion-buttons>
            <ion-title>Order Summary</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding-none">
            <div class="tw-grid tw-grid-cols-1 ">
                <ion-list>
                    <ion-item-sliding>
                        <ion-item class="tw-bg-[#E9ECEF] tw-rounded-[16px] tw-pr-0 tw-border-0">
                            <div class="tw-bg-[#E9ECEF] tw-rounded-[16px] tw-w-full tw-px-5 tw-py-3 tw-border-0">
                                <div class="tw-font-nunito tw-font-bold tw-text-sm tw-pb-3">Chou Tzuyu</div>
                                <div class="tw-font-nunito tw-font-light tw-text-[#6C757D] tw-text-sm">+63 912 345 6789</div>
                                <div class="tw-font-nunito tw-font-light tw-text-[#6C757D] tw-text-sm">chou.tzu-yu@email.com</div>
                            </div>
                        </ion-item>

                        <ion-item-options>
                            <ion-item-option class="tw-bg-[#FD7E14]/20 tw-rounded-[16px] tw-mx-2 tw-w-[44px]">
                                <ion-icon aria-hidden="true" :icon="pencilOutline" slot="icon-only" class="tw-text-[#FD7E14]"></ion-icon>
                            </ion-item-option>
                            <ion-item-option class="tw-bg-[#DC3545]/20 tw-rounded-[16px] tw-mx-2 tw-w-[44px]">
                                <ion-icon aria-hidden="true" :icon="trashOutline" slot="icon-only" class="tw-text-[#DC3545]"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>
                    </ion-item-sliding>
                </ion-list>
                <ion-list>
                    <ion-item-sliding>
                        <ion-item class="tw-bg-[#E9ECEF] tw-rounded-[16px] tw-pr-0 tw-border-0">
                            <div class="tw-bg-[#E9ECEF] tw-rounded-[16px] tw-w-full tw-px-5 tw-py-3 tw-border-0">
                                <div class="tw-font-nunito tw-font-bold tw-text-sm tw-pb-3">My Home Address</div>
                                <div class="tw-font-nunito tw-font-light tw-text-[#6C757D] tw-text-sm">No. 21 St. Agustin Street, </div>
                                <div class="tw-font-nunito tw-font-light tw-text-[#6C757D] tw-text-sm">Brgy. De Jose Delgado City 2234 Philippines</div>
                            </div>
                        </ion-item>

                        <ion-item-options>
                            <ion-item-option class="tw-bg-[#FD7E14]/20 tw-rounded-[16px] tw-mx-2 tw-w-[44px]">
                                <ion-icon aria-hidden="true" :icon="pencilOutline" slot="icon-only" class="tw-text-[#FD7E14]"></ion-icon>
                            </ion-item-option>
                            <ion-item-option class="tw-bg-[#DC3545]/20 tw-rounded-[16px] tw-mx-2 tw-w-[44px]">
                                <ion-icon aria-hidden="true" :icon="trashOutline" slot="icon-only" class="tw-text-[#DC3545]"></ion-icon>
                            </ion-item-option>
                        </ion-item-options>
                    </ion-item-sliding>
                </ion-list>
            </div>
            <div class="tw-p-5">
                <div class="tw-font-nunito tw-font-bold tw-text-xl">Order</div>
                <!-- {{ store.addedOrder }} -->
                <div v-for="(order,index) in store.addedOrder" class="tw-grid tw-grid-cols-1 tw-gap-2 tw-py-2">
                    <div class="tw-bg-[#E9ECEF] tw-rounded-[16px]">
                        <div class="tw-grid tw-grid-cols-3 tw-gap-2 tw-py-5">
                            <div>
                                <img :src="order.url" class="tw-mx-auto tw-w-[67px] ">
                            </div>
                            <div class="tw-col-span-2">
                                <div>{{order.name}}</div>
                                <div>1x Tomato Sauce</div>
                            </div>
                        </div>
                        <div class="tw-mx-auto tw-border-b tw-border-gray-300 tw-w-[305px]"></div>
                        <div class="tw-flex tw-justify-between tw-p-2 tw-px-8">
                            <div class="tw-flex tw-items-center tw-h-full tw-font-nunito tw-font-bold tw-text-lg tw-text-[#D71921]">P {{order.price}}</div>
                            <div class="tw-flex tw-pt-0">
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
            <div>
                <div class="tw-font-nunito tw-font-bold tw-text-xl tw-px-5">Payment Option</div>
                <div class="tw-grid tw-grid-cols-1 tw-gap-2 tw-px-5">
                    <div class="tw-grid tw-grid-cols-4 tw-gap-2 tw-bg-[#E9ECEF] tw-rounded-[16px] tw-py-5">
                        <div class="tw-col-span-3 tw-px-5">
                            <div class="tw-flex">
                                <div class="tw-font-nunito tw-font-bold tw-text-base tw-pr-2">Loyalty Points</div>
                                <div class="tw-font-nunito tw-font-bold tw-text-base tw-text-[#D71921]">(0 Points)</div>
                            </div>
                            <div class="tw-font-nunito tw-font-light tw-text-sm">Pay  using your earned loyalty points</div>
                        </div>
                        <div class="tw-flex tw-justify-end tw-pr-5">
                            <ion-radio class="tw-ml-2"></ion-radio><br />
                        </div>
                    </div>
                    <div class="tw-grid tw-grid-cols-4 tw-gap-2 tw-bg-[#E9ECEF] tw-rounded-[16px] tw-py-5">
                        <div class="tw-col-span-3 tw-px-5">
                            <div class="">
                                <img src="../../public/payment_option/paypal.png" class="tw-w-[80px]">
                            </div>
                            <div class="tw-font-nunito tw-font-light tw-text-sm">A new tab will open to access your account</div>
                        </div>
                        <div class="tw-flex tw-justify-end tw-pr-5">
                            <ion-radio class="tw-ml-2"></ion-radio><br />
                        </div>
                    </div>
                    <div class="tw-grid tw-grid-cols-4 tw-gap-2 tw-bg-[#E9ECEF] tw-rounded-[16px] tw-py-5">
                        <div class="tw-col-span-3 tw-px-5">
                            <div class="">
                                <img src="../../public/payment_option/paynamic.png" class="tw-w-[80px]">
                            </div>
                            <div class="tw-font-nunito tw-font-light tw-text-sm">Choose paynamics services available from you</div>
                        </div>
                        <div class="tw-flex tw-justify-end tw-pr-5">
                            <ion-radio class="tw-ml-2"></ion-radio><br />
                        </div>
                    </div>
                </div>
            </div>
            <div class="tw-pt-5 tw-px-5">
                <div class="tw-flex tw-justify-between">
                    <div>Subtotal</div>
                    <div>P {{sumPrice(store.addedOrder)}}</div>
                </div>
                <div class="tw-flex tw-justify-between">
                    <div>Delivery Charge</div>
                    <div>P {{delivery_fee}}</div>
                </div>
                <div>
                    <ion-col>
                        <ion-input label-placement="floating" value="0" :disabled="true" class="tw-border tw-border-gray-300 tw-rounded-[16px]  ion-padding-left " placeholder="Change for">
                            <div slot="label" class="">Change for</div>
                        </ion-input> 
                    </ion-col>
                </div>
            </div>
            <div >
                <div class="tw-mx-auto tw-border-b tw-border-gray-300 "></div>
                <div class="tw-grid tw-grid-cols-2 tw-gap-2 tw-p-5">
                    <div>
                        <div class="tw-font-nunito tw-text-sm">Grand Total</div>
                        <div class="tw-font-nunito tw-text-lg tw-font-bold">P {{sumPricewithDF(store.addedOrder)}}</div>
                    </div>
                    <div>
                        <ion-buttons>
                            <ion-button @click="handlePlaceOrder(store.addedOrder)" class="tw-bg-[#D71921] tw-rounded-[16px] tw-w-[213px] tw-h-[45px] tw-text-white tw-capitalize">Place Order</ion-button>
                        </ion-buttons>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
    import { IonHeader, IonTitle, IonToolbar, IonContent, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage,IonIcon, IonItemDivider,IonRadio, IonButton, IonButtons,IonInput,IonCol,IonText, IonBackButton} from '@ionic/vue';
    import { pencilOutline,trashOutline } from 'ionicons/icons';
    import { ref, computed, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useFoodsStore } from '@/stores/store.js'
    export default {
        components: { IonHeader, IonTitle, IonToolbar, IonContent, IonItem,IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage,IonIcon, IonItemDivider,IonRadio, IonButton, IonButtons,IonInput,IonCol,IonText, IonBackButton},
        setup(){
            const router = useRouter(); 
            const store = useFoodsStore();
            const delivery_fee = ref(59)
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
            const sumPricewithDF = (arr) => {
                const prices = arr.map(obj => Number(obj.price));
                prices.push(delivery_fee.value)
                console.log(prices)
                const initialValue = 0;
                const sumWithInitial = prices.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                initialValue,
                );
                return sumWithInitial;
            }
            const handlePlaceOrder = (order) => {
                store.placeOrder(order)
                console.log("this.addedOrder",store.orderList[0].tracking_number);
                router.push({ name : 'OrderReceived'})
            }
            return {
                pencilOutline,
                trashOutline,
                store,
                router,
                sumPrice,
                delivery_fee,
                sumPricewithDF,
                handlePlaceOrder
            }
        }
    }
</script>
<style scoped>
ion-item-slider .item-inner{
    background-color: lightgray;
    border-bottom: 0px !important;
}
.ion-padding-left {
    --padding-start: 16px; /* Adjust the padding as needed */
  }
</style>