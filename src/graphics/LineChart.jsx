import React, { useState, useEffect } from 'react';

function LineChart({ index, inputValue, color, svgHeight, svgWidth, margin }) {
  const [points, setPoints] = useState([]);

    // Function to check for duplicate X values
    const checkForDuplicates = () => {
      for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
              if (points[i].x === points[j].x) {
                  const newPoints = [...points];
                  newPoints.splice(i, 1);
                  setPoints(newPoints);
                  break;
              }
          }
      }
    };

    useEffect(() => {
        checkForDuplicates();
        console.log(points, points.length);
    }, [points]);

  useEffect(() => {
    console.log("inputValue: " + inputValue);
    if (Array.isArray(inputValue)) {
      let tempPoints = [...points];
      inputValue.forEach((value, index) => {
        tempPoints = [...tempPoints, { x: index + 1, y: parseInt(value) }];
      });
      setPoints(tempPoints);
    }
    else if (inputValue !== undefined) {
      setPoints((prevPoints) => [...prevPoints, { x: index, y: parseInt(inputValue)}]);
    }
  }, [inputValue, index]);

  const chartWidth = svgWidth - 2 * margin;
  const chartHeight = svgHeight - 2 * margin;

  const minX = 1;
  const maxX = points.length;
  const minY = points.length > 0 ? Math.min(...points.map(point => point.y)) : 0;
  const maxY = points.length > 0 ? Math.max(...points.map(point => point.y)) : 0;

  const xScale = (x) => {
    if (maxX - minX === 0) return margin + chartWidth / 2;
    return margin + margin/2 + (x - minX) * (chartWidth / (maxX - minX));
  };
  
  const yScale = (y) => {
    if (maxY - minY === 0) return svgHeight - margin - chartHeight / 2;
    return svgHeight - margin - margin/2 - (y - minY) * (chartHeight / (maxY - minY));
  };
  

  const pathData = points.length > 0 && `M ${xScale(points[0].x)} ${yScale(points[0].y)} ${points
    .slice(1)
    .map((point) => `L ${xScale(point.x)} ${yScale(point.y)}`)
    .join(' ')}`;


  return (
    <div className='w-full flex items-center justify-center text-xs'>
      <svg width={svgWidth} height={svgHeight}>

        {/* X-axis labels */}
      {points.map((point, index) => (
        <text
          key={index}
          x={xScale(point.x)}
          y={svgHeight} // Position below the x-axis
          textAnchor="middle" // Center the label at the x-coordinate
        >
          {point.x}
        </text>
      ))}

      {/* Y-axis labels */}
      {points.map((point, index) => (
        (point.y === points.reduce((min, point) => Math.min(min, point.y), Infinity) || point.y === points.reduce((max, point) => Math.max(max, point.y), -Infinity)) && (<text
          key={index}
          x={margin - 5} // Position to the left of the y-axis
          y={yScale(point.y)}
          textAnchor="end" // Right-align the label at the y-coordinate
          dominantBaseline="middle" // Vertically center the label
        >
          {point.y}
        </text>)
      ))}

        {/* Render X and Y axes */}
        <line x1={margin} y1={margin/2} x2={margin} y2={svgHeight - margin/2} stroke="black" strokeWidth="4" strokeLinecap="round" />
        <line x1={margin} y1={svgHeight - margin/2} x2={svgWidth - margin/2} y2={svgHeight - margin/2} stroke="black" strokeWidth="4" strokeLinecap="round" />

        {/* Render the line chart path */}
        {points.length > 0 && (<path d={pathData} fill="none" stroke={color} strokeWidth="2" />)}

        {/* Render the points */}
        {points.map((point, index) => (
            <circle
            key={index}
            cx={xScale(point.x)}
            cy={yScale(point.y)}
            r="4"
            fill={color}
          />
        ))}
      </svg>
    </div>
  );
}

export default LineChart;
