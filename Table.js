import React, { useState } from 'react';

const DynamicTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 },
  ]);

  const calculateTotal = () => {
    return data.reduce((total, item) => total + item.value, 0);
  };

  const handleValueChange = (id, newValue) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => handleValueChange(item.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td>{calculateTotal()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DynamicTable;
