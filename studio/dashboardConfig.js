export default {
  widgets: [
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
                  buildHookId: '5f92f35235516a008e89eb6c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-emhn9zty',
                  apiId: '0f0cb603-188e-4acd-a769-42fda1d62040'
                },
                {
                  buildHookId: '5f92f35235516a011689ec97',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-f6bsqit7',
                  apiId: 'bed98f96-1ad3-4f63-b61e-192171b07056'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/loringabriel/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-f6bsqit7.netlify.app', category: 'apps'}
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
