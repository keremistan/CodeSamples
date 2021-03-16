import { Button } from '@material-ui/core';
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
}


export function SliderButtonsBlogPost() {

  /**
   ** TODOs:*
   ** 1. position fixed, sayfa kenarlarina yapisan*
   ** 2. position absolute ile alanla ile beraber scroll olan*
   ** 3. scrollable area'ya sibling olup, istenildigi gibi hareket eden butonlar*
   **/

  const colors = Array.from({ length: 10 }, () => getRandomColor());

  return (
    <section className="buttonSamplesWrapper">
      <div className={styles.fixedToPageWrapper}>
        <LeftSliderButton />
        {colors.map(color => {
          return <ContentSimulator color={color} />
        })}
        <RightSliderButton />
      </div>
    </section>
  );

}

function ContentSimulator({
  color
}: IContentSimulator) {
  return (
    <div>
      <div className={styles.contentSimulator} style={{ backgroundColor: color }} />
    </div>
  )
}

function getRandomColor(): string {
  // source: https://stackoverflow.com/a/5365036/6656967
  return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function SliderButton({
  toRight
}: ISliderButton) {

  const sliderHandler = (e: MouseEvent) => {
    const target = e.currentTarget;
    const scrollableContent = target.closest(`.${styles.fixedToPageWrapper}`);
    
    if (scrollableContent) {
      if (toRight) {
        scrollableContent.scrollLeft += PIXELS_TO_BE_SLIDED;
      } else {
        scrollableContent.scrollLeft -= PIXELS_TO_BE_SLIDED;
      }
    }

  }

  return (
    <div className="sliderButtonWrapper">
      <Button
        variant='outlined'
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

function RightSliderButton() {
  return <SliderButton toRight={true} />
}

function LeftSliderButton() {
  return <SliderButton toRight={false} />
}