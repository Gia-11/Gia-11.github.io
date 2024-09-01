// hides display view page
function handleEditProfile() {
    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

// hides edit view page
function handleUpdateProfile() {
    var updatedName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updatedName

    var updatedEmail = document.getElementById("input-email").value
    var email = document.getElementById("email")
    email.textContent = updatedEmail

    var updatedInterests = document.getElementById("input-interests").value
    var interests = document.getElementById("interests")
    interests.textContent = updatedInterests

    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"
}


