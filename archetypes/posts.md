---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
categories:
    - category
    - subcategory
tags:
    - tag1
    - tag2
keywords:
    - research
    - blog
    - data science

# thumbnailImage: https://unsplash.com/photos/eveI7MOcSmw/download?force=true&w=640
# thumbnailImagePosition: left # (right, left or bottom)
# metaAlignment: center # right, left or center
# coverImage: https://unsplash.com/photos/gpjvRZyavZc/download?force=true&w=1920
# coverCaption: "Image by [a good person](https://unsplash.com/@mjessier)"
# coverMeta: in # in/full
# coverSize: partial # partial/full

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
slug: {{ .TranslationBaseName  }}
weight: 20

# summary: "This is a custom summary and does *not* appear in the post."

dependency: 
        -
# depending upon what is going in the blog
#     - mermaid
#     - d3
#     - plotly
#     - p5

---

{{< typeit >}}
Some text should be here
{{< /typeit >}}


<!--more-->
<!--toc--> 
# To disable toc, delete this the toc identifire    


Here is your space to write.........