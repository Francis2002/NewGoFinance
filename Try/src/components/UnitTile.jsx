import { AnimatePresence, motion } from 'framer-motion'
import { slideAnimation } from '../helpers/motion'
import { mainStyles } from '../helpers/constants'

import { StarSvg, BookSvg, TrophySvg } from '../helpers/svgs'

import state from '../store'

import { useSnapshot } from 'valtio'


const getSvg = (type) => {
  switch (type) {
    case 'star':
      return <StarSvg/>
    case 'book':
      return <BookSvg/>
    case 'trophy':
      return <TrophySvg/>
    default:
      return <StarSvg/>
  }
}

const renderLesson = (tile) => () => {
  state.lesson = tile
  state.intro = 2
}

const UnitTile = ({tile, index, toRender}) => {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {toRender && (<motion.div className='tile' {...slideAnimation('down', index * 0.2)} style={{background: mainStyles.backgroundColor}}>
        {getSvg(tile.type)}
        <button className='ml-2 rounded-lg w-fit p-2' style={{background: mainStyles.white}} onClick={renderLesson(tile)}>
          <p className='text-sm font-bold' style={{color: mainStyles.secondaryColor}}>Start</p>
        </button>
      </motion.div>)}
    </AnimatePresence>
  )
}

export default UnitTile