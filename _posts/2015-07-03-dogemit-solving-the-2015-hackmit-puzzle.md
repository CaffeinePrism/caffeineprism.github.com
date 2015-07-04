---
layout: post
title: "dogemit: solving the 2015 hackmit puzzle"
date: "2015-07-03"
---
# the start
So the 2015 hackmit website had an asset: `shibe.js`, which contained the logic to redirect you to `http://dogemit.party` about 15% of the time

the source code of dogemit.party had this:

      00110000 01111000 01100010
      01100001 01100110 01100110
      00110001 01100101 01100100
      01100100 00110000 00111001
      01100101 00101110 01100100
      01101111 01100111 01100101
      01101101 01101001 01110100
      00101110 01110000 01100001
      01110010 01110100 01111001

which a quick run through a binary converter gave you `0xbaff1edd09e.dogemit.party` ...and we're in business!

# puzzle 1: 0xd09ec0de
this one was strange, but straightforward once you had a rough idea what was going on. after talking to dogebot on slack, you get the following responses:

    shh this is message from dogebot
    shh pls send dogebot to hackmit
    such bark much woof
    very amaze is 'amaze '
    very excite is amaze + woof
    wow excite
    very believe is 'robot'
    very hack is plz bark with believe
    console dose loge with hack

the url of this puzzle was 0xd09ec0de...so dogescript? running it through a parser gives us

    // this is message from dogebot
    // pls send dogebot to hackmit
    function bark(woof) {
        var amaze = 'amaze ';
        var excite = amaze + woof;
        return excite;
    }
    var believe = 'robot';
    var hack = bark(believe);
    console.log(hack);

and so the answer is obviously `amaze robot`

# puzzle 2: 0x5e1f1ed09e
this was so jank. I spent longer than I'd like to admit on this one. print the pages, and fold them up in a certain way to get `very wow`

# puzzle 3: 0xd09eb17e
Fun puzzle to do, but I expected something more. the puzzle looks like this:

    doge loves squares. much love that he got many tiles to decorate his room.

    5639262251111313153805257552611737829578758554092216272065501622503460834990627917373041944744186551861032381166094569128658026356066

    tiles to be exact.

The two important parts are the 133-digit number and "squares". If you convert the number to binary, you get 441 digits...which is 21 squared. Okay so what happens when we put this binary number into a 21x21 grid?

    111111100011101111111
    100000101110101000001
    101110100011101011101
    101110101100101011101
    101110100100101011101
    100000101001001000001
    111111101010101111111
    000000000100000000000
    111110111001010101010
    001000000010111110101
    011110101110101001110
    100000000010110011110
    000001111101111010011
    000000001111000111001
    111111101111111000010
    100000100000010011110
    101110101101011101011
    101110101110010110000
    101110101101100001100
    100000101001110100100
    111111101110101100010

Not too interesting. But what if all the 0's were blanks instead?

    1111111   111 1111111
    1     1 111 1 1     1
    1 111 1   111 1 111 1
    1 111 1 11  1 1 111 1
    1 111 1  1  1 1 111 1
    1     1 1  1  1     1
    1111111 1 1 1 1111111
             1
    11111 111  1 1 1 1 1
      1       1 11111 1 1
     1111 1 111 1 1  111
    1         1 11  1111
         11111 1111 1  11
            1111   111  1
    1111111 1111111    1
    1     1      1  1111
    1 111 1 11 1 111 1 11
    1 111 1 111  1 11
    1 111 1 11 11    11  
    1     1 1  111 1  1  
    1111111 111 1 11   1

A QR code! But my phone scanner wasn't smart enough to read it and I wasn't really in the mood to figure out how to programmatically create bitmaps in Python, so some Photoshop was in order.

![jank-qr-code]({{ site.url }}/blog-images/dogemit-jank-qr-code.png)

My answer was `many constant`, but from what I understand, everyone's answer was slightly different, depending on your GitHub display name.

# puzzle 4: 0xff7d09e
Clicking on the doge's nose results in a bark, followed by a weird buzzing. Two files in the source, `bark.wav` and `song.wav` were of interest. Initially I used Audacity to subtract the bark out of the track, but that was totally unnecessary. Simply dropping `song.wav` into an acoustic spectrum analyzer gives you the answer, `such hertz`. I used [Spek](http://spek.cc/) since I already had that lying around.
![dogemit-spek]({{ site.url }}/blog-images/dogemit-spek.png)

# puzzle 5: 0xd09eeffec7
At this point, I had to go to work, and when I came back, all of the spots were gone :disappointed:
I guess I'll try to finish this later.

This puzzle was just a maze, and here's what I managed to get before I left:

| Symbol  | Number | Text | Directions from start |
| ------- | ------ | ------- | ---------- |
| ! | 9/9 | very m | UUUU |
| @ | 5/9 | wow u | UUUUUUUUURRRRR |
| $ | 7/9 | such c | UUUUUUUUURRRRRRRRDRRRRDD |
| % | 6/9 | many h | UUUUUUUUURRRRDDRDLDDLUU |
| - | 1/9 | - | - |
| - | 2/9 | - | - |
| - | 3/9 | - | - |
| - | 4/9 | - | - |
| - | 8/9 | - | - |
