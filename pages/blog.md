---
title: Blog
description: "Trace Mayer's speaking engagements and biography."
permalink: /blog/
---

<div class="container">
  <div class="row w-100">
    <div class="col-md-12 text-start pb-md-5 px-md-5">
      <p class="main-p1 ps-3"></p>
      <h1 class="fw-bold display-4 main-h1 pb-3 pb-md-4 px-2">{{page.title}}</h1>
        {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
        {% for year in postsByYear %}
          <div class="row py-3 px-2">
            <h1>{{ year.name }}</h1>
            {% for post in year.items %}
              <div><span>{{ post.date | date: "%B %-d" }}</span> - <a href="{{site.baseurl}}{{ post.url }}" class="text-link">{{ post.title }}</a></div>
            {% endfor %}
          </div>
        {% endfor %}  	 
    </div>
  </div>
</div>
