async function signup() {
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Signup successful");
}

async function login() {
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const msg = await res.text();
    alert(msg);
}