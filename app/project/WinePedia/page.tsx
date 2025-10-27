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
        content: `와인의 맛과 향이 어려운 소비자들을 위해 소비자 평가와 페어링 정보를 제공하며,\n
        커뮤니티에서 다양한 의견을 공유할 수 있습니다. 
        와인 초보자도 쉽게 자신에게 맞는 와인을 찾을 수 있도록
        직관적인 UI/UX를 제공합니다.`,
      },
      {
        title: "담당 기능",
        items: [
          "로그인/회원가입 (Supabase Auth 소셜 로그인)",
          "메인페이지 구현 (와인 추천 알고리즘)",
          "커뮤니티 댓글 CRUD",
          "전체 검색창 (최근 검색어, 인기 태그, 종류별 필터링)",
        ],
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
          section={ project.section } />
      </div>
    </article>
  );
}
export default page