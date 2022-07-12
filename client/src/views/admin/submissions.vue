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
                    <tr v-for="(sub, index) in submissions">
                        <th scope="row">{{index}}</th>
                        <th scope="row">{{sub.form.text}}</th>
                        <th scope="row">{{sub.form.date}}</th>
                        <td></td>
                        <td>
                            <a class="btn btn-primary mx-1 bg-red-light text-red-dark border-none p-action f-w-500 font-small border-r-7-px" v-on:click="deleteSubmission(sub._id, index)" href="#">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
           
            <DTable/>
        </div>
    </div>
</template>
<script setup lang="ts">
const formData = ref({})




</script>
<script lang="ts">
import DTable from '@/components/dataTable/dataTable.vue'
import { BlitzForm, BlitzInput } from 'blitzar'
import 'blitzar/dist/style.css'
import { ref } from 'vue'
import submissionService from '@/services/submission.service'


import type { Header, Item } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "DATE", value: "date" },
 
];
const items: Item[] = [
  { date: "Stephen Curry"},
  
];


export default {
    components: {
        DTable,
    },



    data() {
        return {
            data: {

            },
            forms: [],
            form: {},
            submissions: []
        }
    },
    mounted() {
        this.loadSubmission();
        console.log(items);
    },

    methods: {

        loadSubmission: async function() {
            try {

                const response = await submissionService.getSubmissions();
                console.log(response.data);
                this.submissions = response.data;

                console.log(this.submissions);

                for (let i = 0; i < this.submissions.length; i++) {

                    items.push(JSON.parse(JSON.stringify(this.submissions[i].form)));
                    console.log(items);

                }

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
