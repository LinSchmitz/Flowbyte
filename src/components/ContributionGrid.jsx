import React, { useState } from 'react';
import './ContributionGrid.css';

const ContributionGrid = () => {
  const rows = 7;
  const cols = 35;
  const [grid, setGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  const toggleCell = (rowIndex, colIndex) => {
    const newGrid = grid.map((row, r) =>
      row.map((cell, c) => (r === rowIndex && c === colIndex ? !cell : cell))
    );
    setGrid(newGrid);
  };

  return (
    <div className="grid-wrapper">
      {grid.map((row, rowIndex) => (
        <div className="grid-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`grid-cell ${cell ? 'active' : ''}`}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContributionGrid;
