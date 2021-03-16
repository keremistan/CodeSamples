import styles from './SliderButtons.module.scss'

type IContentSimulator = {
  color: string
}


export function SliderButtons() {

  /**
   ** TODOs:*
   ** 1. position fixed, sayfa kenarlarina yapisan*
   ** 2. position absolute ile alanla ile beraber scroll olan*
   ** 3. scrollable area'ya sibling olup, istenildigi gibi hareket eden butonlar*
   **/

  const colors = Array.from({length: 10}, () => getRandomColor());

  return (
    <section className="buttonSamplesWrapper">
      <div className={styles.fixedToPageWrapper}>
        {colors.map(color => {
          return <ContentSimulator color={color} />
        })}
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