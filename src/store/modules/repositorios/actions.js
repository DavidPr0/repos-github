import axios from 'axios';
import { ACTION, ACTION_REPOS } from "@/configs/api";

export default {
    async getRepositorios ({ commit }, repo) {
        const response = await axios.get(`${ACTION}/${repo}/${ACTION_REPOS}`);
        return commit('SET_REPOSITORIO', response.data);
    }
}