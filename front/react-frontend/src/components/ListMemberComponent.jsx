import React, { useEffect, useState } from 'react'
import { useNavigate,  useParams } from 'react-router-dom';
import MemberService from '../services/MemberService';

const ListMemberComponent = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();
  const { memberId } = useParams();
//   const [member, setMember] = useState({
//     id: memberId,
// })

  useEffect(() => {
    MemberService.getMembers()
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  const addMember = () => {
    // Use navigate to redirect to "/add-employee"
    navigate('/add-member');
  };

  const editMember = (id) => {
    // Use navigate to redirect to "/add-employee"
    navigate('/members/'+id);
  };

  const deleteMember = (id) => {
    // Use navigate to redirect to "/add-employee"
    //navigate('/delete-member/{id}');
    MemberService.deleteMemberById(id)
    .then(() => {
      setMembers(members.filter(member => member.id !== id));
    })
      .catch((error) => {
        console.error('Error deleting member:', error.message);
      });
  };

  return (
    <div>
      <h2 className="text-center">Members List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addMember}> Add Employee </button>
      </div>
      <div className="table">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Member First Name </th>
              <th> Member Last Name </th>
              <th> Member Email </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td> {member.firstName}</td>
                <td> {member.lastName}</td>
                <td> {member.email}</td>
                <td> 
                  <button className="btn btn-info" onClick = {() => editMember(member.id)} >Update</button>
                  <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick = {() => deleteMember(member.id)} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListMemberComponent;
