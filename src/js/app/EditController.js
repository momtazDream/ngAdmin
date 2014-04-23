app.controller('EditController', ['$scope', '$routeParams', 'apiService', 'routeService','CmsConfig', function EditController($scope, $routeParams, apiService, routeService, CmsConfig) {
    /* structure hack for intellij structrue panel */
    var scope = this;
    if (true)scope = $scope;
    /* end */

    scope.formdata = null;
    scope.image = {};
 // scope.ngFileReaderImage = {'test':'test'};

    scope.state = "";

    scope.processing = false;


    var _activeRecord = null;


    scope.initialize = function () {
        scope.table = $routeParams.table;
        scope.id = $routeParams.id;

        scope.fields = CmsConfig.tables[scope.table].editfields;

        scope.setTitle(scope.table, ['edit'])

        scope.ckeditorOptions = {
            height : '150px',
            format_tags : 'h3;div;p',
            toolbar_full: [
                { name: 'basicstyles',
                    items: [ 'Bold', 'Italic', 'Underline' ] },
                { name: 'paragraph', items: [ 'BulletedList', 'NumberedList' ] },
                { name: 'editing', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight' ] },
                { name: 'styles', items: [  'PasteText', 'PasteFromWord', 'RemoveFormat' ] },
                { name: 'formatting', items: [ 'Outdent', 'Indent', 'Format', 'Source'  ] }
            ]
        };

        log("11","EditController","initialize", $routeParams.table);

        if(scope.id ){
            loadFormData();
        }else{
        }
        toggleListeners(true);
    };


    var toggleListeners = function (enable) {
        // remove listeners

        if (!enable)return;
        // add listeners.

        scope.$on('$destroy', onDestroy)
    };
    var onDestroy = function (enable) {
        toggleListeners(false);
    };
    scope.setImage = function(img) {
        log("51","EditController","setImage", "");
    }

    scope.save = function(data) {
        log("30","EditController","save", data, "valid", scope.form);

       // return;
        scope.state = "submitted";

        if(scope.form.$invalid){
            return;
        }

      //  data.table = scope.table;
      //  data.id = scope.id;



        scope.processing = true;

        var onComplete = function(response){
            scope.state = "complete";
            scope.id = response.id;
            log("80","EditController","save_row", response);
            loadFormData();
        }

        if(scope.id == 'add')
        apiService.create({table:scope.table}, data, onComplete)
        else
        apiService.update({table:scope.table, id:scope.id}, data, onComplete)
    }
    var loadFormData = function() {
        scope.formdata = null;
       // return;
        _activeRecord = apiService.retrieve({table:scope.table, id:scope.id}, function(response){
            scope.formdata = {};
            for(var i in response.result){

                for (var j = 0; j < scope.fields.length; j++) {
                    var obj = scope.fields[j];
                    if(obj.name == i){
                        scope.formdata[i]  = response.result[i];
                    }
                }

            }

            scope.setTitle(scope.table, [ 'edit', scope.formdata.title]);

            scope.form.$setPristine();

            scope.processing = false;
        })
    }

    scope.delete = function(title, id) {
        var proceed = confirm("Are you sure you want to delete '"+title+"'?");
        if(proceed){
           // var data = {};
          //  data.table = scope.table;
          //  data.id = id;
            scope.processing = true;
            apiService.delete({table:scope.table, id:scope.id}, function(response){
                scope.processing = false;
                scope.redirectTo('list/'+scope.table);
            })
        }

    }
    scope.cancel = function() {
        scope.redirectTo('list/'+scope.table);
    }
    scope.hello = function() {
        log("121","EditController","hello", "");
    }

    scope.initialize();
    return scope;
}]);