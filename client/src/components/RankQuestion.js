import React from 'react'
import { useState, useEffect } from 'react';

function RankQuestion( {idarray} ) {

    const [ids, setIdArray] = useState([]);
    
    useEffect(() => {
        setIdArray(idarray);
    },[idarray])
    

    return (
        <div className="rank-question">
              <input type="radio" name="priority" value="1" id={ids[0]}></input>
              <label for={ids[0]} className="number-label">
                <span>1</span>
              </label>

              <input type="radio" name="priority" value="2" id={ids[1]}></input>
              <label for={ids[1]} className="number-label">
                <span>2</span>
              </label>

              <input type="radio" name="priority" value="3" id={ids[2]}></input>
              <label for={ids[2]} className="number-label">
                <span>3</span>
              </label>

              <input type="radio" name="priority" value="4" id={ids[3]}></input>
              <label for={ids[3]} className="number-label">
                <span>4</span>
              </label>

              <input type="radio" name="priority" value="5" id={ids[4]}></input>
              <label for={ids[4]} className="number-label">
                <span>5</span>
              </label>
            </div>
    )
}

export default RankQuestion
