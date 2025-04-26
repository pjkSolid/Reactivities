import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selectedActivity: Activity 
    cancelSelectActivity: () => void;   
    openForm: (id: string) => void;
}

export default function ActivityDetails({selectedActivity, cancelSelectActivity, openForm}: Props) {
    const {activities} = useActivities();
    const activity = activities?.find(a => a.id == selectedActivity.id);

    if (!activity) return <Typography variant="h5" color="primary">Loading...</Typography>;


  return (
    <Card sx={{borderRadius: 3, padding: 3, mb: 3}}>
        <CardMedia component='img' 
        src={`/images/categoryImages/${activity.category}.jpg`}/>
        <CardContent>
        <Typography variant="h5" color="primary" sx={{mb: 2}}>
                {activity.title}
            </Typography>
            <Typography variant="subtitle1" color="primary" sx={{mb: 2}}>
                {activity.date}
            </Typography>
            <Typography variant="body1" color="primary" sx={{mb: 2}}>
                {activity.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => openForm(activity.id)} color="primary" variant="contained" size="small">Edit</Button>
            <Button onClick={cancelSelectActivity}   color="inherit" variant="contained" size="small">Cancel</Button>
        </CardActions>

    </Card>
  )
}
