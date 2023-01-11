---
title: 'Wha- HOW?!'
date: '2023-01-08'
preview: '/images/weird-rect-thing.jpg'
---

![Vertically longer rectangles with their heights shifting in a cool way, simulating waves using Perlin Noise](/gifs/01.gif)

Don&apos;t ask me how I made this. I don&apos;t know!

I was just trying to use perlin noise in a cool way to have the rectangles&apos; length change. I don&apos; know how I ended up with this... very cool thing.
Suffering with success.

Here's the code - 

```
float inc = 0.01;
int widthOfRect = 10;
// z co-ordinate for noise
float z = 0;

void setup() {
  size(600, 600);
}

void draw() {
  background(255);

  // y co-ordinate for noise
  float y = 0;
  float lengthOfRect;

  for (int i = widthOfRect; i < width - widthOfRect; i+= widthOfRect + widthOfRect) {
    // x co-ordinate for noise
    float x = 0;

    for (int j = 0; j < width; j++) {
      // noise sorcery
      lengthOfRect = map(noise(x, y, z), 0, 1, 0, width - (widthOfRect - widthOfRect));

      rect(i, 10, 10, lengthOfRect);

      x += inc;
    }
    y += inc;
  }
  z += inc;
}
```

I thought of making this right after learning about using vectors with perlin noise to create flow field.

What I originally intended was a list of bars, with varying heights depending on their respective perlin noise value
ultimately creating a chart.

[Daniel Shiffman&apos;s "What is Perlin Noise" Playlist](https://youtube.com/playlist?list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD)
