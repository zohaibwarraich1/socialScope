import { motion } from "framer-motion";
import React from "react";

export default function SlideTransition({ children }) {
  const numOfCols = 6;

  const columsVariant = {
    initial: {
      left: 0,
    },

    enter: (index) => ({
      left: "100vw",
      transition: {
        duration: 0.3,
        delay: 0.2 * index,
        ease: "easeIn",
      },

      transitionEnd: {
        width: "0",
        left: "0",
      },
    }),

    exit: (i) => ({
      width: "100vw",
      transition: {
        duration: 0.3,
        delay: 0.2 * i,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div>
      <motion.div className="w-screen h-screen fixed flex flex-col top-0 left-0 pointer-events-none z-20">
        {[...Array(numOfCols)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={columsVariant}
              initial={"initial"}
              animate={"enter"}
              exit={"exit"}
              custom={numOfCols + index}
              className="bg-zinc-900 relative w-full h-full"
            ></motion.div>
          );
        })}
      </motion.div>

      {children}
    </div>
  );
}
