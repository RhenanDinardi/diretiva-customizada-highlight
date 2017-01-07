/**
 * Highlight Service
 * @namespace highlight
 * @desc Destaque para texto passado como parametro, configurado pelo elemento adicionado no html, pode ser customizado com classe
 * @author Rhenan Dinardi - 27-09-2016
 */
(function () {
    'use strict';

    angular
        .module('filters')
        .filter('highlight', filterHighlight);

    function filterHighlight($sce) {
        return function (text, phrase) {
			
			//escolha o estilo ou classe a ser aplicada na area destacada
			var highlight = '<strong>$1</strong>';
			//var highlight = '<span class="focus">$1</span>';
			
            if (phrase) {

                text = (text) ? text.replace(new RegExp('(' + phrase + ')', 'gi'), highlight) : '';
            }

            return $sce.trustAsHtml(text);
        }
    };
})();