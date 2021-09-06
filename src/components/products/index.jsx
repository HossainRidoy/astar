import React from 'react'
import green_tee from "../../assets/images/Green_tee.webp"
import yellow_tee from "../../assets/images/Yellow_tee.webp"
import Heading_title from '../heading-title'

const Products = () => {
    return (
        <section id="product" className="padding-py-150">
            <div className="mb-5">
                <Heading_title title="আমাদের প্রোডাক্টসমূহ" />
            </div>

            <div className="container">
                <div className="row products-thumbnail">
                    <div className="col-sm-6 left-product">
                        <div className="row align-items-center p-4">
                            <div className="col-6 p-0">
                                <h2 className="mb-3">এ স্টার সিলভার টি</h2>
                                <p className="font-size-22">-১০০% ন্যাচারাল ও পিওর</p>
                                <p className="font-size-22">- ব্ল্যাক টি</p>
                                <h3 className="mt-3">৫০০ গ্রাম</h3>
                            </div>
                            <div className="col-6 p-0">
                                <img src={green_tee} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 right-product">
                        <div className="row align-items-center p-4">
                            <div className="col-6 p-0">
                                <h2 className="mb-3">এ স্টার গোল্ড টি</h2>
                                <p className="font-size-22">-১০০% ন্যাচারাল ও পিওর</p>
                                <p className="font-size-22">- ব্ল্যাক টি</p>
                                <h3 className="mt-3">৫০০ গ্রাম</h3>
                            </div>
                            <div className="col-6 p-0">
                                <img src={yellow_tee} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
