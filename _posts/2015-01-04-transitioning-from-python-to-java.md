---
layout: post
title: "transitioning from python to java"
date: "2015-01-04"
---
tldr; java is stupid.

Let me start off by saying that I started programming with Java and I honestly did not think it was that bad until I had to type this out.

At first it doesn't seem so bad. Take a look at this code, which prints everything in a list except every third.

```python
def skip_every_third_item(l: list) -> None:
     for i in range(len(l)):
       if not ((i+1) % 3 == 0):
             print l[i]
```

The Java equivalent is similar. For loops are more explicit and you need curly braces for your control statements. Note that for if/else statements with a single line of code do not require curly braces, but many programmers leave them there for consistency

```java
for(int i=0; i < list.length; i++) { // for i in range(len(l))
    if ((i+1)%3 != 0)
        System.out.println(list[i]);
}
```

Things get stupid once you get to more complex programs. Here's some Python that rolls two dice _n_ number of times and prints a distribution chart:

```python
from random import randrange

def roll2dice():
     dice1 = randrange(1,7)
     dice2 = randrange(1,7)
     return dice1 + dice2

def distribution_of_rolls(num_rolls: int):
     print('Distribution of dice rolls\n')
     rolls = []
     for i in range(num_rolls):
         rolls.append(roll2dice())
     for i in range(2, 13):
         count = rolls.count(i)
         print('{:2d}: {:6d} ({:5.1%}) {}'.format(i, count, count/num_rolls, '*'*count))

distribution_of_rolls(100)
```

Let's convert this to Java, start with rolling the dice.

```java
public static int rollOnce() {
    Random rng = new Random();
    return (rng.nextInt(6) + 1);
}

public static int roll2dice() {
    int dice1 = rollOnce();
    int dice2 = rollOnce();

    return dice1 + dice2;
}
```

Java does not have a randrange equivalent built-in, so we have to make our own. The import statement for random, `import java.util.Random`, has to be put at the top of the file, before the class declaration. It's pretty simple, you create a _Random_ object and assign it to a variable, then have it generate a random int from `[0,n)`. We add 1 to this int to get the result we want, `[1,6]`. Note that Java is strongly-typed, so you have to tell Java what type of content each variable contains.

---
Next we'll write the `distribution_of_rolls` method. *It's possible to do this without using Collections*

```java
public static void distribution_of_rolls(int num_rolls) {
    System.out.println("Distribution of dice rolls\n");
    ArrayList<Integer> rolls = new ArrayList<Integer>(num_rolls);
    for (int i = 0; i < num_rolls; i++) {
        rolls.add(roll2dice());
    }

    for(int i = 2; i < 13; i++) {
        int count = Collections.frequency(rolls, i);
        System.out.printf("%2d: %6d (%5.1f%%) %s%n", i, count, ((double)count/num_rolls * 100), repeatString(count, "*"));
    }
}
```

Java arrays are fixed-length, so we'll use the wrapper class, ArrayList, from `java.util`. The angle brackets designate what type the ArrayList will hold, ints in this case. ArrayList does not expose a count method, so off to `java.util.Collections`!

You might have missed it, but there's a `(double)` hidden in the print statement. When you divide an int by another int, you get the standard behavior (and the Python 2 behavior) of getting an int back. Python 3 just assumes you want a number with a decimal, and gives you one. _Casting_ the int to a double gives us what we want, something we can turn into a percentage.

---
You can't multiply a string by an int in Java, so here's what we do to repeat a string instead. I copied this from [Stack Overflow](https://stackoverflow.com/questions/1235179/simple-way-to-repeat-a-string-in-java):

```java
public static String repeatString(String s, int n) {
    return new String(new char[n]).replace("\0", s);
}
public static String repeatString(int n, String s) {
    return repeatString(s, n);
}
```
You make a string with length _n_, each char with the value of null, then replace each null with your string. Something new: Java lets you have multiple methods with the same name, but different input arguments. This is called method overloading, something very useful that I sometimes wish Python had.

---
And here's the final result:

```java
import java.util.Random;
import java.util.ArrayList;
import java.util.Collections;

public class example
{
    public static String repeatString(String s, int n) {
        return new String(new char[n]).replace("\0", s);
    }
    public static String repeatString(int n, String s) {
        return repeatString(s, n);
    }
    public static int rollOnce() {
        Random rng = new Random();
        return (rng.nextInt(6) + 1);
    }
    public static int roll2dice() {
        int dice1 = rollOnce();
        int dice2 = rollOnce();

        return dice1 + dice2;
    }
    public static void distribution_of_rolls(int num_rolls) {
        System.out.println("Distribution of dice rolls\n");
        ArrayList<Integer> rolls = new ArrayList<Integer>(num_rolls);
        for (int i = 0; i < num_rolls; i++) {
            rolls.add(roll2dice());
        }

        for(int i = 2; i < 13; i++) {
            int count = Collections.frequency(rolls, i);
            System.out.printf("%2d: %6d (%5.1f%%) %s%n", i, count, ((double)count/num_rolls * 100), repeatString(count, "*"));
        }
    }

    public static void main(String[] args) {
        distribution_of_rolls(100);
    }
}
```

---
What bugs me the most about Java is that most of the time, you have to either use a method from a helper library, write your own method to do something trivial, or restructure your code.

Yay Java.
