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
                <p class="mt-5 font-medium url-text">{{page.url}}<svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                            <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
                            <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
                        </g>
                    </svg></p>
            </div>
        </div>
        <div class="mt-4 bg-color-dark text-white p-10-px p-4 border-0 border-r-7-px w-100">
            <h5 class="m-0">{{form.name}}</h5>
        </div>
       
        <div class="my-4  ">
            <table class=" table border-r-7-px border-2-px font-medium f-w-500 m-0">
                <thead>
                    <tr class="bg-color-light">
                        <th scope="col">#</th>
                        <th scope="col">Text</th>
                        <th scope="col">Paragraph</th>
                        <th scope="col">Checkboxes</th>
                        <th scope="col">Radio</th>
                        <th scope="col">Date</th>
                        <th scope="col">Select</th>
                        <th scope="col">Time</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Url</th>
                        <th scope="col">File</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(sub, index) in submissions.submissions">
                        <th scope="row">{{index}}</th>
                        <th scope="row">{{sub.form.text}}</th>
                        <th scope="row">{{sub.form.paragraph}}</th>
                        <th scope="row">{{sub.form.checkboxes}}</th>
                        <th scope="row">{{sub.form.radio}}</th>
                        <th scope="row">{{sub.form.date}}</th>
                        <th scope="row">{{sub.form.time}}</th>
                        <th scope="row">{{sub.form.phone}}</th>
                        <th scope="row">{{sub.form.url}}</th>
                        <th scope="row">{{sub.form.file}}</th>
                        
                        <td></td>
                        <td>
                            
                            
                            <a class="btn btn-primary mx-1 bg-red-light text-red-dark border-none p-action f-w-500 font-small border-r-7-px" v-on:click="deleteSubmission(sub._id, index)" href="#">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <DTable />
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
     components: {
        DTable,
    },
    mixins: [pageMixin],



    data() {
        return {
            data: {

            },
            formData: {},
            form: {},
            submissions: []
        }
    },
    mounted() {
        this.loadSubmission();
    },

    methods: {

        loadSubmission: async function() {
            try {

                const response = await submissionService.getSubmissions();
                this.submissions = response.data;
                console.log(this.submissions.submissions);


            } catch (error) {

                console.log(error);

            }
        },


        deleteSubmission: async function(sub, index) {
            try {
                const response = await submissionService.deleteSubmission(sub);

                this.submissions.submissions.splice(index, 1);


            } catch (error) {
                console.log(error);
            }
        }

    }



}

</script>
