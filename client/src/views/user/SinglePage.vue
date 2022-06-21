<template>
    <div class="mt-4">
        <div class="text-white p-10-px bg-color-dark border-0 border-r-7-px w-100">
            <div>
                <h2>{{page.title}}</h2>
            </div>
            <div>
                <p class="">{{page.url}}</p>
            </div>
            <div>
                <p>{{page.description}}</p>
                
            </div>
            <div>
                <p>Form submition</p>
            </div>
        </div>
         <div class=" mt-4 text-white p-10-px bg-color-dark border-0 border-r-7-px w-100">
            
            <div>
                <h2>{{form.name}}</h2>
            </div>
            <div>
                <p>Submission Form</p>
            </div>
        </div>
        <blitz-form class="form-build w-100" :schema="schema" :columnCount="1" />
        <button  v-on:click="addSubmission(form)" type="submit" class="p-10-px bg-color-dark border-0 border-r-7-px w-100 font-medium f-w-500 btn mt-4 btn-primary">Submit form</button>
    </div>
</template>
<script setup>
const formData = ref({})

</script>
<script>
import { BlitzForm, BlitzInput } from 'blitzar'
import 'blitzar/dist/style.css'
import { ref } from 'vue'
import PageService from '@/services/page.service'
import pageMixin from '@/mixins/pageFetch';
export default {

    mixins:[pageMixin],
   

}

</script>
