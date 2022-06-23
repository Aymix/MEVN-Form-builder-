<template>
    <div class="list-group mt-4">
        <p v-if="pages.length == 0">no pages yet </p>
        <div v-for="(page, index) in pages" class="list-group-item">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{page.title}}</h5>
            </div>
            <p class="mb-1">
                {{page.description}}
            </p>
            <small><u>
                <router-link class="btn btn-primary mx-1 bg-green-light text-green-dark border-none p-action f-w-500 font-small border-r-7-px" :to="{name: 'SinglePage', params: { url:page.url, id:page._id }}">
                            Show
                        </router-link>

                    
                </u></small>
        </div>
    </div>
</template>
<script>
import PageService from '@/services/page.service'
export default {

    data() {
        return {
            pages: []
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
                console.log(this.pages);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

</script>
