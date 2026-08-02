import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./web-development.module.css";

export const metadata: Metadata = {
  title: "ホームページ制作",
  description:
    "広島の中小企業・個人事業者向けに、見やすく更新しやすいホームページを制作します。",
};

type IconName =
  | "wallet"
  | "chart"
  | "clock"
  | "rocket"
  | "quality"
  | "cost"
  | "talk"
  | "edit"
  | "cms"
  | "gift"
  | "check"
  | "arrow";

function Icon({ name, size = 44 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    wallet: (
      <>
        <path d="M5 9h26v18H5z" />
        <path d="M8 9V6h19v3M23 15h10v7H23z" />
        <circle cx="27" cy="18.5" r="1" />
      </>
    ),
    chart: (
      <>
        <path d="M6 29V8M6 29h25" />
        <path d="m10 23 6-7 5 4 9-11" />
        <path d="M25 9h5v5" />
      </>
    ),
    clock: (
      <>
        <circle cx="18" cy="18" r="13" />
        <path d="M18 10v9l6 4" />
      </>
    ),
    rocket: (
      <>
        <path d="M14 24 8 28l1-7m13-7 7-7c-7-1-13 2-17 8l-3 5 7 7 5-3c6-4 9-10 8-17Z" />
        <path d="m12 25-3 3m4 1-4 4" />
        <circle cx="22" cy="14" r="2.5" />
      </>
    ),
    quality: (
      <>
        <path d="M18 5 22 9h6v6l4 4-4 4v6h-6l-4 4-4-4H8v-6l-4-4 4-4V9h6Z" />
        <path d="m12 19 4 4 8-9" />
      </>
    ),
    cost: (
      <>
        <path d="M7 13h22v17H7z" />
        <path d="M10 13V9h16v4M18 16v11m-4-8h8m-8 5h8" />
      </>
    ),
    talk: (
      <>
        <path d="M6 8h24v17H16l-7 5v-5H6z" />
        <path d="M11 14h14m-14 5h9" />
      </>
    ),
    edit: (
      <>
        <path d="M8 28h6L29 13l-6-6L8 22z" />
        <path d="m20 10 6 6M7 31h24" />
      </>
    ),
    cms: (
      <>
        <rect x="5" y="7" width="26" height="22" rx="2" />
        <path d="M5 13h26M10 10h.1M14 10h.1M18 10h.1M10 18h7v6h-7zm11 0h5m-5 5h5" />
      </>
    ),
    gift: (
      <>
        <path d="M5 16h26v16H5zM3 11h30v6H3zM18 11v21" />
        <path d="M18 11c-5 0-8-2-8-5 0-2 2-3 4-2 3 1 4 7 4 7Zm0 0c5 0 8-2 8-5 0-2-2-3-4-2-3 1-4 7-4 7Z" />
      </>
    ),
    check: <path d="m7 18 7 7 15-16" />,
    arrow: (
      <>
        <path d="M5 18h25M23 11l7 7-7 7" />
      </>
    ),
  };
  return (
    <svg
      className={styles.icon}
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const concerns = [
  {
    icon: "wallet" as const,
    image: "/web-development/illustrations/concern-expensive.png",
    tone: "pink",
    title: "高額な制作費",
    body: (
      <>
        見栄えの良いHPを作ろうとすると<strong>数百万円</strong>
        の見積もりがかかる
      </>
    ),
  },
  {
    icon: "chart" as const,
    image: "/web-development/illustrations/concern-running-cost.png",
    tone: "blue",
    title: "継続的なコスト",
    body: (
      <>
        制作費0円でも<strong>毎月の費用</strong>が発生してコスト負担が大きい
      </>
    ),
  },
  {
    icon: "clock" as const,
    image: "/web-development/illustrations/concern-time.png",
    tone: "orange",
    title: "時間がない",
    body: (
      <>
        <strong>短納期</strong>
        で見栄えよく、ローコストでウェブサイトを作ってほしい
      </>
    ),
  },
];

const strengths = [
  {
    icon: "rocket" as const,
    image: "/web-development/illustrations/strength-fast.png",
    tone: "blue",
    title: "短納期",
    body: (
      <>
        内容にもよりますが<strong>おおよそ1週間</strong>、短いものだと
        <strong>3日間程度</strong>で第一弾を制作します。
      </>
    ),
    note: "お急ぎの案件もお気軽にご相談ください",
  },
  {
    icon: "quality" as const,
    image: "/web-development/illustrations/strength-quality.png",
    tone: "mint",
    title: "高品質",
    body: (
      <>
        <strong>AIを駆使した最新プログラミング</strong>
        で視覚的にわかりやすいページを作ります。
      </>
    ),
    note: "レスポンシブ対応・SEO対策も標準装備",
  },
  {
    icon: "cost" as const,
    image: "/web-development/illustrations/strength-low-cost.png",
    tone: "orange",
    title: "ローコスト",
    body: (
      <>
        1件あたり<strong className={styles.price}>5万円～10万円</strong>
        でHPやウェブサイトを制作いたします。
      </>
    ),
    note: "内容により変動します。まずはお見積りを",
  },
];

const steps = [
  {
    icon: "talk" as const,
    image: "/web-development/illustrations/flow-meeting.png",
    title: "お打合せ",
    body: "どんな内容にしたいのか参考URLを共有いただく。お電話やZoom等で事前お打合せ実施。",
    note: "アイデアが湧かない場合はこちらでたたき台を作成",
  },
  {
    icon: "edit" as const,
    image: "/web-development/illustrations/flow-design.png",
    title: "制作・修正",
    body: "たたき台をベースに修正を加える。お客様のご要望に合わせて細かく調整いたします。",
  },
  {
    icon: "cms" as const,
    image: "/web-development/illustrations/flow-cms.png",
    title: "CMS実装",
    body: "お客様がご自身で更新をかけたい部分にCMS機能を実装する。",
    note: "簡単操作で更新可能に！",
  },
  {
    icon: "gift" as const,
    image: "/web-development/illustrations/flow-delivery.png",
    title: "納品",
    body: "Netlifyというアドレス経由で納品いたします。",
    note: "ドメインの新規作成やお引越しは別途対応可能",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className={styles.page} id="web-development-page">
      <section className={styles.hero}>
        <div className={styles.blobPink} />
        <div className={styles.blobBlue} />
        <div className={styles.dots} />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>HASHIMOTO WEB</p>
            <h1>
              会社の魅力が、
              <br />
              <span>きちんと伝わる</span>
              <br />
              ホームページを。
            </h1>
            <p className={styles.lead}>
              広島の中小企業・個人事業者向けに、
              <br className={styles.desktopBreak} />
              見やすく、更新しやすいホームページを制作します。
            </p>
            <p className={styles.badge}>
              <span>¥</span>導入しやすいリーズナブルな制作費
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/contact">
                無料相談はこちら <Icon name="arrow" size={18} />
              </Link>
              <a className={styles.secondaryButton} href="#portfolio">
                制作事例を見る <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <div
            className={styles.devices}
            aria-label="制作サイトのパソコン・スマートフォン表示例"
          >
            <div className={styles.browser}>
              <div className={styles.browserBar}>
                <i />
                <i />
                <i />
                <span>www.company-example.jp</span>
              </div>
              <div className={styles.browserScreen}>
                <Image
                  src="/web-development/corporate-building-hero.png"
                  alt="企業サイトのホームページ表示例"
                  fill
                  priority
                  sizes="(max-width: 768px) 82vw, 520px"
                />
                <div className={styles.screenCopy}>
                  <small>会社のホームページ</small>
                  <strong>
                    想いを、かたちに。
                    <br />
                    未来へつなぐモノづくり。
                  </strong>
                  <span>詳しく見る</span>
                </div>
              </div>
            </div>
            <div className={styles.laptopBase} />
            <div className={styles.phone}>
              <div className={styles.phoneSpeaker} />
              <div className={styles.phoneScreen}>
                <Image
                  src="/web-development/corporate-building-hero.png"
                  alt="企業サイトのスマートフォン表示例"
                  fill
                  priority
                  sizes="150px"
                />
                <div className={`${styles.screenCopy} ${styles.phoneCopy}`}>
                  <small>会社のホームページ</small>
                  <strong>
                    想いを、かたちに。
                    <br />
                    未来へつなぐ。
                  </strong>
                  <span>詳しく見る</span>
                </div>
              </div>
              <div className={styles.phoneHome} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading kicker="YOUR CONCERNS">
            こんなお悩みありませんか？
          </SectionHeading>
          <div className={styles.threeColumns}>
            {concerns.map((item) => (
              <article
                className={`${styles.card} ${styles[item.tone]}`}
                key={item.title}
              >
                <div className={styles.cardIllustration}>
                  <Image src={item.image} alt="" fill sizes="150px" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className={styles.solution}>
            <span className={styles.megaphone}>
              <Icon name="talk" />
            </span>
            <div>
              <h2>そのお悩み、当社が解決します！</h2>
              <p>最新AI技術 × 豊富な実績 × 地域密着サポート</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <div className={styles.container}>
          <SectionHeading kicker="OUR STRENGTHS">
            当社の3つの強み
          </SectionHeading>
          <div className={styles.threeColumns}>
            {strengths.map((item) => (
              <article
                className={`${styles.card} ${styles.strengthCard} ${styles[item.tone]}`}
                key={item.title}
              >
                <div className={styles.cardIllustration}>
                  <Image src={item.image} alt="" fill sizes="150px" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <small>※ {item.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading kicker="BEST FEATURE">最大の特徴</SectionHeading>
          <div className={styles.feature}>
            <div className={styles.featureVisual}>
              <div className={styles.miniLaptop}>
                <Image
                  src="/microCMS.png"
                  alt="microCMS管理画面の表示例"
                  fill
                  sizes="(max-width: 768px) 80vw, 360px"
                />
              </div>
              <span>UPDATE</span>
            </div>
            <div className={styles.featureBody}>
              <h3>
                <span className={styles.featureTitlePhrase}>
                  ご自身でマイナーチェンジ
                </span>
                <wbr />
                <span className={styles.featureTitlePhrase}>
                  可能な状態で納品
                </span>
              </h3>
              <p>
                せっかく作ったウェブサイトも
                <strong>自身で更新を簡単にかけられないと運用しづらい</strong>
                ですよね。
              </p>
              <p>
                当社が納品するウェブサイトは、お客様がご自身で更新をかけたいと考えるセクションに
                <strong>無料のCMS機能（microCMS）</strong>
                を実装した状態でお渡しします。
              </p>
            </div>
            <div
              className={`${styles.listBox} ${styles.illustratedList} ${styles.mint}`}
            >
              <div>
                <h4>できること</h4>
                <CheckList
                  items={[
                    "ニュース・お知らせの追加・編集",
                    "商品・サービス情報の更新",
                    "画像の差し替え",
                    "営業時間・連絡先の変更",
                  ]}
                />
              </div>
              <div
                className={`${styles.featureCharacter} ${styles.characterLeft}`}
                aria-hidden="true"
              >
                <Image
                  src="/web-development/illustrations/cms-support-pair.png"
                  alt=""
                  fill
                  sizes="120px"
                />
              </div>
            </div>
            <div
              className={`${styles.listBox} ${styles.illustratedList} ${styles.orange}`}
            >
              <div>
                <h4>メリット</h4>
                <CheckList
                  items={[
                    "更新のたびに業者に依頼不要",
                    "継続的なコストが発生しない",
                    "リアルタイムで情報更新可能",
                    "専門知識不要で簡単操作",
                  ]}
                />
              </div>
              <div
                className={`${styles.featureCharacter} ${styles.characterRight}`}
                aria-hidden="true"
              >
                <Image
                  src="/web-development/illustrations/cms-support-pair.png"
                  alt=""
                  fill
                  sizes="120px"
                />
              </div>
            </div>
            <p className={styles.featureMessage}>
              美しいウェブサイトを
              <br />
              お客様ご自身で更新できるので、
              <br />
              その後の当社へのコストもかかりません！
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.flowSection}`}>
        <div className={styles.container}>
          <SectionHeading kicker="PROCESS">制作の流れ</SectionHeading>
          <div className={styles.flow}>
            {steps.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div className={styles.stepIllustration}>
                  <Image src={step.image} alt="" fill sizes="110px" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.note && <small>（{step.note}）</small>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="portfolio">
        <div className={styles.container}>
          <SectionHeading kicker="WORKS">これまでの制作実績</SectionHeading>
          <div className={styles.portfolioGrid}>
            <Portfolio
              image="/hptop.jpg"
              title="くつの橋本商店"
              body="1922年創業、広島の履物専門店のコーポレートサイト。microCMSとNext.jsで構築した自社サイト。"
              href="https://www.hs1922.com/"
              tone="pink"
            />
            <Portfolio
              image="/solana-preview.jpg"
              title="ケアステーションソラナ広島"
              body="介護サービス事業所のコーポレートサイト。サービス紹介とお問い合わせ機能を実装。"
              href="https://www.solana-care.com/"
              tone="blue"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p>{kicker}</p>
      <h2>{children}</h2>
      <span />
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" size={18} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Portfolio({
  image,
  title,
  body,
  href,
  tone,
}: {
  image: string;
  title: string;
  body: string;
  href: string;
  tone: "pink" | "blue";
}) {
  return (
    <article className={`${styles.portfolioCard} ${styles[tone]}`}>
      <div className={styles.portfolioImage}>
        <Image
          src={image}
          alt={`${title} サイトプレビュー`}
          fill
          sizes="(max-width: 768px) 88vw, 480px"
        />
      </div>
      <div className={styles.portfolioCopy}>
        <h3>{title}</h3>
        <p>{body}</p>
        <a href={href} target="_blank" rel="noopener noreferrer">
          サイトを見る <Icon name="arrow" size={18} />
        </a>
      </div>
    </article>
  );
}
