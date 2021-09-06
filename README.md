# ChainCSS
A javascript library with useful functions for sequential animations using CSS classes.

### Getting Started
To use ChainCSS, import the ChainCSS.js to your document:
```html
<script src="ChainCSS.js"></script>
```

### How to Use

To use ChainCSS you simple need to call the ChainCSS function passing a element as a parameter and the method you want to do:


```javascript
ChainCSS(element).addClass('myClass', 1000)
```

It's called ChainCSS because all methods can be chained:
```javascript
ChainCSS(element).addClass('myClass', 1000).removeClass('myClass', 1000).keepClass('KeepForThatTime', 1000)
```
The second parameter of all functions is the time, which is a optional parameter.

### Methods

The current methods are:

##### addClass(cssClass, time)
This method adds the cssClass to the element after the time setted. If the time is not setted, cssClass is added immediately.

##### removeClass(cssClass, time)
This method removes the cssClass of the element after the time setted. If the time is not setted, cssClass is removed immediately.

##### keepClass(cssClass, time)
This method adds the cssClass immediately to the element and removes it after the time setted.

##### transitionToClass(cssClass, transitionClass, time)
This method will add the CssClass to the element after the time setted. Before this time, the element will have the transitionClass attached to it.

##### transitionToNotClass(cssClass, transitionClass, time)
This method will remove the CssClass of the element after the time setted. Before this time, the element will have the transitionClass attached to it.

##### delay(callback, time)
This method is a simple delay with a callback after the time setted. It can be chained alongside the other methods, making it useful for general stuff.

LICENSE
======= 

MIT License

Copyright (c) 2021 Juliano Duarte Seus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
