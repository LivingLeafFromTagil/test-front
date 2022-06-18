import '../OrgList/OrgList.css';
import {Component} from 'react';

class ChoiceForm extends Component{
  constructor(props){
    super(props);
    this.state={
      name: "",
    };
    this.onNameChange=this.onNameChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.noDigits=this.noDigits.bind(this);
  }

  onNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onChoice(this.state.name);
    this.setState({
      name: ""
    });
  }

  noDigits(e) {
    if ("1234567890".indexOf(e.key) != -1)
      e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.onSubmit} className="add-form">
        <h2>{this.props.formTitle}</h2>
        <input onKeyPress={this.noDigits} onChange={this.onNameChange} type='text' required className="add-name" placeholder={this.props.formHint} value={this.state.name}></input>
        <button type="submit" className="add-button">Добавить</button>
      </form>
    );
  }

}

export default ChoiceForm;