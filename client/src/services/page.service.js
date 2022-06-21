import axios from 'axios'
import authHeader from '@/services/auth.service.header'
import { PAGE_API_URL as API_URL } from '@/constants/service.constants.js'

class PageService {

    getPages(page) {
        return axios
            .get(API_URL, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

    getPage(id) {
        return axios
            .get(API_URL + id, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

    addPage(page, id) {
        return axios
            .post(API_URL + id, {
                title: page.title,
                url: page.url,
                description: page.description
            })
            .then((response) => {
                return response
            })
    }

    deletePage(id) {
       

        return axios
            .delete(API_URL + id, { headers: authHeader() })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }

    updatePage(id, page) {
       
        return axios
            .patch(API_URL + id, {
                title: page.title,
                url: page.url,
                description: page.description
            })
            .then((response) => {
                return response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }


}

export default new PageService()
