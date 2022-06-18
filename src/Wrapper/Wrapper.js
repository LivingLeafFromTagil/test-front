import AddForm from '../AddForm';
import ChoiceForm from '../ChoiceForm/ChoiceForm';
import '../OrgList/OrgList.css';

//Компонент формы добавления (основная страница) либо формы выбора (страница карточки)
function Wrapper(props){

  return(
    <div className={props.classes}>
      {props.classes==="modal-wrapper none n1 show"? <AddForm onAdd={(tin, name)=>props.onAdd(tin, name)}/> : 
      <ChoiceForm formTitle={props.formTitle} formHint={props.formHint} onChoice={(name)=>props.onAdd(name)}/>}
    </div>
  );
}

export default Wrapper;