 const ENDPOINT='http://localhost:3333/profiles.json'

 export function getProfiles(){
       return fetch(ENDPOINT)
        .then(res=>res.json())        
        .catch(err=>{
            console.log(err);
        })
 }
 
 