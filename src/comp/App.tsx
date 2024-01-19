import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Book from "../type/Book";
import BooksTable from "./BooksTable";

// App コンポーネント
const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/books`);
      setBooks(response.data);
    } catch (error) {
      console.error("データの取得中にエラーが発生しました", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksTable books={books} />} />
        <Route path="/add" element={<h2>Contact Page</h2>} />
        <Route path="/edit" element={<h2>Contact Page</h2>} />
        <Route path="/detail" element={<h2>Contact Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
