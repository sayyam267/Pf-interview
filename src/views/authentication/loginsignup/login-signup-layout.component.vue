<template>
    <v-app class="height-100x">
        <v-row :class="{'dual-colored': $vuetify.breakpoint.mdAndUp}" class="light-grey ma-0  overflow-auto">
            <v-col offset-md="2" cols="12" md="8" align-self="center">
                <v-card class="white card pa-3">
                    <v-row>
                        <v-col cols="12" md="6" style="padding: 1rem">
                            <router-view />
                        </v-col>
                        <v-col class="pr-11 align-center justify-center ma-auto" cols="12" md="6">
                           
                            <!-- <div class="d-flex align-center justify-center overflow-x-auto px-8"> -->
                 
        
                                        <v-card color="white"  class="rounded-lg  pa-3">
                                             <v-img width="500" height="500" :src="'images/Hero/images/'+$route.meta.img+'.png'"  />
                                        </v-card>
                                   
                            <!-- </div> -->
                        </v-col>
                        
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>
<style lang="scss" scoped>
.card {
    width: 100%;
    opacity: 95%;
    border-radius: 1rem !important;
    // box-shadow: 0px 5px 30px 10px rgb(49, 49, 49, 0.2) !important;
    box-shadow: 0px 72px 80px -48px #223A28;
}

.dual-colored {
    background: linear-gradient(126.22deg, #3A277C 4.79%, #7E5FE7 54.4%);
}
.transparent-card {
    background-color: rgba(7, 7, 7, 0.1) !important;
}
</style>

<script lang="ts" src="./auth-layout.component.ts" />


<script lang="ts" src="./login-signup-layout.component.ts" />
