import { Paper, Container, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    container: {
        '&>*': {
            margin: theme.spacing(1)
        },
        display: 'flex',
        flexDirection: 'column'
    }
}))
export const VerticalContainer = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            {props.children}
        </Container>
    )
}

export const VerticalPaper = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.container}>
            {props.children}
        </Paper>
    )
}
