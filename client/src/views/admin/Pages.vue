<template>
    <div class="mx-4  mt-4">
        <form>
            <div class="mb-3">
                <input placeholder="Enter page title" type="text" class="form-control p-10-px border-r-7-px border-2-px font-medium f-w-500" v-model="page.title" name="title" id="title" />
            </div>
            <div class="mb-3">
                <input placeholder="Enter page Url" type="text" class="form-control p-10-px border-r-7-px border-2-px font-medium f-w-500" v-model="page.url" name="url" id="url" />
            </div>
            <div class="mb-3">
                <input placeholder="Enter page description" type="text" class="form-control p-10-px border-r-7-px border-2-px font-medium f-w-500" v-model="page.description" name="description" id="description" />
            </div>
            <div class="mb-3">
                <VueMultiselect v-model="page.option" track-by="_id" placeholder="Asscociate a form" label="name" :options="options" :allow-empty="false">
                </VueMultiselect>
            </div>
            <a v-on:click="addPage(page)" href="#" class="p-10-px bg-color-dark border-0 border-r-7-px w-100 font-medium f-w-500 btn btn-primary">Add new page</a>
            <div v-if="message && clicked" id="message-alert" class="alert mt-2" :class="successful ? 'alert-success' : 'alert-danger'">
                {{ message }}
            </div>
        </form>
    </div>
    <div class="mx-4 mt-4  ">
        <table class=" table border-r-7-px border-2-px font-medium f-w-500 m-0">
            <thead>
                <tr class="bg-color-light">
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Permalink</th>
                    <th>input</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page, index) in pages">
                    <th scope="row">{{index+1}}</th>
                    <td>{{page.title}}</td>
                    <td>{{page.description.slice(0, 20).concat('...')}}</td>
                    <td>{{page.url.slice(0, 20).concat('...')}}</td>
                    <td></td>
                    <td>
                        <router-link class="btn btn-primary mx-1 bg-blue-light text-blue-dark border-none p-action f-w-500 font-small border-r-7-px" :to="{name: 'EditAdminPage',
                        query: {id: page._id}, params: { url:page.url }}
                        ">
                            Edit
                        </router-link>
                        <router-link class="btn btn-primary mx-1 bg-green-light text-green-dark border-none p-action f-w-500 font-small border-r-7-px" :to="{name: 'SingleAdminPage',query: {id: page._id}, params: { url:page.url }}">
                            Show
                        </router-link>
                        <a class="btn btn-primary mx-1 bg-red-light text-red-dark border-none p-action f-w-500 font-small border-r-7-px" v-on:click="deletePage(page, index)" href="#">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import PageService from '@/services/page.service'
import VueMultiselect from 'vue-multiselect'
import formMixin from '@/mixins/formsFetch';

export default {
    components: { VueMultiselect },
    mixins: [formMixin],

    data() {
        return {
            selected: null,
            page: {},
            pages: [],
            message: '',
            clicked: false,
            successful: false
        }
    },
    mounted() {
        this.loadPages();
    },
    methods: {
        loadPages: async function() {
            try {

                const response = await PageService.getPages();
                this.pages = response.pages;

            } catch (error) {

                console.log(error);

            }
        },

        addPage: async function(page) {
            try {
                const response = await PageService.addPage(page, page.option._id);
                this.pages.unshift(response.data.page);
                this.page = { title: '', url: '', description: '' };
                console.log(response.data);

                this.message = response.data.message
                this.successful = true
                this.clicked = true

            } catch (error) {
                this.message = error.response.data.message
                if (this.message) {
                    this.successful = false
                    this.clicked = true
                }
                else{
                    this.message ="you must select at least one form"
                }
                this.successful = false
                this.clicked = true
                console.log(error.response.data.message);
            }
        },

        deletePage: async function(page, index) {
            try {
                const response = await PageService.deletePage(page._id);


                this.pages.splice(index, 1);


            } catch (error) {
                console.log(error);
            }
        }

    }
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
