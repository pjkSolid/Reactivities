import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";
import ActivityDetailsChat from "./ActivityDetailsChat";



export default function ActivityDetailPage() {
    const {id} = useParams();
    const {activity, isLoadingActivity} = useActivities(id);

    if (isLoadingActivity) return <Typography variant="h5" color="primary">Loading... </Typography>;
    
    if (!activity) return <Typography variant="h5" color="primary">Activity Not Found </Typography>;


  return (
    <Grid2 container spacing={3}>
    <Grid2 size={8}>
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
        <ActivityDetailsChat />
    </Grid2>
    <Grid2 size={4}>
        <ActivityDetailsSidebar />
    </Grid2>
</Grid2>
  )
}
