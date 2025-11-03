import Content from "@/app/components/Content";
import Ssoul from '@/public/ssoul.png'

function page() {
  const project = {
    src: Ssoul,
    title: "SSOUL",
    period: "2025.09.15 ~ 2025.10.16",
    role: ["팀장", "칵테일 페이지", "마이페이지"],
    team: "프론트엔드 3 , 백엔드 5 ",
    tech: ["Next.js", "TailwindCSS", "Tanstack-Query"],
    section: [
      {
        title: "프로젝트 소개",
        content: `칵테일에 입문하는 사람들과 홈 바텐더들을 위한 정보공유 커뮤니티 \n AI로 취향추천도 받고 레시피 공유도 가능하여 초보자 친화적인 칵테일 전문 서비스입니다.`,
      },
      {
        title: "담당 기능",
        lists: [
          {
            list: "칵테일 메인 페이지",
            detail: "데이터 정렬 및 검색기능과 무한스크롤을 구현하였습니다.",
          },
          {
            list: "마이페이지",
            detail:
              "내가 저장한 칵테일, 커뮤니티 활동, 알림과 닉네임수정 나의 알콜 도수 등 유저의 개인화된 서비스를 구현하였습니다",
          },
          {
            list: "공통 컴포넌트",
            detail:
              "확장성을 고려한 설계 및 코드 재사용성을 고려하여, \n 프로젝트 전체에서 일관된 디자인을 유지하였습니다.",
          },
        ],
      },
    ],
    link: [
      {
        url: "https://github.com/mtm-git1018/WEB5_6_HaeDokCoding_FE",
        title: "깃 허브",
      },
      {
        url: "https://www.ssoul.life/",
        title: "배포 링크",
      },
      {
        url: "/SSoulPDF.pdf",
        title: "자세히 보기",
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
          link={ project.link}
        />
      </div>
    </article>
  );
}
export default page