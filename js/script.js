"use-strict";

// Create a List

const app = new Vue(
    {
        el: "#app",
        data: {
            newItem: "",
            usList: [
                "Alabama"
            ]
        },
        methods: {
            deleteItemList: function(itemList) {
                this.usList.splice(itemList, 1);
            },
            addItemList: function() {
                if (this.newItem !== "") {
                    this.usList.push(this.newItem);
                    this.newItem = "";
                }
            }
        } 
    }
);

