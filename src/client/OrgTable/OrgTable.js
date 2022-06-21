import '../OrgList/OrgList.css';
import '../OrgElem/OrgElem'
import OrgElem from '../OrgElem/OrgElem';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const OrgTable = observer(() => {
  const {org} = useContext(Context);

  const elements = org.orgs.map((elem)=>{
    return(
      <OrgElem key={elem.id} organ={elem}/>
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
  
  
})

export default OrgTable