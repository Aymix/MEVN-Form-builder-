<template>
    <div class="row">
        <div class="col-lg-2 col-xs-1 col-md-3 col-sm-3 mx-2 position-relative button-comlex mx-1 mt-4 text-center" v-for="(input, index) in types">
            <a href="#" class="d-block my-2 w-100 builder-btn" @click="textInput(input.name), remountCounter++">{{input.name}}
                <svg class="plus-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" />
                        <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1" />
                    </g>
                </svg>
            </a>
        </div>
    </div>
    <div class="admin-form-card mx-3 mt-4">
        <form>
            <div>
                <input placeholder="Enter form name" type="text" class="form-control p-10-px border-r-7-px  font-medium f-w-500" v-model="form.name" name="title" id="title" />
            </div>
        </form>
    </div>
    <div class="admin-form-card mx-3 mt-4">
        <draggable class="" v-model="form.cshema" item-key="id">
            <template #item="{element}">
                <div class="d-flex form-mini-card my-2">
                    <div class="">
                        <a class="rmv  align-items-center d-flex" style="height:40px" v-on:click="remove(index)" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
                                        <rect x="0" y="7" width="16" height="2" rx="1" />
                                        <rect opacity="0.3" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) " x="0" y="7" width="16" height="2" rx="1" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div class="w-100">
                        <p class="m-0 text-center">{{element.id}}</p>
                    </div>
                    <div class="p-2 drag">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                    </div>
                </div>
            </template>
        </draggable>
     
        <button v-on:click="addForm(form)" type="submit" class="p-10-px bg-color-dark border-0 border-r-7-px w-100 font-medium f-w-500 btn mt-4 btn-primary">Add new form</button>
    </div>
    <div class="mx-3 mt-4  ">
        <table class=" table border-r-7-px border-2-px font-medium f-w-500 m-0">
            <thead>
                <tr class="bg-color-light">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Schema</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(form, index) in options">
                    <th scope="row">{{index+1}}</th>
                    <td>{{form.name}}</td>
                    <td>{{form.cshema}}</td>
                    <td>
                        <a class="btn btn-primary mx-1 bg-red-light text-red-dark border-none p-action f-w-500 font-small border-r-7-px" v-on:click="deleteForm(form, index)" href="#">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import InputService from '@/services/input.service'

import BuilderMixin from '@/mixins/inputBuilder';
import FormsMixin from '@/mixins/formsFetch';
import draggable from 'vuedraggable'

export default {
    components: {
        draggable,
    },

    mixins: [BuilderMixin, FormsMixin],

    data() {
        return {

        }
    },

    methods: {

        addForm: async function(form) {



            try {



                const response = await InputService.addInput(form);
                this.form = { name: '', cshema: [] };
                console.log(response.data);
                console.log(this.schema);
                this.options.unshift(response.data);

            } catch (error) {
                console.log(error);
            }
        },
        remove: function(index) {
            this.form.cshema.splice(index, 1);
            console.log(this.schema);

        },
        deleteForm: async function(form, index) {
            try {
                const response = await InputService.deleteInput(form._id);

                this.options.splice(index, 1);


            } catch (error) {
                console.log(error);
            }
        }

    }
}

</script>
<script setup>
import { BlitzForm } from 'blitzar'
import 'blitzar/dist/style.css'
import { inputTypes as types } from '@/constants/inputTypes.js';
import { ref } from 'vue'

let remountCounter = ref(0)


const formData = ref({})

</script>
