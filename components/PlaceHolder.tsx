import { makeStyles } from "@material-ui/core";

type IPlaceHolder = {
    color: string;
}

const useStyles = makeStyles({
    placeHolder: {
        width: '16rem',
        height: '9rem'
    },
});

export function PlaceHolder({
    color
}: IPlaceHolder) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.placeHolder} style={{ backgroundColor: color }} />
        </div>
    )
}
