import {ReactLenis} from 'lenis/react'
import S from './page.module.css'
import Image from 'next/image'

function page() {

  const MY_SKILL = [
    {
      id: 1,
      title: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      id: 2,
      title: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      id: 3,
      title: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      id: 5,
      title: "Tanstack Query",
      src: "https://tanstack.com/images/logos/logo-color-100.png",
    },
    {
      id: 6,
      title: "Zustand",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
    },
    {
      id: 7,
      title: "Vite",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      id: 8,
      title: "Supabase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      id: 9,
      title: "Vercel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    },
    {
      id: 10,
      title: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
  ];

  const MY_PROFILE = [
    {
      id: 1,
      title: "Name",
      value: "문태민",
    },
    {
      id: 2,
      title: "Location",
      value: "경기 고양시",
    },
    {
      id: 3,
      title: "Email",
      value: "mtm1018@naver.com",
    },
    {
      id: 4,
      title: "Phone",
      value: "010-4089-1820",
    },
  ];

  return (
    <>
      <ReactLenis root />
      <section className="container">
        <div className="page-header">
          <div className={S.aboutMe}>
            <div className={S.introduce}>
              <h2>Introduce</h2>
              <p>
                안녕하세요, 프론트엔드 개발자 <b>문태민</b>입니다. <br />
                <br />
                저의 가장 큰 강점은 <b>적극적인 커뮤니케이션</b>입니다. <br />
                프로그래머스 데브코스에서 4개의 팀 프로젝트를 진행하며, <br />
                &quot;먼저 침묵을 깨고, 팀 분위기를 만드는 사람&quot; 이라는
                평가를 받았습니다. <br />
                먼저 의견을 내고, 막힌 문제는 즉시 질문하며 <br />
                팀원들과 함께 <b>해결책을 찾아가는 과정</b>에서 에너지를
                얻습니다. <br />
                <br />
                이런 태도는 <b>협업에서 빛을 발했습니다.</b> <br />
                팀장을 맡을때는, One Team이라는 생각 아래 다양한 의견을
                조율했고, <br />
                팀원들의 피드백을 즉시 반영하는 유연함으로 <br />
                모든 프로젝트에서 <b>협업 스킬 만점에 가까운 평가</b>를
                받았습니다. <br />
                특히 다년간의 서비스업 경험이 있어 사람을 대하는 것이 익숙하고,{" "}
                <br />
                이는 개발자로서 원활한 소통의 기반이 되었습니다 <br />
                <br />
                개발 할 때는 <b>팀과 함께 성장</b>하는 것을 중요하게 생각합니다{" "}
                <br />
                혼자 빠르게 가는 것 보다 함께 멀리 가는 것이 더 가치가 있다고
                믿으며, <br />
                React와 TypeScript를 기반으로 구현한 프로젝트를 통해 <br />
                협업하는 프론트엔드 개발자로 성장하고 있습니다.
              </p>
            </div>

            <div className={S.aboutRight}>
              <div className={S.skill}>
                <h2>Skill</h2>
                <ul className={S.mySkill}>
                  {MY_SKILL.map(({ id, title, src }) => (
                    <li key={id}>
                      <Image
                        src={src}
                        alt={title}
                        width={24}
                        height={24}
                        sizes="(max-width: 768px) 16px, 24px"
                        className={S.skillImg}
                      />{" "}
                      <p>{title}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={S.profile}>
                <h2>Profile</h2>
                <ul className={S.myProfile}>
                  {MY_PROFILE.map(({ id, title, value }) => (
                    <li key={id}>
                      <strong>{title}</strong>
                      <p>{value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default page