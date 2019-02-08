// import sample from './data';
import "core-js/fn/object/assign";
import Vue from 'vue';

import {
    populateAmenitiesAndPrices
} from './helpers';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue(
    {
        el: '#app',
        data: Object.assign(model, {
            // title: sample.title,
            // address: sample.address,
            // about: sample.about,
            headerImageStyle: {
                'background-image': `url(${model.images[0]})`
            },
            // prices: sample.prices,
            // amenities: sample.amenities,
            contracted: true,
            modalOpen: false,
        }),
        methods: {
            escapeKeyListener(evt){
                if (evt.keyCode === 27 && this.modalOpen) {
                    this.modalOpen = false;
                }
            }
        },
        // adding a watcher to d body tag, so the main body of the site is not scrollable when the modal is active
        watch: {
            modalOpen: function() {
                var className = 'modal-open';
                if(this.modalOpen){
                    document.body.classList.add(className);
                } else{
                    document.body.classList.remove(className);
                }
            }
        },
        created: function(){
            document.addEventListener('keyup', this.escapeKeyListener);
        },
        // to avoid memory leaks, we should also use removeEventListener to get rid of the listener when the
        // Vue instance is torn down.
        destroyed: function(){
            document.removeEventListener('keyup', this.escapeKeyListener);
        }
    });

// document.addEventListener(</span>'keyup',
// 	function(evt){
// 		if (evt.keyCode === 27 && app.modalOpen) {
// 			app.modalOpen=false;
// 		}
// 	});