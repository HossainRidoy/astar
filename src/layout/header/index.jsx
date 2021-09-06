import React, { useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.svg"

const Header = () => {


    const navbarRef = useRef()
    const navbarNavAltMarkup = useRef()


    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                navbarRef && navbarRef.current.classList.add("sticky")
            } else {
                navbarRef && navbarRef.current.classList.remove("sticky")
            }
        })
    }, [])


    const onClickToggle = () => {
        navbarNavAltMarkup.current && navbarNavAltMarkup.current.classList.remove("show")
    }


    return (

        <nav id="navbar" ref={navbarRef} className="navbar navbar-expand-lg navbar-light fixed-top sticky">
            <div className="container">

                <a className="logo" href="#">
                    <img className="img-fluid" src={logo} alt="A Atar" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div ref={navbarNavAltMarkup} class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto font-size-22">
                        <li className="nav-item" onClick={onClickToggle}>
                            <a className="nav-link text-light font-size-22" href="#">হোম</a>
                        </li>
                        <li className="nav-item" onClick={onClickToggle}>
                            <a className="nav-link text-light font-size-22" href="#product">প্রোডাক্টসমূহ</a>
                        </li>
                        <li className="nav-item"onClick={onClickToggle}>
                            <a className="nav-link text-light font-size-22" href="#dilarship">ডিলারশিপ</a>
                        </li>
                        <li className="nav-item"onClick={onClickToggle}>
                            <a className="nav-link text-light font-size-22" href="#contacts">যোগাযোগ </a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Header
