import { AnimatePresence, color, motion } from 'framer-motion'
import React from 'react'
import { slideAnimation } from '../helpers/motion'
import { mainStyles } from '../helpers/constants'
import { DropDownArrowSvg } from '../helpers/svgs'

const UnitHeader = ({unit, flipped, setFlipped}) => {
  return (
    <AnimatePresence>
      <motion.div 
        className='flex flex-col gap-6 w-full rounded-xl px-4 py-2.5 unit-header'
        {...slideAnimation('down')}
        style={{background: mainStyles.backgroundColor}}
      >
        <div className='flex justify-between items-center p-4'>
          <h1 className='text-2xl font-bold' style={{color: mainStyles.textColor}}>Unit {unit.unitNumber}</h1>
          <p className='text-md font-normal max-lg:hidden max-lg:text-sm' style={{color: mainStyles.textColor}}>{unit.description}</p>
        </div>
        <div className='flex gap-2.5'>
          <button 
            className='px-2 py-1.5 rounded-xl w-full border-2'
            style={{background: mainStyles.secondaryColor, color: mainStyles.textColor, borderColor: mainStyles.borderColor}}
            onClick={() => setFlipped(!flipped)}
          >
            <DropDownArrowSvg flipped={flipped}/>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default UnitHeader