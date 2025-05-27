export default {
checkLogin() {
showAlert("isLogin = " + appsmith.store.isLogin + " (" + typeof appsmith.store.isLogin + ")", "info");
if (appsmith.store.isLogin === undefined || appsmith.store.isLogin === false || appsmith.store.isLogin === "false") {
navigateTo('login');
}
}
}