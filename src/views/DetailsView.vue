<script setup lang="ts">
import { computed, watchEffect } from "vue";
import useNamesStore from "../store/names/NameStore";

const props = defineProps({
  id: String,
});

const nameStore = useNamesStore();

watchEffect(() => {
  nameStore.select(props.id ?? "");
});

const selected = computed(() => nameStore.selected);
</script>

<template>
  <v-container class="fill-height">
    <v-card class="mx-auto align-center" width="400" prepend-icon="mdi-human">
      <template v-slot:title>
        <span class="font-weight-black">You selected:</span>
      </template>
      <v-card-text class="bg-surface-light pt-4">
        {{ selected }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
