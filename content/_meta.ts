import { pages } from '../lib/pages'

/**
 * Nextra 사이드바·헤더 네비게이션.
 *
 * 워크숍 페이지 제목은 `lib/pages.ts`에서 끌어옵니다. 카드 메타데이터와 네비
 * 라벨이 한 곳에서 관리되므로, 페이지 번호·제목을 바꿀 때 한 자리만 고치면
 * "워크숍 한눈에"와 사이드바가 같이 움직입니다.
 *
 * appendix·examples 같은 비-단원 페이지는 별도로 둡니다.
 */
const workshopMeta = pages.reduce<Record<string, string>>((acc, page) => {
  acc[page.id] = `${page.number}. ${page.title}`
  return acc
}, {})

export default {
  index: '워크숍 한눈에',
  ...workshopMeta,
  appendix: 'Appendix',
  examples: {
    title: '컴포넌트 예제',
    display: 'hidden',
  },
}
