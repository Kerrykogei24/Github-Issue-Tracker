import { Router } from '@angular/router';
import { IssuesService } from './../issues.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


export interface payload {
  orgName : string,
  repoName : string,
  pageNo: number,
  pageCount: number
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'], 
  preserveWhitespaces: false
})
export class FormComponent implements OnInit {

    /** form builder for form */
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    routeChange: boolean = false;

    constructor (private _formBuilder:FormBuilder, private router: Router, private appService: IssuesService) {
    }

  ngOnInit(){
    this.firstFormGroup = this._formBuilder.group({
      orgName : ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
      repoName : ['', Validators.required]
  });
  this.routeChange = this.appService.routeChange;
  }

  ngAfterViewInit() {
  }

  /**
   * get organization name
   * @returns {string|Array|string}
   */
  getOrgName(): string {
      return this.firstFormGroup.value.orgName;
  }

  /**
   * get repository name
   * @returns {string|string|Array}
   */
  getRepoName(): string {
      return this.firstFormGroup.value.repoName;
  }

  /**
   * query for data payload
   */
  submitData (): void {
      let payload:payload = {
          orgName : '',
          repoName : '',
          pageNo: 0,
          pageCount: 30
      };

      payload.orgName = this.firstFormGroup.value.orgName;
      payload.repoName = this.secondFormGroup.value.repoName;
      // api call
      this.appService.fetchData(payload);
  }

}
