import React, { useEffect, useState } from 'react'
import { _get } from "../../../../../server"

const tableRowData = [
    {
        T_image: "",
        T_name:'Robert Fox',
        T_date:"Feb 15, 2021",
        text:'Dribbble',
        T_price:'$3.500',
        schedule:'Scheduled'
    },
    {
        T_image: "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Darlene Robertson',
        T_date:"Feb 15, 2021",
        text:'Dribbble',
        T_price:'$3.500',
        schedule:'Postponed'
    },
    {
        T_image: "https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Theresa Webb',
        T_date:" Mar 20, 2021",
        text:'Netguru',
        T_price:'$4.100',
        schedule:'Scheduled'
    },
    {
        T_image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Robert Fox',
        T_date:"Feb 15, 2021",
        text:'Tcs',
        T_price:'$3.500',
        schedule:'Scheduled'
    },
    {
        T_image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        T_name:'Robert Fox',
        T_date:"Feb 15, 2021",
        text:'Wipro',
        T_price:'$3.500',
        schedule:'InProgess'
    },
]

const DashBoardTable = () => {
  const [tableData,setTableData] =useState([])


  const getBlogData= async () => {
    try{
      const {data,status} = await _get("/blog/users")
          if(status){
            setTableData(data)
          }
    }catch(err){
       console.log("Err occured while fetching data")
    }
  }

  useEffect(() => {
      getBlogData()
  },[])
  return (
    <div className="table-responsive" style={{height:'200px'}}>
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Total Blogs</th>
              <th scope="col">Created At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          {
          tableData.map((ele, index) => (
              <tr key={index}>
                <td>
                  <img alt="..." src={"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"} className="avatar avatar-sm rounded-circle me-2" />
                  <span className="text-heading font-semibold">
                    {ele.userName}
                  </span>
                </td>
                <td>
                  {ele.email}
                </td>
                <td>
                  {/* <img alt="..." src={} className="avatar avatar-xs rounded-circle me-2" /> */}
                  <span className="text-heading font-semibold">
                    {ele.name}
                  </span>
                </td>
                <td className='text-center'>
                  {ele.totalBlogs}
                </td>
                <td>
                  <span className="badge badge-lg badge-dot">
                    <i className="bg-success"></i>{ele.createdAt}
                  </span>
                </td>
                <td className="text-end">
                  <span className="btn btn-sm btn-neutral">View</span>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default DashBoardTable