/**
 * 페이지 카드 메타데이터 — 단일 소스(single source of truth).
 *
 * `content/index.mdx`의 "한눈에" 카드와 향후 페이지 단위 breadcrumb/네비게이션이
 * 모두 이 파일을 읽습니다. 콘텐츠 페이지(`content/{id}.mdx`)를 추가·수정·삭제할 때
 * 이 파일의 해당 항목을 함께 갱신해야 한 화면이 갈라지지 않습니다.
 *
 * 갱신 컨벤션
 * - id: 라우트 슬러그(`/agent` → `'agent'`). `content/{id}.mdx`와 1:1로 맞춘다
 * - number: 카드 제목 앞 번호. 도입은 '0', 학습 단원은 '1'~'N'
 * - description: 카드 본문 한 줄 — "이 페이지에서 무엇이 일어나는가"
 * - layout: 'intro' | 'grid' | 'finale' | 'follow-up' — 렌더 위치 결정
 */

export type PageLayout = 'intro' | 'grid' | 'finale' | 'follow-up'

export type PageSummary = {
  id: string
  number: string
  title: string
  icon: string
  href: string
  description: string
  layout: PageLayout
}

export const pages: PageSummary[] = [
  {
    id: 'agent',
    number: '1',
    title: '에이전트란 무엇일까?',
    icon: '🧭',
    href: '/agent',
    description: '"에이전트" 정의 대신 본인 손에 잡힐 장면을 한 문장으로 그려보기',
    layout: 'intro',
  },
  {
    id: 'knowledge',
    number: '2',
    title: '지식을 잘 정리한다는건 뭘까?',
    icon: '🪶',
    href: '/knowledge',
    description: '내 PKM의 통증 1줄 → PKM/PIM·정리=사고·카파시 짚고 본인 케이스 매칭',
    layout: 'grid',
  },
  {
    id: 'mechanism',
    number: '3',
    title: '나·LLM·저장소 삼자간의 협업 관계',
    icon: '📐',
    href: '/mechanism',
    description: '내가 쓴 글이 학습을 만들고, 시간순 평문이 LLM이 읽는 토대가 된다',
    layout: 'grid',
  },
  {
    id: 'setup',
    number: '4',
    title: '저장소 셋팅',
    icon: '🗂️',
    href: '/setup',
    description: '초안 저장소 가져오기 + `.claude/commands/` 자동 로드',
    layout: 'grid',
  },
  {
    id: 'outbox',
    number: '5',
    title: 'outbox 설계 + 데이터 + 커맨드',
    icon: '📤',
    href: '/outbox',
    description: '본인 데이터를 `.inbox/`에 넣고 `/돌아보기` 돌려서 `outbox/` 만들기',
    layout: 'grid',
  },
  {
    id: 'retrieve',
    number: '6',
    title: '오늘 한 줄',
    icon: '🎯',
    href: '/retrieve',
    description:
      '`/schedule`로 매일 아침 outbox·`.ai-wiki`를 읽고 숫자 3개 + 오늘 한 줄을 본인에게 보냄. 안 봐도 그만인 뉴스레터가 아니라 약속.',
    layout: 'finale',
  },
  {
    id: 'mission',
    number: '🚀',
    title: '이어가기 · 워크숍 이후 1주',
    icon: '🚀',
    href: '/mission',
    description: '내 outbox를 7일 굴리고 메타인지 1줄을 5개 모으는 자율 챌린지.',
    layout: 'follow-up',
  },
]

export function pagesByLayout(layout: PageLayout): PageSummary[] {
  return pages.filter((p) => p.layout === layout)
}
