import React, { useState } from 'react'; 

function ProgressBar() {
    const [progress, setProgress]=useState(0)
    return (
        <div className='bar'>
            {['0', '1', '2', '3', '4', '5'].map(e => (
                <div
                    className='pbar'
                    style={{ backgroundColor: progress > +e ? 'blue' : 'white' }}
                    onClick={() => setProgress(+e)}
                >{e}
                </div>
            ))}
        </div>
    )
}

export default ProgressBar