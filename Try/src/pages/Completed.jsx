import { AnimatePresence, motion } from 'framer-motion'
import { CustomButton } from '../components'
import { useSnapshot } from 'valtio'
import state from '../store'
import { fadeAnimation, headContainerAnimation, slideAnimation } from '../helpers/motion'

const Completed = () => {

  const snap = useSnapshot(state);
  
  return (
    <AnimatePresence>
      {snap.intro === 3 && (
          <motion.section className='home' {...slideAnimation('left')} {...headContainerAnimation}>
            <motion.div {...slideAnimation('down')}
                className={`p-6 flex flex-col items-center gap-4 w-3/4`}
            >
                <h1 className='text-3xl font-bold text-center'>Congratulations!</h1>
                <p className='text-xl font-normal text-center'>You have completed the lesson.</p>
                <CustomButton
                    type="filled"
                    title="Back to Home"
                    handleClick={() => state.intro = 1}
                    customStyles="px-4 py-2.5 font-bold text-sm w-1/6 truncate min-w-[100px]"
                />
            </motion.div>
          </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Completed