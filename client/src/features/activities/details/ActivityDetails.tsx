import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activity: Activity 
    cancelSelectActivity: () => void;   
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props) {
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
