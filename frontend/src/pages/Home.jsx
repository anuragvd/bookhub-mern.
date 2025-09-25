import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import BookCard from '../components/BookCard';

export default function Home(){
  const [books, setBooks] = useState([]);
  useEffect(()=> {
    axios.get('/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-4">BookHub — Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map(b => <BookCard key={b._id} book={b} />)}
      </div>
    </div>
  );
}
