<template>
    <ion-page>
        <ion-content :fullscreen="true" class="ion-padding">
            <div class="tw-grid tw-grid-cols-1 tw-place-content-center tw-h-[500px]">
                <div>
                    <img src="../../public//modal//success_big.png" class="tw-mx-auto tw-w-[161px] ">
                </div>
                <div class="tw-flex tw-justify-center">
                    <div class="tw-pt-20 tw-font-nunito tw-font-bold tw-text-2xl">
                        Order Received!
                    </div>
                </div>
                <div class="tw-font-nunito tw-text-[#6C757D] tw-text-sm tw-text-center">
                    Your order <span class="tw-font-nunito tw-font-bold tw-text-[#D71921]">No. {{store.orderList[0].tracking_number}}</span> has successfully take and now being processed. Kindly wait for our notification regarding your order.
                </div>
                
            </div>
            <div class="tw-grid tw-grid-cols-1 tw-gap-2 tw-pt-[250px]">
                <div class="tw-px-5 tw-pb-0 ">
                    <ion-buttons>
                        <ion-button @click="router.push({ name : 'Home'})" expand="block" class="tw-bg-[#D71921] tw-rounded-[16px] tw-w-full tw-h-[60px] tw-text-white tw-font-bold tw-capitalize">Track Order</ion-button>
                    </ion-buttons>
                </div>
                <div class="tw-text-center tw-text-[#D71921] tw-font-nunito tw-font-bold tw-pt-0 tw-h-[50px]">
                    Back to Home
                </div>
            </div>
        </ion-content>
        
    </ion-page>
</template>
<script>
    import { IonPage,IonContent,IonButton, IonButtons } from "@ionic/vue";
    import { useRouter } from 'vue-router';
    import { useFoodsStore } from '@/stores/store.js'
    export default {
        components : {
            IonPage,IonContent,IonButton, IonButtons
        },
        setup(){
            const router = useRouter(); 
            const store = useFoodsStore();

            return{
                router,
                store
            }
        }
    }
</script>