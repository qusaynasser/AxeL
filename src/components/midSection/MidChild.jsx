import React from 'react';
import { motion } from 'framer-motion';

export default function MidChild({ data, click }) {
    return (
        <div>
            {data.map((item) => {
                return (
                    <motion.div
                        key={item.id}
                        className='relative flex flex-col z-10'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ y: click ? 50 : 0, x: click ? 50 : 0, opacity: 1, scale: 0.8 }}
                        transition={{ type: "spring", duration: 1.5 }}
                    >
                        <div className="w-[300px] sm:w-[500px]"> {/* تعديل هنا */}
                            <h3 className='text-4xl sm:text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark pb-4'>
                                {item.title}
                            </h3>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <div>
                                <p className='text-xl sm:text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                                    {item.text}
                                </p>
                            </div>
                            <div className='absolute right-0 -z-10'>
                                <motion.img 
                                    src={item.img} 
                                    alt={item.title} 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: click ? "300px" : "300px", opacity: 1 }} 
                                    transition={{ type: "tween", duration: 3 }}
                                    className="sm:h-[525px]"
                                />
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
