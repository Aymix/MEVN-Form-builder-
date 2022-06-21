import axios from 'axios'
import authHeader from '@/services/auth.service.header'
import { INPUT_API_URL as API_URL } from '@/constants/service.constants.js'

class inputService {

    getInputs(input) {
        return axios
            .get(API_URL, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

    getInput(id) {
        return axios
            .get(API_URL + id, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

    addInput(input) {
        return axios
            .post(API_URL, {
                name: input.name,
                cshema: input.cshema,
               
            })
            .then((response) => {
                return response
            })
    }

    deleteInput(id) {
       

        return axios
            .delete(API_URL + id, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

    updateInput(id, input) {
       
        return axios
            .patch(API_URL + id, {
                name: input.name,
                schema: input.schema,
                
            })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }


}

export default new inputService()
