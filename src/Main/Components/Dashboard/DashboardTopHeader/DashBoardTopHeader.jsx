import React from 'react'
import DashBoardNavbar from './DashboardNavbar/DashBoardNavbar'

const DashBoardTopHeader = () => {
  return (
    <header className="bg-surface-primary border-bottom pt-6">
    <div className="container-fluid">
      <div className="mb-npx">
       <DashBoardNavbar />
        {/* Nav  */}
        <ul className="nav nav-tabs mt-4 overflow-x border-0">
          <li className="nav-item">
            <span className="nav-link active">All files</span>
          </li>
          <li className="nav-item">
            <span className="nav-link font-regular">Shared</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default DashBoardTopHeader