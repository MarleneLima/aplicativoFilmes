import axios from 'axios';

// URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3/

// movie/now_playing  ?api_key=cfd5a970b836bb3f016c59bc85ce1dbe  &language=pt-BR&page=1

// movie/now_playing &language=pt-BR&page=1


export const key = 'cfd5a970b836bb3f016c59bc85ce1dbe'


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


export default api;