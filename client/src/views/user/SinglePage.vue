<template>
    <div class="mt-4">
        <div class="header-card text-white p-4   border-0 border-r-7-px w-100">
            <div>
                <h5 class="m-0">{{page.title}}</h5>
            </div>
            <div>
                <p class="mt-3  font-medium description mb-0">{{page.description}}</p>
            </div>
            <div>
                <p class="mt-5 font-medium url-text"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                            <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
                            <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
                        </g>
                    </svg></p>
            </div>
        </div>
        <div class="mt-4 bg-color-dark text-white p-10-px p-4 border-0 border-r-7-px w-100">
            <h5 class="m-0">{{this.form.name}}</h5>
        </div>
        <blitz-form v-model="formData.form" class="form-build w-100" :schema="schema" :columnCount="1" />
        <a v-on:click="addSubmission(formData, id)" href="#" class="p-10-px bg-color-dark border-0 border-r-7-px w-100 font-medium f-w-500 btn btn-primary">Add new submission</a>
        <div v-if="message && clicked" id="message-alert" class="alert mt-2" :class="successful ? 'alert-success' : 'alert-danger'">
            {{ message }}
        </div>
        <div class="my-4  ">
        </div>
    </div>
</template>
<script setup>
const formData = ref({})

</script>
<script>
import DTable from '@/components/dataTable/dataTable.vue'
import { BlitzForm, BlitzInput } from 'blitzar'
import PageService from '@/services/page.service'

import 'blitzar/dist/style.css'
import { ref } from 'vue'
import submissionService from '@/services/submission.service'
import pageMixin from '@/mixins/pageFetch';
export default {
    props: {
        //Decouple the parameter ID passed in the route to the props attribute of the component
        id: String
    },
    components: {
        DTable,
    },
    mixins: [pageMixin],



    data() {
        return {
            data: {

            },
            selected: null,
            clicked: false,
            successful: false,
            formData: {},
            message: '',
            form: {},
            submissions: []
        }
    },
    
    mounted() {
       
    },

    methods: {

        

        addSubmission: async function(data) {

            try {
                console.log(data.form);

                const response = await submissionService.addSubmission(data, this.$route.params.id);
                console.log(response);
                this.message = 'form submited successfuly'
                this.successful = true
                this.clicked = true

                

            } catch (error) {
                 this.message = 'an error has occured, try again !'
               
                    this.successful = false
                    this.clicked = true
                console.log(error);
            }
        },

       

    }



}

</script>
