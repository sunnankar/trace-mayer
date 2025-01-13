---
layout: default
title: Blogs
description: "Trace Mayer's speaking engagements and biography."
---


<div id="post-index" align="center">
{% for post in site.posts %}
   {% assign currentDate = post.date | date: "%Y" %}
   {% if currentDate != myDate %}
       {% unless forloop.first %}{% endunless %}
       <h1>{{ currentDate }}</h1>
       {% assign myDate = currentDate %}
   {% endif %}
   <li><a href="{{site.baseurl}}{{ post.url }}"><span>{{ post.date | date: "%B %-d, %Y" }}</span> - {{ post.title }}</a></li>
   {% if forloop.last %}{% endif %}
   {% endfor %}
</div>