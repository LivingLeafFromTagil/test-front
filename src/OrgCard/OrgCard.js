import '../OrgList/OrgList.css';
import {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';

//Страница карточки организации
const leader="Выбрать ответственного",
      admin="Выбрать администратора",
      region="Выбрать субъект",
      category="Выбрать категорию";

export default class OrgCard extends Component{
  constructor(props){
    super(props);
    this.state={
      shown: "modal-wrapper none",
      title: "",
      hint: "", 
      t1: "",
      t2: "",
      t3: "",
      t4: ""
    }
    this.onChoice = this.onChoice.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showForm(e){
    this.setState(() => {
      const newClasses = this.state.shown + " show"
      switch(e.target.innerText){
        case leader:
          return{
            shown: newClasses,
            title: leader,
            hint: "Введите ФИО"
          };
        case admin:
          return{
            shown: newClasses,
            title: admin,
            hint: "Введите ФИО"
          };
        case region:
          return{
            shown: newClasses,
            title: region,
            hint: "Введите название субъекта РФ"
          };
        case category:
          return{
            shown: newClasses,
            title: category,
            hint: "Введите категорию"
          };
        default:
          console.dir(e.target);
      }
      // return{
      //   shown: newClasses,
      //   title: "",
      //   hint: ""
      // }
    })
  }

  onChoice(name){
    this.setState(()=>{
      switch(this.state.title){
        case leader:
          return{
            t1: name,
            shown: "modal-wrapper none"
          };
        case admin:
          return{
            t2: name,
            shown: "modal-wrapper none"
          };
        case region:
          return{
            t3: name,
            shown: "modal-wrapper none"
          };
        case category:
          return{
            t4: name,
            shown: "modal-wrapper none"
          };
        default:
          console.log(-1);
      }
      
    })
  }

  render(){
    return(
      <div className="app-body">
        <div className="app-main">
          <div className="main-search">
            <Wrapper classes={this.state.shown} onAdd={this.onChoice} formTitle={this.state.title} formHint={this.state.hint}/>
            <h1>Название организации: </h1>
            <h1>ИНН: </h1>
            <div className="main-paragraph main-paragraph-card">
              <p>Ответственный от организации: <p>{this.state.t1}</p></p>
              <button className="add-button" onClick={this.showForm}>Выбрать ответственного</button>
            </div>
            <hr/>
            <div className="main-paragraph main-paragraph-card">
              <p>Администратор: {this.state.t2}</p>
              <button className="add-button" onClick={this.showForm}>Выбрать администратора</button>
            </div>
            <div className="main-paragraph main-paragraph-card">
              <p>Субъект РФ: {this.state.t3}</p>
              <button className="add-button" onClick={this.showForm}>Выбрать субъект</button>
            </div>
            <div className="main-paragraph main-paragraph-card">
              <p>Категория: {this.state.t4}</p>
              <button className="add-button" onClick={this.showForm}>Выбрать категорию</button>
            </div>
          </div>
          <div style={{marginTop: '20px'}}>
            <a href='/' className='about'>На главную</a>
          </div>
        </div>
      </div>
    );
  }
}