import React, { useEffect, useState } from 'react';
import MidButton from './MidButton';
import { sliderData } from '../../DataForPage/dummyData';
import MidChild from './MidChild';
import { motion } from 'framer-motion';

export default function MidFilterSection() {
    const buttons = [
        {
            id: "1",
            name: 'Room1'
        },
        {
            id: "2",
            name: 'Room2'
        },
        {
            id: "3",
            name: 'Room3'
        },
    ];

    const [selected, setSelected] = useState("1");
    const [click, setClick] = useState(false);
    const [data, setData] = useState([]);

    const filterData = (button) => {
        const filter = sliderData.filter((item) => item.id === button);
        console.log(filter);
        setData(filter);
        setSelected(button);
        setClick(true);
    }

    useEffect(() => {
        const putData = () => {
            setData(sliderData.filter((item) => item.id === "1"));
        }
        putData(sliderData);
    }, []);

    return (
        <div className='mx-auto pt-72 pb-56 overflow-x-hidden'>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center w-full pl-10 sm:pl-20"> {/* تعديل هنا */}
                <motion.div
                    className="content1 w-full sm:w-4/5 mx-auto" /* تعديل هنا */
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, type: "tween" }}
                >
                    <h2 className='w-full sm:w-96 text-4xl sm:text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                        Check out some of the news
                    </h2>
                    <MidButton buttons={buttons} filter={filterData} selected={selected}></MidButton>
                </motion.div>

                <div className="content2 mt-10 sm:ml-20 pb-4 relative mx-auto w-11/12 sm:w-8/12 rounded-xl drop-shadow-2xl"> {/* تعديل هنا */}
                    <MidChild data={data} click={click}></MidChild>
                </div>
            </div>
        </div>
    )
}
