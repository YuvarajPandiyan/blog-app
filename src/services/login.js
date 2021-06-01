export const logIn = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        localStorage.getItem("username") === username &&
        localStorage.getItem("password") === password
      ) {
        localStorage.setItem("authenticated", "true");
        resolve({
          authenticated: true,
        });
      } else {
        reject({ authenticated: false });
      }
    }, 100);
  });
};

export const logOut = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.setItem("authenticated", "false");
      resolve({
        authenticated: false,
      });
    }, 100);
  });
};
