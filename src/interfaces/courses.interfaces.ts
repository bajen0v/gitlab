export interface ICourse {
    id: number
    icon: string
    title: string
    cls_text: string
    st_text: string
    start_text: string
    course_title: string
    course_link: string
    course_name: string
    course_price: string
    img: string

}

export interface ICourseData {
    courses: ICourse[]
}

export interface ICourseDataSingle {
    course: ICourse
}