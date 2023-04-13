<template>
    <div class="d-flex justify-center py-7">
        <base-card class="pa-10 px-10 " flat max-width="600px">
            <v-row class="align-center">
                <v-col cols="7">
                    <h1  style="font-size:1.6rem; font-weight:650">Social Media App</h1>
                   
                </v-col>
            </v-row>
            <br /><br />
            <h3 style="font-size:1.5rem; font-weight:500" class=" text-left ">Login To LMS</h3>
             <h4 class="font-weight-light mb-3 lightgray--text">Welcome Back, Please login to your account</h4>
            <base-form @submit="Login" #default="{invalid}">
                <div class="mb-3">
                    <base-text-field label="Email" hide-details rules="required|email" id="username" autocomplete="username" :value.sync="loginData.email" />
                </div>
                <div>
                    <base-text-field :type="show ? 'text' : 'password'" id="password" autocomplete="current-password" rules="required" label="Password"  @click:append="show = !show" hide-details :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :value.sync="loginData.password" />
                </div>
                <div class="d-flex justify-space-between align-center mt-3">
                    <!-- <div>
                        <base-checkbox class="mt-0" label="" id="rememberme" name="rememberme">
                            <template #label>
                                <div class="muted--text">
                                    Remember me
                                </div>
                            </template>
                        </base-checkbox>
                    </div> -->
                    
                </div>
                <div class=" d-flex mt-3 justify-space-between align-center ">
                    <base-btn class="primary px-8" :disabled="invalid"  type="submit">
                        Login
                    </base-btn>
                    <base-btn  outlined class="px-8" @click="$router.push({name: 'Signup'})">
                        Sign Up
                    </base-btn>
                </div>
                <!-- <div class="mt-3 text-center">
                    <p class="white--text">Don't have an Account?<a @click="$router.push({name: 'Signup'})"> Sign Up</a></p>
                </div> -->
            </base-form>
        </base-card>
    </div>
</template>

<script lang="ts" src="./login.component.ts" />

<style lang="scss" scoped>
.max-width-500 {
    max-width: 500px;
}
</style>
