import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-rocket",
    title: "Online Courses",
    des: "Access world-class materials interactively, serving as unique catalysts for change in myocardinal development.",
  },
  {
    id: 2,
    icon: "fi fi-rr-book-alt",
    title: "E-Libraries",
    des: "Explore vast digital libraries with a wide range of resources, enabling limitless learning opportunities.",
  },
  {
    id: 3,
    icon: "fi fi-rr-graduation-cap",
    title: "Virtual Degrees",
    des: "Earn accredited degrees through virtual universities, opening doors to new career prospects.",
  },
  {
    id: 4,
    icon: "fi fi-rr-globe",
    title: "Global Reach",
    des: "Connect with learners worldwide, fostering cross-cultural collaboration and knowledge exchange.",
  }
  // {
  //   id: 1,
  //   icon: "fi fi-rr-paper-plane",
  //   title: "Online Courses",
  //   des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  // },
  // {
  //   id: 2,
  //   icon: "fi fi-rr-user",
  //   title: "Expert Trainer",
  //   des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  // },

  // {
  //   id: 3,
  //   icon: "fi fi-rr-document",
  //   title: "Get Certificate",
  //   des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  // },
  // {
  //   id: 4,
  //   icon: "fi fi-rr-calendar",
  //   title: "Life Time Access",
  //   des: "Interactively provide access world class materials for unique catalysts for change my ocardinat.",
  // },
];



const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">What We Offer</span>
                <h2 className="tp-section-title">For Your Future Learning.</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
