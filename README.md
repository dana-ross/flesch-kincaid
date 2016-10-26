# flesch-kincaid

Flesch-Kincaid readability & grade level calculations in JavaScript.

## Installation

Install through npm:

```
npm install daveross/flesch-kincaid
```

## License

Syllable calculation based on a [Java port](https://github.com/ogrodnek/java_fathom/blob/master/src/main/java/com/representqueens/lingua/en/Syllable.java) of Perl's Lingua::EN::Syllables, with my own additions

As a derivative work, this library inherits [Perl's license terms](http://dev.perl.org/licenses/).

> Perl5 is Copyright (C) 1993-2005, by Larry Wall and others.  
> It is free software; you can redistribute it and/or modify it under the terms of either:  
> a) the GNU General Public License as published by the Free Software Foundation; either external linkversion 1, or (at your option) any later versionexternal link, or  
> b) the "Artistic License".  

## Usage

`flesch-kincaid.js` is a CommonJS module. It's intended to be bundled with the rest of your code using a tool like Webpack or Require.js.

In the event you're not using such a tool, you can emulate loading the library in a browser with code such as this:

```
<script>var exports = [];</script>
<script src="node_modules/flesch-kincaid/flesch-kincaid.js"></script>
<script>
    var FleschKincaid = exports;
</script>
```

### Rate

The `rate()` function calculates a *Flesch reading ease* score for a string of English text. Higher numbers indicate an easier read.
Lower numbers correspond with more difficult reads, where scores of 0-30 represent material for college graduates. See [Wikipedia's
section on Flesch Reading Ease](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_Reading_Ease) for more details.

```
var str = "The quick brown fox jumped over the lazy dogs";
console.log( FleschKincaid.rate( str ) ); // 84.90000000000003
```

### Grade

The `grade()` function computes a US grade reading level using the *Flesch-Kincaid Grade Level Formula*. It represents a number of years' education
needed to understand a text. Lower grade levels correspond with easier reads, higher grade levels with more advanced texts. 

```
var str = "The quick brown fox jumped over the lazy dogs";
console.log( FleschKincaid.grade( str ) ); // 3.653333333333336
```
