import React, { useState } from 'react';

export function CreateCircle() {
  const [title, setTitle] = useState('Focus Sprint – August');
  const [startDate, setStartDate] = useState('2025-08-01');
  const [durationUnit, setDurationUnit] = useState('week'); // "week" or "month"
  const [duration, setDuration] = useState(3);
  const [importTasks, setImportTasks] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const newCycle = {
      title,
      startDate,
      durationUnit,
      duration,
      importTasks,
    };
    console.log('Creating Cycle:', newCycle);
    // Add your API or state logic here
  };

  return (
    <div className="main-content p-6 max-w-xl mx-auto text-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold border-b pb-2">
          📦 Create New Cycle
        </h2>

        {/* Title */}
        <div>
          <label className="block font-medium text-lg mb-1">📝 Title:</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border rounded p-2 text-base"
            placeholder="Enter cycle title"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block font-medium text-lg mb-1">
            📆 Start Date:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="w-full border rounded p-2 text-base"
          />
        </div>

        {/* Duration Toggle */}
        <div>
          <label className="block font-medium text-lg mb-1">📐 Duration:</label>
          <div className="flex items-center space-x-4 mb-2">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={durationUnit === 'week'}
                onChange={() => setDurationUnit('week')}
              />
              <span>Week</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={durationUnit === 'month'}
                onChange={() => setDurationUnit('month')}
              />
              <span>Month</span>
            </label>
          </div>
          <input
            type="number"
            min={1}
            value={duration}
            onChange={e => setDuration(Number(e.target.value))}
            className="w-full border rounded p-2 text-base"
            placeholder="e.g. 3"
          />
        </div>

        {/* Import Previous Tasks */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={importTasks}
            onChange={e => setImportTasks(e.target.checked)}
          />
          <span className="text-base">Import tasks from previous cycle?</span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Cycle
        </button>
      </form>
    </div>
  );
}
