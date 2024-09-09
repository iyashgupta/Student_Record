import React from 'react'
import DashboardCards from './DashBoardBodyCards/DashboardCards'
import DashBoardTable from './DashBoardTable/DashBoardTable'

const DashBoardBody = () => {
  return (
    <div className="container-fluid">   
          <DashboardCards />
    <div className="card shadow border-0 mb-7">
      <div className="card-header">
        <h5 className="mb-0">Applications</h5>
      </div>
      {/* Dashboard Table  */}
          <div>
            <DashBoardTable />
          </div>
          {/* DashBoard Footer */}
      <div className="card-footer border-0 py-5 d-flex justify-content-between align-items-center">
        <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>

        <div className="col-sm-6 col-12 text-sm-end">
                  <div className="mx-n1">
                    <span className="btn btn-sm btn-neutral border-base mx-1">
                      <span className="pe-1">
                        <i className="bi bi-arrow-left-short"></i>
                      </span>
                      <span>Prev</span>
                    </span>
                    <span className="btn btn-sm btn-primary mx-1">
                      <span className="pe-1">
                        <i className="bi bi-arrow-right-short"></i>
                      </span>
                      <span>Next</span>
                    </span>
                  </div>
                </div>
      </div>
    </div>
  </div>
  )
}

export default DashBoardBody