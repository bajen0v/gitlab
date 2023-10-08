import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <>
     <section className="banner-area fix p-relative">
         <div className="banner-bg"   style={{backgroundImage: `url(/assets/img/banner/banner-01.jpg)`}}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                     <div className="hero-content">
                        <span>Learn New Skills & Popular Courses</span>
                        <h2 className="hero-title mb-35">This learning experience is beneficial <i> for a wide individuals!</i></h2>
                        <p>Remember, learning is a lifelong journey, and there's something for everyone in our diverse course catalog.</p>
                        <div className="tp-banner-btn">
                           <Link href="/course-list" className="tp-btn">Explore Courses</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="banner-info d-none">
                        <ul>
                           <li><span>More 1 million</span>Worldwide people</li>
                           <li><span>95%</span>Successful graduates</li>
                           <li><span>4.7<i className="fi fi-rr-star "></i></span>Worldwide Review</li>
                        </ul>
                     </div>
                  </div>
                  <div className="banner-shape d-none d-lg-block">
                     <img src="/assets/img/banner/banner-shape-01.png" alt="banner-shape" className="b-shape" />
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default HeroBanner;