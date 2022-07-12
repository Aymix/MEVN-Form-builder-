<template>
  <table-lite
    :is-loading="table.isLoading"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
    :messages="table.messages"
    @do-search="doSearch"
    @is-finished="table.isLoading = false"
  ></table-lite>
</template>

<script>
import axios from 'axios'
import { defineComponent, reactive } from "vue";
import TableLite from "@/components/TableLite.vue";
import moment from 'moment'

export default defineComponent({

    name: "DTable",
    components: { TableLite },
    setup() {
      // Init Your table settings
      const table = reactive({
        isLoading: false,
        columns: [
          
          {
            label: "Created At",
            field: "CreatedAt",
            width: "3%",
            sortable: true,
            isKey: true,
             display: function (row) {
            return (
              moment(row.CreatedAt).format('YYYY/MM/DD HH:MM:ss')
            );
          },
          },
          {
            label: "Date",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
              if (!row.form.date =="") {
            return ( 
            moment(row.form.date).format('YYYY/MM/DD')              
            );
            }
          }
          },
          {
            label: "Text",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
              
            return ( 
            
            row.form.text

            );
           
          },
          },
          {
            label: "Number",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
              
            return ( 
            row.form.number

            );
            },
          
          },
          {
            label: "Checkboxes",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
              
            return ( 
            row.form.checkboxes

            );
            }
          
          },
          {
            label: "Radio",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
              
            return ( 
            row.form.radio

            );
           
          },
          },
          {
            label: "Time",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
            
            return ( 
            row.form.time

            );
            
          },
          },
          {
            label: "Phone",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
            
            return ( 
            row.form.phone

            );
          
          },
          },
          {
            label: "Url",
            width: "3%",
            sortable: true,
            isKey: true,
            display: function (row) {
             
            return ( 
            row.form.url

            );
          
          },
          },
         
        ],
        rows: [],
        totalRecordCount: 0,
        sortable: {
          order: "_id",
          sort: "asc",
        },
      });
  
      /**
       * Table search event
       */
       const doSearch = (offset, limit, order, sort) => {
        table.isLoading = true;
  
        // Start use axios to get data from Server
        let url = 'http://localhost:8080/submissions?limit=' + limit;
        axios.get(url)
        .then((response) => {
          // Point: your response is like it on this example.
          //   {
          //   rows: [{
          //     id: 1,
          //     name: 'jack',
          //     email: 'example@example.com'
          //   },{
          //     id: 2,
          //     name: 'rose',
          //     email: 'example@example.com'
          //   }],
          //   count: 2,
          //   ...something
          // }
          console.log(response.data.length);
          console.log(response.data);
          // refresh table rows
          table.rows = response.data;
          table.totalRecordCount = 2;
          table.sortable.order = order;
          table.sortable.sort = sort;
        });
        // End use axios to get data from Server
      };
  
      /**
       * Table search finished event
       */
      const tableLoadingFinish = (elements) => {
        table.isLoading = false;
      };

      // Get data first
      doSearch(0, 10, 'id', 'asc');
  
      return {
        table,
        doSearch,
        tableLoadingFinish,
      };
  },
  });
</script>