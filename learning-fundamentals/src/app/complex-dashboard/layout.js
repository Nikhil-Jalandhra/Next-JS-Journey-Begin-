import React from 'react';
import register from './@register/page';

function dashboardLayout({children, notifications, revenue, users}) {
  return (
    <div className='h-[75vh]'>
      <div>{children}</div>
      <div>{notifications}</div>
      <div>{revenue}</div>
      <div>{users}</div>
      <div>{register}</div>
    </div>
  );
}

export default dashboardLayout;
