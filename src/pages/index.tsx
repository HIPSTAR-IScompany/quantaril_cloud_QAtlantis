import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import PayPalHostedButton from "@site/src/components/PayPalHostedButton"
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title shadow">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle shadow">{siteConfig.tagline}</p>
        <p className={styles.heroPromise}>
          感じる自由。信じる自由。疑う自由。語る自由。遊ぶ自由。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/about/intro">
            この世界へ入る
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/intro">
            文書庫をひらく
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="神話・人格・体験・技術を次の世界へ運ぶQ Atlantisの公開文書庫">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <section className={styles.features}>
        <div className="fullWidth">
          <PayPalHostedButton hostedButtonId="6LVN8W5RS77NU" />
        </div>
      </section>
    </Layout>
  );
}
