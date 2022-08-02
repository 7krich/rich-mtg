// control page change animations
import { motion } from "framer-motion";

// framer motion variables
const animations = {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
        // framer-motion page transition animation
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        >
        {children}
        </motion.div>
    )
}

export default AnimatedPage;

