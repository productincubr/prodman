import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./GetInTouchDesign.css";
import bgImage from "../assets/icons/background.png"; // section bg
import GetInTouchPara from "./GetInTouchPara";


const GetInTouchDesign = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen || isClosing) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen, isClosing]);

    const startClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 600);
    };

    return (
        <>
            <section 
                className="sw-get-in-touch"
            >
                <div className="swgit-overlay"></div>

                <h2 className="swgit-title">
                    Get In <span>Touch</span>
                </h2>

                <GetInTouchPara />
                <div id='connect' className="swgit-form-bg" style={{ backgroundImage: `url(${bgImage})` }}>

                    <div className="swgit-form-card">
                        <p className="swgit-form-title">
                            Get ready for a blend of freshness, fun, and serious business execution.
                        </p>

                        <form>
                            <div className="swgit-row">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                                    <input type="number" placeholder="Mobile Number" pattern="[0-9]*" inputMode="numeric" />
                            </div>

                            <div className="twoIpnuts">
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Type of Shoot" />
                            </div>


                            <button type="submit">Submit</button>
                            <span className="swgit-smile">We guarantee smiles!</span>
                        </form>
                    </div>
                </div>

            </section>

            {(isOpen || isClosing) && (
                <div className="swgit-modal">
                    <div className="swgit-modal-backdrop"></div>
                    <motion.div
                        className={`swgit-modal-content ${isClosing ? "closing" : ""}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="swgit-modal-close" onClick={startClose}>
                            ×
                        </button>

                        <div className="swgit-form">
                            <p>Get ready for a blend of freshness, fun, and serious business execution. Contact us — we guarantee smiles!</p>

                            <form>
                                <div className="swgit-row">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                </div>

                                <input type="email" placeholder="Email" />

                                <div className="swgit-phone-input">
                                    <span className="swgit-country-code">+91</span>
                                    <input type="number" placeholder="Mobile Number" pattern="[0-9]*" inputMode="numeric" />
                                </div>

                                <input type="text" placeholder="Type of Shoot" />

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default GetInTouchDesign;
