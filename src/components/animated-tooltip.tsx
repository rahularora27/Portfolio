import { Image }  from '@chakra-ui/react';
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

return (
    <>
        {items.map((item, idx) => (
            <div
                className="-mr-4 container relative transition duration-500 transform hover:scale-105"
                key={item.name}
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <AnimatePresence mode="wait">
                    {hoveredIndex === item.id && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                },
                            }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            style={{
                                translateX: translateX,
                                rotate: rotate,
                                whiteSpace: "nowrap",
                            }}
                            className="absolute -top-16 items-center justify-center rounded-md z-50 px-4 py-2"
                        >
                            <div className="font-bold text-custom-2 relative text-base">
                                {item.name}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <Image
                    onMouseMove={handleMouseMove}
                    borderRadius='full'
                    padding={2}
                    src={item.image}
                    boxSize='80px'
                    border='4px'
                    borderColor='#FFEDD8'
                />
            </div>
        ))}
    </>
);
};
