import '../OrgList/OrgList.css';
import {Component, useContext} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { Context } from '../..';

//Страница карточки организации
const leader="Выбрать ответственного",
      admin="Выбрать администратора",
      region="Выбрать субъект",
      category="Выбрать категорию";

export const OrgCard = () => {
  const orgId = parseInt(window.location.href.match(/OrgCard\/([0-9]{1,})/)[1]);
  console.log(orgId);
  const {org} = useContext(Context);
  console.log(org.orgs[0].id);
  //нестрогое сравнение нужно для приведения типов
  const first = org.orgs.filter((o) => o.id == orgId)[0];
  console.log(first);

      return(
      <div className="app-body">
        <div className="app-main">
          <div className="main-search">
            <Wrapper classes={'modal-wrapper none'} onAdd={()=>{}} formTitle={'this.state.title'} formHint={'this.state.hint'}/>
            <h1>Название организации: {first.name}</h1>
            <h1>ИНН: {first.tin}</h1>
            <div className="main-paragraph main-paragraph-card">
              <p>Ответственный от организации: <p>{'this.state.t1'}</p></p>
              <button className="add-button" onClick={()=>{}}>Выбрать ответственного</button>
            </div>
            <hr/>
            <div className="main-paragraph main-paragraph-card">
              <p>Администратор: {'this.state.t2'}</p>
              <button className="add-button" onClick={()=>{}}>Выбрать администратора</button>
            </div>
            <div className="main-paragraph main-paragraph-card">
              <p>Субъект РФ: {'this.state.t3'}</p>
              <button className="add-button" onClick={()=>{}}>Выбрать субъект</button>
            </div>
            <div className="main-paragraph main-paragraph-card">
              <p>Категория: {'this.state.t4'}</p>
              <button className="add-button" onClick={()=>{}}>Выбрать категорию</button>
            </div>
            <div className="main-paragraph main-paragraph-card">
              <p>Информация: {first.info}</p>
            </div>
          </div>
          <div style={{marginTop: '20px'}}>
            <Link to='/' className='about'>На главную</Link>
          </div>
        </div>
      </div>
    );
}
