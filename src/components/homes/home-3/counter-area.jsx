import Count from "@/src/common/count";
import React from "react";

// counter_data
const counter_data = [
  {
    id: 1,
    icon: "fi fi-rr-globe",
    count_number: 512,
    thousand: "K",
    title: "Happy Users",
  },
  {
    id: 2,
    icon: "fi fi-rr-clock",
    count_number: 32,
    thousand: "",
    title: "Hours of Service",
  },
  {
    id: 3,
    icon: "fi fi-rr-book",
    count_number: 980,
    thousand: "",
    title: "Educational Resources",
  },
  {
    id: 4,
    icon: "fi fi-rr-thumbs-up",
    count_number: 623,
    thousand: "K",
    title: "Positive Feedback",
  },
];



const CounterArea = ({style_counter}) => {
  return (
    <>
      <section
        className={`tp-counter-area bg-bottom  ${style_counter ? "pb-60" : "grey-bg pt-60 pb-30"}  wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"
        
        style={{ backgroundImage: style_counter ? null : 'url(/assets/img/bg/shape-bg-1.png)'}}

      >
        <div>
          <div className="container">
            <div className="row">
            {counter_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div className="counter-item mb-60 text-center">
                  <div className="counter-item__icon mb-25">
                    <i className={item.icon}></i>
                  </div>
                  <div className="counter-item__content">
                    <h4 className="counter-item__title">
                      <span className="counter">
                        <Count
                          add_style={true}
                          number={item.count_number}
                          text={item.thousand}
                        />
                      </span>
                    </h4>
                    <p>{item.title}</p>
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

export default CounterArea;
