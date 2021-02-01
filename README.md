# RNestarguars

## Getting Started  
### install dependencies. 
```
yarn install
```

### run on iOS simulator
```
npx pod-install
yarn ios
```
### run on android emulator
```
yarn android
```

## e2e testing
### install dependencies
```
brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
```
### run e2e test on iOS
```
yarn e2e:build
yarn e2e:test
```

### run e2e test on android
TODO

## TODO
implement timeout logic  
translations  
dark theme  
