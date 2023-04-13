<template>
    <v-btn :color="color" v-bind="$attrs" v-on="$listeners" class="font-weight-medium rounded-md px-4" :block="blockPRop">
        <slot />
    </v-btn>
</template>

<script lang="ts" src="./base-btn.ts" />
