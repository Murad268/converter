import React, {useState, useEffect} from 'react';
import TableItems from '../TableItems/TableItems';
import './currency.css'
const Currency = ({getData}) => {
   
   const [currency, setCurrency] = useState({})
   
   useEffect(() => {
      getData('https://www.cbr-xml-daily.ru/daily_json.js').then(res => setCurrency(res))
   }, []);
   console.log(new Date(currency.Date).toLocaleDateString())
   return (
      <section className='container currency bg-success'>
         <div className="bg-danger currency__tittle">
         Бюллетень официальных курсов иностранных валют и банковских металлов по отношению к российскому рублю с даты  {new Date(currency.Date).toLocaleDateString()} 
         </div>
         <table className="currency__table">
           <tbody>
            {
               currency.Valute?Object.entries(currency.Valute).map(item => {
              
                  return <TableItems key={item[1].ID} item={item}/>
               }):null
                  
            }
           </tbody>
         </table>
      </section>
   );
};

export default Currency;