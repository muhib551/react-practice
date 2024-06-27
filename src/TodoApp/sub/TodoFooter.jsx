import React from "react";

const TodoFooter = ({ items }) => {
  if (!items.length)
    return (
      <p className="todo-footer">Start adding items to your packing list🚀</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100)

  return (
    <div className="todo-footer">
      <p>{percentage === 100 ? "You got everything! ready to go🛫" :`
        💼 You have ${numItems} items on your list, and you already packed ${numPacked} items, (${percentage}%)`}
      </p>
    </div>
  );
};

export default TodoFooter;
