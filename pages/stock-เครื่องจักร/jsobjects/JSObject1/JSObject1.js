export default {
	checkLogin() {
		showAlert("isLogin = " + appsmith.store.user);  
		if (appsmith.store.isLogin === undefined || appsmith.store.isLogin === false || appsmith.store.isLogin === "false") {
			navigateTo('login');
		}
	}
}