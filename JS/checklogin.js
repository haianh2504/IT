var checklogin = document.getElementById("checklogin").addEventListener("click", function (special) {
    var user = firebase.auth().currentUser;
    if (user) {
    } else {
        Swal.fire({
            icon: "error",
            title: "Let's sign in first!",
            didClose: () => {
                window.location.href = "login.html";
            },
        });
    }
});
