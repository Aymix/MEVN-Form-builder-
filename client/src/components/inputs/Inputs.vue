<template>
	<div style="margin-bottom: 2rem">
        <button v-for="(input, index) in types" class="my-2 mx-2 builder-btn" @click="textInput(input.name), remountCounter++">{{input.name}}</button>
    </div>
</template>

<script>
	
import { defineComponent } from 'vue'
import { inputTypes as types } from '@/constants/inputTypes.js';
const schema = []
export default defineComponent({
    name: 'inputButtons',
    

    data() {
        return {
        
        }
    },
    mounted() {
      
    },

    methods: {
        textInput:function(name) {
    switch (name) {
        case "Text":
            console.log(schema);
            schema.push({
                id: 'name',
                component: markRaw(BlitzInput),
                suffix: 'Text',
            });
            break;
        case "Paragraph":
            console.log(schema);
            schema.push({
                id: 'paragraph',
                component: markRaw(BlitzInput),
                span: 1,
                row: 1,
                // component props:
                type: 'textarea',
                autogrow: true,
                suffix: 'Paragraph',
                clearable: true,
            });
            break;
        case "Number":
            console.log(schema);
            schema.push({
                id: 'number',
                component: markRaw(BlitzInput),
                type: 'number',
                suffix: 'Number',
            });
            break;
        case "Checkboxes":
            console.log(schema);
            schema.push({
                id: 'checkbox',
                component: markRaw(BlitzInput),
                suffix: 'Checkbox',
                type: "checkbox"
            });
            break;
        case "Radio":
            console.log(schema);
            schema.push({
                id: 'radio',
                component: markRaw(BlitzInput),
                suffix: 'Radio',
                type: "radio"
            });
            break;
        case "Date":
            console.log(schema);
            schema.push({
                id: 'date',
                type: 'date',
                component: markRaw(BlitzInput),
            });
            break;
        case "Time":
            console.log(schema);
            schema.push({
                id: 'time',
                type: 'time',
                component: markRaw(BlitzInput),
                suffix: 'Time',
                disabled: true
            });
            break;
        case "Phone":
            console.log(schema);
            schema.push({
                id: 'phone',
                type: 'number',
                component: markRaw(BlitzInput),
                suffix: 'Phone',
            });
            break;
        case "Url":
            console.log(schema);
            schema.push({
                id: 'url',
                type: 'url',
                component: markRaw(BlitzInput),
                suffix: 'Url',
            });
            break;
        case "Url":
            console.log(schema);
            schema.push({
                id: 'file',
                component: markRaw(BlitzInput),
                type: 'file',

                disabled: true
            });
            break;
        default:
            console.log('kkkkk');
    }

}

    }




   

})

</script>