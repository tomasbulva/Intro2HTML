# Intro HTML

## History
  - what is it Hypertext Markup Language
    - hypertext (1945) -> (1968) https://en.wikipedia.org/wiki/The_Mother_of_All_Demos
      https://youtu.be/yJDv-zdhzMY
    - Tim Berners-Lee CERN
      -> www
    - HTML based on SGML (1988 CERN in-house text formatting language)
    - SGML based on RUNOFF Command 1960 (ancient text formatting language for timesharing mainframes)
    - RUNOFF based on printing press
    - XHTML based on XML

## Today state
  Tim Berners-Lee is head of W3C
  HTML5.2 (2017) adapted by W3C
  XHTML5 created by W3C

## Anatomy
  - additional details: https://www.tutorialspoint.com/html5/index.htm
  - HTML document starts with doctype which is not a tag
    (this is html5 version
      ```HTML5
        <!DOCTYPE html>
      ```
    )

    ( older version
      ```HTML
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      ```
    )
  - tags 3 main types (html is it's own category, meta, body)
  - meta: head, body, title, meta
    - special: script, style, link
  - content: h1..., p, table, image, form
    - multi-media: video, audio, canvas
    - special: applet

    tag anatomy:
      - tag name
      - attribute
      - children

  - semantic web
    - RDF
    - URI

  - accessibility
    - aria (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

  - rel attribute (https://www.w3schools.com/tags/att_a_rel.asp)



## DOM
  - critical rendering path
  - DOCUMENT OBJECT MODEL
  - CSS OBJECT MODEL
  - layout
  - paint

  - API
    - ID's
    - classes

  - pre-processing/virtual DOM

## Craft
  - indentation
  - caniuse

## Fun
  - marquee tag
  - encient.html
  - geocities: https://www.google.com/search?q=geocities&safe=active&rlz=1C5CHFA_enUS896US896&sxsrf=ALeKk02-tbq1lwk6wu3YOB-KR1Xvgq5h8g:1610038543203&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjnsMT7pIruAhUjwAIHHbJIDh8Q_AUoAXoECBQQAw&biw=1920&bih=2026

### References:
- https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
- https://en.wikipedia.org/wiki/HTML
- https://caniuse.com/
- https://en.wikipedia.org/wiki/Resource_Description_Framework

------

# intro JS

## History
scripting language developed by Brendan Eich of Netscape; initially named Mocha, then LiveScript, and finally JavaScript

  - Birth
  - What is it?
  - EMACScript vs Javascript
  - What is Javascript (what is script)
    - intepreters
    - event loop
    - threads

## Today state
  - standard
  - interpreters/engines
    - v8
      - blink
      - nodejs
      - deno
    - spiderMonkey
    - Chakra

## Pre Processing/transpiling/transcompiling
  - performance
    - webpack
    - uglify
    - babel

  - standards
    - babel

  - features
    - typescript
    - coffeescript

  - syntax
    - uglify
    - babel

  - frameworks
    - react
    - angular
    - vue

## bundling and task runners
  - webpack
  - grunt
  - gulp
  - bower
  - yarn
  - browserify
  - requirejs

## frameworks
  - history
    - jquery dom manipulation
    - mustache templeting
    - backbone data consistency

    - ember/angular one of the first to combine previous

  - current
    - react
    - new Angular
    - Vue
    are the most popular

## Main characteristics/features
  - dynamicly/weakly typed
  - automatic semicolon
  - sice emacscript2015 block and function scoping
  - function hoisting

## Code
  - inspector
  - comments line and multiline
  - console.log
    - template literals
    - comma
    - concatenate a string with a variable
  - functions, scope and this
  - var let const
  - iteration and loops
  - objects and arrays and similar
  - modulo or bit operator
  - strings
  - buildin libraries MATH, JSON, (INTL)
  - callbacks, async and promises
  - recurence
  - higher order functions

  - new features:
    - nullish coalescing operators && || ??
    - object deconstructing
    - object spreading
    - optional chaining
    - array flat and flatmap


###  References:
- https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/
- http://kangax.github.io/compat-table/es6/
- https://caniuse.com
- https://en.wikipedia.org/wiki/JavaScript
- https://en.wikipedia.org/wiki/List_of_ECMAScript_engines
- https://www.uplers.com/blog/5-best-task-runner-module-bundler-front-end-development-tools/
- https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015
