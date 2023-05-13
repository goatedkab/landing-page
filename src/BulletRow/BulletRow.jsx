import React from 'react'
import './BulletRow.css';


const BulletRow = ({words, active}) => {
  console.log(active)

  return (
    <div>
        <div className={active === 1 ? "BulletRowActive" : "BulletRow"}>
        <div className={active === 1 ? "BulletPointActive" : "BulletPoint"}></div> <p>{words}</p>
        </div>    
    </div>
  )
}

export default BulletRow
