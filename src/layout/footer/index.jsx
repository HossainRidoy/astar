import React from 'react'
import facebook from "../../assets/images/facebook.svg"
import youtube from "../../assets/images/youtube.svg"
import instagram from "../../assets/images/instagram.svg"
import { useForm } from "react-hook-form";

const Footer = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        alert("Success")
        reset()
    }

    return (
        <section id="footer" className="">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="text-white mb-2">আপনার কোনো প্রশ্ন আছে?</h4>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row font-size-18">
                                <div className="col-sm-8">
                                    <input className="form-control" type="text" placeholder="আপনার প্রশ্নটি লেখুন" {...register("Motamot", { required: true })} />
                                </div>
                                <div className="col-sm-3 text-center text-sm-left mt-3 mt-sm-0">
                                    <button type="submit" className="fBtn">পাঠিয়ে দেন</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-6 mt-4 mt-sm-0">
                        <h4 className="text-white mb-2 text-center text-sm-start">ডিলারশিপ এর জন্য যোগাযোগ করুন (হটলাইন): <span className="text-color-orange">09863739992</span></h4>
                        <div className="row align-items-center">
                            <div className="col-sm-5 mt-2 mt-sm-0">
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <a className="icon me-3" href="https://www.facebook.com" target="_blank">
                                        <img src={facebook} alt="" />
                                        <span className="ms-2 icon-text">facebook</span>
                                    </a>
                                    <a className="icon me-3" href="https://youtube.com" target="_blank">
                                        <img src={youtube} alt="" />
                                        <span className="ms-2 icon-text">youtube</span>
                                    </a>
                                    <a className="icon me-3" href="https://www.instagram.com" target="_blank">
                                        <img src={instagram} alt="" />
                                        <span className="ms-2 icon-text">instrgram</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <p className="font-size-18 text-white text-center text-sm-start mt-4 mt-sm-0">
                                    আমতলী প্ল্যান্টেশন লিমিটেড এর পণ্য
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
