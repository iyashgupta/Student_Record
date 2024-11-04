import React, { useState } from 'react'

const DashBoardTopHeader = () => {
  const [tab,setTab]=useState('All files')

  return (
    <header className="bg-surface-primary border-bottom">
    <div className="container-fluid d-flex justify-content-between align-items-center" style={{ width:'95%'}}>
        <h2>Blog Data</h2>
           {/* Nav  */}
        <ul className="nav nav-tabs border-0">
          <li className="nav-item">
            <span className={`nav-link cursor-pointer ${ tab === 'All files' ? 'active' : ""}`} onClick={() => setTab('All files')}>All files</span>
          </li>
          <li className="nav-item">
            <span className={`nav-link cursor-pointer ${ tab === 'Shared' ? 'active' : ""}`} onClick={() => setTab('Shared')}>Shared</span>
          </li>
        </ul>
      </div>
  </header>
  )
}

export default DashBoardTopHeader