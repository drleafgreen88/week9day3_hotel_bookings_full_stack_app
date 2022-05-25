use hotel_california;
db.dropDatabase();

db.guests.insertMany([

    {
        name: "Warrington Minge",
        email: "minge@gmail.com",
        checkedInStatus: "Yes"
    },

    {
        name: "Charles Dickens",
        email: "ChuckyD@hotmail.com",
        checkedInStatus: "No"
    },

    {
        name: "Stephen King",
        email: "StevieK@Overlook.com",
        checkedInStatus: "Yes"
    },

    {
        name: "Jane Austen",
        email: "JaneysGotAGun@gmail.com",
        checkedInStatus: "No"
    }

    
]);
