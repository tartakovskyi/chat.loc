import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from './Chat';
import Chats from './Chats';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/chat/:id' component={Chat}/>
        <Route path='/' component={Chats}/>
      </Switch>
    </main>
  );
}

export default Main;