<template>
    <div>
        <v-app-bar color="darkgrey" app clipped dark>
            <v-app-bar-nav-icon @click="CoreSrv.Drawer.Mini = !CoreSrv.Drawer.Mini" color="muted"></v-app-bar-nav-icon>
           <div>{{ UserSrv.currentUser.name }}</div>
            <v-spacer></v-spacer>

            
            <v-btn @click="logout" color="primarypurple" elevation="2" small>
               
                Log out
            </v-btn>
                <v-divider inset class="ml-2" vertical></v-divider>
            
            
            

            

           
        </v-app-bar>
    </div>
</template>
<script lang="ts" src="./app-bar.component.ts" />
