
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue') },
      { path: '/list/:categoryId', name: 'CollectionList', component: () => import('pages/CollectionList.vue') },
      { path: '/token/:tokenId', name: 'TokenInfo', component: () => import('pages/TokenInfo.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
