import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { mainStyles } from '../helpers/constants'

const CustomButton = ({type, title, customStyles, handleClick}) => {

    const snap = useSnapshot(state);

    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: mainStyles.backgroundColor,
                color: mainStyles.textColor
            }
        } else if (type === 'outline') {
            return {
                borderWidth: '2px',
                borderColor: mainStyles.borderColor,
                color: mainStyles.secondaryColor
            }
        }
    }

  return (
    <button className={ `px-2 py-1.5 flex-1 rounded-md ${type === 'outline'} ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton