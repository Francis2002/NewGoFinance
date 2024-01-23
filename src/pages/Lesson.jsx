import { AnimatePresence, motion } from 'framer-motion'
import { CustomButton } from '../components'
import { useSnapshot } from 'valtio'
import state from '../store'
import { fadeAnimation, headContainerAnimation, slideAnimation } from '../helpers/motion'
import { CaseBasedLearning, Introduction, Simulation } from '../lessons'
import { useEffect } from 'react'

const renderLessonType = (type) => {
  switch (type) {
    case 'star':
      return <Simulation/>
    case 'book':
      return <Introduction />
    case 'trophy':
      return <CaseBasedLearning/>
    default:
      return <div>Error</div>
  }
}

const Lesson = () => {

  const snap = useSnapshot(state);

  useEffect(() => {
    if(snap.intro === 1){
      state.mainInput = null
      state.specialInputs = null
      state.inputValues = null
      state.inputOverflow = false
    }
  }, [snap.intro])
  

  return (
    <AnimatePresence>
      {snap.intro === 2 && (
          <motion.section className='home' {...slideAnimation('left')} {...headContainerAnimation}>
            <motion.div
              className='absolute z-10 top-5 left-5' 
              {...fadeAnimation}
            >
              <CustomButton 
                type="filled" 
                title="Back"
                handleClick={() => state.intro = 1} 
                customStyles ="px-4 py-2.5 font-bold text-sm"
                />
            </motion.div>
            {renderLessonType(snap.lesson.type)}
          </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Lesson