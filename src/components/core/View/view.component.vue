<template>
    <v-main class="height-100x">
        <v-container fluid class="py-0 height-100x overflow-auto d-flex flex-column" style="position: relative;">
            <div>
                <router-view />
            </div>
            <!-- 
            <div class="pa-2 d-flex justify-center">
                <div>
                    <span class="top-shadow d-block text-center caption font-weight-medium grey--text text--lighten-2 no-select"> v {{ AppVersion }} </span>
                </div>
            </div> -->
        </v-container>
    </v-main>
</template>

<script lang="ts" src="./view.component.ts" />
