;(function(){
    'use strict';

    angular.module('client.crud')
        .controller('flashCardController', FlashCardController)

    FlashCardController.$inject= ['$state', '$log']

    function FlashCardController($state, $log) {
        let vm = this

        //public functions
        vm.addAnimationCreate = _addAnimationCreate
        vm.addAnimationPractice = _addAnimationPractice
        vm.addAnimationList = _addAnimationList

        init()

        function init() {
            $log.log('flash-card crud loaded')
        }

        function _addAnimationCreate(){
            if ($state.current.name == 'site.flash-cards') { return {'flipInX' : true}}
            if ($state.current.name != 'site.flash-cards.write' && $state.current.name != 'site.flash-cards') 
                { return {'flipOutX' : true}}
        }

        function _addAnimationList(){
            if ($state.current.name == 'site.flash-cards') { return {'flipInX' : true}}
            if ($state.current.name != 'site.flash-cards.list' && $state.current.name != 'site.flash-cards') 
                { return {'flipOutX' : true}}
        }

        function _addAnimationPractice(){
            if ($state.current.name == 'site.flash-cards') { return {'flipInX' : true}}
            if ($state.current.name != 'site.flash-cards.practice' && $state.current.name != 'site.flash-cards') 
                { return {'flipOutX' : true}}
        }

    }
})();