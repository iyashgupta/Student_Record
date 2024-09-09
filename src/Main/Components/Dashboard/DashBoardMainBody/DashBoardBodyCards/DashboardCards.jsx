import React from 'react'

const initialData = [ 
    {
   name:'New projects',
   price:'215',
   percent : "30%",
   active:'Since last month',
   icon:"bi bi-arrow-up me-1"
},
    {
   name:'Total hours',
   price:'1.400',
   percent : "30%",
   active:'Since last month',
   icon:"bi bi-arrow-down me-1"
},
    {
   name:'New projects',
   price:'215',
   percent : "30%",
   active:'Since last month',
   icon:"bi bi-arrow-up me-1"
},
    {
   name:'New projects',
   price:'215',
   percent : "30%",
   active:'Since last month',
   icon:"bi bi-arrow-up me-1"
},

]

const DashboardCards = () => {
  return (
    <div className="row g-6 mb-6">

  {
    initialData.map(({name,price,icon,percent,active}) => 
        <div className="col-xl-3 col-sm-12 col-12">
    <div className="card shadow border-0">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span className="h6 font-semibold text-muted text-sm d-block mb-2">{name}</span>
            <span className="h3 font-bold mb-0">{price}</span>
          </div>
          <div className="col-auto">
            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
              <i className="bi bi-people"></i>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-0 text-sm">
          <span className="badge badge-pill bg-soft-success text-success me-2">
            <i className={icon}></i>{percent}
          </span>
          <span className="text-nowrap text-xs text-muted">{active}</span>
        </div>
      </div>
    </div>
  </div>
    )
  }
  


  </div>

  )
}

export default DashboardCards