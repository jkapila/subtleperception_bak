---
title: "Adaptive Regression"
date: 2018-05-01
categories:
    - regression
    - research
tags:
    - regression
    - R
keywords:
    - R
    - regression
clearReading: true
thumbnailImage: /files/figures/Post_Mape_Plot.png
thumbnailImagePosition: right # (right, left or bottom)
autoThumbnailImage: yes # yes/ no
# metaAlignment: center # right, left or center
coverImage: /sitewide/background_img.png
# coverCaption: "A beautiful sunrise"
coverMeta: in # in/full
coverSize: partial # partial/full
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
summary: "My Perception  Getting into Words over time!!!"


---

<!--more-->
We recently put through our observation on Regression Problem in [Our Paper](https://arxiv.org/abs/1805.01618)

Here I am trying to express our logic to find such **Observation**. Lets dive in.


There are different value estimation technique like regression analysis and time-series analysis. Everyone of us has experimented on regression using OLS ,MLE, Ridge, LASSO, Robust etc., and also might have evaluated them using RMSE (Root Mean/Median Square Error), MAD (Mean/Median Absolute Deviation), MAE (Mean / Median Absolute Error) and MAPE (Mean/Median Absolute Percentage Error), etc…

But all of these gives a single point estimate that what is the overall error looks like. Just a different thought!! can we be sure that this single value of MAPE or MAE? How easy it is to infer that our trained model has fitted well across the distribution of dependent variable?

Let me give you a pretty small data-set to play with ***"The Anscombe’s quartet"***. This is a very famous data-set by _Francis Anscombe_. Please refer the plots below to understand the distribution of y1, y2, y3, y4. Isn’t it different?


**Plot of Anscombe’s Quartet**

![](/files/figures/Anscombe_Data.png)

Would the measure of central tendency and disportion be same for this data? I am sure none of us would believe but to our utter surprise we see all the descriptive stats are kind of same. Don’t believe me !!! Please see the results below:


**Some Descriptive Stats for Anscombe’s Quartet**

![](/files/figures/Anscombe_Stats.png)

Source: [Wikipedia](https://en.wikipedia.org/wiki/Anscombe%27s_quartet)


Astonished !!! Don’t be. This is what has been hiding behind those numbers. And this is why we really won’t be able to cross certain performance level. Unless you change some features or even do a lot of hyper parameter tuning, your results won’t vary much.


If you look at the average value of MAPE in each decile you would see an interesting pattern. Let us show you what we see as a pattern. One day while working on a business problem where I was using regression , Kumarjit popped one of his old experiments and different way model diagnostics. We worked together to give this a shape and build on it.

![](/files/figures/Pre_Mape_Plot.png)

As you can see it is absolutely evident that either of the side in the distribution of Y the MAPE is going wild!!!!!!! _Still overall MAPE is good (18%)._

We worked together to build a different framework to address such issues on the go and ***reduce the MAPE deterioration on the edge of the distribution.***

This problems gives rise to a concept we named as ***Distribution Assertive Regression (DAR)***.

DAR is a framework that is based on cancelling the weakness of one point summaries by using the classical concepts of Reliability Engineering : **The Bath Tub Curve**.

The Specialty of this curve is that it gives you the likelihood which areas one tends to have high failure rates.

**Plot for Classical Bath Tub Curve using a Hazard Function**

![](/files/figures/Image_2.png)

In our experiments when we replace failure with MAPE value and the Time with sorted (ascending) value of target / dependent variable, we observe the same phenomenon. This is likely to happen because most of regression techniques assumes Normal (Gaussian) Distribution of data and fits itself towards the central tendency of this distribution.

Because of this tendency, any regression methods tends to learn less about data which are away from the central tendency of the target.

Lets look at BostonHousing data from “mlbench” package in R.

**Plot for MAPE Bath Tub Curve for Decile Split “mdev” from Data**

![](/files/figures/Plot_Bathtub.png)


Here the MAPE is calculated for each decile split of ordered target variable. As you can observe it is following the bath tub curve. Hence the validates our hypothesis that the regression method is not able to understand much about the data at the either ends of the distribution.

Now the DAR framework essentially fixes this weakness of regression method and understands the behavior of data which is stable and can be tweak in a fashion that can be use in general practice.

Plot of MAPE Bath Tub Curve after *applying DAR Framework* for Decile Split _"mdev"_ from Data

![](/files/figures/Post_Mape_Plot.png)

How this framework with same method reduced MAPEs so much and made model much more stable…?? Well here it is:

**The DAR framework splits the data at either ends of the order target variable and performs regression on these “split” data individually. This inherently reduces the so called “noise” part of the data and treat it as an individual data.**

![](/files/figures/Image_5.png)

Now you might be thinking while applying regression this sounds good but how will one score this on new data. Well to answer that we used our most simple yet very effective friend “KNN”. So ideally scoring involves two step method :


>  1) Score new value against each KNN model of the data  
>  2) Based on closeness we score it with the regression method used for that part of data.

So now we know how we can improve the prediction power of data for regression. 

The code for the above analysis is available in [R](https://gist.github.com/jkapila/ccc3d0f05fce86ea3075dc7190f8c181) and [its usage with plots](https://gist.github.com/jkapila/fe28656ed4c0fb9643375ba60af660d1).



