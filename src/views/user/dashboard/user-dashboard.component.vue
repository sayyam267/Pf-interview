<template>
<div >
    <base-card class="pa-5 ma-5 text-end" color="grey">            <base-btn @click="CoreSrv.OpenModal('post-dialog')">Create Post</base-btn>
        </base-card>

        <div class="mt-2 ma-5">
            <div class="title font-weight-bold">Posts</div>
            <v-row >
                <v-col v-for="(post,idx) in UserSrv.currentUser.posts " :key="idx" cols="12" md="4"> <post-card-component @edit="editPost(post.id)" @delete="Delete(post.id)" :post="post" /> </v-col>
            </v-row>
        </div>

        <base-dialog name="post-dialog" width="100%">
            <template #header>{{ isEdit ?'Edit' :'Create' }} Post </template>

            <v-row>
                <v-col cols="12">
                    <base-text-field hide-details label="Post Caption" :value.sync="post.caption" rules="required" />
                </v-col>

                <v-col cols="12">
                    <base-btn class="" @click="takeImage">Take Photo</base-btn>

                    <div class="mt=2">
                        <video id="video" ref="video" width="200" height="200" autoplay></video>

                        <base-btn class="" @click="captureImage">Capture Photo</base-btn>
                        <p>Selected Image</p>
                        <canvas id="canvas" width="200" height="200"></canvas>
                    </div>
                </v-col>
            </v-row>
            <template #dialogFooter>
                <div>
                    <base-btn @click="createPost()">Save</base-btn>
                </div>
            </template>
        </base-dialog>
    </div>
</template>

<script lang="ts" src="./user-dashboard.component.ts" />
