import axios from "axios"

const GetRandomCards= {   
    async getAll(){  
        const result = await axios.get('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')

        return result.data
    }       
}

export default GetRandomCards;