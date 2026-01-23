import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./studioSpaces.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// import studioImg from "../../assets/icons/OurStudioSpaceImg.png";
// import websiteImg from "../../assets/image/websiteImageStuido.jpeg"
// import coachDeskSetUp from "../../assets/image/coachDeskSetup.jpeg";
// import conferenceRoom from "../../assets/image/conferenceRoomSet.jpeg";
import kitchenSet from "../../assets/image/kitchenSet.png";
import coachDeskSetUp from "../../assets/image/coachDeskSetUp.png";
import conferenceRoom from "../../assets/image/conferenceRoomSet.png";
import interviewSetUp from "../../assets/image/interviewSet.png";
import neonSet from "../../assets/image/neonSet.png";
import productShootSet from "../../assets/image/productShootSetUp.png";
import roundTableSet from "../../assets/image/roundTableSet.png";
import singleSet from "../../assets/image/singleSet.png";
import studySetUp from "../../assets/image/studySetUp.png";
import oneSet from "../../assets/image/one.jpg";

const studioData = [
    {
        img: kitchenSet,
        name: "Professional Podcast Studio",
        description: "This studio offers professional lighting, acoustic treatment and flexible set configurations for podcasts, photoshoots and video production. Perfect for creating high-quality content with state-of-the-art equipment."
    },
    {
        img: coachDeskSetUp,
        name: "Coach Desk Setup",
        description: "Ideal for coaching sessions, interviews and professional consultations. Features a clean, focused environment with optimal lighting and sound quality for one-on-one or small group recordings."
    },
    {
        img: conferenceRoom,
        name: "Conference Room Set",
        description: "Spacious conference room setup perfect for corporate meetings, panel discussions and roundtable sessions. Equipped with multiple camera angles and professional audio equipment."
    },
    {
        img: interviewSetUp,
        name: "Interview Studio",
        description: "Intimate interview setup designed for in-depth conversations and talk shows. Features comfortable seating and professional backdrop options for a polished, professional look."
    },
    {
        img: neonSet,
        name: "Neon Studio Set",
        description: "Modern studio with vibrant neon lighting effects, perfect for creative content, music videos, and dynamic social media productions. Customizable lighting options available."
    },
    {
        img: productShootSet,
        name: "Product Shoot Studio",
        description: "Specialized setup for product photography and demonstration videos. Features optimal lighting configurations and clean backgrounds to make your products shine."
    },
    {
        img: roundTableSet,
        name: "Round Table Discussion Set",
        description: "Collaborative environment perfect for group discussions, team meetings, and brainstorming sessions. Circular setup promotes engagement and equal participation."
    },
    {
        img: singleSet,
        name: "Solo Content Studio",
        description: "Compact, efficient setup ideal for solo content creators, vloggers and presenters. Everything you need in an intimate, focused recording environment."
    },
    {
        img: studySetUp,
        name: "Study & Educational Setup",
        description: "Perfect for educational content, tutorials, and online courses. Features a professional backdrop and optimized lighting for clear, engaging educational videos."
    },
    {
        img: oneSet,
        name: "Premium Production Set",
        description: "Our flagship production studio featuring top-tier equipment, versatile lighting options, and customizable backdrops. Suitable for all types of professional content creation."
    }
];

const images = studioData.map(studio => studio.img);

const StudioSpaces = () => {
    // const [index, setIndex] = useState(0);
    // const [isImageHovered, setIsImageHovered] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({ img: null, name: '', description: '' });
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', message: '' });
    const canvasRef = useRef(null);
    const reelRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [manualMode, setManualMode] = useState(false);
    const [manualIndex, setManualIndex] = useState(0);
    const manualTimer = useRef(null);

    // const next = () =>
    //     setIndex((prev) => (prev + 1) % studioData.length);

    // const prev = () =>
    //     setIndex((prev) =>
    //         prev === 0 ? studioData.length - 1 : prev - 1
    //     );

    // const current = studioData[index];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const section = canvas.parentElement;

        const resizeCanvas = () => {
            canvas.width = section.offsetWidth;
            canvas.height = section.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particles = [];
        const spacing = 25; // Even closer spacing
        const mouse = { x: -1000, y: -1000, isHovering: false };
        let hoverLevel = 0; // smooth 0..1 level for hover brightening

        for (let x = 0; x < canvas.width; x += spacing) {
            for (let y = 0; y < canvas.height; y += spacing) {
                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: 0,
                    vy: 0
                });
            }
        }

        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.isHovering = true;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
            mouse.isHovering = false;
        };

        section.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 2;
                    particle.vy -= Math.sin(angle) * force * 2;
                }

                particle.x += particle.vx;
                particle.y += particle.vy;

                particle.vx += (particle.baseX - particle.x) * 0.05;
                particle.vy += (particle.baseY - particle.y) * 0.05;

                particle.vx *= 0.9;
                particle.vy *= 0.9;

                const baseGlow = distance < maxDistance ? (1 - distance / maxDistance) : 0;

                // smooth hover multiplier (0..1)
                const targetHover = mouse.isHovering ? 1 : 0;
                hoverLevel += (targetHover - hoverLevel) * 0.08;
                const hoverMult = 1 + hoverLevel * 0.85; // softer boost for subtler hover

                const glowIntensity = baseGlow * hoverMult;

                // Draw base dot - visible normally like stars; brighten when hovered
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
                const baseAlpha = 0.28 + baseGlow * 0.18;
                ctx.fillStyle = `rgba(244,166,64, ${Math.min(1, baseAlpha + hoverLevel * 0.45)})`;
                ctx.fill();

                // Glow / shine effect - amplified on hover
                if (glowIntensity > 0.001) {
                    // Outer halo (amplified by hover)
                    ctx.save();
                    ctx.shadowColor = '#ffd85a';
                    ctx.shadowBlur = 6 * glowIntensity * (1 + hoverLevel * 0.9);
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, 3 * glowIntensity * (1 + hoverLevel * 0.22), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 220, 110, ${Math.min(0.85, glowIntensity * 0.5 + hoverLevel * 0.35)})`;
                    ctx.fill();
                    ctx.restore();

                    // Secondary bright layer
                    ctx.save();
                    ctx.shadowColor = '#ffb84d';
                    ctx.shadowBlur = 4 * glowIntensity * (1 + hoverLevel * 0.8);
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, 2 * glowIntensity * (1 + hoverLevel * 0.22), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 200, 110, ${Math.min(0.9, glowIntensity * 0.8 + hoverLevel * 0.45)})`;
                    ctx.fill();
                    ctx.restore();

                    // Mid glow
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, 1.2 * glowIntensity * (1 + hoverLevel * 0.18), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 230, 150, ${Math.min(1, glowIntensity * 0.9 + hoverLevel * 0.5)})`;
                    ctx.fill();

                    // Bright core (sparkle) — extra bright when hovered
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, 0.9 * glowIntensity * (1 + hoverLevel * 0.12), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 250, 220, ${Math.min(1, glowIntensity + hoverLevel * 0.65)})`;
                    ctx.fill();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            section.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // measure item width for manual navigation
    useEffect(() => {
        const updateWidth = () => {
            const reel = reelRef.current;
            if (!reel) return;
            const item = reel.querySelector('.studio-reel-item');
            if (item) {
                const style = window.getComputedStyle(item);
                const mr = parseFloat(style.marginRight) || 0;
                setItemWidth(item.offsetWidth + mr);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Handle ESC key to close modal and body overflow
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && modalOpen) {
                setModalOpen(false);
            }
        };

        if (modalOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener('keydown', handleEscKey);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [modalOpen]);


    const enterManual = () => {
        setManualMode(true);
        if (manualTimer.current) clearTimeout(manualTimer.current);
        manualTimer.current = setTimeout(() => setManualMode(false), 4500);
    };

    const prevItem = () => {
        if (!itemWidth) return;
        enterManual();
        setManualIndex(i => {
            const total = images.length * 2;
            return (i - 1 + total) % total;
        });
    };

    const nextItem = () => {
        if (!itemWidth) return;
        enterManual();
        setManualIndex(i => {
            const total = images.length * 2;
            return (i + 1) % total;
        });
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Booking submitted:', formData);
        alert(`Thank you for booking ${modalData.name}! We will contact you soon.`);
        setFormData({ name: '', email: '', phone: '', date: '', message: '' });
        setModalOpen(false);
    };

    return (
        <section className="studio-spaces" id="studios">
            <canvas ref={canvasRef} className="particle-canvas"></canvas>

            <h2>
                Our <span>Studio Spaces</span>
            </h2>
            <p className="studio-subtitle">
                Explore our professionally designed podcast and shooting sets.
            </p>

            <div className="studio-wrapper">

                {/* IMAGE PANEL */}
                {/* IMAGE PANEL – FILM REEL */}
                <div className="studio-image-wrapper">
                    <button className="reel-arrow left" onClick={prevItem} aria-label="Previous">
                        <FaArrowLeft />
                    </button>
                    <button className="reel-arrow right" onClick={nextItem} aria-label="Next">
                        <FaArrowRight />
                    </button>

                    <div className={manualMode ? 'studio-reel manual' : 'studio-reel'} ref={reelRef} aria-hidden={manualMode ? 'false' : 'true'}
                        style={manualMode ? { transform: `translateX(-${manualIndex * itemWidth}px)` } : undefined}>
                        {[...studioData, ...studioData].map((studio, i) => (
                            <motion.div
                                key={i}
                                className="studio-reel-item"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <div className="reel-item-inner">
                                    <img src={studio.img} alt="studio reel" />
                                    <button
                                        className="reel-more-btn"
                                        onClick={() => {
                                            setModalData({ img: studio.img, name: studio.name, description: studio.description });
                                            setModalOpen(true);
                                        }}
                                    >
                                        More details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {modalOpen && (
                    <div className="studio-modal" onClick={() => setModalOpen(false)}>
                        <div className="studio-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>

                            <div className="modal-top-section">
                                <div className="modal-left">
                                    <h3>{modalData.name}</h3>
                                    <p>{modalData.description}</p>
                                </div>

                                <div className="modal-right">
                                    <img src={modalData.img} alt="studio" />
                                </div>
                            </div>

                            <div className="modal-booking-section">
                                <h4>Book Now</h4>
                                <form className="booking-form" onSubmit={handleFormSubmit}>
                                    <div className="form-row">
                                        <input 
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            required
                                        />
                                        <input 
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="phone-input-wrapper">
                                            <span className="country-code">+91</span>
                                            <input 
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleFormChange}
                                                required
                                            />
                                        </div>
                                        <input 
                                            type="date"
                                            name="date"
                                            placeholder="Preferred Date"
                                            value={formData.date}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <textarea 
                                        name="message"
                                        placeholder="Additional Requirements"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}



            </div>
        </section>
    );
};

export default StudioSpaces;
