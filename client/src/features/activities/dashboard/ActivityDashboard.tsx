import { Grid2 } from '@mui/material'
import ActivityList from './ActivityList'

export default function ActivityDashboard() {



  return (
    <Grid2 container spacing={3} sx={{mt: 3, mb: 3}}>
        <Grid2 size={7}>
            <ActivityList />
        </Grid2>
        <Grid2 size={5}>
            Activity Filters go here
        </Grid2>
    </Grid2>
    )
}
