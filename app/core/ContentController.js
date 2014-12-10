app.controller('ContentController',["$scope", function($scope) {
    //ContentController

    // load in the controller.
    //$scope.content = '<div ng-include="'template/index/game_scroller.html'"></div>';

    /*
     * Load the model for the sidebar information
     * Should be data pulled from a service.
     *
     * Mock it out for the time being.
     */
    $scope.announcements = {
        title: "",
        links: [
            {title: "Square Enix Announces Kingdom Hearts HD 1.5 ReMIX is Now available for Playstation 3", link: "/news/some_link"},
            {title: "Castle of Illusion starring Mickey Mouse is now available for download.", link: "/news/some_link"},
            {title: "Disney Infinity Toy Box Ipad app is out now!", link: "/news/some_link"},
            {title: "Spooky Castle, Lava Puzzler and 3 Little House Galore, download this week's Infinity Toy Boxes!", link: "/news/some_link"},
            {title: "Explore, craft and help defeat the red Queen in the new mobile game Alice in Wonderland: A New Champion", link: "/news/some_link"},
        ]
    };
    $scope.topViewedTopics = {
        title: "Top Viewed Topics",
        links: [
            {title: "What's changing in Disney Guest Experience", link: "support/some_link"},
            {title: "We're currently not able to redeem this code issue and who to contact.", link: "support/some_link"},
            {title: "There is a problem with your sound card, the game cannot play music. What to do?", link: "support/some_link"},
            {title: "Crashing at launch for Epic Mickey", link: "support/some_link"},
            {title: "I lost my username and password for Club Penguin. How can I get it back", link: "support/some_link"},
            {title: "What are Disney Infinity Toy Boxes", link: "support/some_link"},
        ]
    }

    /*
     * Should get the latest announcements from the service.
     *
     */
    $scope.getAnnouncements = new function()
    {
        return this.announcements;
    }

    /*
     * Should get the items required through the service
     *
     */
    $scope.getTopViewedTopics = new function()
    {
        return this.topViewedTopics;
    }

}])