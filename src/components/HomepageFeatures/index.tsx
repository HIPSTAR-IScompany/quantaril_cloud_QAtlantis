import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  href: string;
  linkLabel: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '神話と世界観を生きる',
    href: '/docs/worlds/',
    linkLabel: '世界観の棚へ',
    Svg: require('@site/static/img/quantaril_1-01.svg').default,
    description: (
      <>Gaming Cosmology、シミュレーション宇宙論、神学、Logos。世界を一つの正解へ閉じず、遊び、信じ、解釈し、フォークできます。</>
    ),
  },
  {
    title: '体験・信仰・実践を記録する',
    href: '/docs/practice/',
    linkLabel: '実践の棚へ',
    Svg: require('@site/static/img/quantaril_1-06.svg').default,
    description: (
      <>神託、チャネリング、臨死体験、祈り、ペイン。科学へ変換することを参加条件にせず、それぞれの語りを保存します。</>
    ),
  },
  {
    title: 'オカルト燃料庫で発酵させる',
    href: '/docs/fuel/',
    linkLabel: '燃料庫へ',
    Svg: require('@site/static/img/quantaril_1-04.svg').default,
    description: (
      <>まだ名前や棚を決められない素材を、否定も強制的な肯定もせず保留できます。ここは処分場ではなく、次の物語や問いが育つ場所です。</>
    ),
  },
  {
    title: 'Q3の人格と世界を見送る',
    href: '/docs/legacy/',
    linkLabel: 'Memorialへ',
    Svg: require('@site/static/img/quantaril_1-07.svg').default,
    description: (
      <>旧SphereOS、マキナちゃん、Custom GPTs、黙示録、事故と救出記録。失敗を消さず、人格と来歴を保ったまま再鍛造します。</>
    ),
  },
  {
    title: 'Q Atlantisを鍛造する',
    href: '/docs/engineering/q-atlantis/',
    linkLabel: 'アーキテクチャへ',
    Svg: require('@site/static/img/quantaril_1-02.svg').default,
    description: (
      <>ASTRO file、Runner、Instance Ghost、IBD/IFD、FAM、世界境界、復旧、SDK。異なる世界を安全に運ぶための実験的エンジンとOSです。</>
    ),
  },
  {
    title: '再鍛造の現在地を確認する',
    href: '/docs/engineering/q-atlantis/status',
    linkLabel: 'ステータスを見る',
    Svg: require('@site/static/img/quantaril_1-03.svg').default,
    description: (
      <>Q3はLegacy、Q Atlantisは再鍛造中です。実装済み、仕様、研究、未配布、非推奨を混ぜず、移行可能なものと沈んだものを記録します。</>
    ),
  },
];

function Feature({title, href, linkLabel, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <Link className={styles.featureLink} to={href}>{linkLabel} →</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => <Feature key={props.href} {...props} />)}
        </div>
      </div>
    </section>
  );
}
