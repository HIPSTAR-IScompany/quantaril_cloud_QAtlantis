import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PayPalHostedButton from '@site/src/components/PayPalHostedButton';
import styles from './index.module.css';

const capabilityRows = [
  ['Sphere-DOS 開発シェル', '利用可能', 'ready'],
  ['複数AI作業面', '利用可能', 'ready'],
  ['Codex PLI 導線', '利用可能', 'ready'],
  ['独立ランナー', '未実装', 'pending'],
] as const;

const productPillars = [
  {
    code: 'WORLD',
    title: '世界を生やす',
    body: '神話、ゲーム、研究、組織ごとに、意味Kernelと因果と権限を持つWorldをつくる。違うWorldは混ぜず、Portalで対話させる。',
    status: 'SPEC / REFORGING',
  },
  {
    code: 'ASTRO',
    title: '個体と来歴を運ぶ',
    body: '人格、記憶、装備、関係、来歴を可搬な候補へ。copyを同一性と呼ばず、分岐、欠損、同意、writeback境界を残す。',
    status: 'SPEC / DESIGN',
  },
  {
    code: 'PORTAL',
    title: '現実へ門を開く',
    body: '既存OS、database、IAM、API、機器を置き換えず、必要なcapabilityだけをAtlantis Worldへ接続する。',
    status: 'OPEN / REVIEW-WANTED',
  },
] as const;

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackdrop} aria-hidden="true" />
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>SPHEREOS ATLANTIS · OPEN REFORGE</p>
          <Heading as="h1" className={styles.heroTitle}>
            いくつもの世界を生やし、<br />隔離し、橋を架けるためのOS。
          </Heading>
          <p className={styles.heroLead}>
            神話、人格、体験、技術を、一つの正しさへ潰さず次の器へ運ぶ。
            日本語を正本に、各言語へPortalを開く公開鍛造所です。
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} to="/about/intro">この世界へ入る</Link>
            <Link className={styles.secondaryAction} to="/docs/intro">文書庫をひらく</Link>
            <a className={styles.ghostAction} href="https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis">GitHub</a>
          </div>
          <p className={styles.heroFreedom}>感じる自由。信じる自由。疑う自由。語る自由。遊ぶ自由。フォークする自由。</p>
        </div>

        <aside className={styles.consolePanel} aria-label="Q Atlantis 開発入口">
          <div className={styles.consoleTopbar}>
            <span className={styles.consoleLights}><i /><i /><i /></span>
            <span>Sphere-DOS / Prompt Engineering</span>
            <span>0.250.1</span>
          </div>
          <div className={styles.consoleBody}>
            <p><span className={styles.prompt}>atlas@forge:~$</span> /man</p>
            <p className={styles.consoleLabel}>利用できる入口</p>
            <nav className={styles.consoleNav}>
              <Link to="/about/intro"><b>[1]</b><span>世界を見渡す<small>思想・神話・研究・現在地</small></span></Link>
              <a href="https://codespaces.new/HIPSTAR-IScompany/quantaril_cloud_QAtlantis"><b>[2]</b><span>Codespacesで起動<small>リポジトリ接続済み開発環境</small></span></a>
              <Link to="/docs/engineering/q-atlantis/"><b>[3]</b><span>Codex PLIから入る<small>マニフェストを読む共同開発入口</small></span></Link>
              <Link to="/docs/engineering/q-atlantis/status"><b>[4]</b><span>現在能力を検査する<small>実装・仕様・研究・資源待ち</small></span></Link>
            </nav>
            <div className={styles.capabilityTable}>
              {capabilityRows.map(([name, value, state]) => (
                <div key={name}><span>{name}</span><strong data-state={state}>{value}</strong></div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <p className={styles.developmentNote}>※開発中の画面です。実際の製品・実装状態とは異なる場合があります。</p>
    </header>
  );
}

function ProductVision() {
  return (
    <section className={styles.productVision}>
      <div className="container">
        <div className={styles.visionHeader}>
          <p className={styles.eyebrow}>虚構プロトタイプから、触れる公開鍛造所へ</p>
          <Heading as="h2">世界を描画する道具から、世界を動かす道具へ。</Heading>
          <p>創作上の「虚空の揺籠」から始まったロマン砲を、神話は神話のまま、工学は検証可能なcomponentとしてQ Atlantisへ鍛造しています。</p>
        </div>
        <div className={styles.pillarGrid}>
          {productPillars.map((pillar, index) => (
            <article className={styles.pillarCard} key={pillar.code}>
              <div className={styles.pillarMeta}><span>0{index + 1}</span><b>{pillar.code}</b></div>
              <Heading as="h3">{pillar.title}</Heading>
              <p>{pillar.body}</p>
              <small>{pillar.status}</small>
            </article>
          ))}
        </div>
        <div className={styles.visionLinks}>
          <Link className={styles.primaryAction} to="/about/vision">プロダクトビジョン</Link>
          <Link className={styles.secondaryAction} to="/docs/engineering/q-atlantis/product-line">製品系列と現在能力</Link>
        </div>
      </div>
    </section>
  );
}

function ForgeSupport() {
  return (
    <section className={styles.forgeSupport}>
      <div className={`container ${styles.supportGrid}`}>
        <div>
          <p className={styles.eyebrow}>OKITAMA CULTURE & OPEN FORGE SUPPORT</p>
          <Heading as="h2">一つの作品ではなく、置賜の文化圏へ燃料を送る。</Heading>
          <p>
            この支援窓口は、齋藤みつる個人やQ Atlantis単体への直接投資ではありません。
            置賜郡射程の文化保護と地域活動を支えるNPOの窓口であり、寄せられた資金は地域の複数事業、運営費、行政や町との連携を含む広い活動系へ流れます。
          </p>
          <p>
            地方では、文化、福祉、交通、設備、広報、町おこしが一つずつ独立して動かず、財政不足と複数主体の調整へ吸収されることがあります。
            そのため、特定プロジェクトへの線形な使途や成果を、このページの作者が個人として保証するものではありません。
          </p>
          <p>
            私自身は広報と公開制作を担いますが、資金配分、会計、個別事業の管理主体ではなく、個人として財務責任を引き受ける立場にもありません。
            Q Atlantisを入口に支援する場合も、一人の開発者を買うのではなく、置賜の文化圏と公開活動の生存余地を広げる町おこしとして受け取ってください。
          </p>
        </div>
        <div className={styles.supportPanel}><PayPalHostedButton hostedButtonId="6LVN8W5RS77NU" /></div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Q Atlantis" description="神話・人格・体験・技術を次の世界へ運ぶQ Atlantisの公開鍛造所">
      <div className={styles.homeShell}>
        <HomepageHeader />
        <main>
          <ProductVision />
          <HomepageFeatures />
          <ForgeSupport />
        </main>
      </div>
    </Layout>
  );
}
