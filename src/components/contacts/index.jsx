import React from 'react'
import Heading_title from '../heading-title'
import location from "../../assets/images/location.svg"
import phone from "../../assets/images/phone.svg"
import map from "../../assets/images/map.svg"

const Contacts = () => {
    return (
        <section id="contacts" className="padding-py-150">
            <div className="mb-5">
                <Heading_title title="যোগাযোগ" />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <div className="mb-5">
                            <h2 className="mb-3">কেন্দ্রীয় অফিস</h2>
                            <div className="d-flex align-items-center mb-3">
                                <div className="icon">
                                    <img style={{ height: "25px" }} className="p-1" src={location} alt="" />
                                </div>
                                <div className="ms-3">
                                    বাড়ি ১১, রোড ২১, সেক্টর ৪, উত্তরা, ঢাকা
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="icon">
                                    <img style={{ height: "25px" }} className="p-1" src={phone} alt="" />
                                </div>
                                <div className="ms-3">
                                    +880-1717 037 037
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <h2 className="mb-3">ফ্যাক্টরী</h2>
                            <div className="d-flex align-items-center mb-3">
                                <div className="icon">
                                    <img style={{ height: "25px" }} className="p-1" src={location} alt="" />
                                </div>
                                <div className="ms-3">
                                    আমতলী প্ল্যান্টেশন লিমিটেড আমতলী টি গার্ডেন, বাহুবল, হবিগঞ্জ।
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        {/* <img src={map} className="img-fluid" alt="" /> */}

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1241.1422638941804!2d90.3897356070561!3d23.8790101214181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1630734367474!5m2!1sen!2sbd" width="100%" height="600" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
