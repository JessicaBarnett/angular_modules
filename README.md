# Sandbox

I created this project to duplicate an Issue I've been having  with angular modules.  The issue is as follows: 

* I have 3 Modules
  * AppModule
  * a SharedModule that declares/exports a SharedComponent that's needed Globally, and is declared in AppModule
  * a FeatureModule that is also declared in AppModule 
* I have a component in FeatureModule (at route '/feature') that needs access to SharedComponent, which *should* be available because it's imported by AppModule by-way-of SharedModule.  But When I go to the route, i get this error: 
```
Uncaught Error: Template parse errors:
'app-shared-component' is not a known element:
1. If 'app-shared-component' is an Angular component, then verify that it is part of this module.
2. If 'app-shared-component' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. (" declared by FeatureModule.</h1>
    <p>I need Access to Shared Component from SharedModule</p>
    [ERROR ->]<app-shared-component></app-shared-component>
  "): ng:///FeatureModule/FeatureComponent.html@3:4
    at syntaxError (compiler.js:1021)
```
* In the larger App I'm working on, this problem is "solved" by importing the SharedModule into the FeatureModule **as well as** the AppModule.  But when I do that I get THIS error: 
```
Uncaught Error: Type SharedComponent is part of the declarations of 2 modules: SharedModule and FeatureModule! Please consider moving SharedComponent to a higher module that imports SharedModule and FeatureModule. You can also create a new NgModule that exports and includes SharedComponent then import that NgModule in SharedModule and FeatureModule.
    at syntaxError (compiler.js:1021)
```

So it seems like a no-win situation.  

## 

Solution: I'd been declaring the module twice.  Had to move it up to imports.  That sorted it.  


## References

Here are some of the many articles I've looked at in trying to find an answer to this problem:
* https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html
* https://angular-2-training-book.rangle.io/handout/modules/shared-modules-di.html
* https://stackoverflow.com/questions/44636999/angular-component-from-a-shared-module-not-being-recognized 
* https://stackoverflow.com/questions/45311336/referencing-sharedmodule-in-appmodule?rq=1
* https://stackoverflow.com/questions/53183871/angular-7-pass-imported-module-to-feature-module
* https://stackoverflow.com/questions/53186466/shared-module-imported-in-appmodule
* https://github.com/tomastrajan/angular-ngrx-material-starter/issues/47
* https://stackoverflow.com/questions/50638531/angular-import-export-modules-in-shared-module-or-import-in-multiple-modules
* https://angular.io/guide/styleguide#shared-feature-module
* https://angular.io/guide/sharing-ngmodules
* https://angular.io/guide/feature-modules
* https://angular.io/guide/module-types
* https://stackoverflow.com/questions/43598311/component-is-part-of-the-declaration-of-2-modules
* https://angular.io/guide/ngmodule-faq#what-if-i-import-the-same-module-twice
* https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f
* https://www.sitepoint.com/angular-ngmodules/

