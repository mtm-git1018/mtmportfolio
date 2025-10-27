import Content from '@/app/components/Content';
import WinePedia from '@/public/winepedia.png'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "WinePedia - Portfolio",
  description: "와인 큐레이터 서비스 프로젝트",

};


function page() {
  const project = {
    src: WinePedia,
    title: "Winepedia",
    period: "2025.08.22 ~ 2025.09.08",
    role: ["로그인", "메인페이지"],
    team: 4,
    tech: ["React", "TailwindCSS", "Zustand", "Swiper", "Supabase"],
    section: [
      {
        title: "프로젝트 소개",
        content: `와인의 맛과 향이 어려운 소비자들을 위해 소비자 평가와 페어링 정보를 제공하며,\n 커뮤니티에서 다양한 의견을 공유할 수 있습니다. 
        와인 초보자도 쉽게 자신에게 맞는 와인을 찾을 수 있도록 직관적인 UI/UX를 제공합니다.`,
      },
      {
        title: "담당 기능",
        lists: [
          {
            list: "로그인/회원가입",
            detail:
              "Supabase Auth를 사용하여 회원가입 및 로그인을 구현하였고, \n Zustand를 활용하여 전역상태에서 유저의 상태관리를 하였습니다.",
          },
          {
            list: "메인페이지",
            detail:
              "Swiper를 사용한 스크롤 애니메이션과 메인페이지 UI를 개발하였습니다",
          },
          {
            list: "검색창",
            detail:
              "검색창에서 Storage를 활용하여 최근검색어, 인기 태그, 종류별 필터링 기능을 개발하였습니다.",
          },
        ],
      },
    ],
    link: [
      {
        url: "https://github.com/mtm-git1018/FES-5-Project3-TEAM-3/tree/main",
        title: "깃 허브",
      },
      {
        url: "https://winepedia.vercel.app/",
        title: "배포 링크",
      },
      {
        url: "",
        title: "프레젠테이션 영상",
      },
    ],
  };

  return (
    <article className="container">
      <div className='page-header'>
        <Content src={project.src} title={project.title} period={project.period}
          role={project.role}
          team={project.team}
          tech={project.tech}
          section={project.section}
        link={project.link}/>
      </div>
    </article>
  );
}
export default page