import { useNavigate } from "react-router-dom";
import Book from "../type/Book";

// BooksTable コンポーネント
const BooksTable = ({ books }: { books: Book[] }) => {
  // useNavigateは、トップレベルで宣言する必要がある。
  let navigate = useNavigate();

  const addNavigate = () => {
    navigate(`/add`);
  };

  const editNavigate = (id: string) => {
    navigate(`/edit/${id}`);
  };
  const detailNavigate = (id: string) => {
    navigate(`/detail/${id}`);
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
            <tr key={book.id}>
              <td>{book.タイトル}</td>
              <td>{book.著者}</td>
              <td>
                <button onClick={() => editNavigate(book.id)}>編集</button>
              </td>
              <td>
                <button onClick={() => detailNavigate(book.id)}>詳細</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addNavigate}>追加</button>
    </div>
  );
};

export default BooksTable;
