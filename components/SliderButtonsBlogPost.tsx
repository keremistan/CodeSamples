import { Button, makeStyles } from '@material-ui/core';
import styles from './SliderButtonsBlogPost.module.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { MouseEvent } from 'react';

const PIXELS_TO_BE_SLIDED = 500;

type IContentSimulator = {
  color: string;
}

type ISliderButton = {
  toRight: boolean;
  className: string;
}

const useStyles = makeStyles({
  sampleWrapper: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'scroll',
    width: '50rem',
    scrollBehavior: 'smooth'
  },
  contentSimulator: {
    width: '16rem',
    height: '9rem'
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
});

export function SliderButtonsBlogPost() {

  /**
   ** TODOs:*
   ** 1. position fixed, sayfa kenarlarina yapisan*
   ** 2. position absolute ile alanla ile beraber scroll olan*
   ** 3. scrollable area'ya sibling olup, istenildigi gibi hareket eden butonlar*
   **/

  const classes = useStyles();

  const colors1 = Array.from({ length: 10 }, () => getRandomColor());
  const colors2 = Array.from({ length: 10 }, () => getRandomColor());

  return (
    <section className="buttonSamplesWrapper">
      <div className={`${classes.fixedToPageWrapper} ${classes.sampleWrapper}`}>
        <LeftSliderButton className={`${classes.fixedToPageWrapper}__leftButton`} />
        {colors1.map(color => {
          return <ContentSimulator color={color} />
        })}
        <RightSliderButton className={`${classes.fixedToPageWrapper}__rightButton`} />
      </div>
      <br />
      <div className={`${classes.absPosedWrapper} ${classes.sampleWrapper}`} >
        <LeftSliderButton className={`${classes.absPosedWrapper}__leftButton`} />
        {colors2.map(color => <ContentSimulator color={color} />)}
        <RightSliderButton className={`${classes.absPosedWrapper}__rightButton`} />
      </div>
    </section>
  );

}

function ContentSimulator({
  color
}: IContentSimulator) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.contentSimulator} style={{ backgroundColor: color }} />
    </div>
  )
}

function getRandomColor(): string {
  // source: https://stackoverflow.com/a/5365036/6656967
  return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function RightSliderButton({ className }: { className: string }) {
  return <SliderButton toRight={true} className={className} />
}

function LeftSliderButton({ className }: { className: string }) {
  return <SliderButton toRight={false} className={className} />

}

function SliderButton({
  toRight,
  className
}: ISliderButton) {
  const classes = useStyles();

  const sliderHandler = (e: MouseEvent) => {
    const target = e.currentTarget;
    const scrollableContent = target.closest(`.${classes.sampleWrapper}`);

    if (scrollableContent) {
      if (toRight) {
        scrollableContent.scrollLeft += PIXELS_TO_BE_SLIDED;
      } else {
        scrollableContent.scrollLeft -= PIXELS_TO_BE_SLIDED;
      }
    }

  }

  return (
    <div className={"sliderButtonWrapper " + className}>
      <Button
        variant='contained'
        color='primary'
        onClick={event => sliderHandler(event)}
      >
        {toRight
          ? <ArrowForwardIosIcon />
          : <ArrowBackIosIcon />
        }
      </Button>
    </div>
  );
}