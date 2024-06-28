<!-- The List of names that are displayed on the menu -->
<script setup lang="ts">
import useNamesStore from "../store/names/NameStore";

const namesStore = useNamesStore();
namesStore.getNames();
</script>

<template>
  <v-list-item v-for="(name, i) in namesStore.names" :key="i" :to="'/name/' + name">
    <v-list-item-title @onclick="namesStore.select(name)">{{ name }}</v-list-item-title>
  </v-list-item>
</template>
