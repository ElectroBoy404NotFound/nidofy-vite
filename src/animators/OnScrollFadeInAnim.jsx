import { motion } from "framer-motion"

export default function OnScrollFadeInAnim({
    children
}) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </>
    );
}