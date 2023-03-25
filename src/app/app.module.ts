import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { DetailArticleComponent } from './articles/detail-article/detail-article.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BoutonActionComponent } from './bouton-action/bouton-action.component';
import { NouvelArticleComponent } from './articles/nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './mouvement/mvtstk/mvtstk.component';
import { DetailArticleMvtStkComponent } from './mouvement/detail-article-mvt-stk/detail-article-mvt-stk.component';
import { DetailMvtStkComponent } from './mouvement/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/categorie/nouvelle-categorie/nouvelle-categorie.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { DetailsUtilisateurComponent } from './details-utilisateur/details-utilisateur.component';
import { NouvelUtilisateurComponent } from './nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './profil/page-profil/page-profil.component';
import { PageChangePasswordComponent } from './profil/page-change-password/page-change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    StatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelArticleComponent,
    MvtstkComponent,
    DetailArticleMvtStkComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    UtilisateurComponent,
    DetailsUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    PageChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
