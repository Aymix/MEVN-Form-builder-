import PageService from '@/services/page.service'

export default {

	 data() {
        return {
            schema: [{}],
            page: {},
            form: {}
        }
    },
    mounted() {
        this.loadPage();
        
    },
    methods: {
        loadPage: async function() {

            try {

                const response = await PageService.getPage(this.$route.query.id);
                this.page = response;
                this.form = response.input;
                this.schema = response.input.cshema;
                console.log();
                
              

            } catch (error) {
                console.log(error);
            }
        },


    }

}