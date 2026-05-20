import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Callout } from './components/Callout'
import { Card } from './components/Card'
import { CardGrid } from './components/CardGrid'
import { Toggle } from './components/Toggle'
import { AssetCard } from './components/AssetCard'
import { Timeline, TimelineItem } from './components/Timeline'
import { Placeholder } from './components/Placeholder'
import { Hero } from './components/Hero'
import { Steps, Step } from './components/Steps'
import { Table } from './components/Table'
import { Reference } from './components/Reference'
import { Anchor } from './components/Anchor'
import { CodeBlock } from './components/CodeBlock'
import { PageIcon } from './components/PageIcon'
import { SectionSlide } from './components/SectionSlide'
import { PageOverview } from './components/PageOverview'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, React.FC>) {
  return {
    ...docsComponents,
    a: Anchor,
    pre: CodeBlock,
    table: Table,
    Callout,
    Card,
    CardGrid,
    Toggle,
    AssetCard,
    Timeline,
    TimelineItem,
    Placeholder,
    Hero,
    Steps,
    Step,
    Reference,
    PageIcon,
    SectionSlide,
    PageOverview,
    ...components,
  }
}
