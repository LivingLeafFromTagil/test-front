import '../OrgList/OrgList.css';
import {Component, useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { deleteOrg, getOrgList } from '../http/orgAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const OrgElem = observer((props) => {
  const {org} = useContext(Context);
  const history = useNavigate();
  return(
    <tr className="org-table-elem" key={props.organ.id}>
      <td className="elem-name">
        <Link 
          to={'/OrgCard/'+props.organ.id}
          onClick={()=>{
          history('/OrgCard/'+props.organ.id)
        }}>
          {props.organ.name}
          <p>{props.organ.tin}</p>
        </Link>
      </td>
      <td className="elem-leader">{props.organ.leader}<p className="elem-space">&nbsp;</p></td>
      <td className="elem-category">{props.organ.category}<p className="elem-space">&nbsp;</p></td>
      <td className="elem-region">{props.organ.region}<p className="elem-space">&nbsp;</p></td>
      <td onClick={()=>{deleteOrg(props.organ.id).then(()=>getOrgList().then((data)=>org.setOrganizations(data)))}} style={{width: "10px", cursor: 'pointer'}}>X</td>
    </tr>
  );
})
// class OrgElem extends Component{
//   render(){
//     return(
//       <tr className="org-table-elem">
//         <td className="elem-name">
//           <Link to={`/OrgCard`}>
//             {this.props.name}
//             <p>{this.props.tin}</p>
//           </Link>
//         </td>
//         <td className="elem-leader">{this.props.leader}<p className="elem-space">&nbsp;</p></td>
//         <td className="elem-category">{this.props.category}<p className="elem-space">&nbsp;</p></td>
//         <td className="elem-region">{this.props.region}<p className="elem-space">&nbsp;</p></td>
//       </tr>
//     );
//   }
// }

export default OrgElem;