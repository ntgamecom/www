import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Cards, Tabs, Callout, Steps, FileTree } from 'nextra/components'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = components => ({
  ...docsComponents,
  ...components,
  Cards,
  Tabs,
  Callout,
  Steps,
  FileTree,
})
