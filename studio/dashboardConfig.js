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
                  buildHookId: '5eb9e9aac6dc4afbd55b0c73',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-x47m7d6w',
                  apiId: 'd806c660-7e1f-4780-a718-aa5ec8c343f8'
                },
                {
                  buildHookId: '5eb9e9aa6f64a87443a0afcb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-gm6z61d3',
                  apiId: 'a23789f6-5276-4028-90fd-c15aa8338d64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3882501676/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-gm6z61d3.netlify.app', category: 'apps'}
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
