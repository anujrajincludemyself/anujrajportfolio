import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const GlobeComponent = () => {
    const globeEl = useRef();
    const [globeReady, setGlobeReady] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth > 768 ? 800 : window.innerWidth - 40,
                height: window.innerWidth > 768 ? 600 : 400
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const locations = [
        {
            lat: 25.5941,
            lng: 85.1376,
            size: 1.5,
            color: '#3B82F6', // Blue
            label: 'Home',
            city: 'Patna, Bihar'
        },
        {
            lat: 25.2138,
            lng: 75.8648,
            size: 1.5,
            color: '#F97316', // Orange
            label: 'Currently',
            city: 'Kota, Rajasthan'
        }
    ];

    const arcsData = [{
        startLat: 25.5941,
        startLng: 85.1376,
        endLat: 25.2138,
        endLng: 75.8648,
        color: ['#3B82F6', '#F97316']
    }];

    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.pointOfView({ lat: 25.4, lng: 80.5, altitude: 2 }, 0);

            const globe = globeEl.current;
            let angle = 0;
            const animate = () => {
                angle += 0.05;
                globe.pointOfView({ lat: 25.4, lng: 80.5 + angle, altitude: 2 });
                requestAnimationFrame(animate);
            };

            setTimeout(() => {
                setGlobeReady(true);
                animate();
            }, 500);
        }
    }, [globeEl.current]);

    return (
        <section className="py-16 overflow-hidden relative" id="about">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Left Side: Cards */}
                <motion.div 
                    className="flex-1 space-y-6 w-full z-10"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            Global <span className="text-accent-blue">Perspective</span>
                        </h2>
                        <div className="h-1 w-16 bg-accent-blue rounded-full"></div>
                    </div>

                    <div className="grid gap-4">
                        {locations.map((loc, index) => (
                            <motion.div
                                key={index}
                                className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10" style={{ color: loc.color }}>
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-heading text-lg" style={{ color: loc.color }}>{loc.label}</h3>
                                    <p className="text-sm text-text/70">{loc.city}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: interactive Globe */}
                <motion.div
                    className="flex-1 w-full flex justify-center relative cursor-move"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, type: "spring" }}
                    viewport={{ once: true }}
                >
                    {/* Glowing backplate behind globe */}
                    <div className="absolute inset-0 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <Globe
                        ref={globeEl}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        backgroundColor="rgba(0,0,0,0)"

                        pointsData={locations}
                        pointAltitude={0.05}
                        pointRadius="size"
                        pointColor="color"
                        
                        arcsData={arcsData}
                        arcColor="color"
                        arcDashLength={0.4}
                        arcDashGap={0.2}
                        arcDashAnimateTime={2000}
                        arcStroke={1}

                        atmosphereColor="#3B82F6"
                        atmosphereAltitude={0.25}

                        width={dimensions.width}
                        height={dimensions.height}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default GlobeComponent;
