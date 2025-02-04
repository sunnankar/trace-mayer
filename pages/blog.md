---
title: Blogs
description: "Trace Mayer's speaking engagements and biography."
permalink: /blog/
---

<div class="text-center">
	{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
	{% for year in postsByYear %}
  	<h1>{{ year.name }}</h1>
    {% for post in year.items %}
			<li><a href="{{site.baseurl}}{{ post.url }}"><span>{{ post.date | date: "%B %-d, %Y" }}</span> - {{ post.title }}</a></li>
		{% endfor %}
	{% endfor %}	 
</div>
