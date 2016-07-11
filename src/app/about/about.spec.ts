import {ActivatedRoute} from '@angular/router';
import {addProviders, describe, inject, it} from "@angular/core/testing";
import {About} from "./about";

// Load the implementations that should be tested

describe('About', () => {
  beforeEach(() => {
    addProviders([
      ActivatedRoute,
      About,
    ]);
  });

  it('should log ngOnInit', inject([About], (about) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
