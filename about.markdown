---
layout: default
title: About Us
class: about
permalink: /about/

team_members:
  - name: 'Hank Gory'
    title: 'Title'
    imgPath: '/img/placeholder.jpg'
    altTxt: 'Lorem ipsum dolor sit amet'
    order: 1
  - name: 'The Office'
    title: 'Tax Prep Capital of Oak Lawn'
    imgPath: '/img/placeholder.jpg'
    altTxt: 'Lorem ipsum dolor sit amet'
    order: 100
---

<h2>Our Business is based on Family Values, Communication and Dedication</h2>

<p><em>Individual Taxservice</em> lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis cursus mauris non neque facilisis mollis. Neque, gravida sit sodales praesent in. Turpis dolor est viverra nunc eget fames. Penatibus sed ullamcorper quam consequat leo scelerisque. Curabitur id tellus mollis odio enim lorem pulvinar cursus. Eu, ultrices varius ac id amet aliquet.</p>

<h2>Our Team</h2>
<ul class="team">
    {% assign members = page.team_members | sort: 'order' %}
    {% for member in members %}
    <li class="team-member">
        {% include team-member.html name=member.name title=member.title img-path=member.imgPath alt-txt=member.altTxt %}
    </li>
    {% endfor %}
</ul>

