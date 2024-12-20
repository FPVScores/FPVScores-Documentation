import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'For Pilots',
    ImgSrc: require('@site/static/img/features_fpvpilot.png').default,
    description: (
      <>
        FPVScores is the platform for FPV pilots to register, create profiles, and participate in events. Keep track of your scores and progression.
      </>
    ),
  },
  {
    title: 'For Race Directors',
    ImgSrc: require('@site/static/img/features_fpvpilot.png').default,
    description: (
      <>
        FPVScores gives a cloud solution for lap times during FPV drone racing events. It is easy to use and provides a lot of features.
      </>
    ),
  }
];

function Feature({ImgSrc, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={ImgSrc} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}