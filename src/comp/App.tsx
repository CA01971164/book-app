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
import Add from "./Add";
import Edit from "./Edit";
import Detail from "./Detail";

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
        <Route path="/add" element={<Add fetchBooks={fetchBooks} />} />
        <Route path="/edit/:id" element={<Edit fetchBooks={fetchBooks} />} />
        <Route
          path="/detail/:id"
          element={<Detail fetchBooks={fetchBooks} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
