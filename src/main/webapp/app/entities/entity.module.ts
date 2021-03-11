import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'article',
        loadChildren: () => import('./article/article.module').then(m => m.CommandeCadeauJHipsterArticleModule),
      },
      {
        path: 'categorie',
        loadChildren: () => import('./categorie/categorie.module').then(m => m.CommandeCadeauJHipsterCategorieModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class CommandeCadeauJHipsterEntityModule {}
