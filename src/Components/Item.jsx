const Item = ({ item, onDeletingItem, onToggleItems }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeletingItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
