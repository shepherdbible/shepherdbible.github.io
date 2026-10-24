
import type { Page } from "../types";

const section = (number: number, title: string, content: string) => `
  <section class="suggestions-section">
    <div class="suggestions-section-number">${number}</div>
    <div class="suggestions-section-content">
      <h2>${title}</h2>
      ${content}
    </div>
  </section>
`;

export const BrotherlyPage: Page = {
    render: () => /* html */ `
    <main class="suggestions-page">
      <header class="suggestions-hero">
        <span class="suggestions-eyebrow">FAITH · FELLOWSHIP · AGAPE LOVE</span>
        <h1>Brotherly Suggestions</h1>
        <p>
          Shalom, brothers and sisters. These suggestions are shared
          in love, with the desire to encourage holiness, spiritual
          growth, kindness, and unity in the Body of Christ.
        </p>
      </header>

      <article class="suggestions-content">
        <div class="suggestions-intro">
          <h2>Walking Together in Faith</h2>
          <p>
            Let everything we do reflect our love for God and our
            concern for one another. May these suggestions encourage
            us to honor the Lord in our gatherings, daily lives,
            and service to others.
          </p>
        </div>

        ${section(1, "Modesty and Reverence in Church Gatherings", `
          <p>
            Suggestions for our church leaders: it is good to minimize
            disco-like lights during church gatherings. For our sisters,
            modest apparel choices, favoring dresses that reflect
            reverence, may be considered.
          </p>
          <p>
            For our brothers, consider attire appropriate to the
            significance of the occasion.
            <span class="scripture-ref">1 Timothy 2:9–10</span>
            <span class="scripture-ref">Romans 12:2</span>
            <span class="scripture-ref">1 Peter 3:3–4</span>
            <span class="scripture-ref">Isaiah 3:16–23</span>
            <span class="scripture-ref">1 John 2:16</span>
            <span class="scripture-ref">Revelation 17:4</span>
          </p>
          <p>
            When sharing God's Word online—through reels, posts, or
            live readings—let us also reflect His holiness in our
            appearance and presentation.
          </p>
          <blockquote>
            “So whether you eat or drink or whatever you do, do it all
            for the glory of God.”
            <cite>1 Corinthians 10:31</cite>
          </blockquote>
          <p>
            As followers of Christ, we are called to be lights to the
            world—not only through our inner being, but also through
            our outward conduct. Let us honor the sacredness of the
            Bible by dressing modestly and reverently, even in casual
            or online settings.
          </p>
          <p>
            Our bodies are temples of the Holy Spirit
            <span class="scripture-ref">1 Corinthians 6:19</span>,
            and our online presence can inspire others toward deeper
            respect for God's Word.
          </p>
          <h3>White Upper Clothes</h3>
          <p>White upper clothing may also be suitable for church gatherings.</p>
          <img
            class="suggestions-image"
            src="https://raw.githubusercontent.com/nextcodelab/data-base-server/refs/heads/main/host_data/bible/images/modest5.png"
            alt="Children of the Light"
            loading="lazy"
          />
        `)}

        ${section(2, "Repentance, Confession, and Forgiveness", `
          <p>
            Embrace repentance, confession, forgiveness, and cleansing
            before presenting ourselves to the Lord.
            <span class="scripture-ref">Matthew 5:23–24</span>
          </p>
          <p>
            Let us seek reconciliation and approach God and one another
            with sincere hearts.
          </p>
        `)}

        ${section(3, "Encourage Bible Study and Sharing", `
          <p>
            Promote learning and sharing by allowing others to express
            their opinions during Bible studies, meetings, and fellowships.
            This enables everyone to expand their knowledge and convey
            the Good News more effectively.
          </p>
          <p>
            Let us teach others to seek and apply the Lord's guidance
            when sharing the Gospel. This responsibility should not be
            limited to leaders or teachers alone.
          </p>
          <p>
            Encourage everyone to read the Bible so they can grow in
            knowledge and share the Gospel.
            <span class="scripture-ref">Colossians 3:16–17</span>
          </p>
        `)}

        ${section(4, "Encourage Everyone to Share the Gospel", `
          <h3>
            Let us carry the burden for those who have not yet heard
            the Gospel. Jesus is coming!
          </h3>
          <p>
            Individually engaging with the Bible under the guidance
            of the Holy Spirit can help build a solid foundation and
            a personal understanding of the truth. This foundation
            can help us discern teachings and uphold the truth for
            succeeding generations.
            <span class="scripture-ref">1 John 2:27</span>
          </p>
          <p>
            Jesus Christ is the Pioneer, Author, and Finisher of our
            faith and spiritual lives.
            <span class="scripture-ref">Hebrews 12:2</span>
          </p>
          <p>
            The Lord leads each of us along the way. Jesus Himself
            is the way; no other person can take His place.
          </p>
          <blockquote>
            Blessed is he that readeth, and they that hear the words
            of this prophecy, and keep those things which are written
            therein: for the time is at hand.
            <cite>Revelation 1:3</cite>
          </blockquote>
        `)}

        ${section(5, "Help Those in Need", `
          <p>
            The Church follows the footsteps of the Lord Jesus and
            the Apostles by extending help to those in need.
            <span class="scripture-ref">John 13:29</span>
            <span class="scripture-ref">Romans 15:25–26</span>
            <span class="scripture-ref">James 1:27</span>
          </p>
          <p>
            The Church demonstrates its nature through caring for
            people in need, particularly widows and widowers.
            Assistance should be provided with humility, bringing
            honor to God the Father and our Lord and Savior Jesus Christ.
            <span class="scripture-ref">1 Peter 1:3</span>
          </p>
        `)}

        ${section(6, "Anonymous Giving for Generous Hearts", `
          <p>
            Inspired by our Lord Jesus' teaching:
            <span class="scripture-ref">Matthew 6:2–4</span>
          </p>
          <blockquote>
            When you give to the poor, don't let your left hand know
            what your right hand is doing.
            <cite>Matthew 6:3</cite>
          </blockquote>
          <p>
            When offering financial help to fellow believers within
            the Church, consider placing the assistance in an envelope.
            Write the recipient's name without indicating the source
            of the aid, then securely place the envelope into the
            offering box.
          </p>
          <img
            class="suggestions-image suggestions-image-small"
            src="https://raw.githubusercontent.com/nextcodelab/data-base-server/refs/heads/main/host_data/bible/images/giving.png"
            alt="Anonymous giving"
            loading="lazy"
          />
        `)}

        ${section(7, "Welcome Newcomers to the Church", `
          <p>
            As followers of Christ, it is essential to show love and
            hospitality to newcomers. Approach them with AGAPE love,
            acknowledge their presence, and help them feel valued.
          </p>
          <p>
            Pray for them, bless them, and warmly welcome them into
            the church community. Encourage the congregation to offer
            support, friendship, and a sense of belonging.
          </p>
          <p>
            We reflect the love of Christ when we welcome strangers
            as we would welcome Him.
          </p>
          <blockquote>
            Do not forget to show hospitality to strangers, for by
            so doing some people have shown hospitality to angels
            without knowing it.
            <cite>Hebrews 13:2</cite>
          </blockquote>
          <blockquote>
            Therefore welcome one another as Christ has welcomed you,
            for the glory of God.
            <cite>Romans 15:7</cite>
          </blockquote>
          <p>
            When visiting homes, take time to pray for the entire
            household. This demonstrates care for the whole family
            and encourages peace, unity, and faith.
          </p>
          <blockquote>
            Whatever house you enter, first say, “Peace to this house!”
            If a man of peace is there, your peace will rest on him;
            if not, it will return to you.
            <cite>Luke 10:5–6</cite>
          </blockquote>
          <p>
            Let us intentionally create a space where everyone feels
            accepted, loved, and part of God's family.
          </p>
        `)}

        ${section(8, "Avoid Secret Societies and Worldly Idolatry", `
          <p>
            The original suggestions caution against joining secret
            societies and cultic organizations. They emphasize that
            our bodies and lives belong to Jesus Christ.
            <span class="scripture-ref">1 Corinthians 6:19–20</span>
          </p>
          <p>
            They also encourage believers to avoid pursuing worldly
            ambitions, fame, money, or the approval of people when
            these become sources of pride or idolatry.
            <span class="scripture-ref">Matthew 16:26</span>
            <span class="scripture-ref">Galatians 1:10</span>
            <span class="scripture-ref">Matthew 6:33</span>
          </p>
          <p>
            Instead, pursue faith and AGAPE love. Live humbly,
            recognizing that our blessings and achievements are
            due to God's grace and mercy.
            <span class="scripture-ref">Ephesians 2:8–9</span>
            <span class="scripture-ref">Lamentations 3:22–23</span>
          </p>
          <blockquote>
            Not to us, O Lord, not to us, but to Your name give glory
            because of Your steadfast love and faithfulness.
            <cite>Psalm 115:1</cite>
          </blockquote>
          <p>
            Let us dedicate our lives to honoring God in humility
            and obedience.
          </p>
        `)}

        <section class="suggestions-section suggestions-section-plain">
          <div class="suggestions-section-content">
            <h2>Care for God's Creation</h2>
            <p>
              In addition to caring for people, let us care for animals
              and creation.
              <span class="scripture-ref">Proverbs 12:10</span>
            </p>
            <p>
              In a world dominated by technology and screens, nature
              offers an opportunity for rest and renewal.
              <span class="scripture-ref">Psalm 19:1</span>
            </p>
            <blockquote>
              The heavens declare the glory of God; the skies proclaim
              the work of his hands.
              <cite>Psalm 19:1</cite>
            </blockquote>
            <p>
              Take time to explore God's creation: walk through a quiet
              forest, watch a sunset, or listen to the birds. Through
              these experiences, we can find calm and renewed perspective
              while appreciating the beauty of creation.
            </p>
          </div>
        </section>

        <section class="suggestions-peace">
          <span class="suggestions-eyebrow">OUR CALLING</span>
          <h2>Be an Ambassador of Peace and AGAPE Love</h2>
          <p>
            In a world filled with conflict, division, and noise,
            we have a higher calling: to be ambassadors of peace,
            bringing AGAPE love to the world.
          </p>
          <blockquote>
            Blessed are the peacemakers, for they will be called
            children of God.
            <cite>Matthew 5:9</cite>
          </blockquote>
          <p>
            God has entrusted us with the message of reconciliation.
            Let us shine as lights in dark places and carry His peace
            wherever we go.
          </p>

          <div class="suggestions-verse-list">
            <div>
              <span class="scripture-ref">Matthew 5:9</span>
              <p>Blessed are the peacemakers, for they will be called children of God.</p>
            </div>
            <div>
              <span class="scripture-ref">Romans 12:18</span>
              <p>If it is possible, as far as it depends on you, live at peace with everyone.</p>
            </div>
            <div>
              <span class="scripture-ref">Hebrews 12:14</span>
              <p>Make every effort to live in peace with everyone and to be holy.</p>
            </div>
            <div>
              <span class="scripture-ref">James 3:18</span>
              <p>Peacemakers who sow in peace reap a harvest of righteousness.</p>
            </div>
          </div>
        </section>

        <section class="suggestions-section suggestions-section-plain">
          <div class="suggestions-section-content">
            <h2>Use the Bible in Everyday Life</h2>
            <p>
              A digital Bible helps us read God's Word in any language,
              at any time and anywhere. It is also useful for personal
              notes and sermon outlines.
            </p>
            <p>
              When sharing the Word during fellowship, teaching,
              evangelism, or house-to-house mission work, consider
              bringing a printed Bible. A physical Bible can make
              sharing more focused and meaningful.
            </p>
            <p class="suggestions-emphasis">
              Serve God with holiness and righteousness.
            </p>
            <p>
              These suggestions are not intended to make newcomers
              feel unwelcome. Our desire is for everyone to feel
              equally embraced. Please receive these words as
              suggestions shared out of love for the Body of Christ.
            </p>
          </div>
        </section>

        <section class="suggestions-doctrine">
          <span class="suggestions-eyebrow">A REFLECTION ON FAITH</span>
          <h2>Our God Is One</h2>
          <p>
            The original document expresses the belief that God is
            one, while describing different ways He has revealed
            Himself throughout biblical history.
          </p>
          <ul>
            <li>God moves and works as the Holy Spirit.</li>
            <li>
              God manifested in flesh as Christ Jesus, described
              in the document as fully human and fully divine.
            </li>
            <li>
              The Old Testament records appearances associated with
              God, including the following examples:
              <ul>
                <li>
                  <span class="scripture-ref">Genesis 18:1–2</span>
                  — God appeared to Abraham by the oaks of Mamre.
                </li>
                <li>
                  <span class="scripture-ref">Genesis 32:24–30</span>
                  — Jacob wrestled and called the place Peniel.
                </li>
                <li>
                  <span class="scripture-ref">Exodus 3:2–4</span>
                  — Moses encountered the burning bush.
                </li>
                <li>
                  <span class="scripture-ref">Judges 13:3–22</span>
                  — The Angel of the Lord appeared to Manoah and his wife.
                </li>
                <li>
                  <span class="scripture-ref">Genesis 16:7–14</span>
                  — The Angel of the Lord met Hagar in the desert.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            The document also points to the following passages when
            reflecting on God's presence and sovereignty:
          </p>
          <ul class="suggestions-reference-list">
            <li><span class="scripture-ref">Colossians 1:17</span> — He is before all things, and in Him all things hold together.</li>
            <li><span class="scripture-ref">Ephesians 4:6</span> — One God and Father of all, who is over all and through all and in all.</li>
            <li><span class="scripture-ref">1 Kings 8:27</span> — The heavens cannot contain God.</li>
            <li><span class="scripture-ref">1 Corinthians 3:16</span> — Believers are God's temple.</li>
            <li><span class="scripture-ref">Galatians 2:20</span> — Christ lives in me.</li>
            <li><span class="scripture-ref">Colossians 1:15</span> — Christ is the image of the invisible God.</li>
            <li><span class="scripture-ref">Colossians 2:9</span> — The fullness of deity dwells bodily in Christ.</li>
            <li><span class="scripture-ref">Matthew 1:23</span> — Emmanuel, God with us.</li>
            <li><span class="scripture-ref">Psalm 139:7–10</span> — God's presence is not limited by place.</li>
          </ul>
        </section>

        <section class="suggestions-closing">
          <h2>Spreading Kindness and Blessing</h2>
          <p>
            May we bless others with words of grace and kindness.
          </p>
          <blockquote>
            The grace of the Lord Jesus be with you.
            <cite>1 Corinthians 16:23</cite>
          </blockquote>
          <p class="suggestions-shalom">SHALOM</p>
          <p class="suggestions-closing-note">
            “The Lord watch between you and me, when we are absent
            one from another.”
          </p>
          <span class="scripture-ref">Genesis 31:49</span>
        </section>

        
      </article>
    </main>

    <style>
      .suggestions-page {
        --suggestions-accent: var(--color-primary, #800020);
        --suggestions-gold: var(--color-accent, #d4af37);
        max-width: 980px;
        margin: 0 auto;
        padding: 24px 20px 64px;
        color: var(--text-color, var(--color-text, inherit));
      }

      .suggestions-hero {
        padding: clamp(28px, 6vw, 64px) 0 36px;
        border-bottom: 1px solid var(--border-color, #ded8d0);
      }

      .suggestions-eyebrow {
        display: inline-block;
        margin-bottom: 12px;
        color: var(--suggestions-accent);
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.14em;
      }

      .suggestions-hero h1 {
        margin: 0 0 16px;
        font-size: clamp(2rem, 5vw, 3.4rem);
        line-height: 1.12;
        letter-spacing: -0.035em;
      }

      .suggestions-hero > p {
        max-width: 720px;
        margin: 0;
        font-size: 1.08rem;
        line-height: 1.8;
        opacity: 0.82;
      }

      .suggestions-content {
        padding-top: 12px;
      }

      .suggestions-intro {
        padding: 28px 0;
      }

      .suggestions-intro h2,
      .suggestions-section h2,
      .suggestions-peace h2,
      .suggestions-doctrine h2,
      .suggestions-closing h2 {
        margin: 0 0 14px;
        font-size: clamp(1.35rem, 3vw, 1.8rem);
        line-height: 1.3;
      }

      .suggestions-section {
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr);
        gap: 20px;
        padding: 30px 0;
        border-top: 1px solid var(--border-color, #ded8d0);
      }

      .suggestions-section-number {
        display: grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--suggestions-accent);
        color: white;
        font-weight: 700;
      }

      .suggestions-section-content {
        min-width: 0;
      }

      /* Keep unnumbered sections aligned with the text column above. */
      .suggestions-section-plain > .suggestions-section-content {
        grid-column: 2;
      }

      .suggestions-page p,
      .suggestions-page li {
        line-height: 1.85;
      }

      .suggestions-page p {
        margin: 0 0 16px;
        overflow-wrap: anywhere;
      }

      .suggestions-section-content,
      .suggestions-page li,
      .suggestions-page blockquote,
      .suggestions-page img {
        max-width: 100%;
        min-width: 0;
        box-sizing: border-box;
      }

      .suggestions-page h3 {
        margin: 20px 0 10px;
        font-size: 1.12rem;
        line-height: 1.5;
      }

      .suggestions-page ul {
        padding-left: 24px;
      }

      .suggestions-page li {
        margin-bottom: 8px;
      }

      .scripture-ref {
        display: inline-block;
        margin: 2px 4px 2px 0;
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--surface-secondary, rgba(128, 0, 32, 0.07));
        color: var(--suggestions-accent);
        font-size: 0.86em;
        font-weight: 650;
        white-space: normal;
      }

      .suggestions-page blockquote {
        margin: 22px 0;
        padding: 18px 22px;
        border-left: 3px solid var(--suggestions-gold);
        border-radius: 0 8px 8px 0;
        background: var(--surface-secondary, rgba(128, 0, 32, 0.045));
        font-size: 1.04rem;
        line-height: 1.85;
      }

      .suggestions-page blockquote cite {
        display: block;
        margin-top: 8px;
        color: var(--suggestions-accent);
        font-size: 0.88rem;
        font-style: normal;
        font-weight: 700;
      }

      .suggestions-image {
        display: block;
        width: 100%;
        max-width: 720px;
        height: auto;
        margin: 22px auto;
        border-radius: 12px;
      }

      .suggestions-image-small {
        max-width: 440px;
      }

      .suggestions-peace,
      .suggestions-doctrine,
      .suggestions-closing {
        margin-top: 28px;
        padding: clamp(22px, 4vw, 40px);
        border: 1px solid var(--border-color, #ded8d0);
        border-radius: 16px;
      }

      .suggestions-peace {
        border-top: 4px solid var(--suggestions-gold);
      }

      .suggestions-verse-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      .suggestions-verse-list > div {
        padding: 16px;
        border-radius: 10px;
        background: var(--surface-secondary, rgba(128, 0, 32, 0.045));
      }

      .suggestions-verse-list p {
        margin: 8px 0 0;
      }

      .suggestions-reference-list li {
        margin-bottom: 12px;
      }

      .suggestions-emphasis {
        color: var(--suggestions-accent);
        font-size: 1.1rem;
        font-weight: 800;
      }

      .suggestions-shalom {
        display: block;
        margin: 16px 0;
        color: var(--suggestions-accent);
        font-size: 1.3rem;
        font-weight: 800;
        letter-spacing: 0.2em;
      }

      .suggestions-closing-note {
        font-style: italic;
      }

      .suggestions-world {
        padding: 44px 16px 20px;
        text-align: center;
      }

      .suggestions-world img {
        display: block;
        width: 100%;
        max-width: 560px;
        height: auto;
        margin: 0 auto 24px;
        border-radius: 12px;
      }

      .suggestions-world h2 {
        font-size: clamp(1.5rem, 4vw, 2.2rem);
      }

      .suggestions-world > p {
        font-weight: 700;
      }

      @media (max-width: 600px) {
        .suggestions-page {
          padding: 16px 16px 40px;
        }

        .suggestions-section {
          grid-template-columns: 32px minmax(0, 1fr);
          gap: 12px;
          padding: 24px 0;
        }

        .suggestions-section-number {
          width: 32px;
          height: 32px;
          font-size: 0.9rem;
        }

        .suggestions-page blockquote {
          padding: 14px 16px;
        }

        .suggestions-verse-list {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `,
};
