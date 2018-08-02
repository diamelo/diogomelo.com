module.exports = {
  siteMetadata: {
    title: 'Diogo Melo',
    description: 'sample here smple here',
    keywords: 'designer, freelancer, ux, ui, uxui, web, front-end'
    },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'z67qqrinsdhn',
        accessToken: 'fb83c6f81265bf8ec3490aa5296d53c9fb4e9248a8de3032074591b08f4588d4'
      }
    }
  ],
}
