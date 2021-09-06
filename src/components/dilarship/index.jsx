import React from 'react'
import Heading_title from '../heading-title'
import { useForm } from "react-hook-form";

const Dilarship = () => {
    const { register, handleSubmit,reset } = useForm();


const onsubmit=(data)=>{
    console.log(data)
    alert("Your Submit Success")
    reset()
}

    return (
        <section id="dilarship" className="padding-py-150">
            <div className="mb-5">
                <Heading_title title="ডিলারশিপ আবেদন ফরম" />
            </div>

            <div className="container">
                <form onSubmit={handleSubmit(onsubmit)} action="">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group mb-3">
                                <input className="form-control" type="text" placeholder="নাম" {...register("name", { required: true })} />
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" type="text" placeholder="মোবাইল নম্বর" {...register("mobile", { required: true })} />
                            </div>
                            <div className="form-group mb-3">
                                <textarea rows="5" className="form-control" type="text" placeholder="বর্তমান ঠিকানা" {...register("address1", { required: true })} />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <input className="form-control" type="text" placeholder="জেলা/উপজেলা" {...register("dist", { required: true })} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <input className="form-control" type="text" placeholder="থানা" {...register("thana", { required: true })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">

                            <div className="form-group mb-3">
                                <input className="form-control" type="text" placeholder="জন্ম তারিখ" {...register("dateOfBirth", { required: true })} />
                            </div>
                            <div className="form-group mb-3">
                                <textarea rows="5" className="form-control" type="text" placeholder="স্থায়ী ঠিকানা" {...register("address2", { required: true })} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">আপনার ডিলার হওয়ার পুরনো অভিজ্ঞতা আছে?</label>
                                <div style={{ marginTop: "14px" }} className="d-flex">
                                    <div className="me-5 radioBtn">
                                        <input id="ha" type="radio" name="radio"  {...register("experienced", { required: true })}/>
                                        <label htmlFor="ha" className="cusIcon">হ্যা</label>
                                    </div>
                                    <div className="me-5 radioBtn">
                                        <input id="na" type="radio" name="radio" {...register("experienced", { required: true })}/>
                                        <label htmlFor="na" className="cusIcon">না</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <input className="form-control" type="text" placeholder="আপনি কোন পণ্য নিয়ে কাজ করছিলেন?" {...register("brand", { required: true })} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button type="submit" className="btn-red">আবেদন করুন</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Dilarship
