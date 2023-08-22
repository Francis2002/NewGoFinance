import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../helpers/constants';

const calculatePercentages = (values, overflow) => {
    if (overflow || values === null) {
        return [];
    }

    // Convert object values to an array
    const valuesArray = Object.values(values);

    const percentages = valuesArray;
    return percentages;
};

const calculateRoundedIndexes = (values, overflow, setRoundedStartIndex, setRoundedEndIndex) => {
    if (overflow || values === null) {
        setRoundedStartIndex(0);
        setRoundedEndIndex(0);
        return;
    }
    const percentages = calculatePercentages(values, overflow);

    for (let i = 0; i < percentages.length; i++) {
        if (percentages[i] !== 0) {
            setRoundedStartIndex(i);
            break;
        }
    }

    for (let i = percentages.length - 1; i >= 0; i--) {
        if (percentages[i] !== 0) {
            setRoundedEndIndex(i);
            break;
        }
    }
};


const BarPercentage = ({percentageValues, overflow}) => {

    const [percentages, setPercentages] = useState(calculatePercentages(percentageValues, overflow));

    const [roundedStartIndex, setRoundedStartIndex] = useState(0)
    const [roundedEndIndex, setRoundedEndIndex] = useState(0)

    useEffect(() => {
        // Calculate path coordinates based on percentages
        if (percentages !== null) {
            const newPercentages = calculatePercentages(percentageValues, overflow);
            setPercentages(newPercentages);
            calculateRoundedIndexes(percentageValues, overflow, setRoundedStartIndex, setRoundedEndIndex);
        }
    }, [percentageValues, overflow]);

    return (
        <div className="w-full h-[10%] min-h-[40px] bg-[#d9d9d9] flex flex-row mx-2 rounded-lg">
            {percentages.map((percentage, index) => (
                <motion.div
                key={index}
                className={`h-full min-h-[40px] text-white text-center font-bold justify-center items-center flex ${index === roundedStartIndex ? 'rounded-l-lg' : ''} ${
                  index === roundedEndIndex ? 'rounded-r-lg' : ''
                }`}
                style={{ width: `${percentage}%`, backgroundColor: colors[index]}}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    {percentage > 10 && (percentage.toFixed(0) + '%')}
                </motion.div>
            ))}
        </div>
    );
};

export default BarPercentage;