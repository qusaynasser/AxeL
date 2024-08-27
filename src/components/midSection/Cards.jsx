import React from 'react'
import googlePlay from '../../assets/google-play.svg'
import appleStore from '../../assets/apple-store.svg'
import star from '../../assets/star.svg'
import starWhite from '../../assets/starWhite.svg'
import { cardData } from '../../DataForPage/dummyData'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { motion } from 'framer-motion'

export default function Cards() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div id='demo' className='pb-10 sm:pb-52'>
      <div className="text-center">
        <h2 className='text-4xl sm:text-6xl font-bold font-inter tracking-wide text-dark cursor-pointer'>
          Request a demo
        </h2>
        <p className='text-lg sm:text-xl pt-6 sm:pt-10 font-normal font-inter tracking-wide text-dark'>
          Explore all the nice stuff that AxeL is providing and much more...
        </p>

        <div className="img flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-10">
          <img src={googlePlay} alt='googlePlay' className='h-8 sm:h-12 cursor-pointer' />
          <img src={appleStore} alt='appleStore' className='h-8 sm:h-12 cursor-pointer' />
        </div>
      </div>

      <div className="cardDemo grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-10 sm:pt-32">
        {cardData.map((item) => {
          return (
            <motion.div
              className="mx-auto"
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <Card className={item.id === "1" ? "w-full sm:w-80 bg-dark border border-white" : "w-full sm:w-80 bg-white"}>
                <CardBody className='text-center'>
                  <Typography variant="h5" color="blue-gray"
                    className={item.id === "1" ?
                      "mb-2 font-inter leading-normal tracking-wide text-white"
                      :
                      "mb-2 font-inter leading-normal tracking-wide text-dark"
                    }>
                    {item.title}
                  </Typography>
                  <Typography className={item.id === "1" ?
                    "mb-2 h-24 font-inter font-light leading-normal text-white"
                    :
                    "mb-2 h-24 font-inter font-light leading-normal text-dark"}>
                    {item.text}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center" divider>
                  {stars.map((index) => {
                    return (
                      <div className="mt-4" key={index}>
                        {item.id === "1" ? <img src={starWhite} className="w-4 h-4" /> : <img src={star} className="w-4 h-4" />}
                      </div>
                    );
                  })}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}
