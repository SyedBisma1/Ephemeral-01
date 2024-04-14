//locomotive js -smooth scrooling 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
 });
 
 //gsap to animate
 gsap.from(".nlink",{
     stagger:.2,
     y:10,
     duration:1,
     ease:Power1,
     opacity:1,
 })
 
 Shery.textAnimate("#headings h1", {
     style: 2,
   y: 10,
   delay: 0.2,
   duration: 2,
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   multiplier: 0.1,
   });
 
 gsap.from(".anim2",{
     y:50,
     stagger:.3,
     opacity:0,
     ease: Expo,
     duration:1,
 })
 //link and text done without any error***
 Shery.imageEffect("#imagentext img",{
     style:3,
     config: {"uFrequencyX":{"value":18.32,"range":[0,100]},"uFrequencyY":{"value":21.37,"range":[0,100]},"uFrequencyZ":{"value":6.11,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.14},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
     // debug:true,
 })
 
 Shery.imageEffect(" #susimgwrapper img",{
     style:5,
     config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666922368824792},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
 //  debug:true
 })
 
 
 Shery.imageEffect(".imgeff img",{
     style:3,
  config: {"uFrequencyX":{"value":16.03,"range":[0,100]},"uFrequencyY":{"value":9.16,"range":[0,100]},"uFrequencyZ":{"value":7.63,"range":[0,100]},"geoVertex":{"range":[1,64],"value":8.21},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6799981590574374},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
 //  debug:true,
 })
 
 
 gsap.from("#imagentext img",{
     z:"4",
     opacity:0,
     duration:2,
     ease: Expo.easeInOut,
 });
 
 //completetly done do not touch this part 
 Shery.imageEffect("#bimg ", {
     style: 5,
     config: {"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.24951220483415},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.11,"range":[0,2]},"discard_threshold":{"value":0.43,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
     gooey:true
 })
 
 //video part here
 document.querySelector("#ftext button ")
 .addEventListener("mouseover", function(){
     gsap.to("#future video",{
         opacity:0,
         duration:1,
         ease:power4,
     })
 })
 
 
 document.querySelector("#ftext button ")
 .addEventListener("mouseleave", function(){
     gsap.to("#future video",{
         opacity:0,
         duration:1,
         ease:power4,
     })
    
 })
