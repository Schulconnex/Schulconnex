import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

import HomepageText from './_homepage-text.md';

import Testimonials from // type TestimonialItem,
'@site/src/data/testimonials';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Testimonial(
  { feature: testimonial, className },
  // : {
  //   feature: TestimonialItem;
  //   className?: string;
  // }
) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={testimonial.title}
        width={Math.floor(testimonial.image.width)}
        height={Math.floor(testimonial.image.height)}
        src={withBaseUrl(testimonial.image.src)}
        loading="lazy"
      />
      {/* <Heading as="h3" className={clsx(styles.testimonialsHeading)}>
        {testimonial.title}
      </Heading> */}
      <p className="padding-horiz--md">{testimonial.text}</p>
      <p className="padding-horiz--md text--right text--italic margin-bottom--none">
        {testimonial.quote.name}
      </p>
      <p className="padding-horiz--md text--right text--italic">
        {testimonial.quote.info}
      </p>
    </div>
  );
}

function TestimonialsContainer() {
  const firstRow = Testimonials.slice(0, 3);
  const secondRow = Testimonials.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Testimonial feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Testimonial
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row padding-top--lg padding-top--lg padding-bottom--md">
            <div className="col">
              <article>
                <div className="theme-doc-markdown markdown">
                  <HomepageText />
                </div>
              </article>
            </div>
          </div>
          <div className="row padding-top--lg padding-bottom--xl">
            <div className="col">
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={`/docs/${siteConfig.presets[0][1].docs.versions.current.path}/stand-der-bearbeitung`}
                >
                  zur Spezifikation
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <TestimonialsContainer />
        </div>
      </main>
    </Layout>
  );
}
