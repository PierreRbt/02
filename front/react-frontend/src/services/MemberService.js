import axios from 'axios';

const MEMBER_API_BASE_URL = "http://localhost:8080/api/v1/members";

class MemberService{

    getMembers(){
        return axios.get(MEMBER_API_BASE_URL);
    }

    createMember(member){
        return axios.post(MEMBER_API_BASE_URL, member);
    }
    getMemberById(memberId){
        return axios.get(MEMBER_API_BASE_URL + '/' + memberId)
    }

    updateMember(memberId, member){
        return axios.put(MEMBER_API_BASE_URL + '/' + memberId, member);
    }
    deleteMemberById(memberId){
        return axios.delete(MEMBER_API_BASE_URL + '/' + memberId)
    }
}

export default new MemberService()