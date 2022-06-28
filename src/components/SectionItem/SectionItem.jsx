import React from 'react';
import './sectionItem.css'
const SectionItem = ({item}) => {
   return (
      <option value={item[1].Value}>
         {item[1].CharCode}
      </option>
   );
};

export default SectionItem;