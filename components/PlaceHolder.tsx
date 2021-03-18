import { makeStyles } from "@material-ui/core";

type IColor = {
    colorName: string;
}

const useStyles = makeStyles({
    color: {
        width: '16rem',
        height: '9rem'
    }
},
    { name: 'MuiContent' },
);

export function Color({
    colorName
}: IColor) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.color} style={{ backgroundColor: colorName }} />
        </div>
    )
}
