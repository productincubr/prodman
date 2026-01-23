import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./getInTouch.css";
import bgImage from "../../assets/icons/background.png"; // section bg
import GetInTouchPara from "./getInTouchPara";


const GetInTouch = ({ isOpen, onClose }) => {
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
                className="get-in-touch"
            >
                <div className="git-overlay"></div>

                {/* SECTION TITLE */}
                <h2 className="git-title">
                    Get In <span>Touch</span>
                </h2>

                <GetInTouchPara />

                <div className="form-bg" style={{ backgroundImage: `url(${bgImage})` }}>
                    {/* FORM CARD */}
                    <div className="git-form-card">
                        <p className="git-form-title">
                            Get ready for a blend of freshness, fun, and serious business execution.
                        </p>

                        <form>
                            <div className="git-row">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>

                            <div className="phone-input">
                                    <span className="country-code">+91</span>
                                    <input type="number" placeholder="Mobile Number" pattern="[0-9]*" inputMode="numeric" />
                                </div>
                            <div className="twoIpnuts">
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Type of Shoot" />
                            </div>


                            <button type="submit">Submit</button>
                            <span className="git-smile">We guarantee smiles!</span>
                        </form>
                    </div>
                </div>

            </section>

            {(isOpen || isClosing) && (
                <div className="git-modal">
                    <div className="git-modal-backdrop"></div>
                    <motion.div
                        className={`git-modal-content ${isClosing ? "closing" : ""}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="git-modal-close" onClick={startClose}>
                            ×
                        </button>

                        <div className="git-form">
                            <p>Get ready for a blend of freshness, fun, and serious business execution. Contact us — we guarantee smiles!</p>

                            <form>
                                <div className="git-row">
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                </div>

                                <input type="email" placeholder="Email" />

                                <div className="phone-input">
                                    <span className="country-code">+91</span>
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

export default GetInTouch;


