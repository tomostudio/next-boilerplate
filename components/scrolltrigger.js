import { useEffect, forwardRef } from 'react'

import {useLocomotiveScroll } from 'react-locomotive-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import React from 'react'

const ScrollTriggerWrapper = forwardRef((props, ref) => {
  const { scroll } = useLocomotiveScroll();
  const { children, animation } = props;
  let animationinit = false;

  useEffect(() => {
    const runAnimationTL = [];
    if (scroll) {

      // Initiate Scrolltrigger
      gsap.registerPlugin(ScrollTrigger)

      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      scroll.on("scroll", ScrollTrigger.update);


      // INIT SCROLLTRIGGER
      ScrollTrigger.scrollerProxy("#scroll-container", {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#scroll-container").style.transform ? "transform" : "fixed"
      });

      // Run Animation
      if (animation && !animationinit) {
        animationinit = true;
        //check animation array if single or array;
        if(animation instanceof Array){
          animation.forEach(each_anim => {
            // push each animation into array.
            // pushing animation = running the animation.
            runAnimationTL.push(each_anim());
          });
        }
        else if(animation instanceof Object){
          runAnimationTL.push(animation());
          runAnimationTL.tl;
        }
      }

    }
    return () => {
      if (runAnimationTL) {
        animationinit = false;
        runAnimationTL.forEach(each_anim => {
          // delete timeline;
          each_anim.tl.kill(true);
          // second attempt of deleting through scroll trigger if instance is still available;
          if(ScrollTrigger.getById(each_anim.id)) ScrollTrigger.getById(each_anim.id).kill(true);
        });
      }
    }
  }, [scroll]);

  return (
    <>
      {children}
    </>
  )
});

export default ScrollTriggerWrapper;
