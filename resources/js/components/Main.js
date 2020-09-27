import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import Chats from './Chats';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Chats}/>
      </Switch>
    </main>
  );
}

export default Main;