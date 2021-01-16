import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '98%',
            bolorColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'darkviolet',
        },
    },
    todo__input_label: {
        color: '#fff',
        '&.Mui-focused': {
            margin: theme.spacing(1),
            color: 'darkviolet',
        },
    },
    input: {
        color: '#fff',
        paddingLeft: '1%',
    }
}));

export default function InputItem() {
    const classes = useStyles();

    return (
        <form className={classes.root} autoComplete="off">
            <TextField
                id="input-todo"
                label="Добавить задачу"
                InputProps={{
                    className: classes.input
                }}
                InputLabelProps={{
                    className: classes.todo__input_label
                }}
            />
        </form >
    );
};