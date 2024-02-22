import {motion} from "framer-motion";
import React from "react";

/*
* fade in effect when the component is visible
 */
export function FadeInWhenVisible({ children }) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false}}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: {duration: 1},
            }}
        >
            {children}
        </motion.div>
    );
}
/*
* hover effect for zooming in
* */
export function FramerHoverZoomIn({ children }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1    }}
            transition={{ duration: 0.5 }}

        >
            {children}
        </motion.div>
    );
}

/*
button hover effect
 */
export function FramerHoverButton({ children }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}

        >
            {children}
        </motion.button>
    );
}



