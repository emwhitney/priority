import React from 'react'
import { useState, useEffect } from 'react';

function Quiz() {
    const [priority, setPriority] = useState("");
    const [taskType, setTaskType] = useState("");
    const urgencyOption = ['Within the hour', 'Within the day', 'End of the week', 'Next week', 'This month', 'Way future']
    const [urgencyType, setUrgency] = useState("");

    function submitTypeHandler(event) {
        event.preventDefault();
        setTaskType(event.target.task.value);
    }

    function submitUrgencyHandler(event) {
        event.preventDefault();
        setUrgency(event.target.urgency.value);
    }

    useEffect(() => {
        console.log(taskType, urgencyType);
    })

    return (
        <div>
            <form onSubmit={submitTypeHandler}>
                <div>
                    Question 1: Is this for work, life maintenance, or joy?
                </div>
                <label>
                    Work
                    <input type='radio' name='task' value='work'></input>
                </label>

                <label>
                    Life maintenance
                    <input type='radio' name='task' value='life-maintenance'></input> 
                </label>
                <label>
                    Joy
                    <input type='radio' name='task' value='joy'></input>
                </label>
                <button>Submit</button>
            </form>

            <form onSubmit={submitUrgencyHandler}>
                <div>
                    Question 2: How urgent is this task?
                </div>
                <label>
                    Select an urgency
                    <select name='urgency'>
                        {urgencyOption.map(urgency => (
                            <option value={urgency}>{urgency}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Quiz
