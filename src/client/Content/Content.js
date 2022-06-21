import {Route, Routes, useNavigate} from 'react-router-dom'
import OrgAdd from '../OrgAdd'
import {OrgList} from '../OrgList/OrgList'
import {OrgCard} from '../OrgCard/OrgCard'
import About from '../About/About'
import Auth from '../Auth'
import { useContext, useEffect } from 'react'
import { Context } from '../..'
import { observer } from 'mobx-react-lite';


//Компонент, отображающий нужную страницу в зависимости от адреса
const Content = observer(() => {
  const navigate = useNavigate();
  const {user} = useContext(Context);
  console.log(user);
  console.log(process);

  const logout = () => {
    user.setIsAuth(false);
    user.setUser({});
    localStorage.removeItem('token');
    console.log(user);
  }

  return(
    <>
      <div>
      {user.isAuth &&
        <button className='about' 
              style={{textDecoration: "none", color: "black", background: "lightblue", border: "1px solid lightblue", borderRadius: "3px", padding: "7px"}} 
              onClick={() => logout()}>
                Выйти
        </button>}
        {console.log(user)}
      {!user.isAuth &&
        <button className='about'
                style={{textDecoration: "none", color: "black", background: "lightblue", border: "1px solid lightblue", borderRadius: "3px", padding: "7px"}} 
                onClick={() => {
                  console.log('pressed');
                  navigate('/login')}}>
                  Авторизоваться
        </button>}
      </div>
      <Routes>
        {user.isAuth && (<Route path="/OrgAdd" element={<OrgAdd/>}/>)}
        {user.isAuth && (<Route path="/" element={<OrgList/>}/>)}
        {user.isAuth && (<Route path="/OrgCard" element={<OrgCard/>}/>)}
        {user.isAuth && (<Route path="/OrgCard/:id" element={<OrgCard/>}/>)}
        {user.isAuth && (<Route path="/about" element={<About/>}/>)}
        {!user.isAuth && (<Route path="/login" element={<Auth/>}/>)}
        <Route path="/registration" element={<Auth/>}/>
        {user.isAuth && (<Route path='*' element={<h1 style={{fontSize:'32px', margin: '7px'}}>404: Page does not exist</h1>}/>)}
      </Routes>
    </>
  )
})

export default Content