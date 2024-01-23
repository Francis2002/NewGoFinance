import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'

import state from '../store'

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../helpers/motion'

import {CustomButton} from '../components';

import {svg, financeSvg} from '../assets'


const Index = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro === 0 && (
            <motion.section className='index' {...slideAnimation('left')}>
              <motion.header {...slideAnimation('down')}>
                <h1 className='index-text'>
                  GO FINANCE
                </h1>
              </motion.header>
              <motion.div className='index-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                  <img src={financeSvg} alt='react' className='w-full'/>
                </motion.div>
                <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                  <p className='max-w-md font-normal text-gray-600 text-base'>
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
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Index