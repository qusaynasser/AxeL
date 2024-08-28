import React, { useContext } from 'react';
import { ThemeBgContext } from '../contextWrapper/ThemeWrapper';
import { Switch } from "@material-tailwind/react";
import headerImg from '../../../public/images/headerImage.png'

export default function Header() {
  const { theme, handelTheme } = useContext(ThemeBgContext);
  console.log(theme);
  
  return (
    <div className='header mx-auto pt-16 px-4 '>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center content-center gap-8 sm:gap-0">

        <div className="content1 w-full sm:w-3/5">
          <div className="switch pl-2">
            <Switch
              color="blue"
              onClick={handelTheme}
              defaultChecked={theme === 'dark' ? true : true}
            />
          </div>

          <div className="mainTitle mt-6 sm:mt-0">
            <h1 className='text-[32px] sm:text-[40px] font-russonOne font-medium tracking-wide text-dark'>
              AxeL Brand new {" "}
              <span className='text-dark text-[32px] sm:text-4xl font-petiteFormal font-bold'>
                Furniture
              </span>{" "}
              Mobile App
            </h1>
          </div>

          <div className="secondTitle mt-4">
            <p className='text-[16px] sm:text-[20px] font-inter font-medium text-dark'>
              Giving your home a proper makeover was never this easy. Modern
              and stylish furniture for decent prices. Take a look at what we offer
              with a simple button click.
            </p>
          </div>

          <div className="btn">
            <button className='pushable mt-4'>
              <span className='front'>Start now</span>
            </button>
          </div>
        </div>

        <div className="content2 w-full sm:w-3/5 sm:mr-40">
          <div className="title mt-4 sm:mt-0">
            <h2 className='text-3xl sm:text-5xl font-russonOne font-medium text-dark'>
              Modern Design
            </h2>
          </div>
          <div className="img mt-6 sm:mt-0">
            <img 
              src={headerImg} 
              alt="headerImage" 
              className='animateImg h-[350px] sm:h-[550px] w-full bg-no-repeat bg-center z-10 rounded-xl relative'
            />
          </div>
        </div>

      </div>
    </div>
  );
}
