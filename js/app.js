const clientId = "d61d2829dd74c22c3a2d"
const clientSecret = "9033c40e998d3ba05a6b9f504618aeb351cc0555"

var app = new Vue({
	el : "#app",
	data : {
		title : "GitHub Profile Viewer",
		username : "",
		userdata : {}
	},
	methods: {
		async getUserProfile(username) {
			let apiUrl = "https://api.github.com/users/" + username + "?client_id=" + clientId + "&client_secret=" + clientSecret
			let response = await fetch(apiUrl)
			return await response.json()
		},
		async searchUser() {
			if(this.username) {
				var userProfile = await this.getUserProfile(this.username)
				if(userProfile) {
					this.userdata = userProfile
				}
			}
		}
	}
})