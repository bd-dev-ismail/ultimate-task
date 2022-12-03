import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.png';
const AttendenceInfo = () => {
    const info = [

      {
        date: "11/07/16",
        name: "Arlene McCoy",
        status: "Present"
      },
      {
        date: "02/11/12",
        name: "Eleanor Pena",
        status: "Present"
      },
      {
        date: "04/21/12",
        name: "Wade Warren",
        status: "Absent"
      },
      {
        date: "08/15/17",
        name: "Jacob Jones",
        status: "Absent"
      },
      {
        date: "06/19/14",
        name: "Darlene Robertson",
        status: "Present"
      },
      {
        date: "06/21/19",
        name: "Floyd Miles",
        status: "Absent"
      },
      {
        date: "05/19/12",
        name: "Ralph Edwards",
        status: "Present"
      },
      {
        date: "05/07/16",
        name: "Leslie",
        status: "Present"
      },
    ];
    //based on coming data
    const [userInfo, setUserInfo] = useState([]);
    useEffect(()=> {
        fetch("https://test.nexisltd.com/test", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUserInfo(data);
          })
          .catch((err) => console.err(err));
    },[])
    return (
      <div className="container mx-auto">
        <img src={logo} alt="" className='mt-12'/>
        <div className="flex justify-center items-center mt-10">
          <p className=" text-center text-white rounded flex justify-center items-center font-semibold text-3xl h-20 lg:w-480 w-96 bg-primary">
            Attendence Information
          </p>
        </div>
        <div className="mt-24 container mx-auto">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="bg-white "></th>
                  <th className="bg-white ">Date</th>
                  <th className="bg-white">Employee Name</th>
                  <th className="bg-white">Status</th>
                </tr>
              </thead>
              <tbody className='text-black'>
                {/* The Attendence Information Coming For Database ! Now The access token is some misbehaveing that's why I render some fake data */}
                {info?.map((info, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{info?.date}</td>
                    <td>{info?.name}</td>
                    <td>{info?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AttendenceInfo;