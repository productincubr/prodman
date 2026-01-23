// import React from 'react'

// const HeroAmbient = () => {
//   return (
//     // <!-- AMBIENT SVG BACKGROUND -->
//     // <div class="hero-ambient-bg">
//     //   <!-- <svg viewBox="0 0 1200 800" class="ambient-svg" preserveAspectRatio="xMidYMid slice">
//     //     <defs>
//     //       <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
//     //         <feGaussianBlur stdDeviation="10" result="blur" />
//     //         <feComposite in="SourceGraphic" in2="blur" operator="over" />
//     //       </filter>
          
//     //       <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
//     //         <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
//     //         <feMerge>
//     //           <feMergeNode in="coloredBlur"/>
//     //           <feMergeNode in="SourceGraphic"/>
//     //         </feMerge>
//     //       </filter>
//     //     </defs> -->

//     //     <!-- PULSING CIRCLE PATH (Center between button and image placeholder) -->
//     //     <!-- <path id="mainCircle" d="M600,400 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0" 
//     //           fill="none" 
//     //           stroke="rgba(255, 255, 255, 0.6)" 
//     //           stroke-width="4" 
//     //           filter="url(#glow)">
//     //       <animate attributeName="stroke-opacity" 
//     //                values="0.4;0.9;0.4" 
//     //                dur="2s" 
//     //                repeatCount="indefinite" />
//     //       <animate attributeName="stroke-width" 
//     //                values="3;5;3" 
//     //                dur="2s" 
//     //                repeatCount="indefinite" />
//     //     </path> -->

//     //     <!-- Camera Icon -->
//     //     <!-- <g filter="url(#iconGlow)">
//     //       <image href="icons/CameraIcon.png" width="45" height="45" x="-22.5" y="-22.5" opacity="1">
//     //         <animateMotion dur="20s" repeatCount="indefinite">
//     //           <mpath href="#mainCircle" />
//     //         </animateMotion>
//     //         <animateTransform attributeName="transform" 
//     //                           type="scale" 
//     //                           values="1;1.15;1" 
//     //                           dur="3s" 
//     //                           repeatCount="indefinite" 
//     //                           additive="sum" />
//     //       </image>
//     //     </g> -->

//     //     <!-- Mic Icon -->
//     //     <!-- <g filter="url(#iconGlow)">
//     //       <image href="icons/MicIcon.png" width="45" height="45" x="-22.5" y="-22.5" opacity="1">
//     //         <animateMotion dur="20s" repeatCount="indefinite" begin="4s">
//     //           <mpath href="#mainCircle" />
//     //         </animateMotion>
//     //         <animateTransform attributeName="transform" 
//     //                           type="scale" 
//     //                           values="1;1.15;1" 
//     //                           dur="3s" 
//     //                           repeatCount="indefinite" 
//     //                           begin="0.8s"
//     //                           additive="sum" />
//     //       </image>
//     //     </g> -->

//     //     <!-- Mask Group Icon -->
//     //     <!-- <g filter="url(#iconGlow)">
//     //       <image href="icons/Mask_groupIcon.png" width="45" height="45" x="-22.5" y="-22.5" opacity="1">
//     //         <animateMotion dur="20s" repeatCount="indefinite" begin="8s">
//     //           <mpath href="#mainCircle" />
//     //         </animateMotion>
//     //         <animateTransform attributeName="transform" 
//     //                           type="scale" 
//     //                           values="1;1.15;1" 
//     //                           dur="3s" 
//     //                           repeatCount="indefinite" 
//     //                           begin="1.6s"
//     //                           additive="sum" />
//     //       </image>
//     //     </g> -->

//     //     <!-- Vector Icon -->
//     //     <!-- <g filter="url(#iconGlow)">
//     //       <image href="icons/VectorIcon.png" width="45" height="45" x="-22.5" y="-22.5" opacity="1">
//     //         <animateMotion dur="20s" repeatCount="indefinite" begin="12s">
//     //           <mpath href="#mainCircle" />
//     //         </animateMotion>
//     //         <animateTransform attributeName="transform" 
//     //                           type="scale" 
//     //                           values="1;1.15;1" 
//     //                           dur="3s" 
//     //                           repeatCount="indefinite" 
//     //                           begin="2.4s"
//     //                           additive="sum" />
//     //       </image>
//     //     </g> -->

//     //     <!-- SSS Icon -->
//     //     {/* <!-- <g filter="url(#iconGlow)"> */}
//     //       <image href="icons/sssIcon.png" width="45" height="45" x="-22.5" y="-22.5" opacity="1">
//     //         <animateMotion dur="20s" repeatCount="indefinite" begin="16s">
//     //           <mpath href="#mainCircle" />
//     //         </animateMotion>
//     //         <animateTransform attributeName="transform" 
//     //                           type="scale" 
//     //                           values="1;1.15;1" 
//     //                           dur="3s" 
//     //                           repeatCount="indefinite" 
//     //                           begin="3.2s"
//     //                           additive="sum" />
//     //       </image>
//     //     {/* </g> --> */}

//     //   {/* <!-- </svg> --> */}
//     // </div>
//   )
// }

// export default HeroAmbient