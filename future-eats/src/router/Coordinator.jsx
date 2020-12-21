export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goBack = (history) => {
  history.goBack();
};

export const goToSignUp = (history) => {
  history.push("/signup");
};

export const goToCart = (history) => {
  history.push("/cart");
};

export const goToProfile = (history) => {
  history.push("/profile");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToAddAddress = (history) => {
  history.push("/add-address")
}