import review_content from "@/src/data/review-data";
import Link from "next/link";
import { useState } from "react";

const course_detail_date = [
  {
    id: 1,
    label: "Lesson",
    count: "36",
    className: "fa-light fa-calendars",
  },
  {
    id: 2,
    label: "Quizess",
    count: "6",
    className: 'fi fi-rr-chart-pie-alt',
  },
  {
    id: 3,
    label: "Students",
    count: "105",
    className: "fi fi-rr-user",
  },
  {
    id: 4,
    label: "Duration",
    count: "16 Hours",
    className: 'fa-light fa-clock-desk',
  },
  {
    id: 5,
    label: "Skill Level",
    count: "Beginner",
    className: "fi fi-sr-stats",
  },
  {
    id: 6,
    label: "Language",
    count: "English",
    className: "fi fi-rr-comments",
  },
  {
    id: 7,
    label: "Certificate",
    count: "Yes",
    className: "fi fi-rs-diploma",
  },
];

const CourseDetailsArea = ({course}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
console.log(course, 'area')
  return (
    <>
      <section
        className="c-details-area pt-120 pb-50 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="c-details-wrapper mr-25">
                <div className="c-details-thumb p-relative mb-40">
                  <img
                    src="/assets/img/course/c-details-bg-01.jpg"
                    alt="details-bg"
                  />
                  <div className="c-details-ava d-md-flex align-items-center">
                    <img
                      src="/assets/img/course/c-details-ava-01.png"
                      alt="avata"
                    />
                    <span>
                      By <a href="#">Olivia Davis</a>
                    </span>
                  </div>
                </div>
                <div className="course-details-content mb-45">
                  <div className="tpcourse__category mb-15">
                    <ul className="tpcourse__price-list d-flex align-items-center">
                      <li>
                        <a className="c-color-green" href="#">
                          Photography
                        </a>
                      </li>
                      <li>
                        <a className="c-color-yellow" href="#">
                          Masterclass
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tpcourse__ava-title mb-25">
                    <h4 className="c-details-title">
                      <a href="#">Photography Masterclass: A Complete Guide</a>
                    </h4>
                  </div>
                  <div className="tpcourse__meta course-details-list">
                    <ul className="d-flex align-items-center">
                      <li>
                        <div className="rating-gold d-flex align-items-center">
                          <p>4.7</p>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-rs-star"></i>
                          <span>(223)</span>
                        </div>
                      </li>
                      <li>
                        <img
                          src="/assets/img/icon/c-meta-01.png"
                          alt="meta-icon"
                        />{" "}
                        <span>27 Classes</span>
                      </li>
                      <li>
                        <img
                          src="/assets/img/icon/c-meta-02.png"
                          alt="meta-icon"
                        />{" "}
                        <span>403 Students</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="c-details-about mb-40">
                  <h5 className="tp-c-details-title mb-20">
                    About This Course
                  </h5>
                  <p>
                    Are you passionate about capturing moments and telling
                    stories through the lens? Look no further! Welcome to the
                    Photography Masterclass, where we unlock the secrets to
                    becoming a skilled and confident photographer.
                  </p>
                  <p>
                    Whether you're a beginner looking to grasp the basics or an
                    experienced photographer aiming to refine your skills, this
                    Photography Masterclass is designed to empower you with the
                    knowledge and confidence to capture breathtaking images.
                    Join us on this exciting journey and unlock your full
                    creative potential!
                  </p>
                  <p>
                    Course Highlights: Comprehensive Learning, Practical
                    Approach, Expert Guidance, Diverse Subjects, Technical
                    Proficiency, Creative Vision, Equipment and Gear, Critique
                    and Feedback.
                  </p>
                </div>
                <div className="cor-details-instructor mb-40">
                  <h4 className="tp-c-details-title mb-40">Tutor</h4>
                  <div className="course-instructor-details d-flex f-wrap align-items-center">
                    <div className="course-avata mr-30 mb-20">
                      <img
                        src="/assets/img/course/c-details-ava-thumb-01.jpg"
                        alt="avata-thumb"
                      />
                    </div>
                    <div className="course-avatar-details mb-20">
                      <h5 className="c-avata-title mb-10">Alex Frank</h5>
                      <p>Captivating Capture Photography Excellence Award</p>
                      <div className="c-details-list mb-5">
                        <ul className="d-flex align-items-center">
                          <li>
                            <div className="rating-gold d-flex align-items-center">
                              <p>4.7</p>
                              <i className="fi fi-ss-star"></i>
                              <i className="fi fi-ss-star"></i>
                              <i className="fi fi-ss-star"></i>
                              <i className="fi fi-ss-star"></i>
                              <i className="fi fi-rs-star"></i>
                              <span>(205)</span>
                            </div>
                          </li>
                          <li>
                            <img
                              src="/assets/img/icon/c-details-01.png"
                              alt="meta-icon"
                            />
                            <span>29 Classes</span>
                          </li>
                        </ul>
                      </div>
                      <div className="c-details-stu">
                        <ul>
                          <li className="d-flex align-items-center">
                            <img
                              src="/assets/img/icon/c-details-02.png"
                              alt="meta-icon"
                            />{" "}
                            <span>349 Students</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    To aspiring photographers, I encourage you to pursue your
                    passion relentlessly. Embrace the challenges, learn from
                    your mistakes, and never be afraid to experiment and explore
                    new techniques. Remember, it is the unique perspective and
                    personal touch that sets your work apart.
                  </p>
                </div>
                <div className="c-details-review pb-15">
                  <div className="c-review-title-wrapper">
                    <h5 className="c-review-title mb-40">Review</h5>
                  </div>
                  <div className="course-reviewer-item-wrapper">
                    {review_content.map(item => (
                      <div
                        key={item.id}
                        className="course-reviewer-item d-flex mb-25"
                      >
                        <div className="course-review-ava">
                          <img src={item.img} alt="details-avata" />
                        </div>
                        <div className="course-review-content p-relative">
                          <h5 className="course-ava-title mb-15">
                            {item.name}
                          </h5>
                          <div className="tpcourse__rating-icon d-flex align-items-center mb-10">
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-ss-star"></i>
                            <i className="fi fi-rs-star"></i>
                          </div>
                          <p>{item.review_text}</p>
                          <div className="c-reviewer-time">
                            <span>{item.review_time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="c-details-sidebar">
                <div className="c-video-thumb p-relative mb-25">
                  <img
                    src="/assets/img/bg/c-details-video-bg.jpg"
                    alt="video-bg"
                  />
                  <div className="c-video-icon">
                    <a
                      className="popup-video"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      <i className="fi fi-sr-play"></i>
                    </a>
                  </div>
                </div>
                <div className="course-details-widget">
                  <div className="cd-video-price">
                    <h3 className="pricing-video text-center mb-15">$29.99</h3>
                    <div className="cd-pricing-btn text-center mb-30">
                      <Link className="tp-vp-btn" href="/course-details">
                        Add To Cart
                      </Link>
                      <Link className="tp-vp-btn-green" href="/course-details">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                  <div className="cd-information mb-35">
                    <ul>
                     {course_detail_date.map(el =>  <li key={el.id}><i className={el.className}></i>{" "}<label>{el.label}</label> <span>{el.count}</span></li>)}
                      {/* <li>
                        <i className="fa-light fa-calendars"></i>{" "}
                        <label>Lesson</label> <span>36</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-chart-pie-alt"></i>{" "}
                        <label>Quizess</label> <span>6</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-user"></i>{" "}
                        <label>Students</label> <span>105</span>
                      </li>
                      <li>
                        <i className="fa-light fa-clock-desk"></i>{" "}
                        <label>Duration</label> <span>16 Hours</span>
                      </li>
                      <li>
                        <i className="fi fi-sr-stats"></i>{" "}
                        <label>Skill Level</label> <span>Beginner</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-comments"></i>{" "}
                        <label>Language</label> <span>English</span>
                      </li>
                      <li>
                        <i className="fi fi-rs-diploma"></i>{" "}
                        <label>Certificate</label> <span>Yes</span>
                      </li> */}
                    </ul>
                  </div>
                  <div className="c-details-social">
                    <h5 className="cd-social-title mb-25">Share Now:</h5>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal end */}
    </>
  );
};

export default CourseDetailsArea;
