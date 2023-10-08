// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  res.status(200).json(
    //  {name: 'John Doe' }
    [
      {
          id: 1, 
          img: "/assets/img/course/course-thumb-01.jpg",
          icon: "/assets/img/icon/course-avata-01.png",
          title: "Photography Masterclass: A Complete Guide",
          cls_text: "40 Classes",
          st_text: "500 Students",
          start_text: "4.9",
          course_title: "Photography",
          course_link: "/course-details",
          course_name: "Masterclass",
          course_price: "39.99",
      },
      {
          id: 2, 
          img: "/assets/img/course/course-thumb-02.jpg",
          icon: "/assets/img/icon/course-avata-02.png",
          title: "Complete Web Design from Figma to Webflow",
          cls_text: "40 Classes",
          st_text: "300 Students",
          start_text: "4.7",
          course_title: "Design",
          course_link: "/course-details",
          course_name: "Development",
          course_price: "30.00",
      },
      {
          id: 3, 
          img: "/assets/img/course/course-thumb-03.jpg",
          icon: "/assets/img/icon/course-avata-03.png",
          title: "The Ultimate Graphic Design Course",
          cls_text: "30 Classes",
          st_text: "250 Students",
          start_text: "4.8",
          course_title: "Graphic",
          course_link: "/course-details",
          course_name: "Design",
          course_price: "24.99",
      },
    
      {
          id: 4, 
          img: "/assets/img/course/course-thumb-04.jpg",
          icon: "/assets/img/icon/course-avata-04.png",
          title: "Marketing Strategies for Beginners",
          cls_text: "25 Classes",
          st_text: "200 Students",
          start_text: "4.6",
          course_title: "Marketing",
          course_link: "/course-details",
          course_name: "Strategies",
          course_price: "14.99",
      },
      {
          id: 5, 
          img: "/assets/img/course/course-thumb-05.jpg",
          icon: "/assets/img/icon/course-avata-05.png",
          title: "Introduction to Python Programming",
          cls_text: "15 Classes",
          st_text: "100 Students",
          start_text: "4.4",
          course_title: "Python",
          course_link: "/course-details",
          course_name: "Programming",
          course_price: "9.99",
      },
      {
          id: 6, 
          img: "/assets/img/course/course-thumb-06.jpg",
          icon: "/assets/img/icon/course-avata-06.png",
          title: "The Complete Digital Marketing Course",
          cls_text: "50 Classes",
          st_text: "400 Students",
          start_text: "4.9",
          course_title: "Digital",
          course_link: "/course-details",
          course_name: "Marketing",
          course_price: "49.99",
      }
    ]
)
}

