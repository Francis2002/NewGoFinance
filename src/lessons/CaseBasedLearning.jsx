import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { slideAnimation } from '../helpers/motion'
import { CustomButton } from '../components'
import { useSnapshot } from 'valtio'
import state from '../store'
import { colors, mainStyles } from '../helpers/constants'

import { BoySvg } from '../helpers/svgs'
import { BarPercentage, ColorLegend, LineChart } from '../graphics'

const CaseBasedLearning = () => {

  const snap = useSnapshot(state);

  const [iteration, setIteration] = useState(0)

  const [iterationText, setIterationText] = useState(null)

  const [actions, setActions] = useState(snap.actions)

  const [event, setEvent] = useState('')

  const [impact, setImpact] = useState('')

  const [result, setResult] = useState()

  const renderGraphics = (stat, index, value) => {
    switch (stat.graphic) {
      case 'percentageBar':
        return <div key={index} className={`w-full font-bold rounded-lg p-4 shadow border border-gray text-center flex flex-col gap-2 items-center justify-center`}><ColorLegend labels={['test']} colors={colors}/> <BarPercentage percentageValues={[34]} overflow={false}/></div>
      case 'lineChart':
        return <div key={index} className={`w-full font-bold rounded-lg p-4 shadow border border-gray text-center flex flex-col gap-2 items-center justify-center`}><ColorLegend labels={[stat.title]} colors={[colors[index]]}/> <LineChart inputValue={value} index={iteration} color={colors[index]} svgWidth={200} svgHeight={150} margin={40}/></div>
      default:
        return null
    }
  }

  const getResult = async (prompt, outputStructure, systemContent) => {
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

  //set state.stats to an object with the value property of the objects in state.lesson.initialStats associated with the keys provided by the title property of the objects on mount
  useEffect(() => {
    const newStats = {}
    snap.lesson.initialStats.forEach(stat => {
      newStats[stat.title] = stat.value
    })
    state.stats = newStats
  }, [])

  const handleAction = async (action) => {
    setIteration(iteration + 1)
    setIterationText(action + ' Iteration:' + iteration)
    //increment all values in state.stats by 1
    console.log(iteration)
    console.log(action)

    let prompt = snap.lesson.prompt;

    const valuesArray = Object.values(snap.stats);

    const titlesArray = Object.keys(snap.stats);

    for (let i = 0; i < snap.lesson.promptInputStats.length; i++) {
      prompt = prompt.replace(`${snap.lesson.promptInputStats[i]}`, valuesArray[i]);
      prompt = prompt.replace(`${snap.lesson.promptTitleStats[i]}`, titlesArray[i]);
    }

    for (let i = 0; i < snap.lesson.promptInputActions.length; i++) {
      prompt = prompt.replace(`${snap.lesson.promptInputActions[i]}`, actions[i]);
    }

    prompt = prompt.replace(`${snap.lesson.promptSpecialInputs[0]}`, event);

    prompt = prompt.replace(`${snap.lesson.promptSpecialInputs[1]}`, impact);

    prompt = prompt.replace(`${snap.lesson.promptSpecialInputs[2]}`, action);
  }

  const handleStart = () => {
    const prompt = snap.lesson.zeroThIterationPrompt;

    setIteration(iteration + 1)

    //const newInfo = getResponse('startCase')
  }

  useEffect(() => {
    if (result !== null && result !== undefined) {
      setIterationText(result['overallFeedback'])

      setEvent(result['newEvent'])
  
      setImpact(result['impact'])
  
      setActions(result['newChoices'])
  
      
      for (const key in snap.stats){
        state.stats[key] = result['newFinancialSituation'][key.toLowerCase()]
      }
    }
  }, [result])

  return (
    <AnimatePresence>
      <motion.div
        className='w-full h-full flex flex-col justify-center items-center gap-8'
      >
        <motion.div
          {...slideAnimation('down')}
          className={`xl:mt-0 mt-12 rounded-lg w-full border border-[#ff4d4f] border-solid border-2 p-4`}
          style={{color: mainStyles.backgroundColor, background: mainStyles.white}}
        >
          {iterationText === null ? snap.lesson.initialText : iterationText}
        </motion.div>
        <motion.div className='actions-container' {...slideAnimation('down')}>
          {actions.map((action, index) => (
            <CustomButton
              key={index}
              type="filled"
              title={action}
              handleClick={() => handleAction(action)}
              customStyles ="px-4 py-2.5 font-bold text-sm w-full"
            />
          ))}
        </motion.div>
        <div className={`w-full h-full rounded-lg flex flex-col md:flex-row gap-4 min-h-[200px] ${iteration === 0 && 'border shadow border-gray p-4'}`}>
          {iteration !== 0 ? (
          <>
          <motion.div className='w-full border-gray border shadow rounded-lg min-h-[200px] flex flex-col items-center justify-center'>
            <BoySvg />
          </motion.div>
          <div className='flex flex-col h-full w-full gap-4'>
            <motion.div className='h-full border-gray border shadow rounded-lg min-h-[200px] flex flex-col'>
              <motion.div>
                {snap.lesson.initialStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className='flex justify-between items-center p-4 border-b border-gray'
                    {...slideAnimation('left', index * 0.1)}
                  >
                    <div className='font-bold'>{stat.title}</div>
                    <div className='font-bold'>{snap.stats[stat.title] + " $"}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div className={`h-full border-gray border shadow rounded-lg min-h-[200px] p-4 gap-4 grid grid-cols-2 `} {...slideAnimation('up')}>
              {snap.lesson.initialStats.map((stat, index) => (
                renderGraphics(stat, index, snap.stats[stat.title])
              ))}
            </motion.div>
          </div>
          </>) : (
            <motion.div className='flex items-center justify-center w-full' {...slideAnimation('right')}>
              <div className='w-1/4'>
                <CustomButton
                  type="outline"
                  title="Start"
                  handleClick={() => handleStart()}
                  customStyles ="px-4 py-2.5 font-bold text-sm w-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CaseBasedLearning