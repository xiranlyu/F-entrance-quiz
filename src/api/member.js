import axios from 'axios';

const MemberApi = {
  createMember: async (member) => {
    await axios.post(`http://localhost:8080/members`, member);
  },

  getMembers: async () => {
    const response = await axios.get(`http://localhost:8080/members`);
    return response.data.members;
  },
};

export default MemberApi;
