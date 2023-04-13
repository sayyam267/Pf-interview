<template>
    <div class="d-flex justify-center py-7">
        <base-card class="pa-10 px-15 " flat max-width="600px">
            <v-row class="d-flex justify-space-between align-center">
                <v-col cols="7">
                    <h1  style="font-size:1.6rem; font-weight:650">Social Media App</h1>
                  
                </v-col>
                
            </v-row>
            <br /><br />
            <h3 style="font-size:1.5rem; font-weight:500" class=" text-left ">Create Account</h3>
            <h4 class="font-weight-light mb-3 lightgray--text">Create your free account.</h4>
            <base-form @submit="signup" #default="{invalid}">
                <!-- <div class="mb-3">
                    <search-component @search="SearchInput" :error="error" rules="required" :errorMessage="errorMessage" label="Username" />
                </div> -->
                <div class="mb-3">
                    <base-text-field label="Name" hide-details rules="required" :value.sync="signupData.name" />
                </div>

                <div class="mb-3">
                    <base-text-field label="Email" hide-details rules="required|email" :value.sync="signupData.email" />
                </div>
                <div class="mb-3">
                    <base-text-field label="Password" vid="Password" rules="required|password|min:8|max:32"  hide-details :type="show ? 'text' : 'password'"   @click:append="show = !show"  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :value.sync="signupData.password" />
                </div>
                <div class="mb-3">
                    <base-text-field
                        label="Confirm Password"
                        rules="confirmed:Password|required"
                        :type="showConfirm ? 'text' : 'password'"   @click:append="showConfirm = !showConfirm"  :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'" 
                        hide-details
                        :value.sync="signupData.confirmPassword"
                    />
                </div>
              
                <div class="d-flex justify-space-between align-center mt-3">
                
                </div>
               
                <div class=" d-flex mt-3 justify-space-between align-center ">
                    <base-btn  :disabled="invalid" type="submit" class="primary px-8"  >
                        SIGN UP
                    </base-btn>
                    <base-btn  outlined class="px-8" @click="$router.push({name: 'Login'})">
                      Login
                    </base-btn>
                </div>
               
            
            </base-form>
        </base-card>
    </div>
</template>

<script lang="ts" src="./signup.component.ts" />
