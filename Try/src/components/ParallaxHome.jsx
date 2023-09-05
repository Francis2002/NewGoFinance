import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../helpers/motion';
import { financeSvg } from '../assets';
import CustomButton from './CustomButton';
import state from '../store';
import { useSnapshot } from 'valtio';
/* import TextBlock from './TextBlock' */

const ParallaxHome = () => {

    const snap = useSnapshot(state);

  return (
    <div className='w-full h-full'>
      <Parallax className='animation h-screen' pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.02}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.05}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.11}>
          <div className="animation_layer parallax flex flex-col items-center" id="">
            <p className='text-white font-bold text-8xl mt-48'>GO FINANCE</p>
            <p className='text-white font-bold text-xl mt-24'>Scroll down to discover your path to financial education</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.16}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.26}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.36}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.49}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.68}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <div className="animation_layer absolute parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.999} speed={0.8}>
            <motion.section className='w-full h-full min-h-[2000px] flex items-center justify-center flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute z-10 bg-[#210002]' {...slideAnimation('left')}>
              <motion.div className='index-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                  <img src={financeSvg} alt='react' className='w-full'/>
                </motion.div>
                <motion.div {...headContentAnimation} className='flex flex-col  gap-5'>
                  <p className='max-w-md font-normal text-white text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatum.
                  </p>

                  <CustomButton 
                    type="filled"
                    title="Get Started"
                    handleClick={() => state.intro = 1}
                    customStyles ="px-4 py-2.5 font-bold text-sm"
                  />
                </motion.div>
              </motion.div>
              <div className='h-screen bg-[#210002]'>
                
              </div>
            </motion.section> 
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxHome;