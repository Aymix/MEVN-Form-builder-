export const Schemas = {

    "Text": {
        "id": "text",
        "component": "input",
        "label": 'Text',
        "suffix": "Text"
    },


    "Paragraph": {
        'id': 'paragraph',
        "component": "markRaw(BlitzInput)",
        "span": 1,
        "row": 1,
        "type": 'textarea',
        "autogrow": true,
        "suffix": 'Paragraph',
        "clearable": true,
    },



    "Number": {
        'id': 'number',
        "component": "input",
        "type": 'number',
        "label": 'Number',
        "suffix": 'Number',
    },



    "Checkboxes": {
        'id': 'checkbox',
        "component": "input",
        "suffix": 'Checkbox',
        "label": 'Checkbox',
        "type": "checkbox"
    },



    "Radio": {
        'id': 'radio',
        "component": "input",
        "suffix": 'Radio',
        "label": 'Radio',
        "type": "radio"
    },



    "Date": {
        'id': 'date',
        "type": 'date',
        "component": "input",
        "label": 'Date',
    },



    "Time": {
        'id': 'time',
        "type": 'time',
        "component": "input",
        "suffix": 'Time',
        "label": 'Time',
        
    },



    "Phone": {
        'id': 'phone',
        "type": 'number',
        "component": "input",
        "suffix": 'Phone',
        "label": 'Phone',
    },



    "File": {
        'id': 'file',
        "component": "input",
        "type": 'file',
        "label": 'File',
    },

    "Url": {
        'id': 'url',
        "type": 'url',
        "component": "input",
        "suffix": 'Url',
        "label": 'Url',
    },





}
