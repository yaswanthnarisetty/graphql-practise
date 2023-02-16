// import  composeResolvers  from "@graphql-tools/resolvers-composition"
 
// const resolvers = {
//   Query: {
//     myQuery(root, args, context) {
//       if (args.something === '1') {
//         return true
//       }
 
//       return false
//     }
//   }
// }
 
// const isAuthenticated = () => next => (root, args, context, info) => {
//   if (!context.currentUser) {
//     throw new Error('You are not authenticated!')
//   }
 
//   return next(root, args, context, info)
// }
 
// const hasRole = (role) => next => (root, args, context, info) => {
//   if (!context.currentUser.roles?.includes(role)) {
//     throw new Error('You are not authorized!')
//   }
 
//   return next(root, args, context, info)
// }
 
// const resolversComposition = {
//   'Query.myQuery': [isAuthenticated(), hasRole('EDITOR')]
// }
 
// const composedResolvers = composeResolvers(resolvers, resolversComposition)