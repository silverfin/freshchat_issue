# README

1. Installation
    1. Run `bundle`
    2. Run `yarn`
2. Running
    1. Run `bin/webpacker-dev-server`
    2. Run `rails c`
3. Reproducing
   1. Manually
       1. Browse to [localhost:3000](http://localhost:3000)
       2. Click between page 1 and page 2, see the numbers go up 
   2. Memory usage 
      1. Comment out `import '../src/freshdesk'` in `app/javascript/entries/application.js` to establish a baseline
      2. Run `memlab run --scenario scripts/freshchat.js`
      3. Remove comments in `app/javascript/entires/application.js`
      4. Run `memlab run --scenario scripts/freshchat.js` again
