import React from 'react'

const ProgressBar = ({sections, currentSectionIndex, currentSectionProgress}) => {
    const totalSections = sections.length;

    return (
      <div className="flex gap-4 w-1/2 h-[10%] items-center justify-center">
        {sections.map((section, index) => (
            <div 
                className="w-full h-full bg-[#d9d9d9] rounded-lg overflow-hidden"
                style={{ width: `${100 / totalSections}%` }}
                key={index}
            >
                <div
                    className={`h-full rounded-lg bg-green-500 transition-all duration-300`}
                    style={{ width: `${index < currentSectionIndex ? 100 : (index === currentSectionIndex ? currentSectionProgress : 0)}%` }}
                />
            </div>
        ))}
      </div>
    );
}

export default ProgressBar