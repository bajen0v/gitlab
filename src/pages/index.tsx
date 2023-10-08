import SEO from "../common/seo";
import Home from "../components/homes/home";
import { ICourseData } from "../interfaces/courses.interfaces";
import Wrapper from "../layout/wrapper";
import { NextPage, GetServerSideProps } from "next";
import { CoursesService } from "../services/courses.service";
// import { getServerSideProps } from 'next'

const index:NextPage<ICourseData> = ({courses}) => {
  return (
    <Wrapper>
      <SEO pageTitle={'Epora'} />
      <Home courses={courses}/>
    </Wrapper>
  );
};

export const getServerSideProps:GetServerSideProps<ICourseData> =async () => {
  const courses = await CoursesService.getAll()
  return {

    props : {courses}
  }
}
//  
export default index;