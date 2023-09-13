import React, { useEffect, useRef, useState } from 'react'
import { CustomButton } from '../components';
import { useSnapshot } from 'valtio';
import state from '../store';
import { AnimatePresence, motion } from 'framer-motion';
import ProgressBar from '../graphics/ProgressBar';
import { slideAnimation } from '../helpers/motion';
import { mainStyles } from '../helpers/constants';

const Introduction = () => {

  const snap = useSnapshot(state);

  const [currentSubSection, setCurrentSubSection] = useState(0);
  const contentRef = useRef([]);

  const [optionChosen, setOptionChosen] = useState([])

  const [sectionInProgress, setSectionInProgress] = useState(0)

  const [currentSectionProgress, setCurrentSectionProgress] = useState(0)

  const [showExplanation, setShowExplanation] = useState([])

  const handleNext = () => {
    if (currentSubSection < snap.lesson.sections[sectionInProgress].subsections.length - 1) {
      setCurrentSubSection(currentSubSection + 1);
      setCurrentSectionProgress(currentSectionProgress + 100 / snap.lesson.sections[sectionInProgress].subsections.length)
    }
    else if (sectionInProgress < snap.lesson.sections.length - 1) {
      setCurrentSubSection(0)
      setSectionInProgress(sectionInProgress + 1)
      setCurrentSectionProgress(0)
    }
    else {
      state.intro = 3
    }
  };

  useEffect(() => {
    if(currentSubSection > 0){
      contentRef.current[currentSubSection].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentSubSection]);

  useEffect(() => {
    let tempOptions = []
    let temp = []
    for(let i = 0; i < snap.lesson.sections[sectionInProgress].subsections.length; i++){
      tempOptions.push(null)
      temp.push(false)
    }
    setOptionChosen(tempOptions)
    setShowExplanation(temp)
  }, [sectionInProgress])

  useEffect(() => {
    console.log(optionChosen, showExplanation);
  }, [optionChosen, showExplanation])


  const handleOption = (index, subsectionIndex) => {
    console.log('option');
    //change optionchosen array at index quizCount to index
    setOptionChosen(prev => {
      const temp = [...prev]
      temp[subsectionIndex] = index
      return temp
    })
  };

  const handleShowExplanation = (index) => {
    console.log('explanation');
    setShowExplanation(prev => {
      const temp = [...prev]
      temp[index] = !temp[index]
      return temp
    })
  };

  const renderSubSection = (subsection, subsectionIndex) => {
    switch (subsection.type) {
      case 'text':
        return <p>{subsection.text}</p>;
      case 'quiz':
        return (
          <div className="flex flex-col gap-4 border border-gray shadow rounded-lg p-6 transition-all w-full">
            <p>{subsection.questionText}</p>
            <div className="flex flex-col gap-2 w-full">
              {subsection.options.map((option, index) => (
                <CustomButton
                  key={index}
                  type="filled"
                  title={option}
                  handleClick={() => handleOption(index, subsectionIndex)}
                  customStyles={`px-4 py-2.5 font-bold text-sm w-full ${optionChosen[subsectionIndex] !== null ? ("pointer-events-none opacity-50 cursor-not-allowed") : ""}`}
                />
              ))}
            </div>
            {optionChosen[subsectionIndex] !== null && (
            <motion.div 
              className='w-full flex flex-col gap-4'
              {...slideAnimation('left')}
            >
              <motion.span className={`p-2 font-bold w-full flex items-center justify-center text-white rounded-lg ${optionChosen[subsectionIndex] + 1 === subsection.correctAnswer ? ("bg-green-500") : ("bg-yellow-500")}`}
              {...slideAnimation('down')}>
                {optionChosen[subsectionIndex] + 1 === subsection.correctAnswer ? (
                  "Correct!"
                ) : (
                  "Incorrect!"
                )}
              </motion.span>
              <CustomButton 
                type="outline"
                title="Show Explanation"
                handleClick={() => handleShowExplanation(subsectionIndex)}
                customStyles ="px-4 py-2.5 font-bold text-sm w-1/4 truncate min-w-[200px]"
              />
            </motion.div>)}
            {showExplanation[subsectionIndex] === true && (
              <motion.div {...slideAnimation('left')} className='flex flex-col gap-6'>
                <p>{subsection.explanation}</p>
              </motion.div>
            )}
          </div>
        );
    }
  };
  

  return (
    <AnimatePresence>
      <div className="w-full h-full flex flex-col justify-center items-center gap-8 py-12">
        <div className="fixed -bottom-6 sm:-bottom-8 min-h-[100px] h-[20%] w-full flex items-center justify-center z-10 bg-white gap-6 m-6 border">
          <div className=''>
            <CustomButton
              type="filled"
              title="Back"
              handleClick={() => state.intro = 1}
              customStyles="px-4 py-2.5 font-bold text-sm w-full truncate min-w-[100px]"
            />
          </div>
          <ProgressBar sections={snap.lesson.sections} currentSectionIndex={sectionInProgress}  currentSectionProgress={currentSectionProgress} setCurrentSectionProgress={setCurrentSectionProgress} setCurrentSubSection={setCurrentSubSection} setSectionInProgress={setSectionInProgress}/>
        </div>
        {snap.lesson.sections[sectionInProgress].subsections.map((subsection, index) => (
          <div
            key={index}
            ref={(el) => (contentRef.current[index] = el)}
            className={`p-6 flex flex-col items-center gap-4 w-3/4 ${index > currentSubSection && 'hidden'}`}
          >
            {/* Title */}
            <h1 className={`text-3xl font-bold text-center m-24 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}>{snap.lesson.sections[sectionInProgress].title}</h1>
            {renderSubSection(subsection, index)}

            {/* Continue button */}
            {index === currentSubSection && (
              <CustomButton 
                type="filled"
                title="Continue"
                handleClick={() => handleNext()}
                customStyles ={`px-4 py-2.5 font-bold text-sm w-1/6 truncate min-w-[100px] ${(optionChosen[index] === null && subsection.type === "quiz") ? ("opacity-0") : ""}`}
              />
            )}
          </div>
        ))}
        <div className='w-full h-screen'>

        </div>
      </div>
    </AnimatePresence>
  );
}

export default Introduction