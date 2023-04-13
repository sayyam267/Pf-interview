<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="$attrs.post.image"
      height="200px"
    ></v-img>
   

    <v-card-title>
      {{$attrs.post.caption}}
    </v-card-title>

   
    <v-card-actions>
      

      <v-spacer></v-spacer>

      <v-btn
        icon
         @click="$emit('edit')"
      >
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>

       <v-btn
        icon
        @click="$emit('delete')"
      >
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </v-card-actions>

    
  </v-card>
</template>
<script lang="ts" src="./post-card.component.ts" />