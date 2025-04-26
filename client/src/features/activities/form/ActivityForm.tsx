import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    activity?: Activity;
    closeForm: () => void;
}

export default function ActivityForm({activity, closeForm}: Props) {

    const {updateActivity, createActivity } = useActivities();


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {   
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: {[key: string]: FormDataEntryValue} = {}
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (activity) {
            data.id = activity.id;
            await updateActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        } else {
            await createActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        }
    }


  return (
    <Paper sx={{ borderRadius: 3, padding: 2, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
            Create Activity
        </Typography>
        <Box component="form" onSubmit={handleSubmit} display='flex' flexDirection='column' noValidate gap={3} autoComplete="off">
            <TextField name="Title" label="Title" defaultValue={activity?.title}/>
            <TextField name="Description" label="Description" multiline rows={3} defaultValue={activity?.description}/>
            <TextField name="Category" label="Category" defaultValue={activity?.category} />
            <TextField name="Date" label="Date" type="date" 
            
                    defaultValue={activity?.date 
                        ? new Date(activity.date).toISOString().split('T')[0] 
                        : new Date().toISOString().split('T')[0]}
            
            
            />
            <TextField name="City" label="City" defaultValue={activity?.city}/>
            <TextField name="Venue" label="Venue" defaultValue={activity?.venue}/>
            <Box display='flex' justifyContent='space-between' gap={3}>
                <Button onClick={closeForm} color="primary" variant="contained" size="small">Cancel</Button>
                <Button type="submit" 
                color="success" 
                variant="contained" 
                disabled={updateActivity.isPending || createActivity.isPending}
                size="small">Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}
