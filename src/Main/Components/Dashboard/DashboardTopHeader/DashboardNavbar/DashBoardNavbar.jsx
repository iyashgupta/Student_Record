import React from 'react'
import { _get } from '../../../../../server'
import { useNavigate } from 'react-router-dom'

const DashBoardNavbar = () => {
   const navigate = useNavigate()
//   const getDashboardData = () => {
//     _get('/dashboard/user').then((res) => {
//       console.log('dashboard data : ',res)
//     }).catch((err) => {
//        console.log('dashboard data : ',err)
//     })
//   }
  return (
    <div className="row align-items-center">
                <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                  {/* Title */}
                  <h1 className="h2 mb-0 ls-tight">Students Records</h1>
                </div>
                {/* Actions  */}
                <div className="col-sm-6 col-12 text-sm-end">
                  <div className="mx-n1">
                    <span className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                      <span className="pe-2">
                        <i className="bi bi-pencil"></i>
                      </span>
                      <span>Edit</span>
                    </span>
                    <span className="btn d-inline-flex btn-sm btn-primary mx-1">
                      <span className="pe-2">
                        <i className="bi bi-plus"></i>
                      </span>
                      <span onClick={() => navigate("/blog/register")}>Create</span>
                    </span>
                  </div>
                </div>
              </div>
  )
}

export default DashBoardNavbar