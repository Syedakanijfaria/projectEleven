import React from "react";

const Client = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center">Our Traveller Say </h1>
            <h5 className="text-center">What our traveller say about us.</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-5">
                <div className="col">
                    <div className="card border rounded p-3">
                        <div className="text-center">
                            <img src="https://i.ibb.co/tJV82X2/banner-orignal-image.jpg" className="w-75" alt="" />
                        </div>
                        <div className="card-body mx-auto text-center">
                            <p>Slate helps you see how
                                many more days you need
                                to work to reach your financial
                                goal for the month and year.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border rounded p-3">
                        <div className="text-center">
                            <img src="https://i.ibb.co/YXWRtTF/result.jpg" className="w-75" alt="" />
                        </div>

                        <div className="card-body mx-auto text-center">
                            <p>Slate helps you see how
                                many more days you need
                                to work to reach your financial
                                goal for the month and year.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border rounded p-3">
                        <div className="text-center"><img src="https://i.ibb.co/kxzdKtc/Background-2.png" className="w-75" alt="" /> </div>

                        <div className="card-body mx-auto text-center">
                            <p>Slate helps you see how
                                many more days you need
                                to work to reach your financial
                                goal for the month and year.
                            </p>


                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};
export default Client;
