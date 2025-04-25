import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";

type Props = {
    activity?: Activity;
    closeForm: () => void;
    submitForm: (activity: Activity) => void;
}

export default function ActivityForm({activity, closeForm, submitForm}: Props) {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {   
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: {[key: string]: FormDataEntryValue} = {}
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (activity) data.id = activity.id;

        submitForm(data as unknown as Activity);
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
            <TextField name="Date" label="Date" type="date" defaultValue={activity?.date} />
            <TextField name="City" label="City" defaultValue={activity?.city}/>
            <TextField name="Venue" label="Venue" defaultValue={activity?.venue}/>
            <Box display='flex' justifyContent='space-between' gap={3}>
                <Button onClick={closeForm} color="primary" variant="contained" size="small">Cancel</Button>
                <Button type="submit" color="success" variant="contained" size="small">Submit</Button>
            </Box>



        </Box>
    </Paper>
  )
}
