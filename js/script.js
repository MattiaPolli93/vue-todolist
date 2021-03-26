"use-strict";

// Create a To-Do List

const app = new Vue(
    {
        el: "#app",
        data: {
            newItemList: "",
            usList: [
                "Alabama",
                "Alaska",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "Florida",
                "Georgia"
            ],
        },
        methods: {
            deleteItemList: function(itemList) {
                this.usList.splice(itemList, 1);
            },            
        } 
    }
);