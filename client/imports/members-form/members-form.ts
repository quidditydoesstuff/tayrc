import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Members } from '../../../collections/members.ts';

@Component({
    selector: 'members-form',
    templateUrl: '/client/imports/members-form/members-form.html'
})
export class MembersForm {
  membersForm: ControlGroup;
  
  constructor() {
    let fb = new FormBuilder();
    
    this.membersForm = fb.group({
      name: ['', Validators.required],
      minerals: [''],
      vespene: ['']
    });
  }
  
  addMember(member) {
    if(this.membersForm.valid) {
      Members.insert({
        name: member.name,
        minerals: member.minerals,
        vespene: member.vespene
      });
      (<Control>this.membersForm.controls['name'].updateValue(''));
      (<Control>this.membersForm.controls['minerals'].updateValue(''));
      (<Control>this.membersForm.controls['vespene'].updateValue(''));
    }
    
  }
}