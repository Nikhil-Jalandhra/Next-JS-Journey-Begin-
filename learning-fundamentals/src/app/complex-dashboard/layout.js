"use client"
import React, { useState, useEffect } from 'react';

function dashboardLayout({children, notifications, revenue, users, register}) {

  const [userRegister, setUserRegister] = useState();
  
  useEffect(() => {
    const setTrueFalse = Math.floor(Math.random() * 2);
    console.log(setTrueFalse);
    setUserRegister(setTrueFalse === 1);
  }, []);
  
  return (
    userRegister ? (
      <div className='h-[75vh]'>
      <div>{children}</div>
      <div>{notifications}</div>
      <div>{revenue}</div>
      <div>{users}</div>
    </div>
    ) : (
      <div>{register}</div>
    )
  );
}

export default dashboardLayout;
