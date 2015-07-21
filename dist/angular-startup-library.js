(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularStartupLibrary.config', [])
      .value('angularStartupLibrary.config', {
          debug: true
      });

  // Modules
  angular.module('angularStartupLibrary.directives', []);
  angular.module('angularStartupLibrary.directives', []);
  angular.module('angularStartupLibrary.filters', []);
  angular.module('angularStartupLibrary.services', []);
  angular.module('angularStartupLibrary',
      [
          'angularStartupLibrary.config',
          'angularStartupLibrary.directives',
          'angularStartupLibrary.filters',
          'angularStartupLibrary.services',
          'ngResource',
          'ngCookies',
          'ngSanitize',
          'aslPartials'
      ]);

})(angular);

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/header-one.html',
    '<nav class="navbar navbar-custom navbar-static-top"><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#>Title</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav"><li class=active><a href=#>Home</a></li><li><a href=#>Link</a></li><li><a href=#>Link</a></li></ul><form class="navbar-form navbar-left" role=search><div class=form-group><input type=text class=form-control placeholder=Search></div><button type=submit class="btn btn-default">Submit</button></form><ul class="nav navbar-nav navbar-right"><li><a href=#>Link</a></li><li class=dropdown><a href=# class=dropdown-toggle data-toggle=dropdown>Dropdown <b class=caret></b></a><ul class="dropdown-menu pull-right"><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li><a href=#>Separated link</a></li></ul></li></ul></div></nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/header-two.html',
    '<header class=header-2><div class=container><div class=row><nav class="navbar col-sm-12" role=navigation><div class=navbar-header><button type=button class=navbar-toggle></button> <a class=brand href=#><img src=../../common-files/icons/Infinity-Loop@2x.png width=50 height=50>Startup</a></div><div class="collapse navbar-collapse"><ul class="nav pull-right"><li class=active><a href=#>Home</a></li><li><a href=#>Work</a></li><li><a href=#>Blog</a></li><li><a href=#>Contact</a></li></ul><ul class=subnav><li><a href=#>Privacy</a></li><li><a href=#>Terms</a></li><li><a href=#>Advertise</a></li><li><a href=#>Affiliates</a></li><li><a href=#>Newsletter</a></li><li><a href=#>About</a></li><li><a href=#>Contact Us</a></li></ul></div></nav></div></div></header>');
}]);
})();

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/pages-one.html',
    '<div class=container-full><div class=row><div class="col-lg-12 text-center v-center"><h1>{{page.title}}</h1><p class=lead>{{page.subTitle}}</p><br><br><br><form class=col-lg-12><div class=input-group style="width:340px;text-align:center;margin:0 auto;"><input class="form-control input-lg" title={{page.input.title}} placeholder={{page.input.placeholder}} type=text> <span class=input-group-btn><button class="btn btn-lg btn-primary" type=button>{{page.input.button.text}}</button></span></div></form></div></div><div class=row><div class="col-lg-12 text-center v-center" style=font-size:39pt;><a href=#><i class=icon-google-plus></i></a> <a href=#><i class=icon-facebook></i></a> <a href=#><i class=icon-twitter></i></a> <a href=#><i class=icon-github></i></a> <a href=#><i class=icon-pinterest></i></a></div></div></div>');
}]);
})();

angular.module('angularStartupLibrary.directives')
.directive('headerOne', function() {
  return {
    templateUrl: 'angular-startup-library/partials/header-one.html',
    scope: {},
    restrict: 'EA'

  };
});

angular.module('angularStartupLibrary.directives')
.directive('pagesOne', function() {
  return {
    templateUrl: 'angular-startup-library/partials/pages-one.html',
    scope: {},
    restrict: 'EA'

  };
});

angular.module('angularStartupLibrary.services')
.provider('startup', function() {
  this.$get = function(){

  };
});

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/header-one.html',
    '<header class="header-1">\n' +
    '  <div class="container">\n' +
    '    <div class="row">\n' +
    '      <nav class="navbar col-sm-12" role="navigation">\n' +
    '        <div class="navbar-header">\n' +
    '          <button type="button" class="navbar-toggle"></button>\n' +
    '          <a class="brand" href="#">\n' +
    '            <img src="../../common-files/img/header/logo@2x.png" width="50" height="50" alt="">Startup</a>\n' +
    '        </div>\n' +
    '        <div class="collapse navbar-collapse">\n' +
    '          <ul class="nav pull-right">\n' +
    '            <li><a href="#">asdf</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">WORK</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">BLOG</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">CONTACT</a>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '          <ul class="subnav">\n' +
    '            <li><a href="#">Privacy</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Terms</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Advertise</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Affiliates</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Newsletter</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">About</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Contact Us</a>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </nav>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('aslPartials');
} catch (e) {
  module = angular.module('aslPartials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-startup-library/partials/header-two.html',
    '<header class="header-2">\n' +
    '  <div class="container">\n' +
    '    <div class="row">\n' +
    '      <nav class="navbar col-sm-12" role="navigation">\n' +
    '        <div class="navbar-header">\n' +
    '          <button type="button" class="navbar-toggle"></button>\n' +
    '          <a class="brand" href="#">\n' +
    '            <img src="../../common-files/icons/Infinity-Loop@2x.png" width="50" height="50" alt="">Startup</a>\n' +
    '        </div>\n' +
    '        <div class="collapse navbar-collapse">\n' +
    '          <ul class="nav pull-right">\n' +
    '            <li class="active"><a href="#">Home</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Work</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Blog</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Contact</a>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '          <ul class="subnav">\n' +
    '            <li><a href="#">Privacy</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Terms</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Advertise</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Affiliates</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Newsletter</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">About</a>\n' +
    '            </li>\n' +
    '            <li><a href="#">Contact Us</a>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </nav>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</header>\n' +
    '');
}]);
})();