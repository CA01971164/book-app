import axios from "axios";
import React, { useEffect, useState } from "react";

interface Book {
  ID: number;
  タイトル: string;
  著者: string;
  出版社: string;
  出版年: number;
}

function App() {
  // jsonデータを格納する
  const [books, setBooks] = useState<Book[]>([]);

  // jsonデータを取得する関数の定義
  const fetchBooks = async () => {
    try {
      const response = axios.get(`http://localhost:3001/books`);
      setBooks((await response).data);
    } catch (error) {
      console.error("データの取得中にエラーが発生しましたい", error);
    }
  };

  // コンポーネントがマウントされたときにjsonデータを取得する
  useEffect(() => {
    fetchBooks();
  }, []);

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
          {books.map((books) => (
            <tr key={books.ID}>
              <th>{books.タイトル}</th>
              <th>{books.著者}</th>
              <button>編集</button>
              <button>詳細</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button>追加</button>
    </div>
  );
}

export default App;
