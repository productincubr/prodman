import React from "react";
import { Link } from "react-router-dom";
import "../styles/portfolio.css";
import DesignHeader from "../servicewebpage/DesignHeader";
import DesignFooter from "../servicewebpage/DesignFooter";
import { FiArrowUpRight } from "react-icons/fi";


const works = [
    {
        title: "Ethi",
        link: "/design/ethi-services",
    },
    {
        title: "Nutrition by Loveneet",
        link: "/design/nbl-services",
    },
    {
        title: "Work Life Desk",
        link: "/design/wld-services",
    },
];

const Portfolio = () => {
    return (
        <>
        <DesignHeader />
            <section id="ongoing-works" className="ongoing-section">
                <div className="ongoing-container">
                    <h2 className="ongoing-title">
                        Here's Some Of Our Ongoing Work
                    </h2>

                    <div className="ongoing-grid">
                        {works.map((item, index) => (
                            <Link to={item.link} className="ongoing-card" key={index}>
                                <h3>{item.title}</h3>

                                <div className="read-more">
                                    <span>Read More</span>
                                    <span className="read-arrow"><FiArrowUpRight /></span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <button className="view-all-btn">
                        View All <span>→</span>
                    </button>
                </div>
            </section>

        <DesignFooter />
        </>

    );
};

export default Portfolio;
