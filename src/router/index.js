const routes = [
    {
        path: '/pic-to-excel',
        component: PicToExcel,
        // ... existing code ...
    },
    {
        path: '/:lang/pic-to-excel',
        component: PicToExcel,
        // 只针对非英语版本
        beforeEnter: (to, from, next) => {
            if (to.params.lang === 'en') {
                next('/pic-to-excel');
            } else {
                next();
            }
        }
        // ... existing code ...
    }
] 