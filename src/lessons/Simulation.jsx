import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { slideAnimation } from '../helpers/motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { colors, mainStyles } from '../helpers/constants'

import { CustomButton } from '../components'
import { BarPercentage, ColorLegend, LineChart} from '../graphics'

const Simulation = () => {

  const snap = useSnapshot(state);

  const [overflow, setOverflow] = useState(false)

  const feedbackRef = useRef(null);

  const [result, setResult] = useState()

  const handleInputChange = (title, value) => {
    if(snap.inputValues === null) state.inputValues = {}
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && (snap.mainInput != 0 && snap.mainInput != null)) state.inputValues[title] = (parsedValue/snap.mainInput*100);
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

  const handleSubmit = async () => {

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

    /* getResponse('sim'); */

    try {
      console.log("Sending request to server...");
      const result = await fetch(/* '/server/generate.js' */ 'http://localhost:8080', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt, outputStructure: snap.lesson.outputStructure, systemContent: snap.lesson.systemContent }),
      });

      console.log("Request sent!");

      console.log(result.body);

      const data = await result.json();
      console.log(data);
      if (result.status !== 200) {
        throw data.error || new Error(`Request failed with status ${result.status}`);
      }

      setResult(data.result);
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  const createFeedback = () => {
    let feedback = "";
    console.log(result);
    let parsedValue = JSON.parse(result);
    console.log(parsedValue);
    //get keys of the parsedValue object as an array
    let keys = Object.keys(parsedValue);
    //loop over the keys array and add the values to the feedback string with a '\n\n' at the end of each line except the last one
    for (let i = 0; i < keys.length-1; i++) {
      feedback += parsedValue[keys[i]] + (i < keys.length - 1-1 ? "\n\n" : "");
    }
    return feedback;
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
    if(result !== null){
      feedbackRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [result]);

  useEffect(() => {
    state.inputValues = {}
    state.mainInput = 1000
    snap.lesson.initialInputs.map((input) => {
      if(!input.isMain && !input.isSpecial) state.inputValues[input.title] = 0
    })
  }, [])

  const calculateAllPoints = () => {
    let tempPoints = []
    let numberOfPoints = 20

    const initialInvestment = 10000;
    const investmentFrequency = 12; // Yearly
    const investmentAmount = 1000;
    const annualInterestRate = 10; // 5%
    const totalInvestmentYears = 10;

    // Convert the annual interest rate to decimal
    const decimalInterestRate = annualInterestRate / 100;

    // Calculate the time period for each step
    const timeStep = totalInvestmentYears / numberOfPoints;

    for (let i = 0; i <= numberOfPoints; i++) {
      const years = i * timeStep;

      // Calculate compound interest
      const compoundInterest = initialInvestment * Math.pow(1 + (decimalInterestRate / investmentFrequency), investmentFrequency * years);
      
      // Add the investment amount for this step
      const totalValue = compoundInterest + (investmentAmount * (i + 1));

      // Add the point to the array
      tempPoints.push(totalValue.toFixed(2));
    }

    return tempPoints;
  }

  const renderGraphics = (graphics) => {
    switch (graphics) {
      case 'barPercentage':
        if(!snap.inputOverflow){
        return (
            <div className='flex flex-col items-center justify-center w-full h-full min-h-[200px] gap-2'>
              <ColorLegend labels={[...snap.lesson.initialInputs.filter(input => !input.isMain && !input.isSpecial).map(input => input.title), snap.lesson.otherLabel]} colors={colors}/>
              <BarPercentage percentageValues={snap.inputValues} overflow={snap.inputOverflow}/>
            </div>
        )}
        else{
          return (
            <motion.div className='text-red-500 font-bold min-h-[200px] items-center justify-center flex' {...slideAnimation('up')}>
              {snap.lesson.overflowText}
            </motion.div>
          )}
      case 'lineChart':
        return (
          <div className='flex flex-col items-center justify-center w-full h-full min-h-[200px] gap-2'>
            <LineChart inputValue={calculateAllPoints()} index={null} color={mainStyles.backgroundColor} svgWidth={600} svgHeight={600} margin={60}/>
          </div>
        )
      default:
        return null
    }
  }
  

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
        <div className='w-full h-full rounded-lg flex flex-col md:flex-row gap-8 items-center justify-center'>
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
                    value={input.isMain ? (snap.mainInput !== null ? snap.mainInput : '') : undefined}
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
                    {input.label}
                  </div>}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className='flex flex-col items-center justify-center w-full gap-4 h-full'>
            <motion.div className='w-full h-full min-h-[200px] flex items-center justify-center rounded-lg p-6 border-gray border shadow' {...slideAnimation('right')}>
              {renderGraphics(snap.lesson.graphic)}
            </motion.div>
            <motion.div 
              className='flex w-full h-full rounded-lg p-6 text-white font-bold min-w-[100px]' {...slideAnimation('right')} 
              style={{background: mainStyles.backgroundColor, whiteSpace: 'pre-line'}}
              ref={feedbackRef}
            >
              {result === undefined ? (
                "Feedback to your decisions will appear here"
              ) : (
                  createFeedback()
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Simulation