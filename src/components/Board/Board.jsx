import "./Board.css";
import Square from "../Square/Square.jsx";

const Board = ({ squares, click }) => {
  return (
    <div className="board">
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => click(i)} />;
      })}
    </div>
  );
};

export default Board;
