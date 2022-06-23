<template>
    <div class="mt-4">
       
        <div class="mt-4 bg-color-dark text-white p-10-px p-4 border-0 border-r-7-px w-100">
           Submissions
        </div>
       
        <div class="my-4  ">
            <table class=" table border-r-7-px border-2-px font-medium f-w-500 m-0">
                <thead>
                    <tr class="bg-color-light">
                        <th scope="col">#</th>
                        <th scope="col">Associated Page</th>
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
                        <th scope="row">{{sub.page.title}}</th>
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


            
        </div>
    </div>
</template>
<script setup>
const formData = ref({})

</script>
<script>
import DTable from '@/components/dataTable/dataTable.vue'
import { BlitzForm, BlitzInput } from 'blitzar'

import 'blitzar/dist/style.css'
import { ref } from 'vue'
import submissionService from '@/services/submission.service'
export default {
     components: {
        DTable,
    },



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
