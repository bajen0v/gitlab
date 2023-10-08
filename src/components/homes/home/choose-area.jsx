import Link from "next/link";
import React from "react";

const choose_data = {
  bg_img: "/assets/img/bg/choose-img-01.jpg",
  experiences_years: "15",
  title: "Why Choose Us",
  sub_title: (
    <>
      Why You Should Choose Our
      <br />
      AI Chatbot Services
    </>
  ),
  des: 'We provide cutting-edge AI technology to enhance your user experience and streamline your business operations.',

  choose_list: [
    { title: "24/7 Availability and Instant Responses" },
    { title: "Efficient and Accurate Information Retrieval" },
    { title: "Seamless Integration with Multiple Platforms" },
  ],
};

const { bg_img, experiences_years, title, sub_title, des, choose_list } =
  choose_data;
const ChooseArea = () => {
  return (
    <>
      <section
        className="choose-area pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="tp-choose-img p-relative mb-30 ml-25">
                <img src={bg_img} alt="choose-img" />
                <div className="tpchoose-img-text d-none d-md-block">
                  <ul>
                    <li>
                      <i>{experiences_years}+</i>
                      <p>Years Experiences</p>
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>Fully Safe & Secure</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title mb-25">{title}</span>
                  <h2 className="tp-section-title mb-20">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-list mb-35">
                  <ul>
                    {choose_list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-light fa-check"></i> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="choose-btn">
                  <Link href="/about" className="tp-btn">
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
