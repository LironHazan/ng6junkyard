import {Component, HostListener, OnInit} from '@angular/core';
import {email_conversions} from '../../../mocks/emails';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WindowService} from '../shared/windowRef/window.service';
import {TagifyService} from 'ngTagify';

@Component({
  selector: 'app-email-history',
  templateUrl: './email-history.component.html',
  styleUrls: ['./email-history.component.scss']
})
export class EmailHistoryComponent implements OnInit {

  public conversations = email_conversions;
  public settings = { blacklist: ['fucking', 'shit']};
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';
  public nativeWindow;
  constructor(private fb: FormBuilder,
              private winRef: WindowService,
              private tagifyService: TagifyService) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });

  }

  ngOnInit() {
    this.nativeWindow = this.winRef.getNativeWindow();
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

  onAdd(tagify) {
    console.log('added a tag', tagify);
  }

  onRemove(tags) {
    console.log('removed a tag', tags);
  }

  clearTags() {
    this.tagifyService.removeAll();
  }
  addTags() {
    this.tagifyService.addTags(['this', 'is', 'cool']);
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

}
