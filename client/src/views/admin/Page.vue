<template>
    <div class="mx-4  mt-4">
        <form v-on:submit.prevent="updatePage">
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
                <VueMultiselect v-model="page.option"  track-by="_id"  placeholder="Asscociate a form" label="name" :options="options"  :allow-empty="false"> 
                   
                </VueMultiselect>
            </div>
            <button type="submit" class="p-10-px bg-color-dark border-0 border-r-7-px w-100 font-medium f-w-500 btn btn-primary">Update</button>
        </form>
    </div>
</template>


<script>
import VueMultiselect from 'vue-multiselect'
import pageMixin from '@/mixins/pageFetch';
import formMixin from '@/mixins/formsFetch';


import PageService from '@/services/page.service'
export default {
    components: { VueMultiselect },
    mixins:[pageMixin,formMixin],
    data() {
        return {
            selected: null,
            options: ['list', 'of', 'options'],
           
           
        }
    },
    mounted() {
      
    },

    methods: {
        updatePage: async function() {
            try {
                const response = await PageService.updatePage(this.$route.query.id, this.page);
                
                console.log(response.page);
                this.page = response.page;
                
            } catch (error) {
                console.log(error);
            }
        }

    }
}

</script>