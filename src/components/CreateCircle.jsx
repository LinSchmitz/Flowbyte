import React, { useState } from 'react';

export default function CreateCircle() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [durationUnit, setDurationUnit] = useState('week');
  const [durationValue, setDurationValue] = useState(1);
  const [importTasks, setImportTasks] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      title,
      startDate,
      duration: `${durationValue} ${durationUnit}`,
      importTasks,
    });
    alert('Cycle created!');
  };

  return (
    <div className="create-circle-container">
      <h2 className="section-title"> Create New Cycle</h2>
      <form className="create-circle-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Focus Sprint – August"
          />
        </label>

        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </label>

        <div className="duration-group">
          <span className="duration-label">Duration:</span>
          <div className="duration-toggle">
            <label>
              <input
                type="radio"
                value="week"
                checked={durationUnit === 'week'}
                onChange={() => setDurationUnit('week')}
              />
              Week
            </label>

            <label>
              <input
                type="radio"
                value="month"
                checked={durationUnit === 'month'}
                onChange={() => setDurationUnit('month')}
              />
              Month
            </label>

            <input
              type="number"
              min="1"
              value={durationValue}
              onChange={e => setDurationValue(e.target.value)}
            />
          </div>
        </div>

        <label className="import-checkbox">
          <input
            type="checkbox"
            checked={importTasks}
            onChange={() => setImportTasks(!importTasks)}
          />
          Import tasks from previous cycle?
        </label>

        <div className="button-wrapper">
          <button type="submit" className="create-button">
            Create Cycle
          </button>
        </div>
      </form>
    </div>
  );
}
