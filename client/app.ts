import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide} from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated'
import { APP_BASE_HREF } from '@angular/common';
import { MembersList } from './imports/members-list/members-list.ts';
import { MemberDetails } from './imports/member-details/member-details.ts';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'MembersList', component: MembersList },
  { path: '/member/:memberId', as: 'MemberDetails', component: MemberDetails }
])

class Tayrc {}

bootstrap(Tayrc, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
