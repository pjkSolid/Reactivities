import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";



export default function ActivityDetails() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {activity, isLoadingActivity} = useActivities(id);

    if (isLoadingActivity) return <Typography variant="h5" color="primary">Loading... </Typography>;
    
    if (!activity) return <Typography variant="h5" color="primary">Activity Not Found </Typography>;


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
            <Button component={Link} to={`/manage/${activity.id}`} color="primary" variant="contained" size="small">Edit</Button>
            <Button onClick={() => navigate('/activities')} color="inherit" variant="contained" size="small">Cancel</Button>
        </CardActions>

    </Card>
  )
}
