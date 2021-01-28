import { gql, useQuery } from '@apollo/client'
import React, { Fragment } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import LaunchItem from './launchitem'



const LAUNCHES_QUERY = gql `
    query LaunchesQuery {
        launches {
            flight_number,
            mission_name,
            launch_date_local,
            launch_success,
            links {
                mission_patch_small
            }
        }
    }
`;

function Launches(){
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if(loading) return <ClipLoader color = {'#fff'} size={250} css= {{display:'block',marginLeft:'auto',marginRight:'auto'}} />
    else if(error) console.log(error)
    else return <Fragment>
        {
            data.launches.map(launch =>(
                <LaunchItem key = {launch.mission_name} launch = {launch} />
            ))
        }
    </Fragment>
}

export default Launches
