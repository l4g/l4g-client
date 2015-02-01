app.controller('GamesController', ['$scope', function($scope) {
	$scope.filter = {
		platform: null,
		text: null
	};
	/*
	 * Move games to a service. Pass the results to the service as well.
	 * Because of the amount of games out there we will have to do server
	 * request searching rather than bulk load and filter on the client.
	 */
	$scope.platforms = ["PS4", "PC", "Xbox One", "PS3", "Wii U", "Xbox 360"];
	$scope.games = [];
	$scope.fakeGames = [
		{
			name: "Diablo 3",
			image: "",
			description: "",
			rooms: 0,
			popularity: 13,
			population: 0,
			platforms: ["pc"]
		},{
			name: "Destiny",
			image: "",
			description: "",
			rooms: 21,
			popularity: 31,
			population: 0,
			platforms: ["ps4","xboxone"]
		},{
			name: "Mario Kart",
			image: "",
			description: "",
			rooms: 31,
			popularity: 19,
			population: 0,
			platforms: ["wiiu"]
		},{
			name: "Halo 4",
			image: "",
			description: "",
			rooms: 8,
			popularity: 7,
			population: 0,
			platforms: ["xboxone"]
		},{
			name: "Civilization: Beyond Earth",
			image: "",
			description: "",
			rooms: 0,
			popularity: 0,
			population: 0,
			platforms: ["pc"]
		},{
			name: "Civilization V",
			image: "",
			description: "",
			rooms: 0,
			popularity: 0,
			population: 0,
			platforms: ["pc"]
		},{
			name: "League of Legends",
			image: "",
			description: "",
			rooms: 1,
			popularity: 1,
			population: 3,
			platforms: ["pc"]
		},{
			name: "Dota 2",
			image: "",
			description: "",
			rooms: 3,
			popularity: 2,
			population: 5,
			platforms: ["pc"]
		},{
			name: "Battlefield 4",
			image: "",
			description: "",
			rooms: 2,
			popularity: 1,
			population: 1,
			platforms: ["pc", "ps4", "xboxone"]
		},{
			name: "minecraft",
			image: "",
			description: "",
			rooms: 2,
			popularity: 1,
			population: 2,
			platforms: ["pc"]
		},{
			name: "Counterstrike: global offensive",
			image: "",
			description: "",
			rooms: 4,
			popularity: 5,
			population: 19,
			platforms: ["pc"]
		}
	];
	$scope.queryGames = function() {
		var g = $scope.fakeGames;
		console.log("gtting games");
		// Return the results based on the filter.
		var r = [];
		for(var i = 0; i < g.length; i++) {
			console.log("game: " + i);
			//
			if ($scope.filter.platform != null) {
				if(g[i].platforms.length > 0) {
					for(var j = 0; j < g[i].platforms.length; j++) {
						//
						if (g[i].platforms[j] == $scope.filter.platform) {
							//code
							r.push(g[i]);
						}
					}
				}
				continue;
			}
			console.log("getting: {name}", g[i].name)
			r.push($scope.fakeGames[i]);
		}

		return r;
	}
}]);