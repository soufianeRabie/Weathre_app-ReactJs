import React from 'react';
import {SvgHoc} from "./SvgHoc";
import {motion} from "framer-motion";

function Cloudy({width = '25px', height = '25px'}) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"  width={height} height={width}
                 viewBox="0 0 2048 2048"
            >

                <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
                    <rect fill={'none'} width="2048" height="2048"/>
                    {/*<rect fill={'#AB47BC'} width="2048" height="2048" rx="256.001" ry="256.001"/>*/}
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <motion.path
                        stroke={'#fff'}
                        strokeWidth={20}
                        initial={{
                            pathLength: 0,
                            opacity: 0,
                            fill : 'transparent',
                        }}
                        animate={{
                             pathLength: 1,
                            opacity : 1,
                            fill : 'whitesmoke',
                            y: [0 ,-200 ,0]
                    }}
                        transition ={{

                            default : {duration: 2},
                            fill : { delay : 2 , duration:  5},
                            y : {repeat: 'loop' ,duration : 5 , ease : 'easeInOut' ,delay :2 },
                        }}
                        fill={'#FFFFFE'}
                          d="M1279.7 575.999c87.4477,0 168.078,29.4862 232.434,79.0465 62.8252,48.3792 103.845,120.256 126.741,198.316 43.8957,32.6315 86.4001,70.5898 111.893,119.29 26.3362,50.3174 41.23,107.44 41.23,167.923 0,90.1146 -32.9811,172.635 -87.5847,236.234 -55.304,64.415 -132.802,109.31 -220.651,122.886 -28.1894,4.35237 -54.9851,4.27914 -82.8461,4.20355 -18.2492,-0.0531496 29.8453,0.101575 -10.5189,0.101575l-821.102 0c-26.3788,0 -4.32638,-0.119291 -11.8913,-0.080315 -26.8477,0.138189 -49.2485,0.252756 -78.8953,-5.9256 -64.0914,-13.3795 -120.104,-48.5646 -159.849,-97.3938 -39.1819,-48.1406 -62.6623,-109.383 -62.6623,-175.971 0,-77.126 31.3866,-146.971 82.128,-197.542 50.7272,-50.5583 110.462,-81.8292 187.629,-81.8292 5.00433,0 10.0618,0.142913 15.1701,0.425197 12.5929,-58.3146 53.628,-109.844 96.4158,-148.362 87.5587,-78.8209 199.16,-85.2178 302.34,-31.0359 31.213,-50.7225 89.4001,-102.404 140.15,-133.706 58.1611,-35.8725 126.641,-56.5796 199.871,-56.5796z"/>
 </g>
</svg>
        </>
    );
}

export default SvgHoc(Cloudy);