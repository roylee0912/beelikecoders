import React, {useState,useEffect} from 'react';
import {VscThreeBars} from "react-icons/vsc"
import logo from "../styles/logo.png"
import "../styles/animations.css"


const NavBar = () => {
  const [sticky,setSticky]=useState(false)
  const [open,setOpen]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  
    },[])


  return (
    <div className={`fixed top-0 w-screen z-30 bg-yellow-500`}>

      {/* HONEY */}
      <svg viewBox="0 0 2000 500" className={`absolute  ${sticky ? "-top-full -mt-96" : "lg:-mt-8 md:-mt-4 -mt-2 top-12"} scale-x-120 -left-6 ease-in-out duration-300`} style={{"z-index":"-10"}}>
        <g fill="#eab308">
          <path d="M468 446 c-16.40 -7.60 -27.60 -21 -36 -43 -6.60 -17.20 -6.40 -42.80 0.40 -71 10.60 -43.40 13.20 -78.60 7.60 -105 -2.60 -12.80 -13.40 -38 -18.20 -43 -1.60 -1.60 -5 -5.80 -7.40 -9.40 -5.80 -8 -31.80 -29.80 -47.40 -39.20 -22 -13.40 -35.80 -17.80 -56 -18.20 -16.40 -0.20 -18.80 0.40 -27.60 5.40 -18 10.60 -24 28 -19.80 56 2.40 15.20 0.80 29.80 -4.80 42.40 -2 4.40 -3.60 8.40 -3.60 9 -0.20 0.60 -4.20 4.60 -9.20 9 -5 4.40 -9.40 8.40 -10 9 -3.80 3.80 -25.40 3.40 -33.20 -0.60 -25.60 -13.20 -35 -45.20 -25 -86 2.20 -9.60 4.20 -21.80 4.20 -27.20 0 -16.80 -12 -29.40 -33.80 -35.40 -28.20 -7.80 -32.80 -9.60 -40 -16.60 -4 -4 -8.60 -9.60 -10 -12.60 -8.60 -17 -21.60 -26 -49.20 -33.60 -21.60 -6 -30.80 -9.60 -38.40 -15.40 -5.60 -4 -6.60 -6.20 -6.60 -12.80 l0 -7.80 996 0 c978.40 0 996 0 996 3.80 0 7.20 -11.60 29.20 -18.40 34.40 -3.60 3 -7.40 5.60 -8.60 5.80 -1 0.20 -2.80 1 -4 2 -4.60 3.80 -37.60 11 -58 12.80 -22.80 2 -55 20.20 -58.20 32.80 -0.80 2.40 -2 4.40 -2.80 4.40 -2.40 0 -7.80 20 -9.20 34 -0.60 7.20 0 19.40 1.20 27 5.40 34.60 4.60 48 -4.20 68 -3.60 8 -14.40 19.60 -23.80 25.40 -7.40 4.40 -21.20 5.60 -31.20 2.60 -13.40 -4 -23.80 -13.40 -31 -28.20 -5.80 -11.60 -6.60 -15.80 -7.80 -35.40 -1.40 -24.20 -2.60 -28.20 -12 -36 -8.60 -7.40 -18.40 -10 -34.60 -9 -22.60 1.20 -37.20 10.40 -44.80 28 -9 20.60 -6.80 98.80 4.80 167.40 1.80 11.40 2.80 25.80 2.20 37.20 -0.60 16.40 -1.60 20.20 -8 33.40 -16 32.20 -43.80 44 -71.40 30.40 -12.60 -6.40 -25.80 -22.80 -31.60 -39.40 -5.20 -15 -4.60 -44.40 2 -90.40 9.60 -65.40 9.40 -106.20 -0.60 -128 -5.80 -12.60 -29.20 -35.80 -42.20 -42 -12.60 -5.80 -28.60 -6.60 -41.80 -2 -4.60 1.60 -16.60 9 -26.40 16.40 -9.80 7.40 -19 13.60 -20.40 13.80 -1.60 0.20 -6.20 2 -10.40 4 -6.20 3 -12.40 3.80 -29.80 3.80 -29.40 0 -38.60 -3.40 -58.80 -21.80 -21.20 -19.40 -32.40 -24.20 -55.20 -24.20 -15.60 0 -19.40 0.80 -29.40 5.60 -14 6.80 -28 20.60 -34.80 33.80 -3.60 7.20 -5.40 15 -6.80 30.20 -2.60 29.60 -7.40 41.80 -20.60 55.40 -11.20 11.20 -12.60 12 -25 13.20 -18.20 2 -34.80 -6.60 -45.20 -23.20 -9 -14.20 -11.60 -24.20 -12.40 -48.80 -1 -28.60 -4.60 -38.20 -18.40 -50.80 -12 -10.80 -23.80 -14.40 -48 -14.40 -36 0 -68 11.20 -80.40 28.20 -12.40 17.40 -14.80 27.40 -14.80 62.80 0 26.40 1.20 38.60 6.40 70 7 41.40 7.60 51.40 4.20 67.40 -3 14 -8.20 24 -18.40 35.20 -10.60 11.40 -21.20 16.40 -35.40 16.40 -14.60 0 -25 -5.20 -36 -17.40 -19.80 -22 -23.40 -50 -13.20 -104.60 7.20 -38.80 8.80 -72.60 4.40 -90 -1.80 -7.20 -5.60 -17.80 -8.20 -23.60 -6 -13.20 -24.40 -32.60 -38.60 -40.60 -9 -5.40 -12.20 -6.20 -20.60 -5.40 -19 1.80 -27.60 15.80 -29.80 47.80 -2.20 31.80 -10.60 48 -30.80 58.20 -14.80 7.60 -35.60 1.80 -47.20 -13 -9.40 -12 -12.80 -23.40 -13.20 -45.60 -0.60 -30 -6.80 -41.80 -25.60 -49.80 -28.60 -12.20 -58.40 5.60 -78 46.80 -13 27.40 -16 41 -16 74.20 0.20 29.60 3.40 48.40 14 83.60 14.60 47.40 3 90 -30.20 111 -11.40 7.20 -32.40 8.20 -45 2.40z m35.80 -16 c12 -6 23.40 -21.60 27 -36.80 1.20 -5.20 1 -5.60 -1.60 -3.40 -2.80 2.40 -3.20 0.80 -3 -14 0.20 -12.20 -1 -21 -4.20 -31.80 -11.80 -39.40 -14.20 -52.20 -15.40 -87 -0.80 -27.20 -0.40 -37.60 2.20 -51.80 8.60 -45 33.40 -84.20 62.40 -98.40 10.80 -5.40 13.60 -5.80 33.80 -5.80 20.40 0 22.80 0.40 32 5.60 19.60 10.80 29 22.80 31.40 40.40 1.20 7.60 1.20 7.80 -1.20 2.40 -3 -6.60 -5.80 -5 -3 2 1 2.60 1.80 12.60 1.80 22.20 0 22.20 2.20 30 11.60 40.20 9.60 11 19.20 12.80 29.20 6 8 -5.40 18.40 -21.20 11 -16.80 -3.60 2.40 0.20 -52.40 4.60 -63.60 8.20 -21.20 21.20 -31.20 42.80 -33 29 -2.20 50 9.20 74 40.60 12 15.60 21 38.20 20.60 51.80 -0.20 6.80 -0.40 7.40 -1.60 3.20 -0.80 -2.80 -1.40 8 -1.40 24 -0.20 23.20 -1.20 35.20 -5.80 60 -7 38 -7.80 66.20 -2.40 80.60 2.20 5.60 4.60 8.80 5.80 8.20 1.40 -1 1.60 -0.40 0.60 1 -1.60 3 7.40 13.20 15.40 17.40 11.60 6 30 1 39 -11 3 -4 3.40 -9 0.60 -7.20 -2 1.20 -1 -12.20 1.40 -19 4.20 -12 4 -18.20 -1.60 -52.80 -18 -112.20 -8.40 -159.40 37.20 -181.20 19.60 -9.20 33.60 -12.20 65.40 -13.40 46 -1.80 66.80 6.20 84.40 32.20 5.80 8.60 7 15.80 2.20 14 -2.60 -1 -2.40 -0.20 0.40 6.40 2 5 3.60 16.80 4.60 33 1.20 22 2 26.80 6.80 36.60 12.20 24.80 33.20 29.40 49.80 10.80 7.20 -8.20 9.80 -13.20 5 -10.40 -1.60 1 -1.80 -2.40 -0.80 -13.40 5.20 -52.80 5.40 -53.40 15.80 -70.40 7.80 -12.60 29.20 -30.20 43.20 -35.60 16 -6 39.40 -7.40 48.20 -2.80 6.20 3.20 6.60 3.80 3 5 -3.20 1.20 -2.60 1.60 3 2.60 13.60 2.60 31 13 48.60 28.80 19.60 17.80 27 21.20 46.80 21 12.40 -0.20 30.80 -5.40 39 -11.20 3.60 -2.60 3.80 -3.20 1 -3.20 -5 0 -4.20 -3.80 1.80 -8.40 2.80 -2.40 5.80 -6.20 6.80 -8.80 2.20 -5.60 15.20 -14.20 29.40 -19.20 15 -5.20 42.80 -5 57.40 0.60 19 7 45.80 31.20 55.40 50 6.40 12.60 9.80 32.60 9.80 58.40 0 14.20 0.80 23.40 2 23.40 1.20 0 2 3.20 2 7 0 3.80 -0.80 7 -2 7 -1.20 0 -2 5.20 -2 11.80 0 13.40 -3.80 26.40 -5.60 19.20 -0.60 -2.20 -3.60 14.40 -6.60 36.80 -6.80 50.60 -5.60 63.60 7.60 82.80 14.40 20.80 38.80 22.80 55.40 4.80 8.40 -9.60 17.20 -28.20 11.40 -24.60 -1 0.80 -2.20 -7 -2.80 -17.40 -0.40 -10 -2.60 -31 -5 -46.40 -5.60 -37.40 -8.40 -73.40 -8.40 -106.20 0 -48.60 5.60 -70.80 22 -85.40 14.20 -12.80 26.20 -16.40 55 -16.40 22.40 0 24.80 0.40 35.60 5.80 6.40 3 12.20 6.80 12.80 8.40 0.60 1.60 2 2.80 3.40 2.80 4 0.20 11.60 18.20 12.40 29.80 0.40 6.20 0.20 9.60 -0.40 7.60 -2 -6.60 -4.80 -1.20 -4.80 9.40 0 12 4.40 28.20 10.20 38.20 10.80 18.20 34.80 20 47.60 3.80 5 -6.40 5.40 -9.20 0.80 -7.40 -2 0.80 -2.80 0.40 -1.80 -1 0.60 -1.20 2.40 -9 3.80 -17.20 2.20 -12.40 2.20 -17.80 0.20 -29.60 -3 -16.40 -3.40 -50.40 -1 -63 l1.60 -8.20 -24.20 -0.80 c-22.20 -0.80 -26.20 -1.60 -48 -9.20 -39.40 -13.80 -47.80 -14 -84.20 -2.40 -27.60 8.80 -32.20 10 -51 12.20 -27 3.20 -61.20 1 -96 -6.20 -16 -3.40 -38 -6.60 -49 -7.40 -19.80 -1 -20.20 -1 -41.40 7 -38.40 14.60 -65.20 15.80 -110.60 5 l-24 -5.60 -80 0.60 c-88.20 0.60 -90.60 0.40 -152 -12.60 -38 -8 -64.60 -9.80 -83 -5.20 -6 1.40 -23.20 6.40 -38 10.80 -26.60 8 -27.60 8.20 -59 8.20 -30.40 0.20 -33.40 -0.20 -61 -7.20 -42.20 -10.60 -41.40 -10.60 -73.20 -2.40 -33.20 8.40 -42.80 8.40 -94.80 -1.60 -39.40 -7.40 -71 -8.60 -92 -3.20 -39.60 10.40 -47.60 11.60 -74.40 11.60 -28.60 0 -48 -3.80 -92.60 -17.80 -38.40 -12.20 -48.80 -12.60 -101.20 -2.80 -49 9 -94.80 7.20 -131.80 -5.20 -2.80 -1 -9.40 -2.60 -15 -3.80 -5.40 -1.20 -12.60 -2.80 -16 -3.40 l-6 -1.40 4.60 5 c3.40 3.40 10.80 6.60 24.60 10.40 23.80 6.60 38.60 15 46.80 26.60 l6 8.80 0 30.20 c-0.20 22 -1.20 33.60 -3.40 42 -3 10.20 -3 12.40 -0.40 21.60 3.60 12.20 15.20 25.80 22 25.80 6.80 0 18.20 -12.40 21 -22.40 1.40 -5.80 1.60 -13 0.60 -21.60 -6 -45.60 4.20 -72.20 33.20 -85.80 9.80 -4.60 13.40 -5.20 34 -5.20 19.80 0.20 25.40 1 39.20 5.60 26.40 9 60.40 32.20 82.40 56.40 11.60 12.60 23.40 34.40 28.60 52.60 4.60 16 6.80 55.80 4.20 74.40 l-1.80 13 -0.60 -12 c-0.40 -11.60 -0.60 -11.40 -3 8 -1.60 11 -4.60 28.20 -6.80 38 -7.80 32.60 -8.60 41 -6.20 55 2.40 13.80 9.60 30 16.60 37.80 10.60 11.60 29.60 15.20 43.20 8.20z"/>
        </g>
        <g fill="#facc15">
          <path d="M1602 444 c0 -2.60 4 -2.60 8 0 2.40 1.60 1.80 2 -2.40 2 -3.20 0 -5.60 -0.80 -5.60 -2z"/>
          <path d="M515.20 421.80 c3.20 -4 6.20 -6.80 6.60 -6.40 0.60 0.40 -2 3.60 -5.80 7.20 l-6.80 6.40 6 -7.20z"/>
          <path d="M1599.40 403.20 c-7 -2.60 -9.80 -4.40 -19.60 -13.20 -1.80 -1.60 -5.40 -8 -8 -14 -4.60 -10.80 -4.80 -12.20 -4.40 -64.80 0.40 -41 1.20 -54.20 3 -55.60 2 -1.20 1.80 -1.60 -0.40 -1.60 -2.60 0 -2.80 -3.40 -2.40 -21.20 1.20 -37.20 -5 -58.80 -22.60 -79 -28 -31.60 -58 -42.60 -87.60 -32.20 -14 5 -27.20 13.60 -29.20 19 -2.40 6.20 -8.20 10.80 -15.20 12 -3.20 0.60 -11 2.60 -17 4.40 -13.80 4 -36.20 3.20 -46 -2 -3.80 -1.80 -12.60 -8.80 -19.40 -15.20 -16.20 -15.60 -34 -24 -53.40 -25.40 -37.40 -2.40 -50.20 0.80 -71.60 18.40 -19.80 16.40 -31.40 38.40 -31.80 60 -0.20 11.80 -4.40 39.60 -5.80 39 -0.60 -0.40 -5.20 1.20 -10.40 3 -25.60 9.80 -41.60 -7.20 -47.20 -50 -2.20 -16.20 -7.40 -29 -12.60 -30.20 -2 -0.60 -4.20 -2.60 -4.80 -4.40 -1.40 -4.40 -14.80 -18.80 -22 -23.80 -3.40 -2.20 -12 -6 -19 -8.40 -11.60 -4 -15.80 -4.40 -38 -3.40 -47.80 2.20 -77.60 15.80 -93.40 42.80 -16 27.40 -17 62.60 -4.40 141.80 5.60 35.40 6 40.80 4 50.80 -1.40 6 -2.80 14 -3.20 17.80 -0.60 5.80 -5 14 -5 9 0 -1 -4.20 -1.40 -9.20 -1 -19.20 1.40 -35.20 -12.40 -42.80 -37.40 -4.60 -14.80 -5.40 -43.20 -1.80 -64.40 4.40 -25.40 2.40 -87.40 -2.40 -72 l-1.40 5 -0.20 -5.20 c-0.40 -11.60 -10.60 -35.20 -21 -48.80 -28.20 -36.80 -56.40 -48.60 -83.20 -35 -14.40 7.40 -26 29.40 -26 49.80 0 18.20 -2.20 35.60 -4.80 35.80 -1.20 0 -5.80 1.40 -10 3 -9.20 3.40 -19.60 1.40 -26.60 -5 -5.60 -5.20 -10.60 -19.80 -10.80 -31.40 0 -9.60 -6 -27.40 -8.40 -25 -0.80 0.80 -2.60 -1.80 -4.40 -5.80 -3.60 -8.80 -14.80 -19.60 -28 -26.80 -8.60 -4.80 -12.20 -5.60 -26 -5.60 -13.60 0 -17.80 1 -27.80 5.80 -29 14.20 -53.80 53.40 -62.40 98.40 -2.40 13.60 -3 24.20 -2.20 44.80 1 27.40 4.20 44.60 14.80 79.80 3.20 10.40 5.40 23.40 5.80 33.60 0.60 16.20 0.40 17.20 -4.80 21.80 -7.80 7.20 -14.40 10.40 -22.40 10.80 -13 1 -17.20 0 -26.60 -6.20 -18.80 -12.40 -26.40 -43 -21.60 -86.60 2.80 -26.20 0.20 -73.60 -5.20 -94.20 -4.60 -17.20 -17.60 -41.60 -28.80 -54 -12.80 -13.80 -33.20 -30.40 -51.60 -41.80 -32.20 -19.80 -69 -25.80 -92.20 -15 -29 13.60 -38 36.20 -32.20 79.60 2.40 18.20 0.40 28.80 -7.80 40.20 -5.40 7.60 -16.80 12.60 -25 11.20 -9.40 -1.80 -20 -14.40 -24.20 -28.60 -3.60 -12 -3.40 -14 3.20 -45.40 1 -5.40 1.80 -18 1.40 -28.40 -0.40 -17 -1 -19.20 -6.60 -27.20 -8 -11.60 -22.80 -20 -46.60 -26.60 -20.40 -5.60 -24.80 -8.40 -33 -21.60 -3 -4.80 -3 -5.60 -0.20 -6.60 4.20 -1.80 30.80 3.40 73 14.40 29.20 7.40 59.80 7.40 100 0 53.60 -10 74.40 -9.40 113 2.80 41 13.20 64.60 18 87 18 11.60 0 26 -1.20 32 -2.80 45.60 -11.40 50.80 -12.20 79 -12 22.40 0 34.60 1.40 61 6.20 52.20 9.80 50.40 9.80 83.60 1.40 35 -8.60 40.60 -8.40 84.40 2.80 26.40 6.60 31.40 7.40 55 7.20 24.40 -0.20 27.60 -0.60 53 -8.20 42.60 -12.80 47.20 -13.60 73 -13.40 19.40 0.20 30.60 1.60 59 7.60 62 13.20 64.20 13.40 152.60 12.80 l80.40 -0.60 23 5.40 c44.20 10.40 61.60 9.60 99.80 -4.80 l21.20 -8 26 1 c17.60 0.80 35.40 3 54.60 7.20 36 7.60 59.80 9.40 84.40 6.40 18.60 -2.40 27.20 -4.40 55 -13.40 35.40 -11.40 48.40 -11 89 2.60 29.20 9.80 55.40 13.20 70.60 9 4 -1.20 7.80 -1.40 8.40 -0.40 0.60 0.80 -0.40 5.40 -2.20 10.20 -5 14.20 -5.80 40.20 -2 63.80 3.20 19 3.20 22.60 0.60 37.60 -2.60 14.60 -5.40 23.40 -5.40 16.80 0 -1.40 -2.20 -1.20 -7 0.80 -17 7 -36.80 -1.20 -46 -19 -1.80 -3.80 -4 -12 -4.40 -18.40 -0.60 -6.40 -1.80 -11.20 -2.60 -10.80 -0.80 0.60 -2.20 -1.40 -2.80 -4.60 -2 -8.60 -10 -24.40 -12.40 -24.40 -1.40 0 -2.80 -1.20 -3.40 -2.80 -0.60 -1.60 -6.40 -5.40 -12.80 -8.40 -10.20 -5 -13.80 -5.80 -29.60 -5.80 -30.40 0 -52.40 12 -62 34 -12.20 27.20 -11.20 103.80 2 181.60 3.20 19 4 52.20 1.20 50.60 -1 -0.60 -3 0.40 -4.40 2.20 -3.40 4 -17.40 10.60 -22.80 10.40 -2.20 0 -7.40 -1.20 -11.60 -2.60z"/>
          <path d="M426.60 371 c0 -6.60 0.40 -9 0.80 -5.40 0.40 3.60 0.40 9 0 12 -0.40 3 -0.80 0 -0.80 -6.60z"/>
          <path d="M826.60 340 c0 -7.20 0.40 -10 0.80 -6.40 0.40 3.40 0.40 9.40 0 13 -0.40 3.40 -0.80 0.60 -0.80 -6.60z"/>
          <path d="M1134.60 268.60 c3 -0.40 7.40 -0.40 10 0 2.40 0.40 0 0.80 -5.60 0.80 -5.40 0 -7.60 -0.40 -4.40 -0.80z"/>
          <path d="M1105.80 254.60 l-6.80 -7.60 7.60 6.80 c6.80 6.60 8.40 8.20 6.80 8.20 -0.40 0 -3.80 -3.40 -7.60 -7.40z"/>
          <path d="M1642.60 249 c0 -4.40 0.40 -6 0.80 -3.40 0.40 2.40 0.40 6 0 8 -0.60 1.80 -1 -0.20 -0.80 -4.60z"/>
          <path d="M1157.40 245 c2 -2.60 4.40 -5 5.40 -5 1 0 -0.20 2.20 -2.80 5 -6 6.40 -7.20 6.40 -2.60 0z"/>
          <path d="M856.60 229 c0 -7.60 0.40 -10.60 0.80 -6.40 0.40 4 0.40 10.40 0 14 -0.40 3.40 -0.80 0.20 -0.80 -7.60z"/>
          <path d="M677 216 c-3.20 -3.20 -5.40 -6.20 -4.80 -6.60 0.40 -0.40 3.40 2.20 6.40 6 7.20 8.20 6.20 8.60 -1.60 0.60z"/>
          <path d="M1086.60 202 c0 -5 0.40 -7 0.80 -4.40 0.40 2.40 0.40 6.40 0 9 -0.40 2.40 -0.80 0.40 -0.80 -4.60z"/>
          <path d="M648.60 180 c0 -7.20 0.40 -10 0.80 -6.40 0.40 3.40 0.40 9.40 0 13 -0.40 3.40 -0.80 0.60 -0.80 -6.60z"/>
          <path d="M1331.40 151.60 l-10.80 -10.60 10.20 8.80 c5.60 4.80 11 9.60 12.20 10.60 1 0.80 1.20 1.60 0.40 1.60 -0.60 0 -6 -4.80 -12 -10.40z"/>
          <path d="M1069.20 147 c-3 -2.80 -4.60 -5 -3.60 -5 1 0 3.80 2.20 6.40 5 2.60 2.80 4.20 5 3.60 5 -0.60 0 -3.40 -2.20 -6.40 -5z"/>
          <path d="M1970.60 41.80 c6 -9.80 17.40 -21 17.40 -17.40 0 3.40 -4.40 8.60 -15 17.60 l-5.80 5 3.40 -5.20z"/>
        </g>
      </svg>


      {/* DESKTOP NAVBAR */}
      <div className="xl:grid hidden relative w-5/12 lg:ml-12 ml-4 grid-flow-row grid-cols-4 text-center justify-center items-center">
        <img src={logo} className={`cursor-pointer w-8/12 bg-yellow-800 rounded-full my-4 p-2`} onClick={()=>{window.location.reload()}}></img>
        <div className={`flex px-4 items-center w-full justify-between flex-auto text-center text-yellow-800 font-sans 
                        whitespace-nowrap lg:text-2xl md:text-xl duration-300 font-extrabold scale-y-110 col-span-3`} style={{"font-family": "'Nunito', sans-serif"}}>
          <a href="/#top" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Home
          </a>
          <a href="/#about" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            About
          </a>
          <a href="/#schedule" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Schedule
          </a>
          <a href="/#judges" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Judges
          </a>
          <a href="/#sponsors" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Sponsors
          </a>
          <a href="/#faq" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            FAQ
          </a>
          <a href="https://google.com" target="_blank" className="mx-4 bg-yellow-800 text-yellow-100 rounded-3xl px-4 py-2 hover:bg-yellow-900 cursor-pointer">
            Register
          </a>
        </div>
      </div>
      {/* MOBILE NAVBAR */}
      <div className="xl:hidden grid relative z-10 ml-12 my-2">
        <VscThreeBars className={`${open ? "rotate-90" : ""} scale-x-150 duration-300 cursor-pointer text-yellow-800 md:w-12 md:h-12 h-8 w-8`} onClick={()=>{setOpen(!open)}}/>
        <div className={`${open ? "2xl:hidden flex": "hidden"} absolute top-12 -left-6 z-20 bg-yellow-400 flex-col rounded-xl border-6 border-yellow-800` }>
            <a href="#home" className="px-9 py-2 pt-4 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Home</a>
            <a href="#about" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">About</a>
            <a href="#schedule" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Schedule</a>
            <a href="#judges" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Judges</a>
            <a href="#sponsors" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Sponsors</a>
            <a href="#faq" className="px-9 py-2 pb-4 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">FAQ</a>
            <a href="https://google.com" target="_blank" className="px-9 py-2 pb-4 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Register</a>

        </div>
      </div>



    </div>
  );
}

export default NavBar;
