import './OrgList.css';
import Search from '../Search';
import OrgTable from '../OrgTable';
import {Link} from 'react-router-dom';
import {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import funn, {postss} from '../orgInfo'
import fetch from 'cross-fetch';


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
      
      return{
        data: newArr,
        shown: "modal-wrapper none n1"
      }
      
    });
    console.log(this.state.data)
  }

  render(){
    this.getData();
    return (
    <div className="app-body">
      <div className="app-header">
        <h1>Участники</h1>
      </div>
      <div className="app-main">
        <div className="main-refs">
          <Link to="/">Реестр организаций</Link>
          <button className="add-func" onClick={this.showForm}>Добавление организации</button>
        </div>
        <div className="main-paragraph">
          <p>Выберите организацию по названию или ИНН для присвоения ей категории, направления в составе УМНОЦ, роли. Далее заполните профиль, выбрав технологические проекты и мероприятия, в которых участвует организация.</p>
        </div>
        <div className="main-search">
          <h2>Поиск</h2>
          <Search/>
          
          </div>

        <div className="main-search" style={{width: 0, height: 0, padding: 0}}>
          <Wrapper classes={this.state.shown} onAdd={this.onAdd}/>
        </div>

          <div className="main-search">
            
          <h2>Всего организаций: {this.state.data.length}</h2>
          <OrgTable orgs={this.state.data}/>
          </div>
      </div>
        
    
    </div>
    
  );
}
}



export default OrgList;
