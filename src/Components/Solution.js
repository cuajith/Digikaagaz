import React from 'react'
import Button from 'react-bootstrap/Button'
import "./dropdown.css"

const Solution = () => {
    return (
        <section id="solution-dropdown">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className='row'>
                            <div className='col-md-4 mx-auto'>
                                <h4 className='heading'>
                                    Why DigiKaagaz ?
                                </h4>
                                <p className='solution-para'>
                                    Once people see it and start using it, they will never want to leave. JobAdder is our single source of truth.”
                                </p>
                                <Button className='button' variant="outline-primary">
                                    About DigiKaagaz
                                </Button>
                            </div>
                            <div className='col-md-4 mx-auto'>
                                <h4 className='heading'>
                                    Solution for
                                </h4>
                                <p className='solution-para1'>
                                    <strong>Business Development</strong>
                                    <div>
                                        Laborum exercitation minim dolor cupidatat ut officia cillum cupidatat.
                                    </div>
                                </p>
                                <p className='solution-para2'>
                                    <strong>Talent nature</strong>
                                    <div>
                                        Laborum exercitation minim dolor cupidatat ut officia cillum cupidatat.
                                    </div>
                                </p>
                                <p className='solution-para3'>
                                    <strong>Reporting and insights</strong>
                                    <div>
                                        Laborum exercitation minim dolor cupidatat ut officia cillum cupidatat.
                                    </div>
                                </p>
                            </div>
                            <div className='col-md-4 mx-auto'>
                                <h4 className='heading'>
                                    Fulfilment
                                </h4>
                                <p className='solution-para'>
                                    <strong>Candiate sourcing</strong>
                                    <div>
                                        Laborum exercitation minim dolor cupidatat ut officia cillum cupidatat.
                                    </div>
                                </p>
                                <p className='solution-para'>
                                    <strong>Applicant management</strong>
                                    <div>
                                        Laborum exercitation minim dolor cupidatat ut officia cillum cupidatat.
                                    </div>
                                </p>
                                <p className='solution-para'>
                                    <strong>Communications</strong>
                                    <div>
                                        Laborum exercitation minim dolor cupidatat ut officia cillum cupidatat.
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution