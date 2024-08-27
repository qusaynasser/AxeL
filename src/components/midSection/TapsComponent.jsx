import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import { tabsData } from '../../DataForPage/dummyData'

export default function TapsComponent() {
    return (
        <div id='features'>
            <Tabs id="custom-animation" value="bedroom">
                {/* تعديل التخطيط ليتكيف مع الشاشات الصغيرة */}
                <div className="flex flex-col sm:grid sm:grid-cols-2 justify-items-center items-center mt-32 gap-8">
                    {/* المحتوى الأول */}
                    <div className="content1 w-full sm:w-4/5 sm:pl-20">
                        <h2 className='text-3xl sm:text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                            Feature
                        </h2>

                        <p className='text-lg sm:text-xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                            AxeL offers many great features. You can create your own room,
                            request a service, buy modern looking furniture, sell furniture,
                            and so much more. Take a sneak peek at each of them.
                        </p>

                        <TabsHeader className='bg-gray-100 mb-5'>
                            {tabsData.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    <p className='text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case'>
                                        {label}
                                    </p>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody
                            animate={{
                                initial: { y: 250 },
                                mount: { y: 0 },
                                unmount: { y: 250 },
                            }}
                        >
                            {tabsData.map(({ value, desc, linkText }) => (
                                <TabPanel key={value} value={value}>
                                    <p>{desc}</p>
                                    <span className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case relative cursor-pointer right-3 hover:animate-puls">
                                        {linkText}
                                    </span>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>

                    {/* الصورة */}
                    <div className="content2 w-full sm:w-auto">
                        <TabsBody
                            animate={{
                                initial: { y: 250 },
                                mount: { y: 0 },
                                unmount: { y: 250 },
                            }}
                        >
                            {tabsData.map(({ value, img }) => (
                                <TabPanel key={value} value={value}>
                                    <img src={img} className='h-[400px] sm:h-[650px]' alt='phone' />
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}
