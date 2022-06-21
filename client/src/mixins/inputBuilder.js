import { markRaw } from 'vue'
import { BlitzInput } from 'blitzar'
import { Schemas as schemaObj } from '@/constants/schemas.constants.js';

export default {

    data() {
        return {
            schema: [],
            form: {
                name: '',
                cshema: []
            }
        }
    },

    methods: {
        textInput: function(name) {


                 var keysArray = Object.keys(schemaObj);

                const mydata = keysArray.indexOf(name);

                const objectValue = Object.values(schemaObj)[mydata];
                    //console.log(objectValue);

                    const index = this.form.cshema.findIndex(name => name.id === objectValue.id);
                   
                    if (index === -1) {
                        this.form.cshema.push(objectValue);
                    }

        }


    }
}
