
import React, { useState } from 'react';
import Success from '../Success.png'
import Error from '../Error.png'
import { Router as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history'; // you need to install this package
import Button from '../styleComponents/Button'
let history = createBrowserHistory();




type FeedbackProps = {
  Message?: string,
  IsSuccessfullProp ?: boolean 
  
}

function Feedback (props: FeedbackProps) {
  
  const [errorMessage, setErrorMessage] = useState("Ops, Something Went Wrong");
  const [successMessage, setSuccessMessage] = useState( "The operation has been performed successfully");

 

 
   if(props.IsSuccessfullProp ){
      return (
          <div>
         <img src={Success} alt={successMessage} />;
       <h3> {successMessage}  </h3>
              <Router history={createBrowserHistory()}>
                <Button onClick={history.goBack}> Go Back </Button>
              </Router>
       </div>
      );
        }
        else{
            return (
                <div>
                <img src={Error} alt={errorMessage}  />;
                <h3> {errorMessage} </h3>
                <Router history={createBrowserHistory()}>
                <Button onClick={history.goBack}> Go Back </Button>
                </Router>
                </div>
               );
        }

  }




export default Feedback;