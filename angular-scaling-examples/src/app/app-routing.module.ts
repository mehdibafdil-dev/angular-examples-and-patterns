// Optimized lazy loading implementation
const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module')
            .then(m => m.DashboardModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }