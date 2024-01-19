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

// App コンポーネント
const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [updTriger, setUpdTriger] = useState(0);

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
  }, [updTriger]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksTable books={books} />} />
        <Route path="/add" element={<Add />} />
        <Route
          path="/edit/:id"
          element={<Edit setUpdTriger={setUpdTriger} />}
        />
        <Route path="/detail/:id" element={<h2>Contact Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
