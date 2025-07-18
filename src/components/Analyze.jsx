import React, { useState } from 'react';

export default function Analyze() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <>
      <main className="main-content">
        <section className="cycle-summary">
          <h2>Current Cycle: Focus 21</h2>
          <p>Days Passed: 7 of 21</p>
          <p>Avg Time: 2.3h/day</p>
          <p className="warning">⚠️ Irregular! Std.Dev = 1.4 (↑ &gt; 50%)</p>
        </section>

        <section className="tasks-list">
          <article className="task-card purple">
            <h3>🟣 Design Portfolio</h3>
            <p>✅ Today: 2h 20m</p>
            <p>⏰ 09:30 - 11:50</p>
            <p>✍️ High focus today</p>
          </article>

          <article className="task-card green">
            <h3>🟢 Learn German</h3>
            <p>❌ Not logged today</p>
          </article>

          <article className="task-card orange">
            <h3>🟠 Workout</h3>
            <p>✅ Today: 1h</p>
          </article>
        </section>

        <div className="buttons">
          <button onClick={() => setShowAddTaskModal(true)}>
            ➕ Add New Task
          </button>
          <button>📈 See Analysis</button>
        </div>
      </main>

      {showAddTaskModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Task</h3>
            <button onClick={() => setShowAddTaskModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
