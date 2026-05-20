---
name: non-developer-review
description: Review MDX content pages from the perspective of a non-developer reader (marketers, designers, planners who don't use terminal/git daily). Catches English jargon left untranslated, unexplained acronyms (ACI, HCI, MCP, etc.), dev-specific terms (clone, frontmatter, append-only, cron, ls -a, repo), abstract verbs that hide input/output, and CLAUDE.md convention violations (Callout inner blockquote, 숫자~숫자 instead of 〜). Use whenever content/**/*.mdx is created or edited in the ai-learning-agent-workshop project, or when user says "비개발자 시각으로 리뷰", "워크숍 페이지 검토", "비개발자 친화도 확인". This skill should be triggered automatically by the PostToolUse hook on MDX changes.
---

# Non-Developer Review

워크숍 콘텐츠를 비개발자(마케터·기획자·디자이너) 1인 입장에서 읽고 막히는 자리를 짚는 방법론.

## 왜 이게 필요한가

이 워크숍의 본질 목표는 "수강생 15명이 자기 손으로 v1을 굴려서 outbox에 글 1개를 쌓는 것"이다. 콘텐츠는 **한국어 본문에 영문 키워드가 단독으로 떠 있으면 비개발자는 그 자리를 눈으로 흘려보낸다**는 가정 위에서 검토해야 한다. 흘려보낸다는 건 그 자리의 개념을 놓친다는 뜻이고, 핵심 개념(retrieval, ACI, agentic system 등)이 놓이면 다음 페이지에서 막힌다.

리뷰는 "글이 멋있는가"가 아니라 **"이 페이지를 처음 보는 비개발자가 막히지 않고 끝까지 갈 수 있는가"** 단 하나의 질문에 답한다.

## 검토 카테고리 4종

검토는 항상 이 4 카테고리로 정렬한다. 카테고리가 명확해야 한 번 리뷰 후 어디부터 손볼지 본인이 판단할 수 있다.

### 🚨 1. 영문 단독/직역
한국어 본문에 영문 키워드가 풀이 없이 단독으로 등장한 자리.

**막히는 예시:**
- "input/output이 한 문장 안에서 보입니다" — 비개발자: input/output을 영어 그대로 인식하고 흘려보냄
- "agentic system이라고 부릅니다" — 같은 문제
- "retrieval · tools · memory" — 핵심 개념인데 첫 등장에만 한국어 풀이가 괄호로 있고 그 다음은 영문 단독

**예외 (그대로 OK):**
- 고유명사 (Anthropic, Claude, GitHub, Tiago Forte 등 사람·회사·제품명)
- 코드/명령 식별자 (`outbox/`, `.ai-wiki/`, `/돌아보기`)
- 학술 명사가 본문 풀이와 함께 처음 등장한 다음 같은 페이지 안에서 반복될 때

### 🚨 2. 약어
첫 등장에서 풀어 설명되지 않은 약어.

**막히는 예시:**
- "ACI · Agent-Computer Interface" — 약어 풀이가 옆에 있어도 비개발자에게는 "그래서 뭐?"가 됨. **무엇을 가리키는 약어인지 한 줄 풀이가 본문에 박혀야** 한다 (예: "에이전트가 도구를 잘 쓸 수 있게 도구 설명·예시를 정성껏 다듬는 일").
- "HCI" — 같은 문제
- "SWE-bench" — 무슨 벤치마크인지 설명 0

**예외 (그대로 OK):**
- 워크숍 본문 다른 곳에서 이미 풀어준 약어 (PKM, PIM, MOC, PARA 등 — knowledge.mdx에서 풀이됨)
- 너무 일반적이라 비개발자도 아는 것 (AI, LLM, URL, PDF, PR은 어디서든 통용)

### 🚨 3. 개발 jargon
개발자에게는 친숙하지만 비개발자에게는 처음 보는 용어.

**경계해야 하는 용어 (첫 등장 시 풀이 필수):**
- `clone` (git 명령) — "본인 컴퓨터로 복사해오는 것을 git에서는 clone이라 부릅니다" 같은 한 줄
- `frontmatter` — "파일 맨 위에 적어두는 작은 메타 정보"
- `append-only` — "한 번 쓰면 고치지 않는다는 뜻"
- `lint` — 본문에 "위키 건강 검진"이 이미 있음 ✓
- `repo` / `repository` — "저장소" 풀이가 있으면 OK
- `cron` / cron 표현 — "이런 모양을 cron 표현이라 부릅니다"
- `ls -a` — "`-a` 옵션이 점으로 시작하는 숨김 폴더까지 보여줍니다"
- `dev` / `prod` / `localhost` — 워크숍 본문에 거의 안 나오지만 등장하면 풀이 필요
- `v1` — "첫 버전"이라는 풀이가 한 페이지에 한 번 정도

**예외:**
- 사용자가 직접 명령으로 입력하는 것 (`/돌아보기`, `/주간정리`, `/schedule`) — 슬래시 표기 자체가 컨텍스트를 줌
- `.claude/commands/`, `outbox/` 같은 폴더명 — 본문에서 역할이 함께 설명되면 OK

### 🟡 4. 추상 동사·범퍼 문장
input/output이 안 보이는 동사, 또는 한 단락에 정보가 너무 많이 박힌 자리.

**막히는 예시:**
- "처리한다", "관리한다", "최적화한다", "도와준다" — 무엇을 받아 무엇을 내놓는지가 안 보임
- 한 문장에 등장 개념이 3개 이상 (예: "PIM과 PKM을 PARA·ACE·카파시 wiki로 풀면…")

**개선 신호:**
- 본문에 이미 "받는 것 / 내놓는 것" 또는 "input · output" 같이 풀이가 있으면 OK
- 다이어그램(mermaid)·표가 정보를 분산해 받쳐주면 OK

## 검토 절차

### 1. 파일 전체를 한 번 읽는다
처음부터 끝까지 한 번 읽으면서 "비개발자가 막힐 자리"를 마음속으로 표시. 도중에 멈추지 말고 끝까지.

### 2. 카테고리별로 재검토하면서 라인 번호를 수집
각 카테고리를 순서대로(🚨 영문 → 🚨 약어 → 🚨 jargon → 🟡 추상 동사) 다시 훑고, 라인 번호와 문제 인용을 정확히 수집.

### 3. 컨벤션 가드레일 점검
프로젝트 [CLAUDE.md](../../../../CLAUDE.md)의 다음 항목을 같이 검사:
- **Callout 안 blockquote 금지** — `<Callout>` 태그 사이에 `>` 로 시작하는 줄이 있으면 위반
- **숫자~숫자 표기** — `\d+~\d+` 패턴은 `〜`(U+301C)로 바꿔야 함
- **STYLE.md 자가 점검** — STYLE.md가 있으면 그 표 항목과 충돌하는 표현 검사

### 4. 같은 자리 중복 보고 제거
같은 라인에서 영문 단독 + 약어 + jargon 셋 다 해당해도 한 번만 보고. 가장 큰 friction 카테고리로 분류.

### 5. 우선순위 정렬
- 🚨는 모두 보고 (상한 5건)
- 🟡는 최대 3건
- 🟢는 최대 3개 패턴만 짧게 짚음
- 컨벤션 위반은 발견 시 모두 보고 (개수 제한 없음 — 빌드 차단 위험)

## 출력 형식 (필수)

```markdown
# 비개발자 리뷰 — <파일 경로>

## 전체 평가 (한 줄)
<이 페이지가 비개발자에게 얼마나 친절한가>

## 🚨 우선 수정 (N건)
- **[파일:라인](파일#L라인) — 카테고리** — 문제 한 줄 → 제안 한 줄

## 🟡 개선 제안 (N건)
- 같은 형식

## 🟢 잘 된 부분
- 좋은 패턴 짧게

## 컨벤션 점검
- Callout 안 blockquote: PASS/FAIL (FAIL 시 위치)
- 숫자 범위 〜: PASS/FAIL
- STYLE.md 자가 점검: PASS/FAIL
```

## 출력 길이 가드레일

- 전체 응답은 **300줄 이내** 목표. 매번 변경마다 도는 훅이라 알림 부담이 커지면 사용자가 훅을 꺼버린다.
- 5건 이상의 🚨가 있으면 "이 페이지는 비개발자 친화도가 낮음. 큰 리팩터링 필요"로 한 줄 결론을 박고 상위 5건만 보고.
- 코드 인용은 짧게 (한 줄 또는 핵심 절구만). 본문 통째 복사 X.

## 본질 가드레일

"비개발자 친화"라는 명목으로 **개발 정확도를 떨어뜨리지 않는다**. 예시:
- ❌ "Git repo" → "그냥 폴더" (정확도 손실 — Git 저장소는 일반 폴더가 아님)
- ✓ "Git repo" → "Git 저장소(코드 변경 이력이 쌓이는 폴더 형태)" (풀어 쓰되 거짓말 X)

또한 워크숍의 본질("나·LLM·저장소 삼자간의 협업 메커니즘")이 비개발자 친화 명목으로 흐려져선 안 됨. 메커니즘을 단순화하라는 게 아니라, **메커니즘에 진입하는 입구의 영문 키워드를 자국 표현으로 풀어주라**는 것.
