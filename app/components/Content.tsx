import S from '@/app/style/content.module.css'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface Section{
  title: string,
  content?:string
  items?:string[]
}

interface Props {
  src:StaticImageData
  title: string,
  period: string,
  role:string[],
  team: number,
  tech: string[],
  section:Section[]
}

function Content({ src,title,period,role,team,tech,section}:Props) {
  return (
    <div className={S.contentWrap}>
      <Image
        src={src}
        alt={title}
        width={1200}
        height={400}
        className={S.heroImg}
      />
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

      <main className={S.mainContent }>
        {section.map(({ title, content, items }, i) => (
          <section key={i} className={S.mainItems}>
            <h3>{title}</h3>
            {content && <p>{content}</p>}
            {items && (
              <ul>
                {items.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
export default Content