import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { RouterModule } from '@angular/router'; // Import manquant
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(serverRoutes) // Parenthèse fermante manquante
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {} // Correction de la déclaration