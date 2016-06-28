/*
 *  Author: Colum Bennett < colum.bennett@feedhenry.com >
 *  Re-useable Angular service module using FeedHenry Hybird API "$fh.cloud"" call.
 *  See developers docs, http://docs.feedhenry.com/
 */
/*
 *  @endpoint : name of required cloud endpoint.
 *  @params : request parameters for given endpoint.
 *  @succesCb : if act call is successful, preform this operation.
 *  @errCb : if call fails, preform this operation.
 */
// angular.module('app.services.fh', []).service("fh", function() {
//
// 	this.cloud = function(endpoint, params, successCb, errCb) {
// 		$fh.cloud({
// 				path: endpoint,
// 				data: params
// 			},
// 			successCb,
// 			errCb
// 		);
// 	};
// });


angular.module('app.services.fh', []).service('fh', ['$q', Fh]);

function Fh($q) {
	this.$q = $q;
}

Fh.prototype.cloud = function(params) {
	return this.$q(function(resolve) {
		$fh.cloud(params,
			function(res) {
				console.log('fh.cloud res :: ', res);
				resolve({'res':res});
			},
			function(err) {
				console.log('fh.cloud err :: ', err);
				resolve({'err':err});
			}
		);
	});
};
