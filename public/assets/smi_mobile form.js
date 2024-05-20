import { Input, Page, setOptions } from '@mobiscroll/react';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

function App() {
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">User Data</div>
        <Input label="First name" placeholder="First Name" />
        <Input label="Last name" placeholder="Last Name" />
        <Input label="User name" placeholder="User Name" />
        <Input label="Company" placeholder="Company Name" />
        <Input label="Email" placeholder="Email Address" />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Phone Number</div>
        <Input label="Home" placeholder="Home" />
        <Input label="Business" placeholder="Business" />
        <Input label="Fax" placeholder="Fax" />
      </div>
    </Page>
  );
}

export default App;


// image upload
// file upload



// description1
import React from 'react';

const DescriptionField = (props) => {
  const { value, onChange } = props;

  return (
    <textarea
      className="description-field"
      value={value}
      onChange={onChange}
      placeholder="Enter a description..."
    />
  );
};

export default DescriptionField;

//desc_component

import React, { useState } from 'react';
import DescriptionField from './DescriptionField';

const Form = () => {
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form>
      <DescriptionField value={description} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;


// calculator1

npx create-react-app react-form-calculator

import React from 'react';
import './App.css';

function App() {
  return(
      <div className="App">          
     </div>
  )
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-title">
        <h1>Detailed Cost Savings</h1>
      </div>
      <form>
            <input type="text" id="result" readOnly />   
            <input type="text" id="num" placeholder="enter a number" />
            <button>Add</button>
            <button>Clear</button>
      </form>
    </div>
  );
}
export default App;


// use state variables

import React,{useState} from 'react';


    const [currentSum,setCurrentSum]=useState(0);
    const [clear,setClear]=useState(false);



// ADD function


const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";

}



// CLEAR function

 const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }



  // file to test:

  import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>
            <input type="text" id="result" value={currentSum}  readOnly />   
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Add</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;


// SUBMIT button color change when form is complete

import { useState } from "react";
function ComponentOne() {
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);
    const descriptionHandler = () => {
        setDescription(true);
        setReviews(false);
    };
    const reviewsHandler = () => {
        setDescription(false);
        setReviews(true);
    };
    return (
        <div>
            <button onClick={descriptionHandler}>
                Descriptions
            </button>
            <button onClick={reviewsHandler}>
                Reviews
            </button>
            <div className="container">
                {description && (
                    <div>
                        <p>
                            This is a <b> descriptive </b>
                            component
                        </p>
                        <h3>Descriptions:</h3>
                    </div>
                )}
                {reviews && (
                    <div>
                        <p>
                            This is a <b> Review </b>
                            component
                            <br />
                        </p>
                        <h3>Reviews:</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default ComponentOne;



// change field color when value is entered

input:not([value = ""]){
  border-color: green;
//  color: white;
}


// needs testing

<script>
    function checkFilled()  {
        var interests = document.getElementsByClassName("form-interests-input-field");
        for (var i = 0; i<interests.length; i++)  {
            if (interests[i].value == '')  {
                interests[i].style.backgroundColor = 'red';
            } else {
                interests[i].style.backgroundColor = 'green';
            }   
        }
    }
</script>

<form>
    <div id="buddy-form-group">

          <input type="text"
             class="form-control form-input-field form-interests-input-field" 
             name="interests" 
             onkeyup="checkFilled()">

     </div>

     <br/><br/>
     <button class="btn btn-success" onclick="checkFilled()" type="button">Send</button>
</form>