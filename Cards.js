import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="App">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="https://as1.ftcdn.net/v2/jpg/02/39/67/60/1000_F_239676058_KyOmLLhg5HaFJMl0netBlWJMNA4oe3pp.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">T-Shirts</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, tempore!</p>
                                    <a href="#" className="btn btn-outline-primary">Explore More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?size=626&ext=jpg&ga=GA1.2.2097144422.1650387768" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Shirts</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, tempore!</p>
                                    <a href="#" className="btn btn-outline-primary">Explore More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="https://img.freepik.com/free-photo/bunch-twisted-jeans-close-up-fashionable-clothes_169016-4773.jpg?size=626&ext=jpg&ga=GA1.2.2097144422.1650387768" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Jeans</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, tempore!</p>
                                    <a href="#" className="btn btn-outline-primary">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards