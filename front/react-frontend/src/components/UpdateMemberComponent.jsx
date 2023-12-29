import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MemberService from '../services/MemberService';

const UpdateMemberComponent = () => {
  const navigate = useNavigate();
  const { memberId } = useParams();
  console.log('Member ID:', memberId);
  const [member, setMember] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (memberId) {
      MemberService.getMemberById(memberId)
        .then((response) => {
          setMember(response.data);
        })
        .catch((error) => {
          console.error('Error fetching member data:', error.message);
        });
    }
  }, [memberId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const updateMember = async (e) => {
    e.preventDefault();

    if (!member.id) {
        console.error('Invalid member ID : '+ member.id);
        return;
    }

    console.log("Updating member:", member);
    try {
        await MemberService.updateMember(member.id, member);
        navigate('/members');
    } catch (error) {
        console.error('Error updating member:', error.message);
    }
};

  return (
    <div>
      <h2 className="text-center">Update Member</h2>
      <form onSubmit={updateMember}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={member.firstName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={member.lastName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={member.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateMemberComponent;
