document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded"); // Debug: Check if JS is loaded

    // Ensure Granim.js is loaded before applying the animated background
    if (typeof Granim === "undefined") {
        console.error("Granim.js is NOT loaded");
    } else {
        console.log("Granim.js is loaded");

        // Initialize Granim.js (Animated Background)
        var granimInstance = new Granim({
            element: "#granim-canvas",
            direction: "diagonal", // Gradient animation direction
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ["#ff9966", "#ff5e62"],
                        ["#00F260", "#0575E6"],
                        ["#fc4a1a", "#f7b733"]
                    ],
                    transitionSpeed: 4000
                }
            }
        });

        console.log("Granim.js animation started");
    }

    // Initialize Glide.js slider
    const glideElement = document.querySelector(".glide");
    if (glideElement) {
        new Glide(".glide", {
            type: "carousel",
            perView: 1,
            focusAt: "center",
            autoplay: 3000,
            animationDuration: 800,
        }).mount();
    } else {
        console.error("Glide.js slider not found! Check your HTML.");
    }

    // Initialize AOS (Animation on Scroll)
    AOS.init();

    // Initialize Leaflet Map
    const mapElement = document.getElementById("map");
    if (mapElement) {
        var map = L.map("map").setView([13.7563, 100.5018], 6); // Centered on Thailand

        // Custom map style using Carto Light Theme
        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
                subdomains: "abcd",
                maxZoom: 20,
            }
        ).addTo(map);

        // Add markers for popular Thailand destinations
        var locations = [
            { coords: [13.7563, 100.5018], name: "📍 Bangkok - Capital City" },
            { coords: [18.7883, 98.9853], name: "📍 Chiang Mai - Mountains & Culture" },
            { coords: [7.8804, 98.3923], name: "📍 Phuket - Beaches & Resorts" },
            { coords: [12.9236, 100.8825], name: "📍 Pattaya - Nightlife & Beaches" },
            { coords: [8.0863, 98.9063], name: "📍 Krabi - Stunning Limestone Cliffs" },
        ];

        locations.forEach((location) => {
            L.marker(location.coords).addTo(map).bindPopup(location.name);
        });
    } else {
        console.error("Map element not found! Check your HTML.");
    }

    // GSAP Animation
    console.log("Checking GSAP and Elements...");

    const title = document.querySelector(".gsap-title");
    const text = document.querySelector(".gsap-text");
    const button = document.querySelector(".gsap-btn");

    if (!title || !text || !button) {
        console.error("One or more elements for GSAP animation are missing");
    } else {
        console.log("Found elements for GSAP animation:", title, text, button);
    }

    if (typeof gsap === "undefined") {
        console.error("GSAP is NOT loaded");
    } else {
        console.log("GSAP is loaded");

        button.style.opacity = "1";
        button.style.transform = "scale(1)";

        // Apply GSAP animations
        gsap.from(".gsap-title", {
            opacity: 0,
            y: -100,
            duration: 1.2,
            ease: "power3.out",
            onStart: () => console.log("GSAP Animation Started"),
            onComplete: () => console.log("GSAP Animation Completed"),
        });

        gsap.from(".gsap-text", {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "back.out(1.7)",
            delay: 0.3,
        });

        gsap.from(".gsap-btn", {
            opacity: 0,
            scale: 0.5,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
            delay: 0.8,
        });
    }
});

