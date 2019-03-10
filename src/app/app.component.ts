import { Component } from '@angular/core';
import { Post } from './model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-blog';
  posts: Post[];
  constructor() {
    this.posts = [
      new Post('Mon premier post', `Un développeur web est un informaticien spécialisé dans la programmation ou
      expressément impliqué dans le développement des applications du World Wide Web, ou des
      applications qui sont exécutées à partir d'un serveur web sur un navigateur web et
      qui utilisent le protocole HTTP comme vecteur de transmission de l'information.`, 0, new Date(2019, 2, 10, 22, 26)),
      new Post('Mon deuxième post', `Le développeur back-end est en charge de toute la partie back-office, des éléments
      « invisibles » pour l’utilisateur mais dont dépend le fonctionnement du site.
      Il s’occupe de la configuration du développement, de la maintenance de sites et
      des applications web, et assure leurs interfaçages du point de
      vue des paramétrages avec les autres systèmes de l’entreprise (ERP, BC…).`, 0, new Date(2019, 2, 10, 21, 22)),
      new Post('Encore un post', `Le développeur Front-End. Lorsque l'on parle de «Front-End», il s'agit finalement des
      éléments du site que l'on voit à l'écran et avec lesquels on peut interagir. Ces éléments
      sont composés de HTML, CSS et de Javascript contrôlés par le navigateur web de l'utilisateur.`, 0, new Date(2019, 2, 10, 20, 18))
    ];
  }
}
