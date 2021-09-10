---
title: "Adaptive Regression"
date: 2018-05-01
categories:
    - regression
    - research
    
tags:
    - regression
    - r

keywords:
    - mape
    - regression
    - adaptive

clearReading: true
thumbnailImage: /files/figures/Post_Mape_Plot.png
thumbnailImagePosition: right 
autoThumbnailImage: yes 
metaAlignment: center 
coverImage: https://github.com/jkapila/subtleperception/raw/master/assets/images/background_img.png
coverMeta: in 
coverSize: partial 
comments: true
showTags: true
showPagination: true
showSocial: true
showDate: true
slug: adaptive-regression
weight: 20
summary: "When we can improve stats by simple ways."
dependency:
    - 
---

{{< typeit id="excerpt" >}}
We recently put through our observation on Regression Problem in [Our Paper](https://arxiv.org/abs/1805.01618). This post is a nonformal attempt to explain it.
{{< /typeit >}}

<!--more-->

<!--toc--> 

# Observation
Here I am trying to express our logic to find such **Observation**. Lets dive in.


There are different value estimation technique like regression analysis and time-series analysis. Everyone of us has experimented on regression using OLS ,MLE, Ridge, LASSO, Robust etc., and also might have evaluated them using RMSE (Root Mean/Median Square Error), MAD (Mean/Median Absolute Deviation), MAE (Mean / Median Absolute Error) and MAPE (Mean/Median Absolute Percentage Error), etc…

But all of these gives a single point estimate that what is the overall error looks like. Just a different thought!! can we be sure that this single value of MAPE or MAE? How easy it is to infer that our trained model has fitted well across the distribution of dependent variable?

{{< image classes="fancybox left fig-50" src="/files/figures/Anscombe_Data.png" title="**Plot of Anscombe’s Quartet**">}}

Let me give you a pretty small data-set to play with ***"The Anscombe’s quartet"***. This is a very famous data-set by _Francis Anscombe_. Please refer the plots below to understand the distribution of y1, y2, y3, y4. Isn’t it different?

Would the measure of central tendency and disportion be same for this data? I am sure none of us would believe but to our utter surprise we see all the descriptive stats are kind of same. Don’t believe me !!! Please see the results below ( Source: [Wikipedia](https://en.wikipedia.org/wiki/Anscombe%27s_quartet) ):

{{< image classes="fancybox right fig-50" src="/files/figures/Anscombe_Stats.png" title="**Some Descriptive Stats for Anscombe’s Quartet**">}}

Astonished !!! Don’t be. This is what has been hiding behind those numbers. And this is why we really won’t be able to cross certain performance level. Unless you change some features or even do a lot of hyper parameter tuning, your results won’t vary much.


If you look at the average value of MAPE in each decile you would see an interesting pattern. Let us show you what we see that pattern. One day while working on a business problem where I was using regression on a dicussion with Kumarjit, we deviced a different way of model diagnosis. We worked together to give this a shape and build on it.

{{< image classes="fancybox nocaption left fig-80" src="/files/figures/Pre_Mape_Plot.png" >}}


As you can see it is absolutely evident that either of the side in the distribution of MAPE values is going wild!!!!!!! _Still overall MAPE is good (18%)._


# Ideation

We worked together to build a different framework to address such issues on the go and ***reduce the MAPE deterioration on the edge of the distribution.***

This problems gives rise to a concept we named as ***Distribution Assertive Regression (DAR)***.

DAR is a framework that is based on cancelling the weakness of one point summaries by using the classical concepts of Reliability Engineering : **The Bath Tub Curve**.

The Specialty of this curve is that it gives you the likelihood which areas one tends to have high failure rates.

{{< image classes="fancybox right fig-50" src="/files/figures/Image_2.png" title="**Plot for Classical Bath Tub Curve using a Hazard Function**" >}}


In our experiments when we replace failure with MAPE value and the Time with sorted (ascending) value of target / dependent variable, we observe the same phenomenon. This is likely to happen because most of regression techniques assumes Normal (Gaussian) Distribution of data and fits itself towards the central tendency of this distribution.

Because of this tendency, any regression methods tends to learn less about data which are away from the central tendency of the target.

Lets look at BostonHousing data from “mlbench” package in R.

{{< image classes="fancybox left fig-75" src="/files/figures/Plot_Bathtub.png" title="**Plot for MAPE Bath Tub Curve for Decile Split “mdev” from Data**">}}

Here the MAPE is calculated for each decile split of ordered target variable. As you can observe it is following the bath tub curve. Hence the validates our hypothesis that the regression method is not able to understand much about the data at the either ends of the distribution.

# Analysis

Now the DAR framework essentially fixes this weakness of regression method and understands the behavior of data which is stable and can be tweak in a fashion that can be use in general practice.

Plot of MAPE Bath Tub Curve after *applying DAR Framework* for Decile Split _"mdev"_ from Data

{{< image classes="fancybox nocaption right fig-75" src="/files/figures/Post_Mape_Plot.png" >}}

How this framework with same method reduced MAPEs so much and made model much more stable…?? Well here it is:

**The DAR framework splits the data at either ends of the order target variable and performs regression on these “split” data individually. This inherently reduces the so called “noise” part of the data and treat it as an individual data.**


Now you might be thinking while applying regression this sounds good but how will one score this on new data. Well to answer that we used our most simple yet very effective friend “KNN” (Though any multiclass Classifier can be used here). So ideally scoring involves two step method :


>  1) Score new value against each KNN / Multiclass Classifier model of the data  
>  2) Based on closeness we score it with the regression method used for that part of data.

So now we know how we can improve the prediction power of data for regression. 

Refer flowchart below for the framework

# Code and Framework

Here are the some goodies.The code for the above analysis and plotting fucntions:
<br></br>

{{< multitabs name="example" showtab="Flowchart">}}
{{< tabit name="Flowchart" >}}
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEJcbiAgICBcbiAgICBzdWJncmFwaCBUZXN0aW5nXG4gICAgICAgIHAxKEZpbmRpbmcgYnVja2V0IG9mIG1vZGVsIHRvIGNob29zZSlcbiAgICAgICAgcDEgLS0-IHAyKFtNYWtpbmcgcHJlZGljdGlvbnMgPGJyPiBiYXNlZCBvbiBzZWxlY3RlZCBtb2RlbCBmb3IgaW5mZXJlbmNlXSlcbiAgICAgICAgcDIgLS0-IHAzKENvbnNvbGlkYXRlIGZpbmFsIHNjb3JlIG9mIHByZWRpY3Rpb24pXG4gICAgZW5kXG5cbiAgICBzdWJncmFwaCBUcmFpbmluZ1xuICAgICAgICBtZChbRml0dGluZyBhIDxicj5SZWdyZXNzaW9uIG1vZGVsXSk9PT4gZGlcbiAgICAgICAgZGl7QmlubmluZyBEYXRhIHZpYSA8YnIvPiBldmFsdWF0aW5nIERpc3RyaWJ1dGlvbiA8YnIvPiBNQVBFIHZhbHVlcyB9XG4gICAgICAgIGRpIC0tPiBtZDIoW0ZpdHRpbmcgYSBCdWNrdGVpbmcgbW9kZWwgPGJyLz4gdG8gQmlubmVkIE1BUEUgQnVja2V0c10pXG4gICAgICAgIG1kMiAtLT4gbWQzKFtGaXR0aW5nIFJlZ3Jlc3Npb24gPGJyPiBNb2RlbHMgb24gQmlubmVkIERhdGFdKVxuICAgICAgICBtZCA9PSBLZWVwaW5nIG1haW48YnIvPm1vZGVsID09PiBybyAgICAgICAgXG4gICAgICAgIG1kMyA9PT4gcm8oRmluYWwgTW9kZWxzIDxicj4gQmlubmluZyBEYXRhIE1vZGVscyArIDxicj4gU2V0IG9mIFJlZ3Jlc3NvaW4gTW9kZWxzKVxuICAgIGVuZFxuXG4gICAgXG4gICAgb2QoW0RhdGEgSW5wdXRdKSAtLSBUcmFpbmluZzxicj4gRGF0YS0tPiBtZFxuICAgIG9kIC0tIFRlc3Rpbmc8YnI-IERhdGEtLT4gcDFcbiAgICBybyAtLi0-IHAxXG4gICAgcm8gLS4tPiBwMlxuXG4gICAgY2xhc3NEZWYgZ3JlZW4gZmlsbDojOWY2LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDoycHg7XG4gICAgY2xhc3NEZWYgeWVsbG93IGZpbGw6I2ZmNixzdHJva2U6IzMzMyxzdHJva2Utd2lkdGg6MnB4O1xuICAgIGNsYXNzRGVmIGJsdWUgZmlsbDojMDBmLHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDoycHgsY29sb3I6I2ZmZjtcbiAgICBjbGFzc0RlZiBvcmFuZ2UgZmlsbDojZjk2LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDo0cHg7XG4gICAgY2xhc3MgbWQsbWQyLG1kMyBncmVlblxuICAgIGNsYXNzIGRpIG9yYW5nZVxuICAgIGNsYXNzIHAxLHAyIHllbGxvd1xuICAgIGNsYXNzIHJvLHAzIGJsdWUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEJcbiAgICBcbiAgICBzdWJncmFwaCBUZXN0aW5nXG4gICAgICAgIHAxKEZpbmRpbmcgYnVja2V0IG9mIG1vZGVsIHRvIGNob29zZSlcbiAgICAgICAgcDEgLS0-IHAyKFtNYWtpbmcgcHJlZGljdGlvbnMgPGJyPiBiYXNlZCBvbiBzZWxlY3RlZCBtb2RlbCBmb3IgaW5mZXJlbmNlXSlcbiAgICAgICAgcDIgLS0-IHAzKENvbnNvbGlkYXRlIGZpbmFsIHNjb3JlIG9mIHByZWRpY3Rpb24pXG4gICAgZW5kXG5cbiAgICBzdWJncmFwaCBUcmFpbmluZ1xuICAgICAgICBtZChbRml0dGluZyBhIDxicj5SZWdyZXNzaW9uIG1vZGVsXSk9PT4gZGlcbiAgICAgICAgZGl7QmlubmluZyBEYXRhIHZpYSA8YnIvPiBldmFsdWF0aW5nIERpc3RyaWJ1dGlvbiA8YnIvPiBNQVBFIHZhbHVlcyB9XG4gICAgICAgIGRpIC0tPiBtZDIoW0ZpdHRpbmcgYSBCdWNrdGVpbmcgbW9kZWwgPGJyLz4gdG8gQmlubmVkIE1BUEUgQnVja2V0c10pXG4gICAgICAgIG1kMiAtLT4gbWQzKFtGaXR0aW5nIFJlZ3Jlc3Npb24gPGJyPiBNb2RlbHMgb24gQmlubmVkIERhdGFdKVxuICAgICAgICBtZCA9PSBLZWVwaW5nIG1haW48YnIvPm1vZGVsID09PiBybyAgICAgICAgXG4gICAgICAgIG1kMyA9PT4gcm8oRmluYWwgTW9kZWxzIDxicj4gQmlubmluZyBEYXRhIE1vZGVscyArIDxicj4gU2V0IG9mIFJlZ3Jlc3NvaW4gTW9kZWxzKVxuICAgIGVuZFxuXG4gICAgXG4gICAgb2QoW0RhdGEgSW5wdXRdKSAtLSBUcmFpbmluZzxicj4gRGF0YS0tPiBtZFxuICAgIG9kIC0tIFRlc3Rpbmc8YnI-IERhdGEtLT4gcDFcbiAgICBybyAtLi0-IHAxXG4gICAgcm8gLS4tPiBwMlxuXG4gICAgY2xhc3NEZWYgZ3JlZW4gZmlsbDojOWY2LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDoycHg7XG4gICAgY2xhc3NEZWYgeWVsbG93IGZpbGw6I2ZmNixzdHJva2U6IzMzMyxzdHJva2Utd2lkdGg6MnB4O1xuICAgIGNsYXNzRGVmIGJsdWUgZmlsbDojMDBmLHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDoycHgsY29sb3I6I2ZmZjtcbiAgICBjbGFzc0RlZiBvcmFuZ2UgZmlsbDojZjk2LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDo0cHg7XG4gICAgY2xhc3MgbWQsbWQyLG1kMyBncmVlblxuICAgIGNsYXNzIGRpIG9yYW5nZVxuICAgIGNsYXNzIHAxLHAyIHllbGxvd1xuICAgIGNsYXNzIHJvLHAzIGJsdWUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)
{{< /tabit >}}
{{< tabit name="Rcode" >}}
{{< gist jkapila ccc3d0f05fce86ea3075dc7190f8c181 >}}
{{< /tabit >}}
{{< tabit  name="Plotting">}}
{{< gist jkapila fe28656ed4c0fb9643375ba60af660d1 >}}
{{< /tabit >}}
{{< /multitabs >}}



