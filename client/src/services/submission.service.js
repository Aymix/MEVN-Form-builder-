import axios from 'axios'
import authHeader from '@/services/auth.service.header'
import { SUBMISSION_API_URL as API_URL } from '@/constants/service.constants.js'

class SubmissionsService {

    getSubmissions() {
        return axios
            .get(API_URL, { headers: authHeader() })
            .then((response) => {
                return response
            })
            .catch((e) => {
                console.log(e)
            })
    }

    getSubmission(id) {
        return axios
            .get(API_URL + id, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

    addSubmission(submission, id) {
        return axios
            .post(API_URL + id, {
                form: submission.form
                
            })
            .then((response) => {
                return response
            })
    }

    deleteSubmission(id) {
       

        return axios
            .delete(API_URL + id, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

   


}

export default new SubmissionsService()
