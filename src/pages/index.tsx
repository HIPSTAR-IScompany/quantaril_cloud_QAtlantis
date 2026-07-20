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

const productPillars = [
  {
    title: '世界を生やす',
    body: '神話、ゲーム、研究、組織ごとに、意味Kernelと因果と権限を持つWorldをつくる。違うWorldはPortalでつなぐ。',
  },
  {
    title: '個体を持ち運ぶ',
    body: '人格、記憶、装備、関係、来歴をASTROとGhostの候補へ。copyを同一性と呼ばず、分岐と欠損を残す。',
  },
  {
    title: '現実へ門を開く',
    body: '既存OS、database、IAM、API、機器を置き換えず、必要なcapabilityだけをAtlantis Worldへ接続する。',
  },
];

function ProductVision() {
  return (
    <section className={styles.productVision}>
      <div className="container">
        <div className={styles.visionHeader}>
          <p className={styles.eyebrow}>FROM FICTION PROTOTYPE TO OPEN FORGE</p>
          <Heading as="h2">世界を描画する道具から、世界を動かす道具へ。</Heading>
          <p>
            創作上の「虚空の揺籠」から始まったロマン砲を、神話は神話のまま、工学は検証可能なcomponentとして
            Q Atlantisへ鍛造しています。
          </p>
        </div>
        <div className={styles.pillarGrid}>
          {productPillars.map((pillar) => (
            <article className={styles.pillarCard} key={pillar.title}>
              <Heading as="h3">{pillar.title}</Heading>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
        <div className={styles.statusStrip}>
          <span><strong>NOW</strong> OPEN / RESOURCE-WAIT / REVIEW-WANTED</span>
          <span>旧3x/4x: SERVICE ENDED / PARKED-PRESERVED</span>
          <span>Runner: NOT STARTED</span>
        </div>
        <div className={styles.visionLinks}>
          <Link className="button button--primary" to="/about/vision">プロダクトビジョン</Link>
          <Link className="button button--secondary" to="/docs/engineering/q-atlantis/product-line">製品系列と現在能力</Link>
        </div>
      </div>
    </section>
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
        <ProductVision />
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
