// prop threading  parent to child component
// gets tedious if it is always being nested and nested and nested

//REACT CONTEXT  NOT the same as JS context.
  // own thing:  use it when we need info that can be 'considered global' ... wrapped around teh section of info that needs this information

// used on things with many nests... use sparingly because each time context changes, everything in the nests gets changed

// a -> b -> c ...  e  // prop drilling
//       a => e  with prop context

//"lifting state up"    use context if there are many nested trees
