import React from 'react';

const Dashboard = () => {
  return (
    <>

    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-4 bg-blue-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Total Categorys</h2>
        <p className="text-6xl">12</p>
      </div>
      <div className="col-span-4 bg-green-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Total Products</h2>
        <p className="text-6xl">80</p>
      </div>
      <div className="col-span-4 bg-yellow-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Total Customers</h2>
        <p className="text-6xl">50</p>
      </div>
     
    </div>
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-3 bg-orange-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Today Orders</h2>
        <p className="text-6xl">12</p>
      </div>
      <div className="col-span-3 bg-purple-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Yesterday Orders</h2>
        <p className="text-6xl">80</p>
      </div>
      <div className="col-span-3 bg-teal-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Last Week Orders</h2>
        <p className="text-6xl">50</p>
      </div>
      <div className="col-span-3 bg-rose-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Last Month Orders</h2>
        <p className="text-6xl">50</p>
      </div>
     
    </div>

    {/* selling */}
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-3 bg-lime-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Total Sale</h2>
        <p className="text-6xl">12</p>
      </div>
      <div className="col-span-3 bg-rose-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Today Sale</h2>
        <p className="text-6xl">80</p>
      </div>
      <div className="col-span-3 bg-slate-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Last Week Sale</h2>
        <p className="text-6xl">50</p>
      </div>
      <div className="col-span-3 bg-amber-500 text-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold">Last Month Sale</h2>
        <p className="text-6xl">50</p>
      </div>
     
    </div>
    </>

  );
};

export default Dashboard;
