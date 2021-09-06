import React from 'react'
import Button from '../button'

const Slide = (props) => {
    return (
        <section id="slide" style={{  
            backgroundImage: `url(${props.bgImg})`,
          }}>
            <div className="container">
                <div className={`slide-text ${props.col}`}>
                    <h1 className="mb-2 mb-sm-4 text-white">{props.title}</h1>
                    <h4 className="text-white mb-2 mb-sm-5">{props.subTitle}</h4>
                    <Button title="ডিলারশিপ" />
                </div>
            </div>
        </section>
    )
}

export default Slide
