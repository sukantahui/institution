import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
                          { path: '', component: HomeComponent,
                            children: [
                              {
                                path: 'test',
                                loadChildren: () => import('./child-pages/print-demo/print-demo.module')
                                    .then(mod => mod.PrintDemoModule)
                              },
                            ]
                          }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
