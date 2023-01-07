import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Software Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        <h1>FULLSTACK WEB DEVELOPER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          debitis, corporis dicta adipisci vel amet inventore officia <br />{" "}
          earum quo quibusdam eius aut ex molestias ea suscipit ab quod voluptas
          voluptate placeat cum quidem consectetur aliquam, sequi eveniet.
          Dolorem, quas quae.
        </p>
        <div className="buttons">
          <a href="">
            I need a website <i className="fas fa-chevron-right"></i>
          </a>
          <a href="">
            I'm looking to hire <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>

      <main id="main-content">
        <div className="work">
          <h1>
            <q>WORK / EXPERIENCE</q>
          </h1>
          <p>
            I am currently working as a{" "}
            <span className="custom-text">web developer</span> in flatworld
            solutions. My expertise includes creating responsive and robust
            websites. I am proficient with{" "}
            <span className="custom-text">vue js</span> and{" "}
            <span className="custom-text">react js</span> as well, but my skills
            are not limited to front-end technologies. I indeed have a
            competitive experience with back-end technologies such as
            <span className="custom-text">php, mysql, javascript</span> and{" "}
            <span className="custom-text">node js</span>
            on the back-end.
          </p>
        </div>

        <div className="experience">
          <div className="flexbox">
            <div className="image">
              <Image
                src="/images/laptop.jpg"
                alt="Laptop Image"
                width={40}
                height={40}
              />
            </div>
            <div className="description">
              <h1>The Amazing Experience 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                corporis.
              </p>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flexbox">
            <div className="image">
              <Image
                src="/images/desktop.jpg"
                alt="Desktop Image"
                width={40}
                height={40}
              />
            </div>
            <div className="description">
              <h1>The Amazing Experience 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                corporis.
              </p>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flexbox">
            <div className="image">
              <Image
                src="/images/working.jpg"
                alt="Working Image"
                width={40}
                height={40}
              />
            </div>
            <div className="description">
              <h1>The Amazing Experience 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                corporis.
              </p>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
