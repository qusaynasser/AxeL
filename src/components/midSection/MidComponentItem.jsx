import React from 'react';
import { room } from '../../DataForPage/dummyData';
import { motion } from 'framer-motion';

export default function MidComponentItem({ title, text, img, reverse }) {
  return (
    <div id='company'>
      {reverse ?
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center"> {/* تعديل هنا */}
          <div className="1 w-11/12 sm:w-4/5 pl-10 sm:pl-20">
            <h2 className='text-4xl sm:text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
              {title}
            </h2>
            <p className='text-lg sm:text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
              {text}
            </p>
            <button className="pushable mt-4">
              <span className='front'>Start Now</span>
            </button>
          </div>

          <motion.div
            className="2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            <img src={img} alt="ImgPhone" className='h-[300px] sm:h-[775px] pt-10 hover:rotate-6 duration-1000 cursor-pointer' /> {/* تعديل هنا */}
          </motion.div>
        </div>
        :
        <div
          id='room'
          className="flex flex-col sm:flex-row-reverse justify-around items-center w-full"> {/* تعديل هنا */}
          
          <div className="contentRight w-11/12 sm:w-auto">
            <div className="titleContent">
              <h2 className='text-4xl sm:text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                {title}
              </h2>
            </div>

            <div className="flex flex-col items-center">
              {room.map((item) => {
                return (
                  <div className="flex items-center py-2" key={item.id}>
                    <div className="mr-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className='w-12 h-12 sm:w-16 sm:h-16' /> 
                    </div>

                    <p className='text-lg sm:text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            className="contentLeft"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            <img
              className='h-[300px] sm:h-[775px] pt-4 sm:pr-10 hover:rotate-[-6deg] duration-1000 cursor-pointer'
              src={img}
              alt='phone' />
          </motion.div>
        </div>
      }
    </div>
  )
}
