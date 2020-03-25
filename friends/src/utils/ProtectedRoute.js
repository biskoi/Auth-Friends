import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => {

   return (
      <Route
      
         {...rest}
         render = {props => {
            if (localStorage.getItem('token')) {
               return <Component {...props}/>
            } else {
               return <Redirect to = '/'/>
            }
         }}

      />
   );

};

// rest operator does this:
const someObj = {
   prop1: 'a',
   prop2: 'b',
   prop3: 'c',
   prop4: 'd',
   prop5: 'e'
 };
 
 // destructure someObj to pull out prop2
 // use the ...rest operator to keep the other properties in a new object
 const { prop2, ...rest } = someObj; // rest is a banana term 🍌
 console.log(someObj); // ==> original obj with all properties
 console.log(rest); // ==> original obj with all properties except prop2
 console.log(prop2); // ==> 'b'

