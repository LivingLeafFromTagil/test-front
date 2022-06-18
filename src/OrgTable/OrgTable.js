import '../OrgList/OrgList.css';
import '../OrgElem/OrgElem'
import OrgElem from '../OrgElem/OrgElem';

function OrgTable(props){

  const elements = props.orgs.map((elem)=>{
    return(
      <OrgElem {...elem}/>
    );
  })

      return(
        <table className="org-table">
          <thead>
            <tr className="org-table-header">
              <td>Название организации/ИНН</td>
              <td>Ответственный от организации</td>
              <td>Категория</td>
              <td>Субъект РФ</td>
            </tr>
          </thead>
          <tbody>
            {elements}
          </tbody>
        </table>
      );
  
  
}

export default OrgTable