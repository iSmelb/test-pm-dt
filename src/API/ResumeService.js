import axios from "axios"

export default class ResumeService {
    static async getRusume(page = 1) {
        const respons = await axios.get('http://135.181.30.244:27007/api/summaries/?page=' + page)
        return respons
    }
}