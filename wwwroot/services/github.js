(function () {
    var github = $http => {
        var getUser = username => {
            return $http.get("https://api.github.com/users/" + username)
                .then(response => {
                    return response.data;
                });
        };
        var getRepos = user => {
            return $http.get(user.repos_url)
                .then(response => {
                    return response.data;
                });
        };
        var getRepoDetails = function (username, reponame) {
            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
            return $http.get(repoUrl)
                .then(response => {
                    repo = response.data;
                    return $http.get(repoUrl + "/contributors");
                })
                .then(response => {
                    repo.contributors = response.data;
                    return repo;
                })
        }
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };
    };
    var module = angular.module("toolbox");
    module.factory("github", github);
}());