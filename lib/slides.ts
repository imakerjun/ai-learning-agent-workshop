export type SlideDeck = {
  dir: string
  count: number
  title: string
}

export const slideDecks: Record<string, SlideDeck> = {
  '/knowledge': {
    dir: '/slides/knowledge',
    count: 7,
    title: '지식을 잘 정리한다는 건 뭘까?',
  },
  '/mechanism': {
    dir: '/slides/mechanism',
    count: 7,
    title: '나·LLM·저장소 삼자간의 협업 관계',
  },
}

export function getDeckForPath(pathname: string): SlideDeck | null {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return slideDecks[normalized] ?? null
}
