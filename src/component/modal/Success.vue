<template>
    <ion-page>
      <ion-modal class="" id="example-modal" :is-open="isOpen" @dismiss="dismissModal">
        <ion-content>
          <div class="tw-p-5">
              <div class="tw-pt-5">
                  <img src="../../../public/modal//success.png" class="tw-mx-auto tw-w-[71px]">
              </div>
              <div class="tw-text-center tw-font-nunito tw-font-bold tw-text-lg tw-py-3">Successfully Added!</div>
              <div class="tw-text-center tw-font-nunito tw-font-light tw-text-sm tw-pb-3">What do you want to do now?</div>
              <div class="tw-flex tw-justify-center">
                  <ion-buttons>
                      <ion-button @click="router.push({ name : 'OrderSummary'}),dismissModal()" class="tw-bg-[#D71921] tw-rounded-[16px] tw-w-[213px] tw-h-[45px] tw-text-white tw-capitalize">Proceed to Checkout</ion-button>
                  </ion-buttons>
              </div>
              <div  @click="addMore()" class="tw-text-center tw-text-[#D71921] tw-font-nunito tw-font-bold tw-py-3">
                  Add More
              </div>
          </div>
          <!-- <ion-button @click="dismissModal">Close Modal</ion-button> -->
        </ion-content>
      </ion-modal>
    </ion-page>
  </template>
  
  <script>
  import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPage, IonButtons } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    components: {
      IonModal,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonButton,
      IonPage,
      IonButtons
    },
    props: {
      isOpen: Boolean, // Prop to control modal's visibility
    },
    emits: ['dismiss'], // Emit dismiss event when modal is closed
    setup(props, { emit }) {
      const router = useRouter()

      const dismissModal = () => {
        emit('dismiss'); // Emit dismiss event to close the modal
      };

      const addMore = () => {
        router.push({ name : 'FoodsList'});
        dismissModal();
      }
      return {
        dismissModal,
        router,
        addMore
      };
    },
  });
  </script>
  <style scoped>
   ion-modal#example-modal {
    --width: fit-content;
    --min-width: 327px;
    --height: 298px;
    --border-radius: 16px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }

  /* ion-modal#example-modal h1 {
    margin: 20px 20px 10px 20px;
  } */

  /* ion-modal#example-modal ion-icon {
    margin-right: 6px;

    width: 48px;
    height: 48px;

    padding: 4px 0;

    color: #aaaaaa;
  }

  ion-modal#example-modal .wrapper {
    margin-bottom: 10px;
  } */
    </style>