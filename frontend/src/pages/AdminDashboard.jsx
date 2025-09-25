import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard(){
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/admin/books" className="p-4 bg-white rounded shadow">Manage Books</Link>
        <Link to="/admin/prints" className="p-4 bg-white rounded shadow">Printing Batches</Link>
        <Link to="/admin/shipments" className="p-4 bg-white rounded shadow">Shipments</Link>
        <Link to="/admin/orders" className="p-4 bg-white rounded shadow">Orders</Link>
      </div>
    </div>
  );
}
