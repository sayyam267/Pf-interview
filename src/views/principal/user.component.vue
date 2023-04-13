<template>
    <v-main  class="height-100x overflow-auto">
        <div class=" lighten-5">
            <app-bar-component />
            
            <router-view :key="$route.fullPath" />
        </div>
    </v-main>
</template>

<script lang="ts" src="./user.component.ts" />
