import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const Launches_QUERY=gql`
query LaunchesQuery{
    launches{
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`

class Launches extends Component {
    render() {
        return (
            <div>
               <h1 className="display-6 my-5">Launches</h1> 
               <MissionKey />
               <Query query={Launches_QUERY}>
                   {({loading,error,data})=>{
                       if(loading) return(<div>Loading...</div>);
                       if(error) console.log(error);

                       return <div>{data.launches.map((launch)=>{
                           return (<LaunchItem key={launch.flight_number} launch={launch} />)
                       })}</div>
                       
                   }}
               </Query>
            </div>
        )
    }
}

export default Launches
