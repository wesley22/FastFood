<template>
  <ion-app>
    <AppLayout>
      <ion-router-outlet />
    </AppLayout>
  </ion-app>
</template>
<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import AppLayout from './views/AppLayout.vue';
</script>
