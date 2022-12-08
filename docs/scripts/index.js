

$( document ).ready(function($) {
    'use strict';

    function writeCards(cards) {
        var completedCards = '';
        var plannedCards = '';
        console.log('cards: ' + cards)
        for (var i = 0; i < cards.length; i++) {
            if(cards[i].attributes.status === 'Complete') {
                completedCards += "<div class='card'>" +
                "<div class='card-body'>" +
                "<a class='card-link' href='"+cards[i].attributes.href+"'>"+cards[i].attributes.name+"</a>" +
                "<p class='card-text'>"+ cards[i].attributes.description + "<br/><b>" +
                    cards[i].attributes.keywords + "</b></p>" +
                "</div>" +
                "</div>";
            }
            if(cards[i].attributes.status === 'In Progress') {
                plannedCards += "<div class='card'>" +
                "<div class='card-body'>" +
                "<a class='card-link' href='"+cards[i].attributes.href+"'>"+cards[i].attributes.name+"</a>" +
                "<p class='card-text'>"+ cards[i].attributes.description + "<br/><b>" +
                    cards[i].attributes.keywords + "</b></p>" +
                "</div>" +
                "</div>";
            }
        }
        $('#indexIntegrations').html(completedCards);
        $('#indexPlannedIntegrations').html(plannedCards);

    }

    function writeIntegrations(data) {
        console.log(data.data.length);
        writeCards(data.data);
    }

    $.getJSON("https://strapi.simpson.services/api/github?populate=*", function (data) {
        $('#indexTitle').html(data.data.attributes.title);
        $('#indexDescription').html(data.data.attributes.description);
        $('#indexIntegrationsLabel').html(data.data.attributes.integrationsLabel);
        writeIntegrations(data.data.attributes.integrations)
        $('#indexPlannedIntegrationsLabel').html(data.data.attributes.plannedIntegrationsLabel);
    });
});