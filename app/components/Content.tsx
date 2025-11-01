import S from '@/app/style/content.module.css'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

interface Lists{
  list: string,
  detail:string
}

interface Link{
  title:string
  url:string
}
interface Section{
  title: string,
  content?:string
  lists?: Lists[]
}

interface Props {
  src:StaticImageData
  title: string,
  period: string,
  role:string[],
  team: number | string,
  tech: string[],
  section: Section[],
  link: Link[]
}

function Content({ src,title,period,role,team,tech,section,link}:Props) {
  return (
    <div className={S.contentWrap}>
      <div className={S.imageBox}>
        <Image
          src={src}
          alt={title}
          width={1400}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
          className={S.heroImg}
        />
      </div>
      <header className={S.title}>
        <h2>{title}</h2>
        <ul className={S.info}>
          <li className={S.infoitem}>
            <span className={S.label}>기간 : </span>
            <span>{period}</span>
          </li>
          <li className={S.infoitem}>
            <span className={S.label}>역할 : </span>
            <span>{role.join(", ")}</span>
          </li>
          <li className={S.infoitem}>
            <span className={S.label}>인원 : </span>
            <span>{team}명</span>
          </li>
        </ul>
      </header>

      <div className={S.techStack}>
        <h3>기술 스택</h3>
        <ul className={S.techList}>
          {tech.map((v, i) => (
            <li key={i} className={S.techTag}>
              {v}
            </li>
          ))}
        </ul>
      </div>

      <main className={S.mainContent}>
        {section.map(({ title, content, lists }, i) => (
          <section key={i} className={S.mainItems}>
            <h3>{title}</h3>
            {content && <p className={S.content}>{content}</p>}
            {lists &&
              lists.map(({ list, detail }, i) => (
                <span key={i} className={S.func}>
                  <h4>{list}</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{detail}</p>
                </span>
              ))}
          </section>
        ))}

        <div className={S.link}>
          <h3>링크</h3>

          <div className={S.btnWrap}>
            {link.map(({ url, title }) => (
              <Link href={url} key={title}>
                <button type="button" className={S.button}>
                  {title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Content