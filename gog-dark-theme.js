// ==UserScript==
// @name         Dark Theme for gog.com
// @namespace    http://tampermonkey.net/
// @version      0.2
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
    } else if (document.body.classList.contains('productcard')){
        // Manually change css style for dark theme
        console.log("Page does not supports dark theme");
        document.querySelector('.productcard-basics__title').style.color = 'rgb(242, 242, 242)';


        var excludedElements = ['.productcard-player__container', '.menu-main', '.menu__container', '.menu-link', '.menu-tray', '.gog-gallery', '.wishlist-button__state-default', '.gog-gallery__shadow', '.in-dev-banner__bullet', '.in-dev-banner', '.in-dev-banner__header', '.in-dev-banner__graphic-icon', '.in-dev-banner__graphic', '.in-dev-banner__bullet', '.gog-gallery__layer', '.gog-gallery__display-wrapper', '.gog-gallery__slider', '.cart-button__state-default', '.goodies__link', '.product-actions__playable-after', '.product-actions__playable-after-date', '.edition-picker__label', '.edition-picker__selected-edition', '.edition-picker__trigger-icon', '.menu-item', '.product-actions-price__discount', '.wishlist-button', '.wishlist-button__state-on-wishlist', '.cart-button__state-owned','.go-to-library-button__wrapper', '.wishlist-button__wrapper', '.product-actions__lowest-price-before-discount', '._price', '.product-tile__wishlist', '.product-tile__label', '.product-tile__label-icon', '.ic-svg', '.cart-button__state-in-cart', '.cart-button__wrapper', '.productcard-player__logo', '.howlongtobeat-box__time', '.howlongtobeat-box__name', '.product-tile__price', '.product-tile__price-discounted', '.product-tile__prices-inner'];

        // Construct the CSS selector string to exclude the specified classes
        var selector = '*:not(' + excludedElements.join('):not(') + '):not(a)';

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

        var specialElements = ['.howlongtobeat-box__time', '.howlongtobeat-box__name', '.product-actions__offer-ends-in'];

        var filteredSpecialElements = document.querySelectorAll(specialElements);

        // Change the text colors of special elements
        filteredSpecialElements.forEach(function(element) {
            element.style.color = 'rgb(237, 237, 237)';
        });

        var whiteElements = ['.edition-picker__trigger', '.product-actions__playable-after', '.product-actions__playable-after-date', '.go-to-library-button'];

        var filteredWhiteElements = document.querySelectorAll(whiteElements);

        // Change the text colors of special elements
        filteredWhiteElements.forEach(function(element) {
            element.style.color = 'rgb(33, 33, 33)';
        });
    } else {
        // Select the div with class "content cf"
        var contentDiv = document.querySelector('.content.cf');

        // Change its background color
        contentDiv.style.backgroundColor = 'rgb(33, 33, 33)';

        var greyElements = document.querySelectorAll('.product-row__text, .filters__section, .product-row__picture');

        // Loop through each element and set the background color
        greyElements.forEach(function(element) {
            element.style.backgroundColor = 'rgb(48, 48, 48)';
        });

        // Select all elements with class "product-title"
        var productTitleElements = document.querySelectorAll('.product-title');

        // Loop through each element and set the color
        productTitleElements.forEach(function(element) {
            element.setAttribute('style', 'color: rgb(237, 237, 237)');
        });

        var whiteText = ['.header-dropdown'];

        var filteredWhiteText = document.querySelectorAll(whiteText);

        // Change the text colors of special elements
        filteredWhiteText.forEach(function(element) {
            element.style.color = 'rgb(237, 237, 237)';
        });

        var activeButtons = document.querySelectorAll('.module-header__btn.is-active');

        // Loop through each element and set the text color
        activeButtons.forEach(function(button) {
            button.style.color = 'rgb(237, 237, 237)';
        });
    }
})();
