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
                  buildHookId: '5f524e762d14792e8f3ea54b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yo8pcvmk',
                  apiId: '57fd50c3-4b85-4b99-a02f-3fec30d3dfdb'
                },
                {
                  buildHookId: '5f524e7664515f20cece58df',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s7sy9tgr',
                  apiId: '22584e0b-0296-4459-b480-7826906fec6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarahsweat/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s7sy9tgr.netlify.app', category: 'apps' }
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
