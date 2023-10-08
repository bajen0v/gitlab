import axios from "axios"
import { ICourse } from "../interfaces/courses.interfaces"

const API_URL = 'http://localhost:3000/api/hello'

axios.defaults.baseURL = API_URL

export const CoursesService = {

    async getAll(){
    const { data } = await axios.get<ICourse[]>('')
    return data
    },

    async getById(id:string){
        const {data} = await axios.get<ICourse[]>('',{
            params: {
                id
            }
        })
        return data[0]
        }
} 