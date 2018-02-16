angular
.module('comodoTestApp')
.service('CV', function ($q, $resource) {

  this.host = 'http://localhost:3000/';
  var allCV = [];
  this.CV = [];
  this.setView = {};

  this.addNewCV = function (cv) {
    var addCV = $resource(this.host + 'cvList');
    return addCV.save({}, cv);
  };

  this.getAllCV = function () {
    var getcv = this.getCVInstance();
    var cvs = [];

    getcv.query().$promise.then(function (updatedCV) {
      updatedCV.forEach(function (item) {
        if (item.name) {
          cvs.push(item);
        }
      })
    });

    return cvs;
  };

  this.getArchives = function () {
    var archives = $resource(this.host + 'archiveCV', {},
      {getAll: {method: 'GET', isArray: true}});

    var archivesFromServer = [];

    archives.getAll(function (res) {
      res.forEach(function (item) {
        if (item.name) {
          archivesFromServer.push(item);
        }
      });
    });
   return archivesFromServer;
  }

  this.removeCVById = function (id) {
    var removeCV = this.getCVInstance();

    return removeCV.get({id: id}, function (cv) {
      cv.$delete(function () {

      });
    })
  };

  this.addToArchive = function (cv) {
    var archive = $resource(this.host + 'archiveCV');

    return archive.save({}, cv);
  }

  this.getCVInstance = function () {
    return $resource(this.host + 'cvList/:id', {id: '@id'}, {
      update: {
        method: "PUT"
      },
      del: {
        method: 'DELETE'
      }
    });
  };

  this.getArchiveCVInstance = function () {
    return $resource(this.host + 'archiveCV/:id', {id: '@id'}, {
      update: {
        method: "PUT"
      },
      del: {
        method: 'DELETE'
      }
    });
  };

  this.updateCV = function (id) {
    var promise = $q(function (resolve, reject) {
      var cv = User.get({id: id}, function (item) {
        for (prop in id) {
          if (cv.hasOwnProperty(prop)) {
            cv[prop] = id[prop];
          }
        }
        cv.$update(function (err) {
          if (!err) resolve('all GOOOOOD');
        });
      });
    });

    return promise;
  };

  this.setCV = function (cv) {
    this.CV = cv;
  };

  this.getCV = function (id) {
    var cv = this.getCVInstance();
    return $q(function (resolve, reject) {
      cv.get({id: id}).$promise.then(function (item) {
        resolve(item);
      });
    });
  };

  this.setViewCV = function (cv) {
    this.setView = cv;
  };

  this.getViewCV = function () {
    return this.setView;
  };

  this.removeViewCV = function () {
    this.setView = {};
  };

  this.editCV = function (cv) {
    var updateCV = this.getCVInstance();
    var update = updateCV.get({id: cv.id}, function (item) {
      for (prop in cv) {
        if (update[prop] !== cv[prop]) {
          update[prop] = cv[prop];
        }
      }
      update.$update(function (err) {
        console.log('good');
      });
    });
     return update;
  }

  this.getArchiveCV = function (id) {
    var archiveCV = this.getArchiveCVInstance();
    return $q(function (resolve, reject) {
      archiveCV.get({id: id}).$promise.then(function (archive) {
        resolve(archive);
      });
    });
  }
});
