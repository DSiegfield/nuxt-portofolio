// export default {
//   scrollBehaviour(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     }

//     if (to.hash) {
//       return {
//         el: to.hash,
//         behavior: "smooth",
//       };
//     }

//     return { left: 0, top: 0, behavior: "smooth" };
//   },
// };

export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash && to.path == from.path) {
      const el = document.querySelector(to.hash);
      return { el, top: 30, left: 0, behavior: "smooth" };
    }

    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
};
