import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            profiles:[
                {
                    Id:1,
                    name:'Parvez',
                    age:30,
                    bio: 'enjoy movie',
                    hobbies: ['swmming','biking']
                },
                {
                    Id:2,
                    name:'Nawaz',
                    age:44,
                    bio:'loves gardening',
                    hobbies:['gardening','gaming']
                }
            ]
        };    
        this.addUser=this.addUser.bind(this);
    }   
    addUser(newProfile){
        // var user={
        //     Id: this.state.profiles.length+1,
        //     name:'Tom',
        //     age:22,
        //     bio:'enjoys sports',
        //     hobbies:['basketball','baseball']
        // }
        //this.setState({profiles:this.state.profiles.concat([user])});
        this.setState({profiles:this.state.profiles.concat([newProfile])});
    }

    render(){
       let profiles=this.state.profiles.map(profile=>{
           return (
               <div key={profile.Id}>
                    <Profile
                        id={profile.Id}
                        name={profile.name}
                        age={profile.age}
                        bio={profile.bio}
                        hobbies={profile.hobbies}
                    >                
                    </Profile>                    
               </div>            
           );           
       });

       return (
           <div>
               {profiles}
               <AddProfile addUser={this.addUser}></AddProfile>
           </div>
       )        
    }
}