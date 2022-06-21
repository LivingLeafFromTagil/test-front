import './OrgList.css';
import Search from '../Search';
import OrgTable from '../OrgTable';
import {Link} from 'react-router-dom';
import {Component, useContext, useState, useEffect} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import funn, {postss} from '../../orgInfo';
import urfu from './urfu.jpg'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { getOrgList, deleteOrg, addOrg } from '../http/orgAPI';


//Страница списка организаций, основная
export const OrgList = observer(() => {
  const {user, org} = useContext(Context);
  const [shown, setShown] = useState('modal-wrapper none n1')

  useEffect(() => {
    getOrgList().then(data => org.setOrganizations(data));
  }, [org.orgs.length]);

  const showForm = () => {
      const newClasses = shown + " show";
      setShown(newClasses);
  }

    const onAdd = async(newOrg) =>{
    setShown("modal-wrapper none n1");
    const newArr = [...org.orgs, newOrg];
    org.setOrganizations(newArr);
    };

  return(
    <>
      <div className='hi' style={{background: `url(${urfu}) center no-repeat`, backgroundSize: 'cover'}}>
          <h1 className='hi1'>Добро пожаловать на сайт "Science-activity organisations"!</h1>
          <h1 className='hi2'>Изучите организации, деятельность которых связана с научной, или добавьте свои с помощью нашей системы!</h1>
        </div>
    
      <div className="app-body" style={{marginBottom: "30px"}}>
        <div className="app-header">
          <h1>Участники</h1>
        </div>
        <div className="app-main">
          <div className="main-refs">
            <Link to="/">Реестр организаций</Link>
            <button className="add-func" onClick={showForm}>Добавление организации</button>
          </div>
          <div className="main-paragraph">
            <p>Выберите организацию по названию или ИНН для присвоения ей категории, направления, роли. Далее заполните профиль, выбрав технологические проекты и мероприятия, в которых участвует организация.</p>
          </div>
          {/* <div className="main-search">
            <h2>Поиск</h2>
            <Search/>
            
            </div> */}

          <div className="main-search" style={{width: 0, height: 0, padding: 0}}>
            <Wrapper classes={shown} onAdd={onAdd}/>
          </div>

            <div className="main-orgs">
              
            <h2>Всего организаций: {org.orgs.length}</h2>
            <OrgTable/>
            </div>
        </div>
          
        <Link className='about' style={{textDecoration: "none", color: "black", background: "lightblue", border: "1px solid lightblue", borderRadius: "3px", padding: "7px"}} to='/about'>Контакты</Link>
      </div>
    </>
  );
})

