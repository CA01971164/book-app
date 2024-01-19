import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// Book インターフェース
interface Book {
  ID: number;
  タイトル: string;
  著者: string;
  出版社: string;
  出版年: number;
}

// BooksTable コンポーネント
const BooksTable = ({ books }: { books: Book[] }) => {
  // useNavigateは、トップレベルで宣言する必要がある。
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/about`);
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>題名</th>
            <th>著者</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.ID}>
              <td>{book.タイトル}</td>
              <td>{book.著者}</td>
              <button>編集</button>
              <button>詳細</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleNavigate}>追加</button>
    </div>
  );
};

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
        <Route path="/add" element={<h2>About Page</h2>} />
        <Route path="/" element={<h2>Contact Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
