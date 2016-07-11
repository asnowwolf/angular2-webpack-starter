import {addProviders, describe, inject, it} from "@angular/core/testing";
import {BaseRequestOptions, Http} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {Home} from "./home";
import {Title} from "./title";

// Load the implementations that should be tested

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function (backend, defaultOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },

      Title,
      Home
    ]);
  });

  it('should have default data', inject([Home], (home) => {
    expect(home.localState).toEqual({value: ''});
  }));

  it('should have a title', inject([Home], (home) => {
    expect(!!home.title).toEqual(true);
  }));

  it('should log ngOnInit', inject([Home], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
