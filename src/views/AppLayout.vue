<template>
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">This is the menu content.</ion-content>
    </ion-menu>
    <ion-page id="main-content">
      <ion-header v-if="showHeader">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 
        <RouterView />
      </ion-content>
    </ion-page>
  </template>
  
  <script>
    import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { ref,computed } from 'vue';
    import { useRoute } from 'vue-router';
    export default {
        components: {
            IonButtons,
            IonContent,
            IonHeader,
            IonMenu,
            IonMenuButton,
            IonPage,
            IonTitle,
            IonToolbar,
        },
        setup() {
          const router = useRoute();

          // Watch for route changes
          const showHeader = computed(() => {
            // console.log(router)
            return !router.meta.hideHeader;
          });

          return {
            showHeader,
          };
        },
    }
  </script>