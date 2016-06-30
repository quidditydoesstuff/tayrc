import { Component } from '@angular/core';
import { Members } from '../../../collections/members';
import { MembersForm } from '../members-form/members-form';
import { Mongo } from 'meteor/mongo';
import { RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'members-list',
  templateUrl: '/client/imports/members-list/members-list.html',
  directives: [MembersForm, RouterLink]
})

export class MembersList {
  members: Mongo.Cursor<Object>;
  
  constructor() {
    this.members = Members.find();
  }
  
  removeMember(member) {
    Members.remove(member._id);
  }
}