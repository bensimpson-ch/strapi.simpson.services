

$( document ).ready(function($) {
    'use strict';
    function writeIntegrations(integrations) {
        for (var i = 0; i < integrations.data.length; i++) {
            var card = "<div class='card'>" +
                "<div class='card-body'>" +
                "<a class='card-link' href='"+integrations.data[i].attributes.href+"'>"+integrations.data[i].attributes.name+"</a>" +
                    "<p class='card-text'>"+ integrations.data[i].attributes.description + "<br/><b>" +
                    integrations.data[i].attributes.keywords + "</b></p>" +
                "</div>" +
            "</div>";
           $('#indexIntegrations').html(card)
        }
    }

    $.getJSON("https://strapi.simpson.services/api/github?populate=*", function (data) {
        $('#indexTitle').html(data.data.attributes.title);
        $('#indexDescription').html(data.data.attributes.description);
        $('#indexIntegrationsLabel').html(data.data.attributes.integrationsLabel);
        writeIntegrations(data.data.attributes.integrations)
        $('#indexPlannedIntegrationsLabel').html(data.data.attributes.plannedIntegrationsLabel);
    });
});