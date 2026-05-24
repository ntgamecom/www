import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
})
