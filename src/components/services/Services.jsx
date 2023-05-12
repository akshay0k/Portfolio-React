import React from 'react'
import "./services.css"

const Services = () => {
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil services__icon"></i>
                <h3 className="services__title"></h3>
            </div>
            <span className="services__button">
                <i className="uil uil-arrow-right services__button-icon">

                </i>
            </span>

            <div className="services__modal">
                <div className="services__content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title"></h3>

                    <p className="services__modal-description">
                        Services with more than 1years of experience.
                        Providing quality work to clients and companies
                    </p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal services">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface
                            </p>
                        </li>

                        <li className="services__modal services">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Web page development
                            </p>
                        </li>

                        <li className="services__modal services">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create ux element interaction
                            </p>
                        </li>

                        <li className="services__modal services">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I postion your company brand
                            </p>
                        </li>


                        <li className="services__modal services">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                               Design and mokups of products for companies
                            </p>
                        </li>

                    </ul>

                </div>
            </div>
            
        </div>
    </div>
    
   </section>
  )
}

export default Services
