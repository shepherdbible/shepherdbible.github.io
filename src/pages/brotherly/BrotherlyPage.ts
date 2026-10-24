import type { Page } from "../../types";

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
          SHALOM, Brothers and Sisters, here are just a few brotherly suggestions.
        </p>
      </header>

      <article class="suggestions-content">
        ${section(1, "Modesty and Reverence in Church Gatherings", `
          <p>
            Suggestions for our church leaders, it is good to minimize disco like lights in church gathering. For our veteran sisters, good suggestion are modesty apparel dress choices, favoring dresses that echo reverence. For our longstanding brothers, I suggest selecting attire that is more appropriate than shorts, aligning with the occasion's significance
            <span class="scripture-ref">1 Timothy 2:9-10</span>
            <span class="scripture-ref">Romans 12:2</span>
            <span class="scripture-ref">1 Peter 3:3-4</span>
            <span class="scripture-ref">Isaiah 3:16-23</span>
            <span class="scripture-ref">1 John 2:16</span>
            <span class="scripture-ref">Revelation 17:4</span>
          </p>
          <p>
            When sharing God's Word online—whether through reels, posts, or live readings—let's also reflect His holiness in our appearance and presentation.
          </p>
          <blockquote>
            “So whether you eat or drink or whatever you do, do it all for the glory of God.”
            <cite>1 Corinthians 10:31</cite>
          </blockquote>
          <p>
            As followers of Christ, we are called to be models(lights) to the world—not only through our inner being, but also through our outward holiness. Our appearance should reflect the reverence we have for God's Word and the message we share.
          </p>
          <p>
            Let us honor the sacredness of the Bible by <strong>DRESSING MODESTLY AND REVERENTLY</strong>, even in casual or online settings. Our bodies are temples of the Holy Spirit
            <span class="scripture-ref">1 Corinthians 6:19</span>,
            and our online presence can inspire others toward deeper respect for God.
          </p>
          <h3>White upper clothes are also suitable for church gatherings.</h3>
          <img
            class="suggestions-image"
            src="https://raw.githubusercontent.com/nextcodelab/data-base-server/refs/heads/main/host_data/bible/images/modest5.png"
            alt="Children of the Light"
            loading="lazy"
          />
        `)}

        ${section(2, "Repentance, Confession, and Forgiveness", `
          <p>
            Embrace Repentance, Confession, Forgiveness, and Cleansing before Presenting Ourselves to the Lord
            <span class="scripture-ref">Matthew 5:23-24</span>.
          </p>
        `)}

        ${section(3, "Encourage Bible Study and Sharing", `
          <p>
            Promote learning and sharing by allowing others to express their opinions on topics such, as Bible study, meetings or fellowships. This will enable them to expand their knowledge and effectively convey the Good News to others. Lets teach them how to seek and apply the guidance of the Lord when spreading the Good News; it shouldn't be limited to leaders or teachers who have this knowledge. Encourage others to engage in reading the Bible so they can acquire the knowledge to share the Gospel
            <span class="scripture-ref">Colossians 3:16-17</span>.
          </p>
        `)}

        ${section(4, "Encourage Everyone to Share the Gospel", `
          <h3>
            PLEASE ENCOURAGE MEMBERS, THAT THEY CAN ALSO SHARE THE GOSPEL TO OTHERS FOR THE SALVATION FOR ETERNITY. JESUS IS COMING; LET'S CARRY THE BURDEN FOR THE LOST SOULS.
          </h3>
          <p>
            <em>Individually engaging with the Bible under the guidance of the Holy Spirit can assist individuals in building a solid foundation, ensuring they acquire a personal grasp of the truth. This footing can then shield them from falling easily for others' teachings, thereby upholding the truth for the succeeding generation.</em>
            <span class="scripture-ref">1 John 2:27</span>
          </p>
          <p>
            <em>The One and Only worthy Pioneer, Author and Finisher of our faith, spiritual lives</em>
            <span class="scripture-ref">Hebrews 12:2</span>.
            <br />
            *The Lord was showing me like a bright spotlight when we no longer see Jesus Christ as THE Pioneer and we all as His fellow spiritual pioneers along the Heavenly way He uniquely and personally leads us on from day one, then we are no longer on His way, since HE is the way; no other man is the way.
          </p>
          <blockquote>
            Blessed is he that readeth, and they that hear the words of this prophecy, and keep those things which are written therein: for the time is at hand.
            <cite>Revelation 1:3</cite>
          </blockquote>
        `)}

        ${section(5, "Help Those in Need", `
          <p>
            The Church follows in the footsteps of Lord Jesus and the Apostles by extending help to those, in need just as mentioned in
            <span class="scripture-ref">John 13:29</span>
            and Acts of Assistance
            <span class="scripture-ref">Romans 15:25-26</span>,
            <span class="scripture-ref">James 1:27</span>.
            This showcases the Churchs nature as it attends to the needs of the fortunate particularly widows and widowers. The act of providing assistance is done with humility with the purpose of bringing honor to God the Father and our Lord and Savior Jesus Christ
            <span class="scripture-ref">1 Peter 1:3</span>.
          </p>
        `)}

        ${section(6, "Anonymous Giving for Generous Hearts", `
          <p>
            A Guideline Inspired by our Lord Jesus's Teachings
            <span class="scripture-ref">Matthew 6:2-4</span>
          </p>
          <blockquote>
            When you give to the poor, don't let your left hand know what your right hand is doing.
            <cite>Matthew 6:3</cite>
          </blockquote>
          <p>
            When offering financial help to our fellow brethren within the Church, consider the example of placing the assistance in an envelope. Specify the recipient's name without indicating the source of the aid. This envelope can then be securely placed into the Offering Box.
          </p>
          <img
            class="suggestions-image suggestions-image-small"
            src="https://raw.githubusercontent.com/nextcodelab/data-base-server/refs/heads/main/host_data/bible/images/giving.png"
            alt="Anonymous Giving"
            loading="lazy"
          />
        `)}

        ${section(7, "Welcoming Newcomers to the Church", `
          <p>
            As followers of Christ, it is essential to show love and hospitality to newcomers in the church. Approach them with <strong>AGAPE</strong> love, acknowledging their presence and making them feel valued. Pray for them, extending blessings over their lives, and warmly welcome them into the church community.
          </p>
          <p>
            Encourage others in the congregation to help them feel at home, offering support and friendship. By doing so, we reflect the love of Christ, who calls us to welcome strangers as we would welcome Him:
          </p>
          <blockquote>
            Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.
            <cite>Hebrews 13:2</cite>
          </blockquote>
          <blockquote>
            Therefore welcome one another as Christ has welcomed you, for the glory of God.
            <cite>Romans 15:7</cite>
          </blockquote>
          <p>
            When visiting homes, take the time to pray for the entire household. By doing so, we demonstrate that we care not just about an individual, but about the whole family. This invites God’s peace and blessings into their home and fosters unity and faith within the household. Jesus Himself emphasized the importance of bringing peace to homes:
          </p>
          <blockquote>
            Whatever house you enter, first say, 'Peace to this house!' If a man of peace is there, your peace will rest on him; if not, it will return to you.
            <cite>Luke 10:5-6</cite>
          </blockquote>
          <p>
            Let us be intentional in creating a space where everyone feels accepted, loved, and part of God’s family.
          </p>
        `)}

        ${section(8, "Avoid Secret Societies and Cultic Practices", `
          <p>
            Do not join secret societies such as Freemasonry, the Illuminati, or any other cultic organizations or fraternities. Our bodies and lives belong solely to Jesus Christ, who purchased us with His blood
            <span class="scripture-ref">1 Corinthians 6:19-20</span>.
          </p>
          <p>
            Furthermore, refrain from pursuing worldly ambitions, fame, money, or the approval of people, as these often lead to pride and idolatry.
            <span class="scripture-ref">Matthew 16:26</span>
            <span class="scripture-ref">Galatians 1:10</span>
            <span class="scripture-ref">Matthew 6:33</span>.
          </p>
          <p>
            Instead, pursue <strong>FAITH</strong> and <strong>AGAPE LOVE</strong> and live humbly, recognizing that every achievement, blessing, and success is solely due to God's grace and mercy
            <span class="scripture-ref">Ephesians 2:8-9</span>
            <span class="scripture-ref">Lamentations 3:22-23</span>.
            Always give glory to God in all things, saying:
          </p>
          <blockquote>
            Not to us, O Lord, not to us, but to Your name give glory because of Your steadfast love and faithfulness.
            <cite>Psalm 115:1</cite>
          </blockquote>
          <p>
            <span class="scripture-ref">Luke 10:17-20</span>
          </p>
          <p>
            Let us dedicate our lives to honoring God in humility and obedience.
          </p>
        `)}

        <section class="suggestions-section suggestions-section-plain">
          <div class="suggestions-section-content">
            <h2>Care for God's Creation</h2>
            <p>
              In addition to our responsibility to care for natures, animals
              <span class="scripture-ref">Proverbs 12:10</span>
              and creations. In a world dominated by technology and endless hours spent staring at technologies, artificials and screens, nature offers a profound alternative for relaxation and renewal.
            </p>
            <p>
              <span class="scripture-ref">Psalm 19:1</span> states:
            </p>
            <blockquote>
              The heavens declare the glory of God; the skies proclaim the work of his hands.
              <cite>Psalm 19:1</cite>
            </blockquote>
            <p>
              This encourages us to step outside, marvel at the beauty of creation, and find peace away from the busyness of modern life. Whether it’s a walk in a quiet forest, watching a sunset, or listening to the gentle sounds of birds. which God created for us. Explore the beautiful nature and surroundings of God’s creation.
            </p>
            <p>
              By immersing ourselves in nature, we can find a deeper sense of calm, reduce stress, and gain a renewed perspective on life. Through this, we honor God’s intention for creation—not only as stewards but also as beneficiaries of its beauty and tranquility.
            </p>
          </div>
        </section>

        <section class="suggestions-peace">
          <span class="suggestions-eyebrow">OUR CALLING</span>
          <h2>Be an Ambassador of Peace and AGAPE Love</h2>
          <p>
            In a world filled with conflict, division, and noise, <strong>we</strong> have a higher calling — to be an <strong>Ambassador of Peace, bringing AGAPE to the world</strong>.
            <span class="scripture-ref">Matthew 5:9</span>
          </p>
          <blockquote>
            Blessed are the peacemakers, for they will be called children of God.
            <cite>Matthew 5:9</cite>
          </blockquote>
          <p>
            God has entrusted us with the message of reconciliation, to shine as a light in dark places, and to carry His "peace" wherever we go.
            Let these verses remind us of that mission and stir our heart to walk in it boldly.
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
              <p>Make every effort to live in peace with everyone and to be holy...</p>
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
              The digital Bible is created to help us view or read in any language anytime and anywhere, and it is also helpful for personal notes or sermon outlines. However, when sharing the Word with others — especially in fellowship, teaching, evangelism, or mission work such as walking house-to-house — we encourage using a printed Bible. Having a physical Bible makes the sharing more meaningful and focused.
            </p>
            <p class="suggestions-emphasis">
              Serve GOD with HOLINESS and RIGHTEOUSNESS.
            </p>
            <p>
              These suggestions are not for newcomers to our gatherings; our desire is to ensure everyone feels equally embraced. Please remember, these are just suggestions, out of love for the <strong>BODY OF CHRIST</strong>.
            </p>
          </div>
        </section>

        <section class="suggestions-doctrine">
          <span class="suggestions-eyebrow">A REFLECTION ON FAITH</span>
          <h2>Our God Is One</h2>
          <p>
            Our God is <strong>ONE GOD</strong>, yet He manifests in many ways. He is not divided; He is the same God who:
          </p>
          <ul>
            <li>Moves and works as the <strong>Holy Spirit</strong>.</li>
            <li>
              Manifested in <strong>flesh</strong>, as <strong>Christ Jesus</strong>, who is fully <strong>human</strong> (Son of Man) and fully <strong>divine</strong> (Son of God).
            </li>
            <li>
              Appeared in various forms in the Old Testament:
              <ul>
                <li>
                  As <strong>angels or other forms</strong>:
                  <ul>
                    <li>
                      <span class="scripture-ref">Genesis 18:1-2</span>
                      — God appeared to Abraham by the oaks of Mamre, and three men (angels) came to him.
                    </li>
                    <li>
                      <span class="scripture-ref">Genesis 32:24-30</span>
                      — God (the Angel of the Lord) wrestled with Jacob; Jacob called the place Peniel, saying he saw God face to face.
                    </li>
                  </ul>
                </li>
                <li>
                  As a <strong>man</strong> appearing to people:
                  <ul>
                    <li>
                      <span class="scripture-ref">Exodus 3:2-4</span>
                      — God appeared to Moses in the burning bush.
                    </li>
                    <li>
                      <span class="scripture-ref">Judges 13:3-22</span>
                      — The Angel of the Lord appeared to Manoah and his wife.
                    </li>
                  </ul>
                </li>
                <li>
                  Appeared in miraculous signs:
                  <ul>
                    <li>
                      <span class="scripture-ref">Exodus 3:2</span>
                      — Burning bush that was not consumed.
                    </li>
                    <li>
                      <span class="scripture-ref">Genesis 16:7-14</span>
                      — The Angel of the Lord met Hagar in the desert.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Is <strong>all-encompassing and present everywhere</strong>, as affirmed in the New Testament:
          </p>
          <ul class="suggestions-reference-list">
            <li><span class="scripture-ref">Colossians 1:17</span> — "He is before all things, and in Him all things hold together."</li>
            <li><span class="scripture-ref">Ephesians 4:6</span> — "One God and Father of all, who is over all and through all and in all."</li>
            <li><span class="scripture-ref">1 Kings 8:27</span> — "But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?"</li>
          </ul>
          <p>
            Finally, in history, He came as <strong>the Son of Man</strong> (fully human) and <strong>the Son of God</strong> (fully divine), fulfilling His plan of salvation.
          </p>
          <p>
            When God visited Abraham, it was the <strong>same One</strong> who is in all, and all-encompassing.
          </p>
          <p>
            <strong>God is one in essence</strong>, yet He can reveal Himself in different ways, showing His power, presence, and love throughout history.
          </p>
          <p>
            He lives in believers’ body as temple <span class="scripture-ref">1 Corinthians 3:16</span>.
            Christ lives in me <span class="scripture-ref">Galatians 2:20</span>.
            And Jesus Christ is the image of the invisible God <span class="scripture-ref">Colossians 1:15</span>,
            the infinite God fully manifested in Jesus Christ bodily <span class="scripture-ref">Colossians 2:9</span>,
            fulfilling the meaning of Emmanuel <span class="scripture-ref">Matthew 1:23</span>.
            God’s presence fills the universe, yet His Spirit is not limited by it <span class="scripture-ref">Psalm 139:7-10</span>.
          </p>
        </section>

        <section class="suggestions-closing">
          <h2>Spreading Kindness and Blessing</h2>
          <p>
            Spreading Kindness and Blessing to Everyone with Words:
            <em>'The Grace of the Lord Jesus Be With You'</em>,
            <span class="scripture-ref">John 20:19</span>
            <span class="scripture-ref">1 Corinthians 16:23</span>
            <span class="scripture-ref">Philippians 4:23</span>.
          </p>
          <p class="suggestions-shalom">SHALOM</p>
          <p class="suggestions-closing-note">
            “The Lord watch between you and me, when we are absent one from another.”
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