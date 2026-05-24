import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'export',
  basePath: '/www',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
})
