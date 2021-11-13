import React from 'react';
import faqImg from '../../../images/faq/faq.png'

const FAQ = () => {
    return (
        <div>
            <section className="container my-5">
            <h1 className="text-center font-margin heading">Frequently Asked <span className="orange-color">Questions</span></h1>
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <img src={faqImg} className="img-fluid p-4" alt=""/>
                </div>
                <div className="col-lg-6">
                    <div className="row gy-2">

                        {/* <!-- accordian 1 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingZero">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseZero" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseZero">
                                            <h5 className="text-dark">What are the most important things I should
                                                know about riding a bike?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseZero" className="accordion-collapse collapse show"
                                        aria-labelledby="panelsStayOpen-headingZero">
                                        <div className="accordion-body">
                                            Safety First! Always obey the rules of the road. Obey all traffic signals,
                                            signs, and laws. Get in the mindset of “driving” your bike—not just “riding”
                                            your bike. This will help you be a more focused and legally compliant bike
                                            rider.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 1 --> */}


                        {/* <!-- accordian 2 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            <h5 className="text-dark">How can I tell if my helmet is old and I need a
                                                new one?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <p>Bear in mind that if the helmet did its job most people would tell
                                                you that they did not even hit their head, or did not hit their head
                                                that hard. And the thin shells on most helmets now tend to hide any
                                                dents in the foam. But if you can see marks on the shell or measure any
                                                foam crush at all, replace the helmet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 2 --> */}


                        {/* <!-- accordian 3 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            <h5 className="text-dark">My bike has been in storage is it safe to ride?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>The bottom line: Leaving your bike outside for a day or two won't do
                                                major damage. You may see signs of rust after a week of neglect. After
                                                one month in bad conditions, your beloved bike parts will start to
                                                degrade.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 3 --> */}


                        {/* <!-- accordian 4 --> */}
                        <div className="col-12">
                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            <h5 className="text-dark">What rules should I follow when riding my bike?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <p>Go With the Traffic Flow. Ride on the right in the same direction as
                                                other vehicles. ...
                                                Obey All Traffic Laws. A bicycle is a vehicle and you're a driver. ...
                                                Yield to Traffic When Appropriate. ...
                                                Be Predictable. ...
                                                Stay Alert at All Times. ...
                                                Look Before Turning. ...
                                                Watch for Parked Cars.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- accordian 4 --> */}

                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default FAQ;