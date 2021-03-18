import { makeStyles } from '@material-ui/core';
import { get10RandomColors } from '../utils';
import { Color } from './PlaceHolder';
import { RightSliderButton, LeftSliderButton } from './SliderButton';


const useStyles = makeStyles({
  buttonSamplesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  sampleWrapper: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'scroll',
    width: '75vw',
    scrollBehavior: 'smooth'
  },
  fixedToPageWrapper: {
    position: 'relative',
    '&__rightButton': {
      position: 'fixed',
      right: 0,
    },
    '&__leftButton': {
      position: 'fixed',
      left: 0,
    },
  },
  absPosedWrapper: {
    position: 'relative',
    '&__rightButton': {
      position: 'absolute',
      right: 0,
    },
    '&__leftButton': {
      position: 'absolute',
      left: 0,
    },
  },
  correctSlidersWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '&__rightButton': {
      position: 'absolute',
      right: '0',
    },
    '&__leftButton': {
      position: 'absolute',
      left: '0',
    },
  }
}, {name: 'MuiBlogPost'});

export function SliderButtonsBlogPost() {
  const classes = useStyles();

  return (
    <section className={classes.buttonSamplesWrapper}>
      <h1>Fixed Positions</h1>
      <div className={`${classes.fixedToPageWrapper} ${classes.sampleWrapper}`}>
        <LeftSliderButton className={`${classes.fixedToPageWrapper}__leftButton`} />
        {get10RandomColors().map(color => <Color colorName={color} />)}
        <RightSliderButton className={`${classes.fixedToPageWrapper}__rightButton`} />
      </div>

      <br />

      <h1>Absolute Positions</h1>
      <div className={`${classes.absPosedWrapper} ${classes.sampleWrapper}`} >
        <LeftSliderButton className={`${classes.absPosedWrapper}__leftButton`} />
        {get10RandomColors().map(color => <Color colorName={color} />)}
        <RightSliderButton className={`${classes.absPosedWrapper}__rightButton`} />
      </div>

      <br />

      <h1>Flexed Positions</h1>
      <div className={`${classes.correctSlidersWrapper}`} >
        <LeftSliderButton className={`${classes.correctSlidersWrapper}__leftButton`} />
        <div className={`${classes.sampleWrapper}`}>
          {get10RandomColors().map(color => <Color colorName={color} />)}
        </div>
        <RightSliderButton className={`${classes.correctSlidersWrapper}__rightButton`} />
      </div>
    </section>
  );

}
