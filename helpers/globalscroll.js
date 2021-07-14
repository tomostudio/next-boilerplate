import React from 'react'
import {useLocomotiveScroll } from 'react-locomotive-scroll'
import { useAppContext } from '../context/state.js';

export default function PushScrollGlobal() {
  const { scroll } = useLocomotiveScroll();

  // pass the scroll event to context
  // const appContext = useAppContext();
  // appContext.setScrollState(scroll);

  //Create custom window event
  scroll.on("scroll", (e) => {
    const event = new CustomEvent('LocoScroll', { detail: e });
    window.dispatchEvent(event);
  });
}
