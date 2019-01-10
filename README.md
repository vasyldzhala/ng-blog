# Blog App page template
 
- web application template powered by Angular and Firebase

## Description

It's a web app template, not a ready page, you will have to add some styles and content. 
Blog App supports Firebase users Authentication, creating and reading posts.
Logged users can leave comments.  
 
You can try it here: [blog.jala.in.ua](https://blog.jala.in.ua).

![screenshot](https://github.com/vasyldzhala/ng-blog/blob/master/blog_screen.JPG)

## Aim of project

The TypeMe app is a training project to understanding front-end technologies. 

## Tech stack

Project was powered by `HTML`, `SCSS`, `Angular` version 7.1.4.; `Firebase` for back-end. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli). 

## Getting started

Clone repository from `github`:

```
git clone https://github.com/vasyldzhala/ng-blog.git
```

Move to project's directory and install:

```
npm cd typeme
npm install
```

## Getting started with `Firebase`

You have to create your Firebase account and Setup the Firebase project.
Head on over to [Firebase](https://console.firebase.google.com/) and click 
"Create New Project". Name your project and click "Create Project".
Click on "Add Firebase to your web app" and copy the following information 
to `/src/environments/environment.ts` file and update `firebase` object. 

Click "Authentication" and then the "Sign-In Method" tab. 
Enable methods of authentication, for instance `Email/password`, `Google` and `Facebook`. 
Follow instruction to complete.

## Deployment

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Author

* **Vasyl Dzhala** - [vasyldzhala](https://github.com/vasyldzhala)

## The project was created as part of the training 

in [front-camp-2018](https://github.com/front-camp-2018)
by [ELEKS](https://eleks.com/), [ELEKS University](https://careers.eleks.com/university/), 
[[ELEKS University] on Facebook](https://www.facebook.com/eleksuniversity/)
