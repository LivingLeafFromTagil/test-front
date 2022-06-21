import { Component, useContext, useEffect, useState } from 'react';
import '../OrgList/OrgList.css';
import { observer } from 'mobx-react-lite';
import { addOrg, getOrgList } from '../http/orgAPI';
import { Context } from '../..';

//Компонент-форма для добавления организаций
export const AddForm = observer((props)=>{
  const {org} = useContext(Context);
  const [name, setName] = useState('');
  const [tin, setTin] = useState(0);
  const [info, setInfo] = useState('');

  const onSubmit = (e) =>{
    e.preventDefault();
    props.onAdd({...props.newOrg, name, tin, info});
  }

  return(
    <div className="add-form" >
      <h2>Название организации</h2>
      <input name="n" type='text' required onChange={(e) => setName(e.target.value)} value={name} className="add-name" placeholder="Введите название"></input>
      <h2>ИНН организации</h2>
      <input name="t" type='number' required onChange={(e) => setTin(e.target.value)} value={tin} className="add-tin" placeholder="Введите ИНН"></input>
      <h2>Информация</h2>
      <input name="i" type='text' required onChange={(e) => setInfo(e.target.value)} value={info} className="add-name" placeholder="Краткая информация"></input>
      <button className="add-button" onClick={(e) => {onSubmit(e); addOrg({...props.newOrg, name, tin, info}).then(()=>getOrgList().then((data)=>org.setOrganizations(data))) }}>Добавить</button>
    </div>
  );
})

// class AddForm extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       name: "",
//       tin: ""
//     };
//     this.onNameChange=this.onNameChange.bind(this);
//     this.onTinChange=this.onTinChange.bind(this);
//     this.onSubmit=this.onSubmit.bind(this);
//   }

//   onNameChange(e){
//     this.setState({
//       name: e.target.value
//     })
//   }

//   onTinChange(e){
//     this.setState({
//       tin: e.target.value
//     })
//   }

//   onSubmit(e){
//     e.preventDefault();
//     this.props.onAdd(this.state.tin, this.state.name);
//   }

//   render(){
//     return(
//       <form action="http://localhost:5000/api/org/newOrg" onSubmit={this.onSubmit} className="add-form" method="post">
//         <h2>Название организации</h2>
//         <input name="n" type='text' required onChange={this.onNameChange} className="add-name" placeholder="Введите название"></input>
//         <h2>ИНН организации</h2>
//         <input name="t" type='number' required onChange={this.onTinChange} className="add-tin" placeholder="Введите ИНН"></input>
//         <button type="submit" className="add-button">Добавить</button>
//       </form>
//     );
//   }
// }

// fetch("http://localhost:8080/orgs", {
//         method: "POST",
//         body: JSON.stringify(sendArr),
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*"
//         }
//       })
