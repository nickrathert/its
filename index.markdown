---
layout: default
title: Home
class: home
---

<div class="wrapper">
    <h2>Our Business is based on Family Values, Communication and Dedication</h2>

    <p>
        <em>Individual Taxservice</em> has been serving the Chicagoland community for over 20 years. Specializing in servicing the tax needs of every individual, we offer both personal and corporate tax return filing as well as year round business accounting services.
    </p>

    <div class="flex">
        {% include hours.html %}

        <div class="ready-to-file">
            <h2>Ready to File?</h2>
            <h3>Give us a call at:</h3>
            <b><a href="tel:{{ site.itsPhoneUnformatted }}">{{ site.itsPhone }}</a></b>

            <h3>Or Email:</h3>
            <em><a href="{{ site.itsEmail }}">Hank Gory</a></em>
        </div>
    </div>

    {% include reviews.html %}

    <div class="img cc-logos">
        <img src="img/cc-logos-dark.png" alt="Credit Card logos for Square, Visa, MasterCard, Amex, and Discover"/>
    </div>
</div>
