import React from "react"
import '../Main.jsx/Main.css'
import img3 from '../Assert/house1.png'
import img4 from '../Assert/house2.png'
import img5 from '../Assert/house3.png'

const fruits = [
 
    {
      id:1,
      img:img3,
      text: 'Toshkent',

    },
    {
        id:2,
        img:img4,
        text: 'Andijon', 
    },
    {
        id:3,
        img:img5,
        text: 'Fargona',
    },
    {
        id:1,
        img:img3,
        text: 'Sirdaryo',
  
      },
      {
        id:2,
        img:img4,
        text: 'Namangan', 
    },
    {
        id:3,
        img:img5,
        text: 'Samarqand',
    },
    {
        id:1,
        img:img3,
        text: 'Qashqadaryo',
  
      },
      {
        id:2,
        img:img4,
        text: 'Surhondaryo', 
    },  

    {
        id:3,
        img:img5,
        text: 'Buxoro',
    },
    {
        id:1,
        img:img3,
        text: 'Navoi',
  
      },
      {
        id:2,
        img:img4,
        text: 'Xorazm', 
    },
    {
        id:3,
        img:img5,
        text: 'Jizzah',
    },  

]



class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render() { 
      return (
        <div className="CardColor">
           {fruits.map((val,index) => val.text.toLocaleLowerCase().includes(this.props.inputValue.toLocaleLowerCase()) && (
        <div className="hi">
          <img className='sizeFruit' src={val.img} alt="Fruit image"/>
          <p className='textCard'>{val.text}</p>
          <p className="cardText">{val.text2}</p>
          <button className="delBtn">Delete</button>
        </div> 
      ))}
        </div>
      );
    }
}

export default Main