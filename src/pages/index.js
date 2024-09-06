import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import HomepageText from './_homepage-text.md';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="">
      <HomepageHeader />
      <main>
        <div class="container">
          <div className='row padding-top--lg padding-top--lg padding-bottom--md'>
            <div className='col'>
              <article>
                <div className="theme-doc-markdown markdown">
                  <HomepageText />
                </div>
              </article>
            </div>
          </div>
          <div className='row padding-top--lg padding-bottom--xl'>
            <div className='col'>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={`/docs/${siteConfig.presets[0][1].docs.versions.current.path}/stand-der-bearbeitung`}>
                  zur Spezifikation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
