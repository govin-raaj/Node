function setUsername(username){
    console.log("called");
    this.username=username
}

function setUser(username,email,pass){
    // setUsername(username)
    setUsername.call(this,username)
    this.email=email
    this.pass=pass
}

const user=new setUser("waylay","way@val.com","agjagag")
console.log(user);
