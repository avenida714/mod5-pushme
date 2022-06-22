//THUNKS

//subroutine used to inject an additional calculation into another subroutine.
// a func that returns a func

// action creator returns obj must have type, maybe payload.

//thunks are used by higher order funcs. used to add asynchronous functionality to redux, allowing us to make calls to our backend server and then dispatch that info to our Action Creator

//PROJECT STRUCTURE
// before, one folder held everything in the project

//but now we are running frontend and backend. they need to talk to one another.  WE NEED ONE ROOT FOLDER.
  //inside the root, there's a backend and a frontend.  backend will have all the express and psql; frontend will have react
