import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { slideAnimation } from '../helpers/motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { colors, mainStyles } from '../helpers/constants'

import { CustomButton } from '../components'
import { BarPercentage, ColorLegend} from '../graphics'

const Simulation = () => {

  const snap = useSnapshot(state);

  const [overflow, setOverflow] = useState(false)

  const handleInputChange = (title, value) => {
    if(snap.inputValues === null) state.inputValues = {}
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) state.inputValues[title] = parsedValue;
    else state.inputValues[title] = 0;
  };

  const handleMainInputChange = (value) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) state.mainInput = parsedValue;
    else state.mainInput = 0;
  };

  const handleSpecialInputChange = (title, value) => {
    if(snap.specialInputs === null) state.specialInputs = {}
    state.specialInputs[title] = value;
  };

  const sanitizeInput = (value) => {
    return value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  };

  const checkOverflow = () => {
    var sum = 0;
    if(snap.inputValues !== null) {
      for (let key in snap.inputValues) {
        if(snap.inputValues.hasOwnProperty(key)){
          console.log(snap.inputValues[key] + " -> " + sum);
          sum += snap.inputValues[key];
        }
      }
      if(sum > 100) setOverflow(true)
      else setOverflow(false)
      state.inputOverflow = overflow;
    }
  }

  const findKeyIndex = (titlesArray, label) => {
    for (let i = 0; i < titlesArray.length; i++) {
      if (label.includes(titlesArray[i])) return i;
    }
  };


  const handleSubmit = () => {

    let prompt = snap.lesson.prompt;
    let specialPrompt = snap.lesson.specialPrompt;

    const valuesArray = Object.values(snap.inputValues);

    const titlesArray = Object.keys(snap.inputValues);
    
    const mainInputTitle = snap.mainInput !== null ? Object.keys(snap.mainInput)[0] : null;

    const specialInputsValuesArray = snap.specialInputs !== null ? Object.values(snap.specialInputs) : null;

    const specialInputsTitlesArray = snap.specialInputs !== null ? Object.keys(snap.specialInputs) : null;

    for (let i = 0; i < snap.lesson.promptInputs.length; i++) {
      prompt = prompt.replace(`${snap.lesson.promptInputs[i]}`, valuesArray[i]);
      prompt = prompt.replace(`${snap.lesson.promptTitles[i]}`, titlesArray[i]);
    }

    if (snap.mainInput !== null) {
      prompt = prompt.replace(`${snap.lesson.promptMainInput}`, snap.mainInput);
      if(snap.lesson.promptMainTitle !== null) prompt = prompt.replace(`${snap.lesson.promptMainTitle}`, mainInputTitle);
    }

    let keyIndex = 0;

    if (snap.specialInputs !== null) {
      for (let i = 0; i < snap.lesson.promptSpecialInputs.length; i++) {
        keyIndex = findKeyIndex(specialInputsTitlesArray, snap.lesson.promptSpecialInputs[i]);
        specialPrompt = specialPrompt.replace(`${snap.lesson.promptSpecialInputs[i]}`, specialInputsValuesArray[keyIndex]);
        if(snap.lesson.promptSpecialTitles !== null) specialPrompt = specialPrompt.replace(`${snap.lesson.promptSpecialTitles[i]}`, specialInputsTitlesArray[keyIndex]);
      }
      prompt += specialPrompt;
    }

    console.log(prompt);
  }


  useEffect(() => {
    checkOverflow();
    console.log(snap.inputValues)
    console.log("Main input1: " + snap.mainInput)
    console.log("Overflow: " + overflow)
  }, [snap.inputValues ,overflow])

  useEffect(() => {
    checkOverflow();
    console.log("Main input2: " + snap.mainInput)
    console.log(snap.specialInputs)
  }, [snap.mainInput, overflow, snap.specialInputs])

  useEffect(() => {
    state.inputValues = {}
    snap.lesson.initialInputs.map((input) => {
      if(!input.isMain && !input.isSpecial) state.inputValues[input.title] = 0
    })
  }, [])
  

  return (
    <AnimatePresence>
      <motion.div
        className='w-full h-full flex flex-col justify-center items-center gap-8'
      >
        <motion.div
          {...slideAnimation('down')}
          className='xl:mt-0 mt-12'
        >
          {snap.lesson.initialText}
        </motion.div>
        <div className='w-full h-full rounded-lg flex flex-col sm:flex-row gap-8'>
          <motion.div className='input-container'>
            <motion.div {...slideAnimation('up')}>
              <CustomButton
                type="outline" 
                title="Submit"
                handleClick={() => handleSubmit()} 
                customStyles ="px-4 py-2.5 font-bold text-sm w-full"
              />
            </motion.div>
            {snap.lesson.initialInputs.map((input, index) => (
              <motion.div 
                key={index} 
                style={{color: mainStyles.textColor, background: mainStyles.backgroundColor}}
                className='flex flex-col justify-center items-center p-4 rounded-lg gap-2'
                {...slideAnimation('left', index * 0.1)}
              >
                <label htmlFor={`input-${index}`} className='font-bold'>{input.title.charAt(0).toUpperCase() + input.title.slice(1)}</label>
                <div className='flex justify-center items-center gap-2'>
                  <input
                    className='text-input'
                    type={input.type}
                    placeholder={input.placeHolder}
                    id={`input-${index}`}
                    onBlur={(e) => {
                      if(!input.isSpecial && !input.isMain) handleInputChange(input.title, sanitizeInput(e.target.value))
                      if(input.isMain) handleMainInputChange(sanitizeInput(e.target.value))
                      if(input.isSpecial) handleSpecialInputChange(input.title, e.target.value)
                    }}
                    onChange={(e) => {
                      if(!input.isSpecial && !input.isMain) handleInputChange(input.title, sanitizeInput(e.target.value))
                      if(input.isMain) handleMainInputChange(sanitizeInput(e.target.value))
                    }}
                    onInput={(e) => {
                      if(!input.isSpecial) e.target.value = sanitizeInput(e.target.value)
                    }}
                  />
                  {(!input.isMain && !input.isSpecial) && <div className='font-bold'>
                    %
                  </div>}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className='w-full min-h-[200px] flex items-center justify-center rounded-lg p-6 border-gray border shadow' {...slideAnimation('right')}>
            {!snap.inputOverflow ? (
              <div className='flex flex-col items-center justify-center w-full h-full min-h-[200px] gap-2'>
                <ColorLegend labels={snap.lesson.initialInputs.filter(input => !input.isMain && !input.isSpecial).map(input => input.title)} colors={colors}/>
                <BarPercentage percentageValues={snap.inputValues} overflow={snap.inputOverflow}/>
              </div>
            ) : (
              <motion.div className='text-red-500 font-bold min-h-[200px] items-center justify-center flex' {...slideAnimation('up')}>
                {snap.lesson.overflowText}
              </motion.div>
              )}
          </motion.div>
          <motion.div className='bg-black rounded-lg p-6 text-white md:w-1/4 w-full' {...slideAnimation('right')} style={{background: mainStyles.backgroundColor}}>
            Feedback Here
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Simulation