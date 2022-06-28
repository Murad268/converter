import React from 'react';
import './tableItems.css'
const TableItems = ({item}) => {
   return (
      <tr>
         <td>{item[1].CharCode}</td>
         <td>{item[1].Name}</td>
         <td>{item[1].Value} RUB</td>
      </tr>
   );
};

export default TableItems;