import { Grid2} from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({
    activities, 
    cancelSelectActivity, 
    selectActivity, 
    selectedActivity, 
    openForm, 
    closeForm, 
    editMode, 
}: Props) {
  return (
    <Grid2 container spacing={3} sx={{mt: 3, mb: 3}}>
        <Grid2 size={7}>
            <ActivityList 
                activities={activities}
                selectActivity={selectActivity}
            />
        </Grid2>
        <Grid2 size={5}>
            {selectedActivity && !editMode &&
                <ActivityDetails 
                selectedActivity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                />}
            {editMode &&
            <ActivityForm 
                closeForm={closeForm} 
                activity={selectedActivity}/>}
        </Grid2>
    </Grid2>
    )
}
