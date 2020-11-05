export class UserInfo {
    constructor(selectors) {
        this.userName = document.querySelector(selectors.name);
        this.userJob = document.querySelector(selectors.job);
    }

    getUserInfo() {
        return {
            userName: this.userName.textContent,
            userJob: this.userJob.textContent
        }
    }

    setUserInfo (newUserName, newUserJob) {
        this.userName.textContent = newUserName;
        this.userJob.textContent = newUserJob;
    }

}