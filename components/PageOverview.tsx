import { pages } from '../lib/pages'
import { Card } from './Card'
import { CardGrid } from './CardGrid'

/**
 * 워크숍 한눈에 페이지의 카드 목록을 `lib/pages.ts`에서 끌어와 단일 열 목차로 렌더합니다.
 * 콘텐츠 페이지가 추가/수정되면 `lib/pages.ts`만 갱신하면 이 컴포넌트가 자동으로 따라옵니다.
 *
 * 레이아웃 원칙
 * - 7장 안팎의 페이지는 분기 없이 한 줄씩 쌓아 "목차 한 장"으로 본다
 * - 2열 grid·finale·follow-up 분기는 카드 톤을 4가지로 흩어놓아 한 화면이 갈라졌음 → 단일 열로 회수
 */
export function PageOverview() {
  return (
    <>
      <h2>{`학습 단원 ${pages.length}개`}</h2>
      <CardGrid columns={1}>
        {pages.map((page) => (
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
    </>
  )
}
