

$( document ).ready(function($) {
    'use strict';

    function writeCards(cards) {
        var completedCards = 'n/a';
        var inProgressCards = 'n/a';
        var plannedCards = 'n/a';
        console.log('cards: ' + cards)
        for (var i = 0; i < cards.length; i++) {
            if(cards[i].attributes.status === 'Complete') {
                if (completedCards === 'n/a') {
                    completedCards = '';
                }
                completedCards += "<div class='card'>" +
                "<div class='card-body'>" +
                "<a class='card-link' href='"+cards[i].attributes.href+"'>"+cards[i].attributes.name+"</a>" +
                "<p class='card-text'>"+ cards[i].attributes.description + "<br/><b>" +
                    cards[i].attributes.keywords + "</b></p>" +
                "</div>" +
                "</div>";
            }
            if(cards[i].attributes.status === 'In Progress') {
                if (inProgressCards === 'n/a') {
                    inProgressCards = '';
                }
                inProgressCards += "<div class='card'>" +
                "<div class='card-body'>" +
                "<a class='card-link' href='"+cards[i].attributes.href+"'>"+cards[i].attributes.name+"</a>" +
                "<p class='card-text'>"+ cards[i].attributes.description + "<br/><b>" +
                    cards[i].attributes.keywords + "</b></p>" +
                "</div>" +
                "</div>";
            }
            if(cards[i].attributes.status === 'Planned') {
                if (plannedCards === 'n/a') {
                    plannedCards = '';
                }
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
        $('#indexInProgressIntegrations').html(inProgressCards);
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
        $('#indexInProgressIntegrationsLabel').html(data.data.attributes.integerationsInProgressLabel);
        $('#indexPlannedIntegrationsLabel').html(data.data.attributes.plannedIntegrationsLabel);
        writeIntegrations(data.data.attributes.integrations)
    });
});