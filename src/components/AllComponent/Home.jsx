import React, { useEffect, useState } from 'react'
import Header from "../header/Header";
import FurnitureFlow from "../midSection/FurnitureFlow";
import MidComponentParent from "../midSection/MidComponentParent";
import MidFilterSection from "../midSection/MidFilterSection";
import Cards from "../midSection/Cards";
import TapsComponent from "../midSection/TapsComponent";
import Navbar from "../navbar/Navbar";
import WrapperContainer from "../wrapperContainer/WrapperContainer";
import Footer from '../footer/Footer';
import PopUpButton from '../popUpButton/PopUpButton';


export default function Home() {
    return (
        <div className='relative'>
            <div className=" fixed right-4 bottom-0 z-50">
                <PopUpButton />
            </div>
            <div className=" bg-white">
                <WrapperContainer navHed={true}>
                    <Navbar />
                    <Header />
                </WrapperContainer>
            </div>
            <div className="bg-gray-100 w-full">
                <WrapperContainer>
                    <MidFilterSection />
                    <MidComponentParent />
                    <TapsComponent />
                    <FurnitureFlow />
                    <Cards />
                </WrapperContainer>
                <Footer />
            </div>
        </div>
    );
}
