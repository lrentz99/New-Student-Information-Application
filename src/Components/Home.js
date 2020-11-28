import React from 'react';
import FacebookPage from './FacebookAPI.js'
import TwitterPage from './TwitterAPI.js'

export default function Home() {

  var facebookProps = 
  {
    width: "400",
    height: ""
  }

  var twitterProps = 
  {
    width: 400,
    height: 400
  }

  return (
    <div>
      <h1>Home</h1>
      <FacebookPage{...facebookProps}/>
      <TwitterPage{...twitterProps}/>
    </div>
  );
}
