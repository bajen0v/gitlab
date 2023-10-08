import React from "react";
import SEO from "@/src/common/seo";
import CourseDetails from "@/src/components/course-details/course-details";
import WrapperFour from "@/src/layout/wrapper-4";
import { NextPage, GetServerSideProps, GetStaticPaths } from "next";
import { CoursesService } from "@/src/services/courses.service";
import { ICourseDataSingle, ICourseData} from "@/src/interfaces/courses.interfaces";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

const index: NextPage<ICourseData> = ({ courses }) => {

  const router = useRouter()
  const course = courses.filter(el => String(el.id) === router.query.index)

  console.log(router.query.index, 'detail')
  // console.log(pathname)
  return (
    <WrapperFour>
      <SEO pageTitle={course[0].course_title} />
      <CourseDetails course={course[0]} />
    </WrapperFour>
  );
};

// interface Params extends ParsedUrlQuery {
//   id: string
// }
// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const courses = await CoursesService.getAll();
//   return {
//     paths: courses.map((course) => ({
//       params: {
//         id: course.id.toString(),
//       },
//     })),
//     fallback: 'blocking'
//   };
// };
export const getServerSideProps: GetServerSideProps<
  ICourseData
> = async () => {
  const courses = await CoursesService.getAll()
  // const course = await CoursesService.getById(String(params?.id));

  return {
    props: { courses },
  };
};

export default index;
