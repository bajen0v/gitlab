import React from "react";
import SEO from "@/src/common/seo";
import CourseDetails from "@/src/components/course-details/course-details";
import WrapperFour from "@/src/layout/wrapper-4";
import { NextPage, GetServerSideProps, GetStaticPaths } from "next";
import { CoursesService } from "@/src/services/courses.service";
import { ICourseDataSingle } from "@/src/interfaces/courses.interfaces";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

const index: NextPage<ICourseDataSingle> = ({ course }) => {

  const {asPath,pathname} = useRouter()

  console.log(course, 'detail')
  console.log(pathname)
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Details"} />
      <CourseDetails course={course} />
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
  ICourseDataSingle
> = async ({ params }) => {
  const course = await CoursesService.getById(String(params?.id));

  return {
    props: { course },
  };
};

export default index;
