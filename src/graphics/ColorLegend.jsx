import React from 'react'

const ColorLegend = ({labels, colors}) => {
  return (
    <div className="flex items-center justify-center gap-2 w-full border shadow border-gray rounded-lg p-2">
      {labels.map((label, i) => (
        <div key={i} className="flex items-center justify-center gap-1">
          {/*here a small square should appear with background color equal to colors[i]*/}
          <div className={`w-3 h-3 rounded`} style={{background: colors[i]}}></div>
          <span className="">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
        </div>
      ))}
    </div>

  )
}

export default ColorLegend