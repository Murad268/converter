import React, {useState, useEffect} from 'react';
import './converter.css'
import SectionItem from '../SectionItem/SectionItem';
const Converter = ({getData}) => {
   const [currency, setCurrency] = useState({})
   const [result, setResult] = useState("результат")
   const [value, setValue] = useState({
      val: 0,
      cur: ""  
   })
  
   const convert = (e) => {
      e.preventDefault()
         setResult(Math.floor(+value.val * +value.cur) + " RUB")
   }
   useEffect(() => {
      getData('https://www.cbr-xml-daily.ru/daily_json.js').then(res => setCurrency(res))
   }, [])
   return (
      <section className='container converter bg-warning'>
      
            <div className="coverter__body">
                  <form onSubmit={convert} action="" className="form">
                     <div className="form__wrapper">
                        <input value={value.val} onChange={e => setValue(prev => ({...prev, val: e.target.value}))} type="text" />
                        <select onChange={e => setValue(prev => ({...prev, cur: e.target.value}))} name="" id="">
                           <option value="">Валюта</option>
                        {
                           currency.Valute?Object.entries(currency.Valute).map(item => {     
                              return <SectionItem key={item[1].ID} item={item}/>
                           }):null
                     
                        }
                        </select>
                        <div className="result">
                           {result}
                        </div>
                        <button className="form__button">Convert</button>
                     </div>
                  
                  </form>
       
         </div>
      </section>
   );
};

export default Converter;