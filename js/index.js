/**
 * Created by Thinkpad on 2017/7/11.
 */
angular.module('app',[])
    .service('productData',function () {
        return [
            {
                id:333,
                name:'iphone',
                price:5000
            },{
                id:122,
                name:'ipad',
                price:3000
            },{
                id:100,
                name:'imac',
                price:10000
            },{
                id:6886,
                name:'ipad mini',
                price:2000
            }
        ]
    })
    .controller('myCtrl',function ($scope,productData) {
    $scope.productData=productData;
    $scope.orderType='id';
    $scope.order='-';

    $scope.changeOrder=function (type) {

        $scope.type=type;
        if($scope.order===''){
            $scope.order='-';
        }else{
            $scope.order='';
        }
    }
})