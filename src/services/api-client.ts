import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b0de501f52b84129bedd8253d2c71500'
    }
})