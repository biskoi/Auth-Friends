import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Friend} from './Friend';
import styled from 'styled-components';

const Box = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2%;
justify-content: center;
align-items: center;
`;

export const Friends = (props) => {

   const [friends, setFriends] = useState();

   useEffect(() => {
      axiosWithAuth().get('/api/friends')
      .then(res => {
         setFriends(res.data)
      })
      .catch(err => console.log(err));
   }, []);

   console.log('friends data', friends)

   return (
      <>
         <p>friends component</p>
         <Box>
            {friends ? friends.map((item, index) => (
               <Friend friend = {item} key = {index}/>
            )) : 'No data'}
         </Box>
      </>
   )

}