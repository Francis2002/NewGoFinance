import React, { Fragment, useEffect, useRef, useState } from 'react'
import { CustomButton } from '../components';
import { mainStyles } from '../helpers/constants';
import { motion } from 'framer-motion';
import { fadeAnimation } from '../helpers/motion';

const ProgressBar = ({sections, currentSectionIndex, currentSectionProgress, setCurrentSectionProgress, setCurrentSubSection, setSectionInProgress}) => {
    const totalSections = sections.length;

    const tooltipRef = useRef(null)

    const [tooltipActivated, setTooltipActivated] = useState(false)

    const [toolipText, setToolipText] = useState('')

    const [toolTipIndex, setToolTipIndex] = useState(currentSectionIndex)

    const [toolTipPosition, setToolTipPosition] = useState({top: 0, left: 0})

    const [widthOffset, setWidthOffset] = useState(0)

    useEffect(() => {
        if(tooltipRef.current){
            setWidthOffset(tooltipRef.current.clientWidth / 2)
        }
        else
            console.log('no ref');
        if(toolTipPosition.top !== 0 && toolTipPosition.left !== 0){
            setTooltipActivated(true)
        }
    }, [toolTipIndex])

    useEffect(() => {
        console.log(toolTipPosition);
    }, [toolTipPosition])

    const handleTooltip = (index) => {
        setCurrentSubSection(0)
        setSectionInProgress(index)
        setCurrentSectionProgress(0)
    }

    const Tooltip = ({ text, index }) => (
        <motion.div className={`absolute text-white py-2 px-4 rounded-md shadow-lg text-sm z-10 transition-opacity duration-300 flex flex-col gap-2 p-2 ${tooltipActivated ? 'opacity-100' : 'opacity-0'}`} style={{top: toolTipPosition.top, left:toolTipPosition.left - widthOffset, background: mainStyles.backgroundColor}} ref={tooltipRef} {...(tooltipActivated && fadeAnimation)} >
            {text}
            <CustomButton
                type="outline"
                title="Go to section"
                handleClick={() => handleTooltip(index)}
                customStyles="px-4 py-2.5 font-bold text-sm w-full truncate min-w-[100px] bg-white"
            />
        </motion.div>
    );

    return (
        <div className="flex gap-4 w-1/2 h-[10%] items-center justify-center">
            {sections.map((section, index) => (
                <div 
                className="w-full h-full bg-[#d9d9d9] rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-100"
                style={{ width: `${100 / totalSections}%` }}
                key={index}
                onClick={(event) => {
                     // Calculate the position of the tooltip based on the clicked element
                    const rect = event.target.getBoundingClientRect();
                    const top = -20; // Adjust the tooltip's top position as needed
                    const left = rect.left + rect.width / 2; // Center the tooltip horizontally

                    setToolTipPosition({ top, left });
                    setToolipText(section.title)
                    setToolTipIndex(index)
                    setTooltipActivated(!tooltipActivated)
                }}
                >
                    <div
                        className={`h-full rounded-lg bg-green-500 transition-all duration-300`}
                        style={{ width: `${index < currentSectionIndex ? 100 : (index === currentSectionIndex ? currentSectionProgress : 0)}%` }}
                    />
                </div>
            ))}
            <Tooltip text={toolipText} index={toolTipIndex}/>
        </div>
    );
}

export default ProgressBar