import API from '../utils/API';

async function register(){
    API.post('/register')
}


const authService = {
    register
};
  
export default authService;