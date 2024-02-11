'use client';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AOSComponent(){
  // run animation once page finishes loading
	useEffect(() => {
		AOS.init({duration: 2000});
		AOS.refresh();
	}, []);
  return<></>
}