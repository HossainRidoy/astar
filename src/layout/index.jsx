import React from 'react'
import Contacts from '../components/contacts'
import Dilarship from '../components/dilarship'
import Products from '../components/products'
import Slide from '../components/slide'
import Footer from './footer'
import Header from './header'

import bg1 from "../assets/images/slide.webp"
import bg2 from "../assets/images/With-Tea.jpg"

const Layout = () => {
    return (
        <>
            <Header />

            <Slide col="col-sm-5"
                bgImg={bg1}
                title="সেরা মানের এ স্টার চায়ের ব্যবসা করে আজ আমি সফল।"
                subTitle="দেশব্যাপী এ স্টার চায়ের ডিলারশিপ নিয়োগ চলছে। আজই ডিলারশিপ এর জন্য আবেদন করুন।" />

            <Products />

            <Slide col="col-sm-3"
                bgImg={bg2}
                title="এ স্টার চায়ের ডিলারশিপ নিয়ে আজ আমি স্বচ্ছল।"
                subTitle="আপনারাও আজই ডিলারশিপ এর জন্য আবেদন করুন।" />

            <Dilarship />
            <Contacts />

            <Footer />
        </>
    )
}

export default Layout
