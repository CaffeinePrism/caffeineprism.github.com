---
layout: main
title: Richard Li
main: true
---
## about me
I grew up in the suburbs of the <b>San Francisco Bay Area</b>. I spent most of that time indoors reading, watching science programs on PBS, taking apart old or broken electronics, or tackling programming languages. Occasionally I'll stay up all night to fix stuff I break.

I also bake from scratch!

## projects
{% for project in site.data.projects reversed limit 6 %}
<div class="project">
    <ul class="chron">
        <li>
            {{ project.when | split:" " | last}} &raquo;
            {% if project.sourceurl %}
                <a href="{{ project.sourceurl }}">{{ project.name }}</a>
            {% else %}
                {{ project.name }}
            {% endif %}
             : <span>{{ project.language }}</span> {{ project.description }}
         </li>
     </ul>
</div>
{% endfor %}
<a class="more" href="/projects">more info</a>

## latest blog posts
{% for post in site.posts limit:5 %}
<ul class="chron">
    <li>{{ post.date | date_to_string }} &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
</ul>
{% endfor %}
<a class="more" href="/blog/archives">more posts</a>
