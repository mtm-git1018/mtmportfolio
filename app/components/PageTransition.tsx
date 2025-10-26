"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import { useEffect, useRef } from "react";
import gsap from "gsap";


interface PageTransitionProps {
  children: React.ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef<boolean>(false);
  const clickHandlersRef = useRef<Map<HTMLAnchorElement, (e: Event) => void>>(
    new Map()
  );

  const coverPage = (url: string) => {
    if (!logoRef.current || !logoOverlayRef.current) {
      isTransitioning.current = false;
      return;
    }

    const paths = logoRef.current.querySelectorAll<SVGPathElement>("path");
    if (paths.length === 0) {
      isTransitioning.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(url);
      },
    });

    // 블록 애니메이션
    tl.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "left",
    })
      .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
      // 로고가 나타날 때 모든 path를 완전히 숨김
      .set(paths, {
        strokeDashoffset: (i, target) => {
          return (target as SVGPathElement).getTotalLength();
        },
      });

    // 순차적으로 각 글자 그리기: m -> t세로선 -> t가로선 -> m
    const pathsArray = Array.from(paths);

    // 첫 번째 m
    tl.to(pathsArray[0], {
      strokeDashoffset: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // t 세로선 (약간 겹치면서)
    tl.to(
      pathsArray[1],
      {
        strokeDashoffset: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.3"
    );

    // t 가로선 (세로선이 거의 끝날 때)
    tl.to(
      pathsArray[2],
      {
        strokeDashoffset: 0,
        duration: 0.25,
        ease: "power2.inOut",
      },
      "-=0.2"
    );

    // 두 번째 m
    tl.to(
      pathsArray[3],
      {
        strokeDashoffset: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.3"
    )
      // 로고 오버레이 숨기기
      .to(logoOverlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
  };

  const revealPage = () => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });
    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();
    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

    // 로고 오버레이 초기 상태: 완전히 숨김
    if (logoOverlayRef.current) {
      gsap.set(logoOverlayRef.current, { opacity: 0 });
    }

    if (logoRef.current) {
      const paths = logoRef.current.querySelectorAll<SVGPathElement>("path");
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
        });
      });
    }

    revealPage();

    // 이벤트 핸들러 등록
    const links = document.querySelectorAll<HTMLAnchorElement>(`a[href^="/"]`);

    links.forEach((link) => {
      const clickHandler = (e: Event) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.href;
        const url = new URL(href).pathname;

        // 같은 페이지 클릭 시 아무것도 하지 않음
        if (url === pathname) {
          return;
        }

        // 이미 전환 중이면 무시
        if (isTransitioning.current) {
          return;
        }

        isTransitioning.current = true;
        coverPage(url);
      };

      // 핸들러 저장
      clickHandlersRef.current.set(link, clickHandler);
      link.addEventListener("click", clickHandler);
    });

    // Cleanup
    return () => {
      clickHandlersRef.current.forEach((handler, link) => {
        link.removeEventListener("click", handler);
      });
      clickHandlersRef.current.clear();
    };
  }, [router, pathname]);

  return (
    <>
      <div ref={overlayRef} className="transition-overlay"></div>
      <div ref={logoOverlayRef} className="logo-overlay" style={{ opacity: 0 }}>
        <div className="logo-container">
          <Logo ref={logoRef} />
        </div>
      </div>
      {children}
    </>
  );
}

export default PageTransition;
