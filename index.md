---
layout: main
title: Richard Li
main: true
---
{% comment %} 
## about me

I grew up in the suburbs of the <b>San Francisco Bay Area</b>. I spent most of that time indoors reading, watching science programs on PBS, taking apart old or broken electronics, tackling programming languages, or pulling all nighters to fix things.

In my free time I like to hop on my bike and explore, occasionally stopping to snap some pics along the way.

## projects

{% assign sorted_repos = site.github.public_repositories | sort: "pushed_at" | reverse %}

{% for repository in sorted_repos %}
<div class="project">
    <ul class="chron">
        <li>
            <!-- {{ repository.created_at | date: "%Y" }} - {{ repository.pushed_at | date: "%Y" }} &raquo; -->
            <a href="{{ repository.html_url }}">
            {% assign override = site.data.projects.overrides[repository.name] %}
            {% if override  %}
            {{ override.name }}
            {% else %}
            {{ repository.name }}
            {% endif %}
            </a>
             : <span>{{ repository.language }}</span> {{ repository.description }}
         </li>
     </ul>
</div>
{% endfor %}

<!-- <a class="more" href="/projects">more info</a> -->

## latest blog posts

{% for post in site.posts limit:5 %}
<ul class="chron">
    <li>{{ post.date | date_to_string }} &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
</ul>
{% endfor %}
<a class="more" href="/blog/archives">more posts</a>
{% endcomment %}