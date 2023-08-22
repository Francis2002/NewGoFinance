import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'

import { units } from '../helpers/units'
import { fadeAnimation, headContainerAnimation, slideAnimation } from '../helpers/motion'

import { mainStyles } from '../helpers/constants'
import { CustomButton, Unit } from '../components'

const Home = () => {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro === 1 && (
          <motion.section className='home' {...slideAnimation('left')} {...headContainerAnimation}>
            <motion.div
              className='absolute z-10 top-5 right-5' 
              {...fadeAnimation}
            >
              <CustomButton 
                type="filled" 
                title="Back"
                handleClick={() => state.intro = 0} 
                customStyles ="px-4 py-2.5 font-bold text-sm"
                />
            </motion.div>
            {units.map((unit, unitIndex) => (
              <Unit unit={unit} unitKey={unitIndex} key={unitIndex}/>
            ))}
          </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home