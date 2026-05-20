import type { PageSummary } from '../lib/pages'
import { pagesByLayout } from '../lib/pages'
import { Card } from './Card'
import { CardGrid } from './CardGrid'

/**
 * 워크숍 한눈에 페이지의 카드 목록을 `lib/pages.ts`에서 끌어와 렌더합니다.
 * 콘텐츠 페이지가 추가/수정되면 `lib/pages.ts`만 갱신하면 이 컴포넌트가 자동으로 따라옵니다.
 *
 * 레이아웃 규칙:
 * - intro: 본 그리드 위에 단독 카드 (0번 도입)
 * - grid:  2열 카드 그리드 (메인 학습 단원)
 * - finale: 그리드 아래 단독 카드 (워크숍 결과물)
 * - follow-up: "이어가기" 헤딩 아래 단독 카드
 */
export function PageOverview() {
  const intro = pagesByLayout('intro')
  const grid = pagesByLayout('grid')
  const finale = pagesByLayout('finale')
  const followUp = pagesByLayout('follow-up')

  const mainCount = intro.length + grid.length + finale.length

  return (
    <>
      <h2>{`학습 단원 ${mainCount}개`}</h2>

      {intro.map(renderSoloCard)}

      {grid.length > 0 && (
        <CardGrid columns={2}>
          {grid.map((page) => (
            <Card
              key={page.id}
              title={`${page.number}. ${page.title}`}
              icon={page.icon}
              href={page.href}
            >
              {page.description}
            </Card>
          ))}
        </CardGrid>
      )}

      {finale.map(renderSoloCard)}

      {followUp.length > 0 && (
        <>
          <h2>이어가기</h2>
          {followUp.map(renderSoloCard)}
        </>
      )}
    </>
  )
}

function renderSoloCard(page: PageSummary) {
  return (
    <Card
      key={page.id}
      title={formatCardTitle(page)}
      icon={page.icon}
      href={page.href}
    >
      {page.description}
    </Card>
  )
}

function formatCardTitle(page: PageSummary): string {
  // follow-up은 카드 제목 자체에 이모지/문구가 들어가 있어 번호 prefix를 생략
  if (page.layout === 'follow-up') return page.title
  return `${page.number}. ${page.title}`
}
