import { motion } from "framer-motion";

export default function DottedBackground() {
    return (
        <motion.div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,
                pointerEvents: "none",
                backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.21) 2px, transparent 3px)",
                backgroundSize: "18px 18px",
            }}
            animate={{
                backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
}