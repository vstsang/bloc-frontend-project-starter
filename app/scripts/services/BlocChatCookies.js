(function() {
/**
* @function BlocChatCookies
* @desc Store username in cookies
* @param {Object} $cookies service
*/
	function BlocChatCookies($cookies, $uibModal) {
		
		var currentUser = $cookies.get('blocChatCurrentUser');

		/*
		var putUsername = function(username) {
			$cookies.put('blocChatCurrentUser', username);
		};
		
		if (!currentUser || currentUser === '') {

			var modalInstance = $uibModal.open({
				backdrop: 'static',
				size: 'sm',
				templateUrl: '/templates/setUsernameModalContent.html',
				controller: 'UsernameModalInstanceCtrl',
				controllerAs: '$userctrl'
			});

		}	
*/		
		return {
			//putUsername: putUsername
			currentUser: currentUser
		};

	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies])
		.factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies]);
})();