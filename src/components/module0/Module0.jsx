import React from 'react'
import './Module0.css';

function Module0() {
  return <>
    <div className='error-text small-only'>
        Hello there!
    </div>
    <div className="large-screens">
        I only show up on large screens.
    </div>
    <div className="small-screens">
        Meanwhile, you'll only see me on small ones.
    </div>
    <button className="button">Hover over me!</button>
    </>
}

export default Module0
