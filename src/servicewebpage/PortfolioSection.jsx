import React, { useState } from "react";
import { motion } from "framer-motion";
import "./portfolioSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import nblCard from "../assets/image/portfolioNBL.jpg";
import wldCard from "../assets/image/portfolioWLD.jpg";
import ethiCard from "../assets/image/portfolioEthi.jpg";

const PortfolioSection = () => {
  const [active, setActive] = useState(null);

  const cards = [
    { id: "left", img: nblCard, position: "left", link: "/design/nbl-services" },
    { id: "center", img: wldCard, position: "center", link: "/design/wld-services" },
    { id: "right", img: ethiCard, position: "right", link: "/design/ethi-services" },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-inner">

        {/* HEADER */}
        <div className="portfolio-header">
          <h2>Portfolio</h2>
          <Link to="/design/portfolio" className="portfolio-btn">
            Visit All Projects <span className="arrowS"><FiArrowUpRight /></span>
          </Link>
        </div>

        {/* CARDS */}
        <div className="portfolio-grid">
          {cards.map((card) => {
            const isActive = active === card.id;
            const isDimmed = active && !isActive;

            const cardContent = (
              <motion.div
                key={card.id}
                className={`portfolio-card ${card.position} ${
                  isDimmed ? "dimmed" : ""
                }`}
                onHoverStart={() => setActive(card.id)}
                onHoverEnd={() => setActive(null)}
                animate={{
                  scale: isActive ? 1.06 : 1,
                  y: isActive ? -14 : 0,
                  zIndex: isActive ? 20 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
              >
                <img src={card.img} alt="Portfolio Project" />
              </motion.div>
            );

            return card.link ? (
              <Link key={card.id} to={card.link}>
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
