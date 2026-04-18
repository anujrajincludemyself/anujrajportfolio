import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';
import './Globe.css';

const GlobeComponent = () => {
    const globeEl = useRef();
    const [globeReady, setGlobeReady] = useState(false);

    const locations = [
        {
            lat: 25.5941,
            lng: 85.1376,
            size: 0.8,
            color: '#ef4444', // Red-pink marker
            label: 'Home',
            city: 'Patna, Bihar'
        },
        {
            lat: 25.2138,
            lng: 75.8648,
            size: 0.8,
            color: '#ef4444', // Red-pink marker
            label: 'Currently',
            city: 'Kota, Rajasthan'
        }
    ];

    const arcsData = [{
        startLat: 25.5941,
        startLng: 85.1376,
        endLat: 25.2138,
        endLng: 75.8648,
        color: ['#ef4444', '#f87171']
    }];

    useEffect(() => {
        if (globeEl.current) {
            // Set initial camera position
            globeEl.current.pointOfView({
                lat: 25.4,
                lng: 80.5,
                altitude: 2.5
            }, 0);

            // Rotate globe
            const globe = globeEl.current;
            let angle = 0;
            const rotationSpeed = 0.08;

            const animate = () => {
                angle += rotationSpeed;
                globe.pointOfView({
                    lat: 25.4,
                    lng: 80.5 + angle,
                    altitude: 2.5
                });
                requestAnimationFrame(animate);
            };

            setTimeout(() => {
                setGlobeReady(true);
                animate();
            }, 100);
        }
    }, []);

    return (
        <section className="globe-section" id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title"></h2>
                    {/* <p className="globe-description">
                        Walking With This Journey
                    </p> */}
                </motion.div>

                <motion.div
                    className="globe-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Globe
                        ref={globeEl}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        backgroundColor="rgba(0,0,0,0)"

                        pointsData={locations}
                        pointAltitude={0.05}
                        pointRadius="size"
                        pointColor="color"
                        pointLabel={d => `
              <div style="
                background: rgba(255, 255, 255, 0.95);
                padding: 12px 16px;
                border-radius: 8px;
                border: 1px solid rgba(0, 0, 0, 0.1);
                color: #111827;
                font-family: Inter, sans-serif;
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              ">
                <div style="font-size: 14px; font-weight: 600; color: ${d.color}; margin-bottom: 4px;">
                  ${d.label}
                </div>
                <div style="font-size: 12px; color: #4b5563;">
                  ${d.city}
                </div>
              </div>
            `}

                        arcsData={arcsData}
                        arcColor="color"
                        arcDashLength={0.4}
                        arcDashGap={0.2}
                        arcDashAnimateTime={3000}
                        arcStroke={0.5}

                        atmosphereColor="#93c5fd"
                        atmosphereAltitude={0.15}

                        width={window.innerWidth > 768 ? 800 : window.innerWidth - 40}
                        height={window.innerWidth > 768 ? 800 : 500}
                    />

                    <div className="location-cards">
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                className="location-card"
                                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="location-icon" style={{ background: location.color }}>
                                    📍
                                </div>
                                <div className="location-info">
                                    <h3>{location.label}</h3>
                                    <p>{location.city}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobeComponent;
