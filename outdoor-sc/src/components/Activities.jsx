import { useState, useEffect } from "react";
import "./css/Activities.css";
import ActivityCard from "./ActivityCard";
import axios from "axios";

const Activites = () => {

  const [activities, setActivities] = useState([]);

    useEffect(()=>{
      //Executes this anonymous async function
      (async () => {
        // const response = await axios.get("http://localhost:3001/api/activities");
      })();
    },[]);

    return (
        <>
        {activities.map((activity)=>(
          <ActivityCard 
          _id = {activity.id}
          name = {activity.name} 
          description = {activity.description}
          images = {activity.images}>
          </ActivityCard>
        ))}
        </>
    );
};

export default Activites;
