import './OrgList.css';
import Search from '../Search';
import OrgTable from '../OrgTable';
import {Link} from 'react-router-dom';
import {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import funn, {postss} from '../orgInfo';
import urfu from './urfu.jpg'

//Страница списка организаций, основная
class OrgList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      shown: "modal-wrapper none n1"
    }
    this.showForm = this.showForm.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData(){
    const ver2 = await funn();
    this.setState(()=>{
      return{
        data: ver2.mas
      }
    })
  }
  

  showForm(){
    this.setState(() => {
      const newClasses = this.state.shown + " show"
      return{
        shown: newClasses
      }
    })
  }

  async onAdd(tin, name){
    const newOrg = {
      name,
      tin,
      leader: "",
      category: "",
      region: "",
      key: 4
    }; 
    this.setState(()=>{
      const newArr = [...this.state.data, newOrg];
      console.log(newArr);
      postss(newArr);
      return{
        data: newArr,
        shown: "modal-wrapper none n1"
      }
      
    });
    console.log(this.state.data)
  }

  render(){
    if (this.state.data.length <= 0) this.getData();
    return (
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
            <button className="add-func" onClick={this.showForm}>Добавление организации</button>
          </div>
          <div className="main-paragraph">
            <p>Выберите организацию по названию или ИНН для присвоения ей категории, направления, роли. Далее заполните профиль, выбрав технологические проекты и мероприятия, в которых участвует организация.</p>
          </div>
          <div className="main-search">
            <h2>Поиск</h2>
            <Search/>
            
            </div>

          <div className="main-search" style={{width: 0, height: 0, padding: 0}}>
            <Wrapper classes={this.state.shown} onAdd={this.onAdd}/>
          </div>

            <div className="main-orgs">
              
            <h2>Всего организаций: {this.state.data.length}</h2>
            <OrgTable orgs={this.state.data}/>
            </div>
        </div>
          
        <a class="about" style={{textDecoration: "none", color: "black", background: "lightblue", border: "1px solid lightblue", borderRadius: "3px", padding: "7px"}} href='/about'>Контакты</a>
      </div>
    </>
  );
}
}



export default OrgList;
