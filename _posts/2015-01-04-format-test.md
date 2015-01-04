---
layout: post
title: "format test"
date: "2015-01-04"
---
Inline `code` has `back-ticks around` it.

```
function test() {
    console.log("notice the blank line before this function?");
}
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```javascript
function fancyAlert(arg) {
    if(arg) {
        $.facebox({div:'#foo'})
    }
}
```

```python
if True:
    print "hi"
```

{% highlight ruby %}
def foo
puts 'foo'
end
{% endhighlight %}

{% highlight python %}
if True:
print "hi"
{% endhighlight %}
