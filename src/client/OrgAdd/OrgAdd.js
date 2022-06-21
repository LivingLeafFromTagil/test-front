import './OrgAdd.css';
import AddForm from '../AddForm';
import {Link} from 'react-router-dom'

function addItem(msg){
  console.log(msg);
}

function OrgAdd() {
  return (
    <div className="app-body">
      <div className="app-header">
        <h1>Участники</h1>
      </div>
      <div className="app-main">
        <div className="main-refs">
          <Link to="/">Реестр организаций</Link>
          <div>Добавление организации</div>
        </div>
      </div>
      <div className="main-paragraph">
        <p>Добавьте организацию в реестр, введя ее ИНН и название, а затем заполните данные в ее карточке.</p>
      </div>
      <div className="main-search">
        <AddForm onAdd={addItem}/>
      </div>
    </div>
  );
}

 export default OrgAdd;