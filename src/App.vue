<script setup lang="ts">
import { ref } from "vue";
import NamesList from "./components/NamesList.vue";

let drawer = ref(false);
</script>

<template>
  <v-responsive>
    <v-app>
      <v-app-bar prominent>
        <v-app-bar-nav-icon variant="text" class="menu-button" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Project Template</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" :temporary="$vuetify.display.mobile ? true : false">
        <NamesList />
      </v-navigation-drawer>
      <v-main>
        <RouterView />
      </v-main>
    </v-app>
  </v-responsive>
</template>
