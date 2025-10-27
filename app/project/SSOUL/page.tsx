import Content from "@/app/components/Content";
import Ssoul from '@/public/ssoul.png'

function page() {
  const project = {
    src: Ssoul,
    title: "SSOUL",
    period: "2025.09.15 ~ 2025.10.16",
    role: ["팀장", "칵테일 페이지","마이페이지"],
    team: '프론트엔드 3 , 백엔드 5 ',
    tech: ["Next.js", "TailwindCSS","Tanstack-Query"],
    section: [
      {
        title: "프로젝트 소개",
        content: `칵테일에 입문하는 사람들과 홈 바텐더들을 위한 정보공유 커뮤니티`,
      },
      {
        title: "담당 기능",
        items: [
          "칵테일 페이지(데이터 호출 및 정렬, 검색 기능)",
          "마이페이지(개인화 작업)",
          "공통 컴포넌트제작",
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