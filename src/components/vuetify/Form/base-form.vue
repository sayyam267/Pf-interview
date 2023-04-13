<template>
    <validation-observer #default="{ invalid, reset, validate, errors }" slim ref="baseForm">
        <v-form @submit.prevent="invalid ? undefined : $emit('submit')">
            <slot :invalid="invalid" :reset="reset" :validate="validate" :errors="errors" />
        </v-form>
    </validation-observer>
</template>

<script lang="ts" src="./base-form.ts" />
