import React from 'react'
import { ImageComponents } from './components/image/imgcomponents';
import { fakeData } from './components/diffProducts/diffproducts';
import { Heading1 } from './components/heading/heading';
import { Heading2 } from './components/heading/heading';
import { Buttonstyle } from './components/button/button';
import Orderlist from './components/list/orderList';
import ButtonComponentClass from './components/class-components/button';
import TodoComponentClass from './components/class-components/todo/todo';
import ProductListing from './components/class-components/productListing/products';
import Form from './components/forms/controlled_forms/form';

function App() {
  return (
    /*{<div>
      {
      fakeData.map((eachProduct)=>{
          return(
            <>
            <Heading1 title={eachProduct.title}/>
            <Heading2 dis={eachProduct.description}/>
            <ImageComponents src={eachProduct.image}/>
            <Buttonstyle bgColor="red" height={50} width={100} text={`$ ${eachProduct.price}`} onPress={()=>{}}/>
            <Orderlist list={["apple", "banana" ,"mango", "pineapple"]}/> 
            <Orderlist list={["apple", "banana" ,"mango", "pineapple"]}/>  
            
            </>
          );
      })  
      }  
    </div>}*/

   /*{ <>
    <ButtonComponentClass/>
    </> }*/

    /* {<>
    <TodoComponentClass/>
    </>} */



    // <ProductListing/>
    <>
      <Form/>
    </>
  )
}

export default App
