import React from 'react'

const tableRowData = [
    {
        T_image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Robert Fox',
        T_date:"Feb 15, 2021",
        logoImage:"https://preview.webpixels.io/web/img/other/logos/logo-1.png",
        text:'Dribbble',
        T_price:'$3.500',
        schedule:'Scheduled'
    },
    {
        T_image: "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Darlene Robertson',
        T_date:"Feb 15, 2021",
        logoImage:"https://preview.webpixels.io/web/img/other/logos/logo-2.png",
        text:'Dribbble',
        T_price:'$3.500',
        schedule:'Postponed'
    },
    {
        T_image: "https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Theresa Webb',
        T_date:" Mar 20, 2021",
        logoImage:"https://preview.webpixels.io/web/img/other/logos/logo-3.png",
        text:'Netguru',
        T_price:'$4.100',
        schedule:'Scheduled'
    },
    {
        T_image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Robert Fox',
        T_date:"Feb 15, 2021",
        logoImage:"https://preview.webpixels.io/web/img/other/logos/logo-4.png",
        text:'Tcs',
        T_price:'$3.500',
        schedule:'Scheduled'
    },
    {
        T_image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Robert Fox',
        T_date:"Feb 15, 2021",
        logoImage:"https://preview.webpixels.io/web/img/other/logos/logo-5.png",
        text:'Wipro',
        T_price:'$3.500',
        schedule:'InProgess'
    },
]

const DashBoardTable = () => {
  return (
    <div className="table-responsive" style={{height:'187px'}}>
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Company</th>
              <th scope="col">Offer</th>
              <th scope="col">Meeting</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          {
          tableRowData.map((ele, index) => (
              <tr key={index}>
                <td>
                  <img alt="..." src={ele.T_image} className="avatar avatar-sm rounded-circle me-2" />
                  <span className="text-heading font-semibold">
                    {ele.T_name}
                  </span>
                </td>
                <td>
                  {ele.T_date}
                </td>
                <td>
                  <img alt="..." src={ele.logoImage} className="avatar avatar-xs rounded-circle me-2" />
                  <span className="text-heading font-semibold">
                    {ele.text}
                  </span>
                </td>
                <td>
                  {ele.T_price}
                </td>
                <td>
                  <span className="badge badge-lg badge-dot">
                    <i className="bg-success"></i>{ele.schedule}
                  </span>
                </td>
                <td className="text-end">
                  <span className="btn btn-sm btn-neutral">View</span>
                  <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default DashBoardTable