import InputService from '@/services/input.service'

export default {

    data() {
        return {
            inputs: [],
            options: [],
        }
    },
    mounted() {
        this.loadInputs();
    },
    methods: {

        loadInputs: async function() {
            try {

                const response = await InputService.getInputs();

                this.options = response.inputs;

                console.log(this.options);

                for (let i = 0; i < this.options.length; i++) {

                    this.inputs[i] = this.options[i]._id;

                    console.log(this.inputs[i]);

                }


            } catch (error) {
                console.log(error);
            }
        },


    }
}
