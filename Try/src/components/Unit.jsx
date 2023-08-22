import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { slideAnimation } from '../helpers/motion'
import UnitHeader from './UnitHeader'
import UnitTile from './UnitTile'

const Unit = ({unit}) => {

    const [flipped, setFlipped] = useState(true)

  return (
    <AnimatePresence>
        <motion.div className='unit'>
            <UnitHeader unit={unit} flipped={flipped} setFlipped={setFlipped}/>
            {unit.tiles.map((tile, tileIndex) => (
                <UnitTile tile={tile} key={tileIndex} index={tileIndex} toRender={!flipped}/>
            ))}
        </motion.div>
    </AnimatePresence>
  )
}

export default Unit