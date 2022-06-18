import { Component } from 'react';
import '../OrgList/OrgList.css';

//Компонент-форма для добавления организаций
class AddForm extends Component{
  constructor(props){
    super(props);
    this.state={
      name: "",
      tin: ""
    };
    this.onNameChange=this.onNameChange.bind(this);
    this.onTinChange=this.onTinChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  onTinChange(e){
    this.setState({
      tin: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.tin, this.state.name);
  }

  render(){
    return(
      <form action="http://localhost:8080/orgs" onSubmit={this.onSubmit} className="add-form" method="post">
        <h2>Название организации</h2>
        <input name="n" type='text' required onChange={this.onNameChange} className="add-name" placeholder="Введите название"></input>
        <h2>ИНН организации</h2>
        <input name="t" type='number' required onChange={this.onTinChange} className="add-tin" placeholder="Введите ИНН"></input>
        <button type="submit" className="add-button">Добавить</button>
      </form>
    );
  }
}

// fetch("http://localhost:8080/orgs", {
//         method: "POST",
//         body: JSON.stringify(sendArr),
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*"
//         }
//       })

export default AddForm;