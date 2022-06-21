import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { Context } from ".";
import Content from './client/Content/Content';
import { checkAuth } from "./client/http/userAPI";


export const App = observer(()=>{
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {  
    checkAuth().then(data => {
      console.log(data);
      user.setUser(data);
      user.setIsAuth(true);
    })
  })

  return(
    <Router>
      <Content/>
    </Router>
  )
})