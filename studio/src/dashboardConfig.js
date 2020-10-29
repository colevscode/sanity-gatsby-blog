export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9b30d399e06613af4a558c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-q6psr6ez',
                  apiId: '95f14ae2-2e2f-42e5-8134-791544843ffa'
                },
                {
                  buildHookId: '5f9b30d35dfadb1083756738',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ybczweom',
                  apiId: '10c47501-3763-4514-830a-345454554aeb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/colevscode/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ybczweom.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
