export default {
  widgets: [
    {
      name: 'sanity-tutorials'
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    },
    {
      name: 'netlify',
      options: {
        title: 'Motion Bookmarks',
        sites: [
          {
            title: 'Motion Bookmarks Studio',
            apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
            buildHookId: 'xxxyyyxxxyyyyxxxyyy',
            name: 'motion-bookmarks-studio',
          },
          {
            title: 'Motion Bookmarks',
            apiId: 'fd0a8c73-d880-4d5f-94d6-f4be0447184d',
            buildHookId: 'fd0a8c73-d880-4d5f-94d6-f4be0447184d',
            name: 'motion-bookmarks-web'
          }
        ]
      }
    }
  ]
}
