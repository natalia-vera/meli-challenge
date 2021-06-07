import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
                          //componentes de listado resultante
                          { path: 'items', component: ResultComponent },
                          //componente del item seleccionado
                          { path: 'items/:id', component: DetailComponent },
                          //redireccionamiento por defecto ante cualquier path no contemplado
                          { path: '**', redirectTo: '/', pathMatch: 'full' }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
