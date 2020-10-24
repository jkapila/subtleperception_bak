---
title: "Test Code and Syntax"
date: 2020-05-22T15:34:56+05:30
categories:
- category
- subcategory
tags:
- tag1
- tag2
keywords:
- tech


clearReading: true
# thumbnailImage: image-1.png
# thumbnailImagePosition: bottom # (right, left or bottom)
autoThumbnailImage: yes # yes/ no
# metaAlignment: center # right, left or center
# coverImage: image-2.png
# coverCaption: "A beautiful sunrise"
# coverMeta: out # in/full
# coverSize: full # partial/full
# coverImage: image-2.png
# gallery:
#     - image-3.jpg "New York"
#     - image-4.png "Paris"
#     - http://i.imgur.com/o9r19kD.jpg "Dubai"
#     - https://example.com/orignal.jpg https://example.com/thumbnail.jpg "Sidney"
comments: true
showTags: true
showPagination: true
showSocial: true
showDate: true
slug: shortcodes-and-hugo
summary: "This is to evaluate my shortcodes and everything."
draft: true

dependency:
    - mermaid
---


{{< typeit id="excerpt" >}}
Some more testing of codes and stuff...
{{< /typeit >}}

<!--more-->

<!--toc--> 

# Some Latex

## Simple

\\( a^2 = b^2 \\)

## Highlighted
{{< morealert warning "Not working">}}
 Math with text highlighting:
{{< /morealert >}}

{{< hl-text >}}
$$[ a^2 = b^2 + c^2 ]$$
{{< /hl-text >}}

The refinement relation is written $a \sqsubseteq b$, which can be 
pronounced "$a$ approximates $b$" or "$b$ is at least as defined as $a$".

$$\int_{a}^{b} x^2 dx$$

This is another inline $\nabla F(\mathbf{x}_{n})$ math.

## More Complicated

### Ackermann Function
$$ \displaystyle \begin{array}{ll}
A(m,n) = \begin{cases}
n+1  & {\text{if}}\ m=0 \newline
A(m-1,1) & {\text{if}}\ m>0\ {\text{and}}\ n=0 \newline
A(m-1,A(m,n-1)) & {\text{if}}\ m>0\ {\text{and}}\ n>0 \newline
\end{cases}
\end{array}
$$


### Probability Distributions Function
$$ \displaystyle cdf(a,b,\mu,\sigma) = \displaystyle\frac{1}{\sqrt{2 \pi \sigma^2}} \displaystyle\int_a^b e^{-\frac{(x-\mu)^2}{2 \sigma^2}}\ dx$$

### Schordinger Wave Equation
$$
\displaystyle i \hbar\frac{\partial \psi}
{\partial t}=
\frac{-\hbar^2}{2m}
\left(\frac{\partial^2}{\partial x^2}
+ \frac{\partial^2}{\partial y^2}
+ \frac{\partial^2}{\partial z^2}
\right) \psi + V \psi.
$$

## A block

$$ 
\begin{equation}
\begin{cases}
\dot{x} & = \sigma(y-x) \newline
\dot{y} & = \rho x - y - xz \newline
\dot{z} & = -\beta z + xy
\end{cases} 
\end{equation}
$$


## Hugo Examples

Inline math: $$ \varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887… $$

Block math:

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$
# Some section test

{{< section >}}
## Some title

My paragraph.
{{< /section >}}

# Alerts

## A simple note

{{< note >}}
It can even contain shortcodes.
{{< /note >}}

## Theme alerts [^1]

{{< alert info >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

{{< alert success >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

{{< alert warning >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

{{< alert danger >}}
Praesent diam elit, interdum ut pulvinar placerat, imperdiet at magna.
{{< /alert >}}

[^1]: These are Default Alerts

## More Alerts[^2]

{{< morealert note "A Note">}}
A **note** banner
{{< /morealert >}}

{{< morealert abstract >}}
An **abstract** banner
{{< /morealert >}}

{{< morealert info >}}
A **info** banner
{{< /morealert >}}

{{< morealert tip >}}
A **tip** banner
{{< /morealert >}}

{{< morealert success >}}
A **success** banner
{{< /morealert >}}

{{< morealert question >}}
A **question** banner
{{< /morealert >}}

{{< morealert warning "something" >}}
A **warning** banner
{{< /morealert >}}

{{< morealert failure >}}
A **failure** banner
{{< /morealert >}}

{{< morealert danger >}}
A **danger** banner
{{< /morealert >}}

{{< morealert bug >}}
A **bug** banner
{{< /morealert >}}

{{< morealert example >}}
An **example** banner
{{< /morealert >}}

{{< morealert quote >}}
A **quote** banner
{{< /morealert >}}


[^2]: These are taken from LoveIt Theme

## Highlighted texts
{{< hl-text danger >}}
your highlighted text
{{< /hl-text >}}

# Testing mermaid

## Mermaid without Align

{{< mermaid >}}
flowchart LR
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
{{< /mermaid >}}

## Mermaid with Right Align

{{< mermaid align="right">}}
 graph TB;
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
{{< /mermaid >}}

## Mermaid with Left Align

{{< mermaid align="left">}}
 graph TB;
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
{{< /mermaid >}}

# Expand


## Simple Expand

{{< expand "This is awesome" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

## Expnad with some more inside

{{< morealert warning "something" >}}
Expand Works with mermai only if we keep the open view as of now...
{{< /morealert >}}

<br>
{{< expandit "mm1" "This is kiler mermaid" true >}}
{{< mermaid >}}
 graph TB;
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
{{< /mermaid >}}
{{< /expandit >}}


{{% expand "This is killer code" %}}
```python 
import numpy as np
import pandas as pd

df = pd.read_csv("")
np.sum(df,axis=1)
```
{{% /expand %}}

{{< expandit "e2" >}}
$$ [ a^2 = b^2 + c^2 ] $$
{{< /expandit >}}

{{% expand "This is killer table" %}}
{{< table table_number="42" caption="My Table" >}}
| s | t | r | i | n |
|---|---|---|---|---|
| g |   | i | s |   |
| a |   | g | o | o |
| d |   | w | a | y |
{{< /table >}}
{{% /expand %}}

# Typeit

## Example 1
{{< typeit id="simple1" >}}
This is a *paragraph* with **typing animation** based on [TypeIt](https://typeitjs.com/)...
{{< /typeit >}}

## Example 2

{{< typeit id="paragraph" >}}
**First** this paragraph begins <br> <br>
**Then** this paragraph begins
{{< /typeit >}}

## Example 3

{{< typeit id="cwalk" code=python >}}
import numpy as np
import pandas as pd

df = pd.read_csv("")
np.sum(df,axis=1)
{{< /typeit >}}

# Code syntaxing

## Basic hugo highlight without code block

This is using hugo own highlighter shortcode

{{< highlight py "linenos=table,hl_lines=4" >}}

import numpy as np
import pandas as pd

df = pd.read_csv("")
np.sum(df,axis=1)

{{< / highlight >}}

{{< captionit caption="Something">}}
{{< highlight r "linenos=inline,hl_lines=4" >}}
library(ggplot2)
library(tidyverse)

df <- read.csv("")
df %>%
 select(xyz,abc) %>%
 ggplot(aes(xyz,abc))+
 geom_scatter()+
 theme_bw()

{{< / highlight >}}
{{< / captionit >}}


## Using Adapted Prism JS

{{< styleit size="100%" side="left" color="skyblue" text="dark">}}
Yet to create a proper external ***prism js*** shortcode again.
{{< /styleit >}}

## Using Adapted Highlight JS

{{< styleit size="100%" side="right" color="orange" >}}
Yet to create a proper external ***highlight js*** shortcode again.
{{< /styleit >}}

{{< styleit size="100%" side="left" color="#fff" text="dark" >}}
_This is also a good example of how styleit short code works_
{{< /styleit >}}

## Using theme transported highlightjs
Because somehow I have only the default one. This Only renders Pythona and making it work for R is tedious[^3]

[^3]: This is implemented inside the SASS files. Would require to remove it and rebuild the SASS for this one. Also somehow background fot hugo fences is also same and codesit's background. But I like the idea of line number as of now.

{{< codeblock "archives.py" "python" "" "archives.py" >}}
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
{{< /codeblock >}}


{{< codeblock "herecomes.R" "r" "" "herecomes.R" >}}

library(ggplot2)
library(tidyverse)

df <- read.csv("")
df %>%
 select(xyz,abc) %>%
 ggplot(aes(xyz,abc))+
 geom_scatter()+
 theme_bw()

{{< /codeblock >}}


{{< tabbed-codeblock tabbed_codeblock >}}
<!-- tab py -->
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
<!-- endtab -->
<!-- tab r -->

library(ggplot2)
library(tidyverse)

df <- read.csv("")
df %>%
 select(xyz,abc) %>%
 ggplot(aes(xyz,abc))+
 geom_scatter()+
 theme_bw()

<!-- endtab -->
{{< /tabbed-codeblock >}}


## Code with code fences

```python
import numpy as np
import pandas as pd

df = pd.read_csv("")
np.sum(df,axis=1)
```

```r 
library(ggplot2)
library(tidyverse)

df <- read.csv("")
df %>%
 select(xyz,abc) %>%
 ggplot(aes(xyz,abc))+
 geom_scatter()+
 theme_bw()
  
```

{{< morealert type="success" title="Code Highlight">}}
Line Number and all working here... In this **"copy"** option is not there.. But still it highlight better for R and Python..
{{</ alert >}}


## Some toggelable code and markdown and notes

{{< multitabs name="mtab" tabNum="1" showtab="Table">}}
{{< tabit name="Table" >}}
**Tables are good**
{{< table table_number="007" caption="Decode this" >}}
| s | t | r | i | n |
|---|---|---|---|---|
| g |   | i | s |   |
| a |   | g | o | o |
| d |   | w | a | y |
{{< /table >}}

{{< /tabit >}}
{{< tabit  name="Alerts">}}

{{< alert success>}}
This is working super fine
{{</ alert >}}


{{< /tabit >}}
{{< tabit name="Codes" >}}

***Even code block like these run inside***

```r 
library(ggplot2)
library(tidyverse)

df <- read.csv("")
df %>%
 select(xyz,abc) %>%
 ggplot(aes(xyz,abc))+
 geom_scatter()+
 theme_bw()
  
```
{{< /tabit >}}
{{< /multitabs >}}


## Another example


{{< multitabs name="example" showtab="Warning">}}
{{< tabit name="Note Tab" >}}
{{<note>}}
somethinghere
{{</note>}}

{{< /tabit >}}
{{< tabit  name="Math">}}
$a^2 = b^2 + c^2 $
{{< /tabit >}}
{{<tabit name="Warning">}}

{{< alert warning>}}
JS dosent necessarily work inside in a clean way.. Will deal with this some time later...
{{</ alert >}}

{{< /tabit >}}
{{< /multitabs >}}


# Some table

## Basic Table

|  a     |  b     |   c    | d      |  e     |
|---    |---    |---    |---    |---    |
|   1    |   1    |    1   |  2     |    6   |
|    2   |    2   |     2  |   3    |   5    |
|     3  |     3  |      3 |    4   |    7   |


## Captioned Table

{{< table table_number="007" caption="Decode this" >}}
| s | t | r | i | n |
|---|---|---|---|---|
| g |   | i | s |   |
| a |   | g | o | o |
| d |   | w | a | y |
{{< /table >}}

## Captioned Unstriped Table

{{< table table_number="007" caption="Decode this if you can" striped=false >}}
| s | t | r | i | n |
|---|---|---|---|---|
| g |   | i | s |   |
| a |   | g | o | o |
| d |   | w | a | y |
{{< /table >}}


# Quoting

## Pull quotes

Donec non tempus arcu. Phasellus adipiscing, mauris nec mollis egestas, ipsum nunc auctor velit, et 

{{< pullquote right "with references">}}
Some quote fed in here
{{< /pullquote >}}

rhoncus lorem ipsum at ante. Duis vel mauris nulla. Maecenas mattis interdum ante, quis sagittis.

And a quote without reference is here:
{{< pullquote left >}}
some more text for quotes
{{< /pullquote >}}

Some test has to be around to make it work and look good. This has to be a lot of text so that it gets captured properly.

## A Compound theory

{{< pullquote right >}}
{{< hl-text green >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{{< /hl-text >}}
{{< /pullquote >}}

unnecessary text is needed around pull quote as of now....
 Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.


## Block Quote

Some example with reference

{{< blockquote "This works with some tags" "more to come here">}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{{< /blockquote >}}

Example without references

{{< blockquote >}}
and this one no tag or reference
{{< /blockquote >}}

markdown example

>and this one too.

Last but not least with a footnote:

> Don't communicate by sharing memory, share memory by communicating.</p>
> — Rob Pike[^4]


[^4]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.





# Some buttons

{{< button href="https://getgrav.org/" >}}Get Grav{{< /button >}}
{{< button href="https://getgrav.org/" icon="fas fa-download" >}}Get Grav with icon{{< /button >}}
{{< button href="https://getgrav.org/" icon="fas fa-download" icon-position="right" >}}Get Grav with icon right{{< /button >}}

# A ToolTip is not a bad option

{{< tooltip side="left" tip="Has some text on left" term="Lets start with **this**" />}} then follow with {{< tooltip tip="Has some text on top" term="**this**" />}} which leads to {{< tooltip side="bottom" tip="Has some text on bottom" term="**this**" />}} and then ends with {{< tooltip side="right" tip="Has some text on right" term="**this**." />}}

# Finally some out of box js

[JS WORK]({{<ref "posts/testing-js.md">}})