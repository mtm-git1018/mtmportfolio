import S from './page.module.css'
import winePedia from '@/public/winepedia.png'
import Ssoul from '@/public/ssoul.png'
import Card from '../components/Card'
import Moff from '@/public/moff.png'

function page() {
  const MY_PROJECT = [
    {
      id: 1,
      src: Ssoul,
      title: "SSOUL",
      description: "칵테일 큐레이팅 서비스",
      period: "2025.09.15 ~ 2025.10.16",
      team: 7,
    },
    {
      id: 2,
      src: winePedia,
      title: "WinePedia",
      description: "와인 큐레이팅 서비스",
      period: "2025.08.22 ~ 2025.09.08",
      team: 4,
    }, {
      id: 3,
      src:Moff,
      title: '모여봐요 프둥이숲',
      description: '데브코스 수료생들의 스터디 포럼',
      period: '2025.07.22 ~ 2025.08.06',
      team:5
    }
  ];


  return (
    <>
      <div className="container">
        <div className="page-header">
          <ul className={S.projects}>
            {MY_PROJECT.map(({ id, src, title,description,period,team }) => (
              <li key={id}>
                <Card id={id} src={src} title={title} description={description} period={ period} team={team}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default page