"use-strict";

// Create a List

const app = new Vue(
    {
        el: "#app",
        data: {
            newItem: "",
            usList: [
                "Alabama"
            ],
            usListComplete: [ 
                "Alabama",
                "Alaska",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "Florida",
                "Georgia",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Pennsylvania",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming"
            ]
        },
        methods: {
            deleteItemList: function(itemIndex) {
                this.usList.splice(itemIndex, 1);
            },
            addItemList: function() {

                if (this.usList.length == this.usListComplete.length) {
                    alert("Congratulations, You Won! 🇺🇸");
                } else if ((this.newItem !== "") && (this.usListComplete.includes(this.newItem))) {
                    this.usList.push(this.newItem);
                    this.newItem = "";
                }                
            }
        } 
    }
);