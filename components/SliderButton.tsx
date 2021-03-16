import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { MouseEvent } from 'react';

const PIXELS_TO_BE_SLIDED = 1000;

type ISliderButton = {
    toRight: boolean;
    className: string;
}

export function RightSliderButton({ className }: { className: string }) {
    return <SliderButton toRight={true} className={className} />
}

export function LeftSliderButton({ className }: { className: string }) {
    return <SliderButton toRight={false} className={className} />

}

function SliderButton({
    toRight,
    className
}: ISliderButton) {

    const sliderHandler = (e: MouseEvent) => {
        const target = e.currentTarget;
        const scrollableContent = target.closest(`div[class*=sampleWrapper]`);

        if (scrollableContent) {
            if (toRight) {
                scrollableContent.scrollLeft += PIXELS_TO_BE_SLIDED;
            } else {
                scrollableContent.scrollLeft -= PIXELS_TO_BE_SLIDED;
            }
        }
    }

    const sliderHandlerForCorrectImplementation = (e: MouseEvent) => {
        const target = e.currentTarget;
        const scrollableContent = className.includes('right')
            ? target.previousElementSibling
            : target.nextElementSibling;

        if (scrollableContent) {
            if (toRight) {
                scrollableContent.scrollLeft += PIXELS_TO_BE_SLIDED;
            } else {
                scrollableContent.scrollLeft -= PIXELS_TO_BE_SLIDED;
            }
        }

    }

    return (
        <Button
            className={"sliderButtonWrapper " + className}
            variant='contained'
            color='primary'
            onClick={event => className.includes('correctSlidersWrapper')
                ? sliderHandlerForCorrectImplementation(event)
                : sliderHandler(event)
            }
        >
            {toRight
                ? <ArrowForwardIosIcon />
                : <ArrowBackIosIcon />
            }
        </Button>
    );
}