import axios from 'axios';
import MemberApi from './member';

jest.mock('axios');

describe('MemberApi', () => {
  describe('createMember', () => {
    it('calls api to create a member', async () => {
      const member = {};
      await MemberApi.createMember(member);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/members', member);
    });

    it('throws error if api call fails', async () => {
      axios.post.mockRejectedValue(new Error());
      await expect(MemberApi.createMember({})).rejects.toThrow(Error);
    });
  });

  describe('get', () => {
    it('calls api to retrieve all members', async () => {
      axios.get.mockResolvedValue({ data: {} });
      await MemberApi.getMembers();
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/members');
    });

    it('throws error if api call fails', async () => {
      axios.get.mockRejectedValue(new Error());
      await expect(MemberApi.getMembers()).rejects.toThrow(Error);
    });
  });
});
