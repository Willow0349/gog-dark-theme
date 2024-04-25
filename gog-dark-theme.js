// ==UserScript==
// @name         Dark Theme for gog.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes light theme to dark theme on gog.com
// @author       Willow0349 (Github: https://github.com/Willow0349)
// @match        https://*.gog.com/*
// @exclude      https://*.gog.com/*checkout*
// @exclude      https://*.gog.com/forum/*
// @icon         https://store-static-modular.gog-statics.com/en/assets/favicons/apple-touch-icon-180x180.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set the cookie
    document.cookie = "front_ab=new; path=/";

    // Check if the body has the class "light-theme"
    if (document.body.classList.contains('light-theme')) {
        // Change to dark theme if page supports it
        console.log("Page supports dark theme");

        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else {
        // Manually change css style for dark theme
        console.log("Page does not supports dark theme");
        document.querySelector('.productcard-basics__title').style.color = 'rgb(242, 242, 242)';


        var excludedElements = ['.productcard-player__container', '.product-actions-price__discount', '.wishlist-button', '.wishlist-button__state-on-wishlist', '.cart-button__state-owned','.go-to-library-button__wrapper', '.wishlist-button__wrapper', '.product-actions__lowest-price-before-discount', '._price', '.product-tile__wishlist', '.product-tile__label', '.product-tile__label-icon', '.ic-svg', '.cart-button__state-in-cart', '.cart-button__wrapper', '.productcard-player__logo', '.howlongtobeat-box__time', '.howlongtobeat-box__name', '.product-tile__price', '.product-tile__price-discounted', '.product-tile__prices-inner'];

        // Construct the CSS selector string to exclude the specified classes
        var selector = '*:not(' + excludedElements.join('):not(') + ')';

        // Get all elements except those with the specified classes
        var filteredElements = document.querySelectorAll(selector);

        // Change the background colors
        filteredElements.forEach(function(element) {
            element.style.backgroundColor = 'rgb(33, 33, 33)';
            element.style.color = 'rgb(237, 237, 237)';
        });

        var boxes = ['.product-tile__labels', '.product-tile__info', '.product-tile__title', '.product-tile__wishlist-icon', '.product-tile__utility', '.product-tile__buy-block', '.product-actions__lowest-price-before-discount', '._price', '.product-tile__prices', '.product-tile__price', '.product-tile__price-discounted', '.product-actions__promo-end-date', '.product-actions-body', '.howlongtobeat-box', '.howlongtobeat-box__icon', '.critics-rating-wrapper', '.circle-wrapper', '.critic-review-card', '.circle-score__text', '.critics-rating__image', '.critics-rating__label', '.critic-review-card__info', '.critic-review-card__outlet', '.critic-review-card__author', '.critic-review-card__score', '.critic-review-card__review-snippet', '.critic-review-card__read-full'];

        var filteredBoxes = document.querySelectorAll(boxes);

        // Change the text colors of box elements
        filteredBoxes.forEach(function(element) {
            element.style.backgroundColor = 'rgb(48, 48, 48)';
            element.style.color = 'rgb(237, 237, 237)';
        });

        var specialElements = ['.howlongtobeat-box__time', '.howlongtobeat-box__name'];

        var filteredSpecialElements = document.querySelectorAll(specialElements);

        // Change the text colors of special elements
        filteredSpecialElements.forEach(function(element) {
            element.style.color = 'rgb(237, 237, 237)';
        });

    }
})();