import Link from "next/link";
import React, { FC } from "react";
import { ICourseDataSingle } from "@/src/interfaces/courses.interfaces";


const CourseSingle:FC<ICourseDataSingle> = ({course}) => {
    return (
        <>
              <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tpcourse mb-40">
                  <div className="tpcourse__thumb p-relative w-img fix">
                  <Link href={`${course.course_link}/${course.id}`}>
                      <img src={course.img} alt="course-thumb" />
                    </Link>
                    <div className="tpcourse__tag">
                      <Link href={course.course_link}>
                        <i className="fi fi-rr-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tpcourse__content">
                    <div className="tpcourse__avatar d-flex align-courses-center mb-20">
                      <img src={course.icon} alt="course-avata" />
                      <h4 className="tpcourse__title">
                        <Link href={course.course_link}>{course.title}</Link>
                      </h4>
                    </div>
                    <div className="tpcourse__meta pb-15 mb-20">
                      <ul className="d-flex align-courses-center">
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-01.png"
                            alt="meta-icon"
                          />
                          <span>{course.cls_text}</span>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-02.png"
                            alt="meta-icon"
                          />
                          <span>{course.st_text}</span>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-03.png"
                            alt="meta-icon"
                          />
                          <span>{course.start_text}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="tpcourse__category d-flex align-courses-center justify-content-between">
                      <ul className="tpcourse__price-list d-flex align-courses-center">
                        <li>
                          <Link href={course.course_link}>
                            {course.course_title}
                          </Link>
                        </li>
                        <li>
                          <Link href={course.course_link}>
                            {course.course_name}
                          </Link>
                        </li>
                      </ul>
                      <h5 className="tpcourse__course-price">
                        ${course.course_price}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
        </>
        )

}

export default CourseSingle