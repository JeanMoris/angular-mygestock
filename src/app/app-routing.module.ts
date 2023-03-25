import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelArticleComponent } from './articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur.component';
import { MvtstkComponent } from './mouvement/mvtstk/mvtstk.component';
import { NouveauCltFrsComponent } from './nouveau-clt-frs/nouveau-clt-frs.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/categorie/nouvelle-categorie/nouvelle-categorie.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { NouvelUtilisateurComponent } from './nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './profil/page-profil/page-profil.component';
import { PageChangePasswordComponent } from './profil/page-change-password/page-change-password.component';

const routes: Routes = [
  {path: 'login', component: PageLoginComponent},
  {path: 'inscrire', component:PageInscriptionComponent},
  {path: '', 
  component: PageDashboardComponent, 
  children: [
    {  path: 'statistiques',  component: StatistiquesComponent},
    {  path: 'articles', component: PageArticleComponent},
    {  path: 'nouvelarticle', component: NouvelArticleComponent},
    {  path: 'mvtstk', component: MvtstkComponent},
    {  path: 'clients', component: PageClientComponent, },
    {  path: 'nouveauclient', component: NouveauCltFrsComponent,  data: {origin: 'client'}},
    {  path: 'nouvellecommandeclient', component: NouvelleCmdCltFrsComponent, data: {origin: 'client'}},
    {  path: 'commandeclient', component: PageCmdCltFrsComponent, data: {origin:'client'}},
    {  path: 'fournisseurs', component: PageFournisseurComponent},
    {  path: 'nouveaufournisseur', component: NouveauCltFrsComponent, data: {origin: 'fournisseur'}},
    {  path: 'nouvellecommandefournisseur', component: NouvelleCmdCltFrsComponent, data: {origin:'fournisseur'}},
    {  path: 'commandefournisseur', component: PageCmdCltFrsComponent, data: {origin: 'fournisseur'}},
    {  path: 'categories', component: PageCategorieComponent},
    {  path: 'nouvellecategorie', component: NouvelleCategorieComponent},
    {  path: 'utilisateurs', component: UtilisateurComponent},
    {  path: 'nouvelutilisateur', component: NouvelUtilisateurComponent},
    {  path: 'profil', component: PageProfilComponent},
    {  path: 'changepassword', component: PageChangePasswordComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
