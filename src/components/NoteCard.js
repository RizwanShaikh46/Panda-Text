import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Blue from '@material-ui/core/colors/blue'


const useStyles = makeStyles({
    root: {
        borderRadius: '10px',
        minWidth: '275px'
    },
    paper: {borderRadius: 10} 
});

export default function NoteCard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    return (
        <div>
            <Card className={classes.root} variant="outlined" {...props} onClick={handleClickOpen}>
                <Typography variant='h5' noWrap style={{ textIndent: '10px', paddingTop: '10px' }} >
                    {props.title}
                </Typography>
                <Divider />
                <Typography variant='subtitle1' style={{ paddingLeft: '10px' }} {...(props.len >= 430 ? { style: { height: '350px' } } : {})}>
                    {props.note}
                </Typography>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                borderRadius={32}
                classes={{
                    paper: classes.paper
                }}
            >
                <DialogTitle>
                    <TextField
                        variant="outlined"
                        id="outlined-basic"
                        label="Title"
                        type="text"
                        defaultValue="Title"
                        fullWidth
                    />

                </DialogTitle>

                <DialogContent>
                    <TextField
                        variant="outlined"
                        id="outlined-basic"
                        label="Edit Notes"
                        multiline
                        rows={8}
                        defaultValue="Default Value"
                        fullWidth
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleClose}
                        style={{color: Blue[500]}}
                    >Close</Button>

                </DialogActions>

            </Dialog>
        </div>
    );
}
