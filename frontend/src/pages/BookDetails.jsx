import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

export default function BookDetails(){
  const { id } = useParams();
  const [book, setBook] = useState(null);
  useEffect(()=> {
    axios.get(`/books/${id}`).then(r => setBook(r.data)).catch(e=>console.error(e));
  }, [id]);

  if (!book) return <div className="container py-6">Loading...</div>;
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={book.coverImage || '/placeholder.jpg'} alt={book.title} className="w-full md:w-1/3 object-cover rounded" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
          <p className="mt-4">{book.description}</p>
          <p className="mt-4 text-xl font-semibold">₹{book.price}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
