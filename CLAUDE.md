# CLAUDE.md

> 새 세션이 이 저장소를 열면 가장 먼저 이 파일을 읽어 컨텍스트를 회복한다.

## 프로젝트

**나의 학습 에이전트** — [인프런 AI 엔지니어링 챌린지](https://www.inflearn.com/challenge/4%EC%A3%BC-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EB%A7%8C%EB%93%A4%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-ai-%EC%97%90%EC%9D%B4) 5회차 라이브 도큐.

- 저장소: `imakerjun/my-learning-agent` (public)
- 배포: Vercel 자동 (main 푸시 트리거)
- 멘토: 메이커준 (임동준 · `imakerjun`)
- 챌린지: 2026-05-13 ~ 06-10, 15명 · 3명 1팀, 5회차

### 본질 (모든 회차 공통 검증축)

> **나를 점점 더 똑똑하게 만들어주는 학습 에이전트.**
> 작지만 유용한 v1을 만들고, 매일 점진 개선한다.

5회차 발표는 앱·에이전트 기능 소개가 아니라 **자신이 만든 에이전트를 통해 자신이 어떤 변화를 경험했는가**. '나' 데모데이.

## 회차

| 회차 | 일시 | 메인 테마 | 도큐 |
|---|---|---|---|
| 1회차 | 5/13 (수) 19:30~21:30 | Prompt Engineering | `/week1` |
| 2회차 | 5/20 (수) 19:30~21:30 | LLM과 나, 둘 다를 위한 저장소 | `/week2` |
| 3회차 | 5/27 (수) 오프라인 | Extended Thinking | (placeholder) |
| 4회차 | 6/5 (금) | Agentic Systems | (placeholder) |
| 5회차 | 6/10 (수) | 최종 발표 · '나' 데모데이 | (placeholder) |

## 운영 DNA (5회차 전체 관통)

1. **강의량 ≠ 개입량** — 가르치는 시간은 적게, 만든 것에 매주 끼어든다
2. **메인 액티비티 2개 구조** — 회차당 핵심 액티비티 2개로 시간 보호
3. **거꾸로 가는 Anthropic 3원칙** — 초안 → 테스트 → 성공 기준 순서로

## 디렉터리

```
my-learning-agent/
├── app/
│   ├── [[...mdxPath]]/page.tsx
│   ├── globals.css              # Folio 토큰 + 노션 스타일 본문 타이포
│   └── layout.tsx               # 메타데이터, 로고, 푸터, docsRepositoryBase
├── components/                  # MDX 커스텀 컴포넌트
│   ├── Hero / Card / CardGrid / Callout / Steps / Timeline / Toggle / Placeholder
│   ├── SlideMode                # 강사 hidden feature, Shift+P 단축키로만 진입
│   └── *.module.css
├── lib/
│   └── slides.ts                # 라우트 → 슬라이드 데크 정적 맵
├── content/                     # MDX 콘텐츠
│   ├── index.mdx                # 랜딩
│   ├── _meta.ts                 # 최상위 네비 (about / week1 / week2 / ...)
│   ├── about/
│   │   ├── _meta.ts
│   │   ├── index.mdx            # 챌린지 한눈에 + 인프런 링크 + 학습 철학
│   │   ├── philosophy.mdx       # 운영 철학 3가지
│   │   └── schedule.mdx         # 회차 일정 표
│   ├── week1/
│   │   ├── _meta.ts             # 한눈에 / 흐름 14블록 / 시트 6장 / 미션
│   │   ├── index.mdx
│   │   ├── flow.mdx
│   │   ├── sheets.mdx
│   │   └── mission.mdx
│   └── week2/
│       ├── _meta.ts             # 한눈에 / 5학습 단원 / 미션
│       ├── index.mdx
│       ├── knowledge.mdx        # 1. 지식을 잘 정리한다는건 뭘까?
│       ├── mechanism.mdx        # 2. 핵심 메커니즘 라이브 구성
│       ├── setup.mdx            # 3. 저장소 셋팅
│       ├── outbox.mdx           # 4. outbox 설계 + 데이터 + 커맨드
│       ├── retrieve.mdx         # 5. 오늘 한 줄 (매일 아침 도착하는 메타인지 메일)
│       └── mission.mdx
├── public/
│   ├── illustrations/           # japan-images에서 가져온 헤딩 일러스트 4종
│   │   ├── heading-live.png     # AI と話す人 — 이번 주 라이브
│   │   ├── heading-upcoming.png # スケジュール書かれたカレンダー — 예정 회차
│   │   ├── heading-demoday.png  # スピーチをしている学生 — 데모데이
│   │   └── heading-tagline.png  # 目標を定めた人 — 챌린지 한 줄
│   └── slides/                  # 라우트별 강의 슬라이드 (Shift+P 모드용)
│       └── week2/knowledge/     # 1.png ~ 7.png
├── mdx-components.tsx           # Card/Callout/CardGrid 등을 글로벌 MDX 사용 등록
├── next.config.mjs
└── package.json                 # Nextra 4.5 / Next 15 / React 19
```

## 콘텐츠 작성 컨벤션

### 페이지 메타데이터 — 단일 소스 (`lib/pages.ts`)

워크숍 페이지의 카드 메타(번호·제목·아이콘·meta chip·한 줄 설명)는 **[`lib/pages.ts`](lib/pages.ts)** 한 곳에서 관리한다. "워크숍 한눈에" 페이지(`content/index.mdx`)의 카드와 사이드바(`content/_meta.ts`) 라벨이 모두 이 레지스트리를 읽어 렌더되므로, 한 자리만 고치면 두 자리가 같이 움직인다.

| 무엇을 바꿀 때 | 어디를 손대나 |
|---|---|
| 페이지 번호·제목·meta chip·한 줄 설명 | `lib/pages.ts` |
| 새 페이지 추가 | `content/{id}.mdx` 작성 + `lib/pages.ts`에 항목 추가 |
| 페이지 layout 위치(intro / grid / finale / follow-up) | `lib/pages.ts`의 `layout` 필드 |
| 카드를 임시로 숨기기 | `lib/pages.ts`에서 해당 항목 주석 처리 |

**🚧 가드레일**

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| `content/index.mdx`에 카드를 직접 박음 | `<Card title="6. 오늘 한 줄" .../>` 하드코딩 | `<PageOverview />` 한 줄 | 카드를 직접 박으면 `lib/pages.ts`와 갈라져 사이드바·overview가 드리프트한다. 새 페이지가 추가되면 누군가 양쪽을 다 고쳐야 하는데, 한쪽을 빼먹는 게 가장 흔한 사고. |
| `content/_meta.ts`에 번호·제목 하드코딩 | `knowledge: '2. 지식을 잘 정리한다는건 뭘까?'` 직접 적기 | `pages.reduce(...)`로 레지스트리에서 끌어쓰기 | 페이지 헤딩(`# 2. 지식...`)을 1로 바꿔도 사이드바가 2에 머무는 드리프트 차단. `_meta.ts`는 `lib/pages.ts`의 derived view. |
| 카드 본문에 markdown blockquote | `<PageOverview>` 내부에 markdown 시도 | description은 plain 문자열로 (인라인 코드 ` ` 정도만 OK) | `description`은 JSX 노드가 아니라 string 그대로 Card children에 전달된다. blockquote·헤딩은 안 박힘. |
| MDX 본문 링크 텍스트에 페이지 번호 박음 | `[3. 셋팅](/setup)` · `[6. 오늘 한 줄](/retrieve)` | `[셋팅](/setup)` · `[오늘 한 줄](/retrieve)` — 번호 없이 명사구만 | 링크 텍스트는 사이드바·overview 카드가 이미 번호를 보여주므로 본문 산문에서는 번호 불필요. 번호를 박는 순간 두 번째 소스가 생겨 `lib/pages.ts`를 흔들면 본문 링크가 드리프트한다(예: `# 4. 저장소 셋팅` 페이지를 `[3. 셋팅]`로 가리키는 사고). 검출: `grep -rnE "\[[0-9]+\. [^]]*\]\(/" content/ --include="*.mdx"` 결과 0건이어야 함. |

**적용 순서 — 새 페이지 추가**
1. `content/{id}.mdx` 작성 (페이지 헤딩 `# N. 제목`)
2. `lib/pages.ts`에 항목 추가 (같은 번호·제목·layout)
3. `npm run build`로 검증 — `_meta.ts`·index.mdx가 자동으로 따라옴

**왜 훅이 아니라 단일 소스인가** — 훅(file watcher)은 변경 감지와 갱신 두 단계를 모두 신뢰해야 하고, 빌드 시점·개발 시점 동작이 갈린다. 단일 소스는 양쪽 페이지가 같은 데이터를 읽기만 하면 되므로 드리프트가 원천 차단된다.

### _meta.ts (보조)

- 최상위 (`content/_meta.ts`): 워크숍 페이지는 `lib/pages.ts`에서 derived. `appendix`·`examples` 같은 비-단원 페이지만 직접 정의.
- 하위 디렉터리 (`content/{section}/_meta.ts`): 해당 섹션 사이드바.
- 키와 같은 이름의 `.mdx` 파일이 반드시 있어야 함 — 없으면 빌드 차단.

### MDX 헤딩

메인 헤딩(`##`)에 일러스트 prefix를 붙이는 패턴. 마크다운 TOC·id 자동 생성 보존.

```mdx
## ![](/illustrations/heading-live.png) 이번 주 라이브
```

`article h2 img { width:44px; height:44px; }` 규칙이 `globals.css`에 박혀 있어 자동 정렬됨.

### Callout

| type | 색 | 용도 |
|---|---|---|
| `tip` | 초록 | 권장·격언·핵심 |
| `info` | 파랑 | 인용·강조 한 줄 |
| `warning` | 노랑 | 함정·시간 박스·주의 |
| `danger` | 빨강 | 금지·실패 시그널 |
| `note` | 회색 | 보조 정보 |

**🚧 Callout 안에 blockquote(`> ...`) 절대 금지 — 이중 박스 발생**

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| Callout 안에 `>` 인용 | `<Callout type="info">`<br />`> "한 줄 인용"`<br />`</Callout>` | `<Callout type="info">`<br />`"한 줄 인용"`<br />`</Callout>` | MDX는 JSX 태그 사이를 다시 markdown으로 파싱한다. `>`는 진짜 `<blockquote>` 엘리먼트가 되고 `article blockquote`의 파란 좌측 바·tint 배경(globals.css L247)이 적용돼 Callout 박스 안에 또 박스가 생긴다. 한 줄 인용은 Callout 자체가 강조 박스 역할을 하므로 `>` 불필요. |

검출 한 줄 명령 — 결과가 0건이어야 한다:

```bash
for f in $(find content -name "*.mdx"); do perl -0777 -ne 'while (/<Callout[^>]*>(.*?)<\/Callout>/sg) { my $body = $1; if ($body =~ /^\s*>\s/m) { print "'"'"'$f'"'"': nested blockquote\n" } }' "$f"; done
```

### Card / CardGrid

```mdx
<CardGrid columns={2}>
  <Card title="제목" icon="🎯" href="/path" meta="부가 정보">
    한 줄 설명
  </Card>
  <Card title="제목" icon="🧭" disabled meta="예정">
    비활성 카드 (점선 보더)
  </Card>
</CardGrid>
```

- 따뜻한 오프화이트(`#f7f6f3`) 배경 — 흰 페이지에서 분리
- 호버: 배경이 살짝 더 짙어짐 + 1px lift + shadow 깊어짐 + 화살표만 액센트 컬러 (테두리는 같은 hue 안에서 짙어지기만; 강한 색 X)
- 5개 이상이면 5번째는 단독 finale card로 빼는 게 시각적으로 자연스러움 (참고: `content/index.mdx` 데모데이 섹션)

**🚧 카드 컴포넌트 가드레일 — 손대기 전에 반드시 읽기**

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| 그리드 컬럼 폭 불균등 | `grid-template-columns: repeat(2, 1fr)` | `grid-template-columns: repeat(2, minmax(0, 1fr))` | `1fr`은 실제 `minmax(auto, 1fr)`이라 콘텐츠 min-content가 컬럼을 밀어내면 폭이 깨진다. |
| 이모지마다 본문 시작점이 다름 | `.icon { /* width 없음 */ }` | `.icon { width: 1.6em; text-align: center; }` | 🚦/📋/🎯/📚는 실제 렌더 폭이 다르므로 폭 고정 필요. |
| 호버 시 카드가 "사라지는" 느낌 | `background: #fff (밝아짐)` | `background: #f3f1ec (짙어짐)` | 페이지 흰 배경에 녹아들지 않게 — 호버는 항상 "더 짙어지는" 방향. |
| 액센트 컬러가 테두리에 튐 | 호버 시 `border-color: blue` | 호버 시 화살표만 액센트, 테두리는 회색 짙어짐 | 강한 채도색은 사용자 멘탈모델에서 focus ring/selected로 읽힘. 액센트는 "다음 행동" 한 곳에만. |

### 페이지 레이아웃 가드레일

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| 컨텐츠가 좌측으로 쏠려 보임 | `max-width: 720px;` (단독) | `max-width: 720px; margin-inline: auto;` (짝) | `max-width`만 주면 블록이 좁아질 뿐 위치는 안 바뀜 — 부모 왼쪽에 달라붙음. Hero(text-align: center, 풀폭) 아래 컨텐츠가 좌측 쏠리는 시각 비대칭의 원인. |
| Hero 폭과 본문 폭이 다름 | Hero 풀폭 + 본문 720px **좌측 정렬** | Hero 풀폭(text-align: center) + 본문 720px **+ margin-inline: auto** | 두 요소의 가운데 축이 같아야 페이지가 단단하게 느껴진다. |
| 인용(blockquote) 박스가 본문 그리드 밖으로 튀어나옴 | 텍스트 시작점을 맞추려고 `margin-left: calc(...)`로 박스 자체를 왼쪽으로 빼기 | `max-width: 800px; margin-inline: auto; box-sizing: border-box;` | 강조 박스는 외곽선이 본문 그리드와 맞아야 안정적으로 보인다. border/padding 때문에 실제 박스가 800px 밖으로 커지지 않도록 `box-sizing: border-box`를 같이 둔다. Nextra Tailwind blockquote 스타일을 이기기 위해 blockquote 직접 규칙에는 `!important` 필요. |

### Steps / Timeline

순서 있는 작업·일정은 `<Steps>`/`<Timeline>` 사용. 일반 ol/ul보다 시각 위계가 명확.

### 범위·기호 표기 가드레일

**🚧 한국어 작성자가 자연스럽게 쓰는 기호 중 GFM 마크다운이 다르게 해석하는 케이스. 입력 시점에 박아둘 것.**

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| `숫자~숫자` 범위가 strikethrough로 묶임 | `## 11~13. 마무리 · 10~15분` | `## 11〜13. 마무리 · 10〜15분` (wave dash U+301C) | GFM은 `~text~` / `~~text~~`를 strikethrough로 해석. 한 줄에 `~`가 짝으로 있으면 그 사이가 취소선이 된다. 헤딩·표·본문 모두 동일. |
| 한 줄에 `~` 여러 개 (1〜3 / 4〜6) | `1~3 빨강 / 4~6 노랑 / 7~10 초록` | `1〜3 빨강 / 4〜6 노랑 / 7〜10 초록` | `~`가 3개 이상이라도 짝이 만들어지는 순간 strikethrough. 한 줄에 `~`가 2개 이상이면 무조건 위험. |
| 본문에 단독 `*`, `_` 짝 | `*강조 아닌데*` | `\*강조 아닌데\*` 또는 다른 기호로 | 짝 맞는 `*`/`_`는 italic. 한국어 본문에는 거의 안 쓰지만 ASCII art·코드 설명에서 사고 자주 남. |

검출 한 줄 명령: `grep -rn -E "[0-9]+~[0-9]+" content/ --include="*.mdx"` — 결과가 0건이어야 한다.

일괄 변환: `find content -name "*.mdx" -exec perl -i -pe 's/(\d+)~(\d+)/$1〜$2/g' {} +`

### 완결 문장 가드레일

**🚧 본문 문장은 명사·명사구로 끊지 말고 항상 종결어미로 마무리. 라이브 도큐 톤은 격식체(-입니다/-습니다/-합니다)가 기본.**

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| 문단을 명사구로 끊음 | "출발점은 검색·도구·기억으로 보강된 LLM 한 개" | "출발점은 검색·도구·기억으로 보강된 LLM 한 개**입니다.**" | 한국어 본문에서 명사 종결은 미완료처럼 읽힌다. 강의록·도큐 톤이 갑자기 무너지는 지점. 2026-05-21 사용자 피드백. |
| Callout 본문 명사 종결 | "유지보수 비용이 0에 가까워지니 위키가 살아남는다" (혼재) | 한 페이지 안에서 -다 / -입니다 중 하나로 통일. 인용 박스 안 한 줄 인용은 예외 가능 | 한 페이지 안에서 -다 종결과 -입니다가 섞이면 톤이 깨진다. **격식체 -입니다 기본**, 인용·격언만 -다 허용. |

**적용 범위** — 문단 / Callout 본문 / Card 본문 텍스트 / Steps·Step 본문 / Toggle 본문. **명사구 OK 영역** — 표 셀, Card `meta`/`title` prop, 사이드바 라벨, 헤딩, `라벨 — 짧은 설명` 패턴의 라벨부.

**검출** — 작성 후 자가 점검 1회. `grep -rnE "[가-힣A-Za-z0-9\)]\s*$" content/` 로 라인 말미 훑고, 문단·Callout·카드 본문이면 손본다 (표·prop·헤딩은 무시).

## 🔒 결정 완료 (변경 전 사용자 합의 필요)

> 새 세션이 이 값을 임의로 바꾸지 말 것. 같은 결정을 반복적으로 흔드는 것이 가장 큰 시간 낭비. 사용자가 "조금만 더 진하게/넓게" 류 요청을 해도 한 번에 한 토큰씩 → 시각 확인 → 다음 토큰. 같은 파일을 한 세션에 3번 이상 건드리고 있으면 무엇이 결정 미달인지 사용자에게 질문.

| 항목 | 값 | 결정 근거 |
|---|---|---|
| 본문 max-width | **800px** | 16px·한국어 ~50자/줄, Toss/Naver D2 기준. 720은 article-TOC 사이 빈 공간이 컸음 |
| 본문 색 | **rgb(55, 53, 47)** (#37352F) | 노션 본문색. 순흑(#000)은 halation 유발 |
| Pretendard weight | **430** | 시스템 폰트 시각 무게 맞춤. 400은 한글 줄기가 얇음 |
| letter-spacing | **0** | 한글에서 음수 값은 글자 두께 인식을 깎음 |
| font-smoothing | **subpixel-antialiased** | 한국어 본문에서 RGB 보간이 줄기를 또렷하게 |
| 다크 모드 토글 | **OFF** (`darkMode={false}` in `app/layout.tsx`) | 라이브 도큐 통일성 우선. 단, `:global(.dark)` CSS는 보존 (시스템 prefers-color-scheme 대비) |
| 다크 카드 톤 | `rgba(255,255,255,0.05)` bg / `0.14` border | 검정 배경에서 카드 경계가 묻히지 않도록 노션 다크 톤 맞춤 |
| 모바일 mermaid | `min-width: 560px` + 부모 가로 스크롤 (`@media (max-width: 768px)`) | SVG inline `max-width`로 인한 텍스트 축소 방지. 새 mermaid 추가 시 별도 처리 불필요 |
| 검색 엔진 | **Pagefind** (`postbuild`로 인덱스 생성, devDep `pagefind`) | Nextra 4가 FlexSearch → Pagefind로 변경. **빌드 통합이 수동**. **`npm run dev`에서는 검색 동작 X** — 검증은 `npm run build && npm run start`로. Vercel은 postbuild를 자동 호출하므로 배포 환경에서는 정상 동작. 한국어 stemming 미지원 (어근 매칭 X)은 Pagefind 자체 제약 |
| 범위 표기 | **물결대시 `〜` (U+301C)** | GFM의 `~text~` strikethrough 충돌 차단. 한국·일본 출판 표준 기호라 본문 톤도 자연스러움. `숫자~숫자` 입력 시 사고 발생 — 변경 시 위 "범위·기호 표기 가드레일" 표도 같이 갱신 |
| 슬라이드 모드 단축키 | **`Shift + P`** (Presentation) | 라이브 강의 중 단축키 하나로 풀스크린 전환. `Cmd+K`(검색)·`Cmd+B`(사이드바)와 충돌 X. 모드 안: `←/→` 이동, `1〜9` 점프, `Home/End`, `Esc`/`q` 닫기, Space/PageDown도 다음 슬라이드 |
| 슬라이드 모드 노출 | **UI 노출 없음, 단축키 전용** | 강사 hidden feature. 사이드바·헤더·검색에 흔적 X — 수강생 화면 공유 시 자연스럽게 강의 모드만 보이도록 |
| 슬라이드 배경 | **`#000`** | 강의장 프로젝션·모니터 가독성 우선. 노션 본문 톤(#37352F)과 별개 — 발표 컨텍스트는 검정 단색이 시각 노이즈 최소 |
| 슬라이드 이미지 컨벤션 | **`public/slides/<route>/<n>.png` 1-indexed** | 라우트와 폴더가 1:1로 매칭. 새 데크 추가는 폴더 하나 + `lib/slides.ts` 한 줄. 비율은 16:9 가정 + `object-fit: contain` (다른 비율도 깨지지 않음) |
| 코드 블록 | **노션 스킨 + clipboard 버튼** — `components/CodeBlock.tsx` (Nextra `Pre` wrap) + `next.config.mjs`에 `defaultShowCopyCode: true` | 좌측 상단 언어 라벨(소문자 `markdown`·`shell`·`plain text` 등 `LANGUAGE_LABELS` 매핑), 우측 상단 copy 버튼. 배경 `#f7f6f3` (Card와 동일 톤), `box-shadow inset 0 0 0 1px rgba(55,53,47,0.09)`로 Nextra ring 대체, radius 6px. copy 버튼은 opacity 0.35 기본 / hover 1.0 — Notion은 hover-only지만 본 라이브 도큐는 복붙 우선이라 항상 살짝 보이는 게 더 맞음. 개별 차단은 ` ```lang copy=false `. CSS는 `components/CodeBlock.module.css`에 격리, Tailwind `x:` 유틸을 `!important`로만 덮어쓴다 |
| 학습 에이전트 폴더 prefix | **`outbox/` · `.inbox/` · `.ai-wiki/`** (점 prefix) | "점=커맨드가 관리하는 자동화 영역, prefix 없는 outbox만 사람이 직접 쓰는 자리"라는 Unix 컨벤션이 폴더명에 박힘. `ls` 디폴트에서 `outbox/` 한 곳만 보이는 게 의도된 우선순위 표현. mechanism의 두 영역 모델(사람용 vs LLM용)과 정확히 매핑. `ai-output/`은 별도 폴더 없이 `.inbox/`가 흡수 — AI 산출물도 raw 자료 취급 |
| 학습 에이전트 커맨드 명명 | **`/돌아보기` · `/주간정리`** (한국어 메인, 영문 alias `reflect`·`digest`는 동작만 지원) | 한국 챌린지 톤에 맞춤. 라이브에서 강사가 입에 붙는 한국어로 호출. mechanism.mdx의 학습 과학(인출·생성·글쓰기=사고·서사)을 "돌아본다"라는 동사 한 단어가 그대로 짚어줌. 시간 제약 X (`/morning` 아님) — 본인이 호출하고 싶을 때 |
| 학습 에이전트 starter | **[`imakerjun/pkm-v1`](https://github.com/imakerjun/pkm-v1)** | 라이브 직전 보강: `.ai-wiki/` + `.claude/commands/{돌아보기,주간정리}.md` 추가. 라이브 전 미리 clone한 수강생은 `git pull`로 보강분 받아감 |

## 🧭 콘텐츠 수정 작업 순서

1. `STYLE.md`를 먼저 읽고 금지 표현 확인 (특히 "손에 남는다 / ~한 자리 / em-dash 부연 / stretch·comfort zone")
2. 작성/수정 후 본인이 쓴 글에서 STYLE.md 표 항목이 들어갔는지 **자가 점검 1회**
3. 새 케이스(STYLE.md에 없는 AI스러운 표현) 발견 → 사용자 확인 후 STYLE.md 표에 한 줄 추가 + 콘텐츠 동시 수정
4. 시각 변경이 들어가면 Playwright MCP로 1회 확인

## 디자인 시스템

베이스는 **Folio** (Claude Design의 문서 워크스페이스 키트). 토큰만 layer해서 Nextra 노션 테마와 결합.

### 액센트

- 슬레이트 블루 `#3D6FF2` (라이트), `#6A8CFF` (다크) — 링크·블록쿼트 좌측 바·카드 호버
- 따뜻한 오프화이트 `#f7f6f3` — 카드 배경

### 토큰 (`app/globals.css` 상단)

```css
--fl-accent: #3D6FF2
--fl-accent-600: #2D5BD9
--fl-tint-blue-bg: #DEE9FB    /* blockquote 배경 */
--fl-tint-green-bg: #DCF0E3   /* mermaid out 노드 */
--fl-tint-yellow-bg: #FAF0CE  /* mermaid proc 노드 */
```

### 폰트

- 본문: Pretendard Variable (`layout.tsx`의 Head에서 CDN 로드)
- 모노: SF Mono / JetBrains Mono / Menlo (시스템 fallback)

### 다이어그램

mermaid 기본 지원 (Nextra 4.5). 라이트/다크 자동 적응. classDef로 Folio 톤 매칭:

```mermaid
classDef anchor fill:#dee9fb,stroke:#3d6ff2,stroke-width:2px,color:#1f47b3
classDef park fill:#f7f6f3,stroke:#9b9a97,stroke-dasharray:5
```

### 일러스트

`public/illustrations/`의 4종은 [irasutoya](https://www.irasutoya.com/) 카테고리에서 가져옴. 추가 시 같은 톤 유지를 위해 `~/git/youtube/japan-images/images/` 내에서 찾을 것.

**후보 보관소** — `.inbox/illust-candidates/` (gitignored). 카드 일러스트 destination 파일명(`card-*.png`)과 동일하게 정리해두면 채택 시 `cp .inbox/illust-candidates/card-*.png public/illustrations/` 한 줄로 끝. 출처 매핑은 `.inbox/illust-candidates/source-names.md`. 96px 작은 카드에서는 단색 라인보다 4-6색 컬러 일러스트(이라스토야 톤)가 식별성 더 좋다는 게 확인됨.

## 참고 자료 위치 (저장소 외부)

새 세션이라도 이 경로는 알아둬야 함:

| 자료 | 경로 |
|---|---|
| 챌린지 본진 자료 (1·2회차 raw) | `~/git/woowacourse/wmakerjun/20-메이커준/04-2026-인프런-AI엔지니어링-챌린지/` |
| 1회차 라이브 진행안 | `진행/01회차-라이브-진행.md` |
| 1회차 스프레드시트 구조 | `진행/01회차-스프레드시트-구조.md` |
| 2회차 디스코드 옵션 투표 결과 | `진행/02회차-디스코드-옵션-투표.md` |
| irasutoya 일러스트 라이브러리 | `~/git/youtube/japan-images/images/` |
| 일러스트 검색 스킬 | `/일러스트찾기` 슬래시 커맨드 |

## 로컬 개발

```bash
npm install
npm run dev        # 포트 3000 점유 중이면 자동으로 3003
npm run build      # Vercel 빌드와 동일 검증
```

## 배포

- **main 푸시 → Vercel 자동 배포** (사용자가 Vercel에 프로젝트 등록 완료)
- 배포 도메인: TBD (`*.vercel.app`)
- 미리보기: feature 브랜치 푸시하면 Vercel이 PR/브랜치별 preview 생성

## .gitignore

`.inbox/`, `inbox/`, `outbox/`, `processed/` 는 학습 에이전트의 본인 데이터 보관용으로 무시. 공개 저장소에 본인 PR·노션·녹취록 들어가면 안 됨.

`my-learning-agent-*.png`, `.playwright-mcp/`도 로컬 시각 검증용이라 무시.

## 최근 작업 (2026-05-20)

- 초기 스캐폴딩 + Folio 디자인 layer + 1·2회차 콘텐츠 작성
- 랜딩 레이아웃을 이번 주 / 예정 / 데모데이 3섹션으로 분리 (5회차 외톨이 해소)
- 카드 비주얼 elevation (따뜻한 오프화이트 배경 + 슬레이트 블루 호버)
- 헤딩에 irasutoya 일러스트 4종 통일 적용
- Callout 안 blockquote 이중 박스 해소 (CSS inline 변환)
- 네비 헤더 날짜 제거 ("1회차 · 5/13" → "1회차")
- 2회차를 강사 진행(`flow.mdx`)에서 학습 단원 5개로 재구조 (knowledge / mechanism / setup / outbox / newsletter)
- 한국어 본문 타이포 결정: weight 430 / letter-spacing 0 / subpixel / 색 #37352F
- 본문 폭 720 → **800** (한국어 50자/줄 기준)
- 다크 모드 토글 **OFF** (`darkMode={false}`) — CSS는 보존
- 다크 카드 톤 강화 (검정에서 카드가 묻히지 않도록)
- Mermaid 모바일: SVG `min-width: 560px` + 가로 스크롤
- 검색 복구: Nextra 4 Pagefind 수동 통합 (devDep `pagefind` + `postbuild` 스크립트 + `public/_pagefind/` gitignore)
- 슬라이드 모드 추가: `Shift + P`로 풀스크린 강의 모드 진입 — UI 노출 없는 강사 hidden feature. `/week2/knowledge` 7장으로 시작 (`components/SlideMode` + `lib/slides.ts` 정적 맵, `public/slides/<route>/<n>.png` 1-indexed)

## 다음 작업 후보

라이브 직후 보강 / 새 세션 진입 시 참고:

1. **3·4·5회차 placeholder 콘텐츠** — `content/week3/` 등 디렉터리 + `_meta.ts` + `index.mdx` 스텁
2. **5회차 데모데이 자료** — `content/week5/` — 4주 누적 한 단어 좌→우 펼침 시각 자료 (스프레드시트 시트 5 캡처)
3. **인프런 챌린지 starter 저장소 분리** — 2회차에서 클론할 `my-learning-agent-starter` (inbox/ outbox/ + `.claude/commands/morning.md`) 별도 public 저장소
4. **사이드바 'N' 아이콘** — Nextra footer 토글이 다크 모드에서 살짝 튐. globals.css 1줄로 정리 가능
5. **홈 페이지 탭 제목** — "Index | 나의 학습 에이전트" → content/index.mdx 상단에 `# 나의 학습 에이전트` 또는 metadata export로 덮어쓰기
6. **week2 라이브 직후 보강** — 실제 진행된 변형을 `knowledge.mdx` ~ `retrieve.mdx`에 반영
7. **수강생 인용 카드 페이지** (선택) — 사전설문 장면 인용을 보조 화면용으로

## 컨벤션 요약 (한 줄)

- **결정 완료 토큰은 임의 변경 X** — 위 "🔒 결정 완료" 표를 먼저 보고, 흔들 거면 사용자 합의 먼저
- **시각 토큰은 한 번에 1개씩** — 같은 파일을 한 세션에 3번 이상 건드리고 있으면 결정 미달이라는 신호
- **콘텐츠는 라이브 직후 보강이 원칙** — 이번 주 라이브 자료가 가장 최신
- **이중 박스·이중 보더 피하기** — Callout 안 blockquote, Card 안 Card 금지
- **메인 헤딩엔 일러스트** — `## ![](/illustrations/...) 제목` 일관 유지
- **본인 학습 데이터는 .inbox/ 또는 별도 저장소** — 공개 repo에 직접 푸시 X
- **시각 변경 후 Playwright로 확인** — 사용자 피드백: "페이지 수정 후 시각 검토"
- **콘텐츠 수정 전 STYLE.md 1회 읽기 + 작성 후 자가 점검 1회**

## 하네스: 비개발자 친화도 리뷰

**목표:** `content/**/*.mdx`가 새로 만들어지거나 수정될 때마다 비개발자(마케터·기획자·디자이너) 1인 입장에서 자동으로 친화도 리뷰를 수행한다. 워크숍 본질 목표("15명이 자기 손으로 v1을 굴려서 outbox에 글 1개를 쌓는 것")가 영문 직역·약어·개발 jargon 때문에 입구에서 깨지지 않게 한다.

**트리거:**
- 자동 — [.claude/hooks/review-mdx.sh](.claude/hooks/review-mdx.sh)가 PostToolUse 훅으로 `content/**/*.mdx` 변경을 감지하면 `non-developer-reviewer` 에이전트 호출을 다음 턴에 안내한다 (`additionalContext` 주입).
- 수동 — 사용자가 "비개발자 시각으로 리뷰해줘", "워크숍 페이지 검토", "비개발자 친화도 확인" 등을 입력하면 `non-developer-review` 스킬 + `non-developer-reviewer` 에이전트를 호출.

**구성 요소:**
- 에이전트 정의: [.claude/agents/non-developer-reviewer.md](.claude/agents/non-developer-reviewer.md)
- 스킬: [.claude/skills/non-developer-review/SKILL.md](.claude/skills/non-developer-review/SKILL.md)
- 훅 스크립트: [.claude/hooks/review-mdx.sh](.claude/hooks/review-mdx.sh)
- 훅 등록: [.claude/settings.json](.claude/settings.json) — `PostToolUse` matcher `Edit|Write|MultiEdit`

**리뷰 4 카테고리:**
1. 🚨 영문 단독/직역 (input/output, retrieval, agentic system 등)
2. 🚨 약어 (ACI, HCI, SWE-bench 등)
3. 🚨 개발 jargon (clone, frontmatter, append-only, cron, ls -a 등)
4. 🟡 추상 동사·범퍼 문장 (input/output 안 보이는 동사)

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-05-21 | 초기 구성 | 전체 | `/agent` 페이지 비개발자 친화도 검토 요청 + 페이지 변경 시 자동 리뷰 필요 |

---

## 사용자 메모리 (외부)

사용자(`im1@woowahan.com` · `makerjun`)의 글로벌 메모리에 챌린지 운영 DNA·교육 철학·말투 프로파일이 저장돼 있음. 이 저장소 작업 시 같이 참고:

- `~/.claude/projects/-Users-makerjun-git-woowacourse-wmakerjun/memory/MEMORY.md` 인덱스에서 시작
- 관련 메모: `project_inflearn_challenge`, `project_inflearn_challenge_core_goal`, `project_my_learning_agent_docs`, `user_education_philosophy`, `user_voice_profile`
