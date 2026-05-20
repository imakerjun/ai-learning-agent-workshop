import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import SlideMode from '../components/SlideMode'
import { SlideViewProvider } from '../components/SlideView'
import { SlideTogglePortal } from '../components/SlideTogglePortal'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'AI 학습 에이전트 만들기',
    template: '%s | AI 학습 에이전트 만들기',
  },
  description:
    '우아한형제들 사내 1일 워크숍 (2026-05-21) · 나를 점점 더 똑똑하게 만들어주는 학습 에이전트를 6시간 안에 직접 만든다.',
}

const logo = (
  <span
    style={{
      fontWeight: 600,
      fontSize: '0.9375rem',
      letterSpacing: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
    }}
  >
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 999,
        background: '#3D6FF2',
      }}
    />
    AI 학습 에이전트 만들기
  </span>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </Head>
      <body>
        <SlideViewProvider>
          <Layout
            navbar={
              <Navbar logo={logo}>
                <ThemeSwitch lite className="theme-switch-navbar" />
              </Navbar>
            }
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/imakerjun/my-learning-agent/tree/main"
            darkMode={false}
            sidebar={{
              defaultMenuCollapseLevel: 1,
              toggleButton: true,
            }}
            footer={
              <Footer>
                <span style={{ fontSize: '0.8125rem', color: 'rgb(155, 155, 155)' }}>
                  © {new Date().getFullYear()} AI 학습 에이전트 만들기 · 우아한형제들 사내 워크숍
                </span>
              </Footer>
            }
          >
            {children}
          </Layout>
          <SlideTogglePortal />
          <SlideMode />
        </SlideViewProvider>
      </body>
    </html>
  )
}
