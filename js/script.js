(() => {
// Simple seeded PRNG to ensure the background looks the same on every refresh
let currentSeed = 42; // Fixed seed for consistent background
function customRandom() {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
}

// Helper: Circular particles
const createCircleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(32, 32, 30, 0, Math.PI * 2);
    context.fillStyle = '#ffffff';
    context.fill();
    return new THREE.CanvasTexture(canvas);
};

// Initialize Three.js WebGL Immersive Universe
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
// Fog removed to allow infinite deep space visibility

const isMobile = window.innerWidth <= 768;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));

// ==========================================
// 1. BRAND MARK: Exact SVG Extrusion
// ==========================================
let brandMesh = null; // Removed large white logo per user request

// ==========================================
// 2. DATA FLOW: Original Hero Starfield
// ==========================================
const particlesCount = isMobile ? 1000 : 3000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i+=3) {
    posArray[i] = (customRandom() - 0.5) * 120; // x
    posArray[i+1] = (customRandom() - 0.5) * 120; // y
    posArray[i+2] = (customRandom() - 0.5) * 120; // z (clean, massive sphere)
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const circleTexture = createCircleTexture();
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3,
    color: 0xF5F5F7,
    map: circleTexture,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);
window.particlesMaterial = particlesMaterial;

// ==========================================
// 3. COSMOS TUNNEL: Infinite Travel (CASE STUDIES)
// ==========================================
// REMOVED BLURRY DOT TEXTURE. Using raw WebGL pixels for 100% crisp, sharp dots.

const tunnelCount = isMobile ? 200 : 880; // Reduced by ~12% for the perfect balance
const tunnelPos = new Float32Array(tunnelCount * 3);
for(let i = 0; i < tunnelCount * 3; i+=3) {
    tunnelPos[i] = (customRandom() - 0.5) * 2000; 
    tunnelPos[i+1] = (customRandom() - 0.5) * 2000; 
    tunnelPos[i+2] = (customRandom() * 3050) - 3000; 
}
const tunnelGeom = new THREE.BufferGeometry();
tunnelGeom.setAttribute('position', new THREE.BufferAttribute(tunnelPos, 3));

const tunnelMat = new THREE.PointsMaterial({
    size: 2.0, // Razor sharp 2px dot
    sizeAttenuation: false, // CRITICAL: Never scale them up to huge blocks! They stay crisp dots flying past.
    color: 0x7C3AED, 
    transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false
});
const tunnelMesh = new THREE.Points(tunnelGeom, tunnelMat);
tunnelMesh.visible = false;
scene.add(tunnelMesh);
window.tunnelMat = tunnelMat;

const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

const setCaseStudyWarpActive = (active) => {
    const shouldRenderWarp = Boolean(active) && !reducedMotionMedia.matches;
    tunnelMesh.visible = shouldRenderWarp;
    if (!shouldRenderWarp) {
        tunnelMat.opacity = 0;
    }
};

const resetBackgroundForRoute = () => {
    setCaseStudyWarpActive(false);

    if (window.gsap) {
        gsap.killTweensOf([particlesMaterial, tunnelMat, document.body]);
    }

    particlesMaterial.opacity = 0.6;
    document.body.style.backgroundColor = '';
};

window.impulseBackground = {
    resetForRoute: resetBackgroundForRoute,
    setCaseStudyWarpActive,
    getState: () => ({
        particlesOpacity: particlesMaterial.opacity,
        tunnelOpacity: tunnelMat.opacity,
        tunnelVisible: tunnelMesh.visible
    })
};

window.addEventListener('impulse:route-change', resetBackgroundForRoute);
reducedMotionMedia.addEventListener('change', () => {
    if (reducedMotionMedia.matches) {
        setCaseStudyWarpActive(false);
    }
});
resetBackgroundForRoute();

// ==========================================
// 4. DEEP SPACE BACKGROUND (Static & Sparkly)
// ==========================================
const bgStarsCount = isMobile ? 5000 : 25000; // The true millions of static stars background
const bgStarsPos = new Float32Array(bgStarsCount * 3);
const bgStarsColors = new Float32Array(bgStarsCount * 3);

for(let i = 0; i < bgStarsCount * 3; i+=3) {
    bgStarsPos[i] = (customRandom() - 0.5) * 4000; 
    bgStarsPos[i+1] = (customRandom() - 0.5) * 4000; 
    bgStarsPos[i+2] = (customRandom() - 0.5) * 4000 - 1000;

    let r, g, b;
    const colorType = customRandom();
    if (colorType > 0.6) {
        r = 0.48; g = 0.22; b = 0.92; // Bright Violet
    } else if (colorType > 0.2) {
        r = 0.33; g = 0.24; b = 0.59; // Core Impulse Violet
    } else {
        r = 0.8; g = 0.7; b = 0.9; // White/Soft Violet
    }

    const brightness = customRandom() > 0.85 ? 1.0 : (customRandom() * 0.3 + 0.1); 
    bgStarsColors[i] = r * brightness;
    bgStarsColors[i+1] = g * brightness;
    bgStarsColors[i+2] = b * brightness;
}

const bgStarsGeom = new THREE.BufferGeometry();
bgStarsGeom.setAttribute('position', new THREE.BufferAttribute(bgStarsPos, 3));
bgStarsGeom.setAttribute('color', new THREE.BufferAttribute(bgStarsColors, 3));

const bgStarsMat = new THREE.PointsMaterial({
    size: 1.5, // Razor sharp 1.5px background dot
    sizeAttenuation: false, 
    vertexColors: true, 
    transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false
});

const bgStarsMesh = new THREE.Points(bgStarsGeom, bgStarsMat);
scene.add(bgStarsMesh);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(-10, 20, 20);
scene.add(directionalLight);
const violetLight = new THREE.PointLight(0x543D98, 2, 50);
violetLight.position.set(10, -10, 10);
scene.add(violetLight);

camera.position.z = 35;

// Interaction
let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
});

const clock = new THREE.Clock();
let lastFrameTime = 0;
const fpsInterval = 1000 / 30; // 30 FPS target for mobile

function animate3D(time) {
    requestAnimationFrame(animate3D);

    // Frame throttling on mobile to save CPU/Battery
    if (isMobile) {
        const elapsed = time - lastFrameTime;
        if (elapsed < fpsInterval) return; // Skip frame
        lastFrameTime = time - (elapsed % fpsInterval);
    }

    const elapsedTime = clock.getElapsedTime();

    const scrollY = window.scrollY;

    if(brandMesh) {
        // Flat 2D vector should face camera perfectly straight
        brandMesh.rotation.y = 0; 
        brandMesh.rotation.x = 0;
        
        // PHYSICALLY GLUE THE 3D LOGO TO THE HERO SECTION HTML
        const fov = camera.fov * (Math.PI / 180);
        const visibleHeightAtZ0 = 2 * Math.tan(fov / 2) * camera.position.z;
        const scrollOffsetIn3D = (scrollY / window.innerHeight) * visibleHeightAtZ0;
        
        // Add a smooth continuous floating animation
        const floatOffset = Math.sin(elapsedTime * 2) * 1.5;

        // Base height is 2. Add float offset and scroll offset to physically glue it to the HTML scroll
        brandMesh.position.y = 2 + floatOffset + scrollOffsetIn3D; 
    }

    if (!reducedMotionMedia.matches) {
        particlesMesh.rotation.y = elapsedTime * 0.05;
    }

    // Ambient drift for the deep space background
    if (bgStarsMesh && !reducedMotionMedia.matches) {
        bgStarsMesh.rotation.y += 0.0003;
        bgStarsMesh.rotation.x += 0.0001;
    }
    
    camera.position.y = reducedMotionMedia.matches ? 0 : -(scrollY * 0.015);

    // Infinite Cosmos Travel Effect (Only when active)
    if(tunnelMesh.visible) {
        const positions = tunnelMesh.geometry.attributes.position.array;
        for(let i = 2; i < tunnelCount * 3; i+=3) {
            positions[i] += 12.0; // Increased speed by another 25% for maximum warp
            if(positions[i] > 50) positions[i] = -3000; // Wrap back to deep space seamlessly
        }
        tunnelMesh.geometry.attributes.position.needsUpdate = true;
    }
    
    renderer.render(scene, camera);
}
animate3D();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================
// DOM & GSAP LOGIC
// ==========================================
    
    const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
    });
    window.globalLenis = lenis;


    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    lenis.on('scroll', () => {
        const nav = document.getElementById('main-nav');
        if(nav) {
            if(window.scrollY > 10) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        }
    });
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0, 0);

    // ==========================================================
    // MARK CURSOR — the user's pointer is the brand mark.
    // Idle: small filled mark following the mouse.
    // Active (over interactive): large outlined mark with text inside.
    // ==========================================================
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    if (cursor && cursorDot) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power2.out' });
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05 });
        });
    }

    const magneticLinks = document.querySelectorAll('.magnetic-link, .work-item, .hs-card, .test-card, .btn, .acc-header');

    magneticLinks.forEach(link => {
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
        });
        if (link.classList.contains('magnetic-link')) {
            link.addEventListener('mousemove', (e) => {
                const rect = link.getBoundingClientRect();
                const relX = e.clientX - rect.left - rect.width / 2;
                const relY = e.clientY - rect.top - rect.height / 2;
                gsap.to(link, { x: relX * 0.2, y: relY * 0.2, duration: 0.3, ease: 'power2.out' });
            });
        }
    });



    // SplitType
    const splitTexts = document.querySelectorAll('.split-text');
    splitTexts.forEach(text => {
        const split = new SplitType(text, { types: 'lines, words' });
        split.lines.forEach(line => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('line-wrapper');
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });
        const splitStart = document.body.classList.contains('service-page') ? 'top 68%' : 'top 95%';
        gsap.fromTo(split.words,
            { yPercent: 120, opacity: 0 },
            {
                scrollTrigger: { trigger: text, start: splitStart, toggleActions: 'play none none reverse' },
                yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.015, ease: 'power4.out'
            }
        );
    });

    window.initHomeDOMAnimations = () => {
    if (window.cleanupHomeDOMAnimations) {
        window.cleanupHomeDOMAnimations();
    }

    const preExistingHomeTriggers = new Set(ScrollTrigger.getAll());

    // ==========================================
    // CASE STUDIES: Center-to-Sides Cosmos Zoom
    // ==========================================
    const cosmosSection = document.getElementById('cases-pin');
    const cosmosCards = gsap.utils.toArray('.cosmos-card');

    if(cosmosCards.length > 0) {
        
        const isMobile = window.innerWidth <= 768;
        
        // Initial State: Position cards deep in a true 3D tunnel using Z-axis
        cosmosCards.forEach((card, index) => {
            const isLeft = index % 2 === 0;
            // X position is fixed. Perspective naturally moves them outward as you fly closer.
            // On mobile, push them perfectly to the sides (0.45 * width) so they don't overlap in the center even with 80vw width!
            const offsetMultiplier = isMobile ? 0.45 : 0.3;
            const xOffset = isLeft ? -window.innerWidth * offsetMultiplier : window.innerWidth * offsetMultiplier;
            // No vertical offset needed if they are neatly on the sides
            const yOffset = 0;
            
            gsap.set(card, { 
                x: xOffset, 
                y: yOffset, 
                xPercent: -50, 
                yPercent: -50, 
                z: -5000, // Very deep in the tunnel
                scale: 1, // Let CSS perspective handle sizing natively
                opacity: 0, 
                pointerEvents: 'none',
                rotationZ: isMobile ? 0 : (isLeft ? -5 : 5)
            });
        });
        
        // Background Color Inversion
        gsap.to(document.body, { 
            backgroundColor: '#000000',
            scrollTrigger: {
                trigger: cosmosSection,
                start: 'top bottom',
                end: 'top top',
                scrub: true
            }
        });

        // Crossfade Particle Systems (Hero slow drift -> Fast warp)
        gsap.fromTo(particlesMaterial, 
            { opacity: 0.7 },
            { opacity: 0, scrollTrigger: { trigger: cosmosSection, start: 'top 80%', end: 'top 20%', scrub: true } }
        );

        gsap.fromTo(tunnelMat, 
            { opacity: 0 },
            {
                opacity: 0.8,
                scrollTrigger: {
                    trigger: cosmosSection,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    onEnter: () => setCaseStudyWarpActive(true),
                    onEnterBack: () => setCaseStudyWarpActive(true),
                    onLeaveBack: () => setCaseStudyWarpActive(false)
                }
            }
        );
        
        // Hide warp particles smoothly when exiting into the Logos/Services section
        // Handled by the master timeline's onLeave to account for pin spacing

        // Pin the section for continuous forward travel
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cosmosSection,
                pin: true,
                scrub: 0.7, // Reduced lag for a 10% faster response to scroll
                start: 'top top',
                end: () => '+=' + (cosmosCards.length * 1080), // Reduced distance by 10% to make them fly faster
                onLeave: () => {
                    // Fade out the warp strictly AFTER the pinned section finishes
                    gsap.to(tunnelMat, { opacity: 0, duration: 0.5, onComplete: () => setCaseStudyWarpActive(false) });
                },
                onEnterBack: () => {
                    // Bring back the warp if scrolling up into the case studies again
                    setCaseStudyWarpActive(true);
                    gsap.to(tunnelMat, { opacity: 0.8, duration: 0.5 });
                }
            }
        });

        cosmosCards.forEach((card, index) => {
            // Restore desktop-style time stagger so two cards are visible, but our new yOffset prevents physical overlap
            const staggerTime = 2.0; 
            const startTime = index * staggerTime; 
            const flyDuration = 5.0; 

            // 1. Fade in as it approaches from the deep vanishing point
            tl.to(card, {
                opacity: 1, pointerEvents: 'auto', duration: 1.5, ease: 'power1.inOut'
            }, startTime) 
            
            // 2. TRUE CONTINUOUS 3D FLY-THROUGH (Never stops, never artificially slides)
            tl.to(card, { 
                z: 1200, // Fly close to camera lens but avoid hitting perspective=1500px to prevent renderer glitches
                ease: 'none', // Constant velocity to maintain travel illusion
                duration: flyDuration 
            }, startTime) 
            
            // 3. Fade out quickly right as it blows past your peripheral vision
            tl.to(card, {
                opacity: 0, pointerEvents: 'none', duration: 0.5, ease: 'power1.in'
            }, startTime + flyDuration - 0.5);
        });
    }

    // Services Scrub
    const textFills = document.querySelectorAll('.text-fill');
    textFills.forEach(fill => {
        gsap.to(fill, {
            backgroundPositionX: '0%', ease: 'none',
            scrollTrigger: { trigger: fill, scrub: 1, start: 'top 80%', end: 'top 20%' }
        });
    });

    // FAQ Accordion
    const accItems = document.querySelectorAll('.acc-item');
    accItems.forEach(item => {
        const header = item.querySelector('.acc-header');
        header.addEventListener('click', () => {
            const content = item.querySelector('.acc-content');
            const isActive = item.classList.contains('active');
            
            // Close all
            accItems.forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.acc-content').style.maxHeight = null;
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
            
            // Refresh ScrollTrigger since layout heights changed
            setTimeout(() => { ScrollTrigger.refresh(); }, 600);
        });
    });

    // Logos Grid Reveal - Using more robust autoAlpha and section trigger
    gsap.to(".logo-card", {
        scrollTrigger: {
            trigger: ".logos",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.03,
        duration: 1,
        ease: "power3.out"
    });

    // Spotlight Glow Pointer Tracking (Extreme GSAP-Smoothed Effect)
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        
        document.querySelectorAll('.logo-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            
            // Use GSAP to smooth out the CSS variable updates (removes stutter)
            gsap.to(card, {
                '--mouse-x': `${x}px`,
                '--mouse-y': `${y}px`,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
            });
        });
    });

    // Custom Testimonial Interaction (Guaranteed Snap-Back)
    document.querySelectorAll('.test-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25; // Gentle deflection
            const rotateY = (centerX - x) / 25;
            
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                overwrite: true
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.4,
                ease: 'power3.out',
                overwrite: true
            });
        });
    });

    // ==========================================================
    // SERVICES: Mark as Motion Revealer
    // The brand mark draws itself (stroke-dashoffset) as each
    // service enters the viewport. The reveal of service content
    // is triggered BY the mark completing — the mark is the cause.
    // ==========================================================
    document.querySelectorAll('.scrub-item').forEach((item) => {
        const path = item.querySelector('.service-mark-svg-path');
        const numEl = item.querySelector('.service-num');
        const titleEl = item.querySelector('.scrub-title');
        const labelEl = item.querySelector('.scrub-label');
        const descEl = item.querySelector('.scrub-desc');

        if (!path || !numEl) return;

        const pathLen = path.getTotalLength() || 1462;
        gsap.set(path, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
        gsap.set([numEl, titleEl, labelEl], { opacity: 0, y: 28 });
        gsap.set(descEl, { opacity: 0, y: 28 });

        ScrollTrigger.create({
            trigger: item,
            start: 'top 76%',
            once: true,
            onEnter: () => {
                const tl = gsap.timeline();
                tl.to(titleEl, {
                        opacity: 1, y: 0,
                        duration: 0.55,
                        ease: 'power3.out'
                    })
                  .to(labelEl, {
                        opacity: 1, y: 0,
                        duration: 0.5,
                        ease: 'power3.out'
                    }, '-=0.35')
                  .to(descEl, {
                        opacity: 0.8, y: 0,
                        duration: 0.5,
                        ease: 'power3.out'
                    }, '-=0.32')
                  .to(numEl, {
                        opacity: 1, y: 0,
                        duration: 0.45,
                        ease: 'power3.out'
                    }, '-=0.3')
                  .to(path, {
                        strokeDashoffset: 0,
                        duration: 1.15,
                        ease: 'power2.inOut'
                    }, '+=0.2');
            }
        });
    });

    // ==========================================================
    // CONTACT: Mark as Origin Point
    // The mark draws itself behind the headline as the section
    // enters. The invitation to connect appears to emerge from
    // the completed mark — the mark is where it all begins.
    // ==========================================================
    const contactMarkPath = document.querySelector('.contact-mark-path');
    if (contactMarkPath) {
        const contactPathLen = contactMarkPath.getTotalLength();
        gsap.set(contactMarkPath, { strokeDasharray: contactPathLen, strokeDashoffset: contactPathLen });

        ScrollTrigger.create({
            trigger: '#connect',
            start: 'top 72%',
            once: true,
            onEnter: () => {
                gsap.to(contactMarkPath, {
                    strokeDashoffset: 0,
                    duration: 1.6,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.to(contactMarkPath, {
                            opacity: 0.4,
                            duration: 1.0,
                            ease: 'power2.out'
                        });
                    }
                });
            }
        });
    }

    setTimeout(() => { ScrollTrigger.refresh(); }, 500);

    const ownedHomeTriggers = ScrollTrigger.getAll().filter((trigger) => !preExistingHomeTriggers.has(trigger));
    window.cleanupHomeDOMAnimations = () => {
        ownedHomeTriggers.forEach((trigger) => trigger.kill());
        gsap.killTweensOf([particlesMaterial, tunnelMat]);
        setCaseStudyWarpActive(false);
    };

    };
    window.initHomeDOMAnimations();

    // Footer Hover SVG Effect
    const footerSvg = document.getElementById('footer-hover-svg');
    const revealMask = document.getElementById('revealMask');
    if (footerSvg && revealMask) {
        footerSvg.addEventListener('mousemove', (e) => {
            const rect = footerSvg.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            revealMask.setAttribute('cx', `${x}%`);
            revealMask.setAttribute('cy', `${y}%`);
        });
    }

    // Refresh GSAP ScrollTriggers when fonts are ready to prevent SplitType layout shifts
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.refresh();
            }
        });
    }
})();
