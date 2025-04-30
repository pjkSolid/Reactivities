import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate } from "react-router";

type Props = {
    activity: Activity
}

export default function ActivityCard({activity}: Props) {
    const navigate = useNavigate();
    const {deleteActivity} = useActivities();

  return (
   <Card sx={{borderRadius: 3}}>
        <CardContent>
            <Typography variant="h5">
                {activity.title}
            </Typography>
            <Typography sx={{color: 'text.secondary', mb:1}}>
                {activity.date}
            </Typography>  
            <Typography variant="body2">
                {activity.description}
            </Typography>    
            <Typography variant="subtitle1">
                {activity.city} / {activity.venue}
            </Typography>        
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb:2}}>
            <Chip label={activity.category} color="primary" variant="outlined" sx={{borderRadius: 2}} />
            <Box display='flex' justifyContent='space-between' gap={3}>
                <Button onClick={() =>{ navigate(`/activities/${activity.id}`)}} size="medium" variant="contained" color="primary" sx={{borderRadius: 2}}>View</Button>
                <Button 
                onClick={() => deleteActivity.mutate(activity.id)} 
                disabled={deleteActivity.isPending}
                size="medium" 
                variant="contained" 
                color="error" 
                sx={{borderRadius: 2}}>Delete</Button>
            </Box>
        </CardActions>
   </Card>
  )
}
