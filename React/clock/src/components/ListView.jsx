import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ListView = () => {
  const items = ["Eggs", "Chicken", "Bread", "Milk", "Vegetables"];
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListView;
