# Mobile Engineer bar raiser

[Challenge description](https://different-sense-bcc.notion.site/Mobile-Engineer-bar-raiser-adc77f2ac0144b42b5a0f43741f13cd2)

## Stack

I decided to use Expo due to the simplicity to start a project and to avoid the necessity of native OS dependencies for everyone that want to run this project locally.

For styling I am using `styled-components`, for animations I am using `react-native-reanimated`.

For testing I am using `jest` with `react-testing-library`.

## Product ideas

Here are some ideas I would love to implement if I have more time:

- Call to action for some insights
  - CTA to sell your assets when the price increase;
  - CTA to buy assets when the price decrease.
- Swipe left/right to deal with de insight
  - Swipe right if you want to view more insights for this topic;
  - Swipe left if you want to disable insights for this topic.
- Long press to view more details about the insight

## Running locally

```
$ git clone git@github.com:infinite-nil/cheres.git

$ cd cheres/

$ npm install
```

After this you have two options:

- Run in the simulator
- Run in your physical device

### Running in the simulator

Make sure you have all [required dependencies](https://reactnative.dev/docs/environment-setup) for each environment

run:

```
$ npx expo start
```

Open the desired simulator (android/iOS) then in your terminal press:

- `a` to run on Android simulator
- `i` to run on iOS simulator

### Running in your physical device

First you will need to download the [Expo Go](https://expo.dev/client) app.

run:

```
$ npx expo start
```

Scan the generated QR code on your terminal and you should see the app open in the `Expo Go` client.

## Demos

https://user-images.githubusercontent.com/90731442/200128950-4c2d97b5-7093-4cc5-a2ed-e2be30f65203.mp4

https://user-images.githubusercontent.com/90731442/200128952-f6d2418d-fbb8-49d5-8f8d-b405fa40457f.mp4
