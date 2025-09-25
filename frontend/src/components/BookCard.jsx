import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ book }){
  return (
    <div className="p-4 bg-white rounded shadow">
      <img src={book.coverImage || '/placeholder.jpg'} alt={book.title} className="h-40 w-full object-cover rounded" />
      <h3 className="mt-2 font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.author}</p>
      <p className="mt-2 font-bold">₹{book.price}</p>
      <Link to={`/book/${book._id}`} className="mt-2 inline-block text-blue-600">View</Link>
    </div>
  );
}
