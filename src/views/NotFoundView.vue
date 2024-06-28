<template>
  <v-container class="fill-height">
    <v-card class="mx-auto align-center" subtitle="Nothing to see here..." width="400">
      <template v-slot:title>
        <span class="font-weight-black">404</span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        Check your router.ts file, you might have forgotten to add a route.
      </v-card-text>
    </v-card>
  </v-container>
</template>
