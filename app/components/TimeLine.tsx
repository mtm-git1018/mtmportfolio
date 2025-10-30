import S from '@/app/style/timeline.module.css'
import Link from 'next/link';

function TimeLine() {
  return (
    <section>
      <div className={S.timeLineWrap}>
        <div className={S.heroTitle}>
          <p>Frontend Developer Portfolio</p>
          <p>안녕하세요. 프론트엔드 개발자 문태민입니다.</p>
        </div>
        <div className={S.btnWrap}>
          <div className={S.btn}>
            <Link href="/about">
              <button type="button" className={S.button}>
                About Me
              </button>
            </Link>
          </div>
          <div className={S.btn}>
            <Link href="/project">
              <button type="button" className={S.button}>
                My Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TimeLine