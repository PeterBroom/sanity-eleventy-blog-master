export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6005a1b40c5c7872987c8207',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-master-studio',
                  apiId: 'cf66d923-3c7e-4af4-9879-dae910e4bc6c'
                },
                {
                  buildHookId: '6005a1b487c13130cc24e3df',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-master',
                  apiId: '9ec07d81-3f53-4bd6-9b7f-5999ec6e1ba6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBroom/sanity-eleventy-blog-master',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-eleventy-blog-master.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
