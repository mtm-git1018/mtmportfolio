

import S from '@/app/style/card.module.css'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'


interface Props{
  id: number
  src: StaticImageData,
  title: string
  description: string,
  period: string,
  team : number
}

function Card({ id, src, title, description, period, team }: Props) {

  return (
    <Link href={`project/${title}`}>
      <article>
        <div className={S.card}>
          <div className={S.image}>
            <Image src={src} alt={title} className={S.thumbnail} fill />
          </div>

          <div className={S.cardinner}>
            <header className={S.cardinnerHeader}>
              <p className={S.index}>Project.0{id}</p>
            </header>
            <p className={S.title}>{title}</p>
            <p>{description}</p>
            <p>프로젝트 기간 : {period}</p>
            <p>참여 인원 : {team}명</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
export default Card