import { Button, makeStyles } from '@material-ui/core';
import { get10RandomColors } from '../utils';
import { PlaceHolder } from './PlaceHolder';
import { RightSliderButton, LeftSliderButton } from './SliderButton';


const useStyles = makeStyles({
  sampleWrapper: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'scroll',
    width: '50rem',
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
  absPosedSliderBtn: {
    position: 'absolute'
  },
  correctSlidersWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&__rightButton': {
      right: '4rem',
    },
    '&__leftButton': {
      left: '4rem',
    },
  }
});

export function SliderButtonsBlogPost() {
  const classes = useStyles();

  return (
    <section className="buttonSamplesWrapper">
      <h1>Fixed Positions</h1>
      <div className={`${classes.fixedToPageWrapper} ${classes.sampleWrapper}`}>
        <LeftSliderButton className={`${classes.fixedToPageWrapper}__leftButton`} />
        {get10RandomColors().map(color => {
          return <PlaceHolder color={color} />
        })}
        <RightSliderButton className={`${classes.fixedToPageWrapper}__rightButton`} />
      </div>
      <br />
      <h1>Absolute Positions</h1>
      <div className={`${classes.absPosedWrapper} ${classes.sampleWrapper}`} >
        <LeftSliderButton className={`${classes.absPosedWrapper}__leftButton`} />
        {get10RandomColors().map(color => <PlaceHolder color={color} />)}
        <RightSliderButton className={`${classes.absPosedWrapper}__rightButton`} />
      </div>
      <br />
      <h1>Flexed Positions</h1>
      <div className={`${classes.correctSlidersWrapper}`} >
        <LeftSliderButton className={`${classes.correctSlidersWrapper}__leftButton`} />
        <div className={`${classes.sampleWrapper}`}>
          {get10RandomColors().map(color => <PlaceHolder color={color} />)}
        </div>
        <RightSliderButton className={`${classes.correctSlidersWrapper}__rightButton`} />
      </div>
    </section>
  );

}
