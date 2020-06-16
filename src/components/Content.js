import React from 'react'
import NoteCard from './NoteCard'
import NoteData from '../data/data'
import StackGrid from 'react-stack-grid'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    card: {
        cursor: 'pointer',
        transition: 'all 0.3s linear',
        '&:hover': {
            boxShadow: '2px 2px 3px 3px #ccc'
        }
    },
    contentContainer: {
        marginTop: '70px'
    }
});



export default function Content() {
    const classes = useStyles();

    const getNotes = (notesObj) => {
        const { note, title, id } = notesObj
        return (
            <NoteCard
                xs={12}
                sm={3}
                note={note}
                title={title}
                key={id}
                len={note.length}
                className={classes.card}
            />
        )
    }

    return (
        <StackGrid columnWidth={300} gutterHeight={20} className={classes.contentContainer}>
            {NoteData.map(notesObj => getNotes(notesObj))}
        </StackGrid>
    )
}