import Link from "next/link";
import React, { FC } from "react";
import { ICourse, ICourseDataSingle } from "@/src/interfaces/courses.interfaces";


const CourseSingle:FC<ICourseDataSingle> = ({course}) => {
  const {id, title, course_link,course_title, course_price, course_name, st_text, cls_text, start_text, img, icon } = course
    return (
        <>
              <div key={id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="tpcourse mb-40">
                  <div className="tpcourse__thumb p-relative w-img fix">
                  <Link href={`${course_link}/${id}`}>
                      <img src={img} alt="course-thumb" />
                    </Link>
                    <div className="tpcourse__tag">
                    <Link href={`${course_link}/${id}`}>
                        <i className="fi fi-rr-heart"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tpcourse__content">
                    <div className="tpcourse__avatar d-flex align-courses-center mb-20">
                      <img src={icon} alt="course-avata" />
                      <h4 className="tpcourse__title">
                      <Link href={`${course_link}/${id}`}>
                          {title}</Link>
                      </h4>
                    </div>
                    <div className="tpcourse__meta pb-15 mb-20">
                      <ul className="d-flex align-courses-center">
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-01.png"
                            alt="meta-icon"
                          />
                          <span>{cls_text}</span>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-02.png"
                            alt="meta-icon"
                          />
                          <span>{st_text}</span>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icon/c-meta-03.png"
                            alt="meta-icon"
                          />
                          <span>{start_text}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="tpcourse__category d-flex align-courses-center justify-content-between">
                      <ul className="tpcourse__price-list d-flex align-courses-center">
                        <li>
                        <Link href={`${course_link}/${id}`}>
                            {course_title}
                          </Link>
                        </li>
                        <li>
                        <Link href={`${course_link}/${id}`}>
                            {course_name}
                          </Link>
                        </li>
                      </ul>
                      <h5 className="tpcourse__course-price">
                        ${course_price}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
        </>
        )

}

export default CourseSingle