import React from 'react';
import { FooterData1, FooterData2, FooterData3 } from '../../DataForPage/dummyData';
import googlePlay from '../../assets/google-play.svg';
import appStore from '../../assets/apple-store.svg';
import logo from '../../assets/logo.svg';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className='Footer py-10'>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"> {/* تعديل هنا */}
                {/* العمود الأول */}
                <div className="col-span-2 sm:col-span-1 mx-auto mt-5 h-64 flex flex-col items-center"> {/* تعديل هنا */}
                    <img src={logo} alt='logo' className='h-8 cursor-pointer' />
                    <img src={appStore} alt='appStore' className='h-8 my-5 cursor-pointer' />
                    <img src={googlePlay} alt='googlePlay' className='h-8 cursor-pointer' />
                </div>

                {/* العمود الثاني */}
                <div className="mx-auto mt-5 h-64">
                    <h3 className='text-dark font-inter font-medium text-lg mb-3'>
                        Features
                    </h3>
                    {FooterData1.map((item) => (
                        <p key={item.id} className='text-dark font-inter font-normal text-md cursor-pointer mb-1'>
                            {item.text}
                        </p>
                    ))}
                </div>

                {/* العمود الثالث */}
                <div className="mx-auto mt-5 h-64">
                    <h3 className='text-dark font-inter font-medium text-lg mb-3'>
                        Features
                    </h3>
                    {FooterData2.map((item) => (
                        <p key={item.id} className='text-dark font-inter font-normal text-md cursor-pointer mb-1'>
                            {item.text}
                        </p>
                    ))}
                </div>

                {/* العمود الرابع */}
                <div className="mx-auto mt-5 h-64">
                    <h3 className='text-dark font-inter font-medium text-lg mb-3'>
                        Features
                    </h3>
                    {FooterData3.map((item) => (
                        <p key={item.id} className='text-dark font-inter font-normal text-md cursor-pointer mb-1'>
                            {item.text}
                        </p>
                    ))}
                </div>
            </div>

            <div className="line mt-10 flex justify-center">
                <hr className='h-px w-4/5 bg-gray-400 opacity-50 border-none'></hr>
            </div>

            <div className="flex justify-around flex-col sm:flex-row justify-between items-center mt-4">
                <h3 className='text-dark font-inter pb-2 font-medium cursor-pointer'>
                    AxeL
                </h3>
                <p className='text-dark font-inter pb-2 font-medium cursor-pointer'>
                    Copyright {year} page by Marko Web Dev
                </p>
            </div>
        </div>
    );
}
