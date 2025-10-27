import Content from "@/app/components/Content";
import Ssoul from '@/public/ssoul.png'

function page() {
  const project = {
    src: Ssoul,
    title: "SSOUL",
    period: "2025.09.15 ~ 2025.10.16",
    role: ["팀장", "칵테일 페이지","마이페이지"],
    team: 7,
    tech: ["Next.js", "TailwindCSS", "Zustand", "Tanstack-Query"],
    section: [
      {
        title: "프로젝트 소개",
        content: `홈 바텐더와 칵테일에 입문하는 사람들을 위한 정보공유 커뮤니티`,
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
      <div className="page-header">
        <Content
          src={project.src}
          title={project.title}
          period={project.period}
          role={project.role}
          team={project.team}
          tech={project.tech}
          section={project.section}
        />
      </div>
    </article>
  );
}
export default page