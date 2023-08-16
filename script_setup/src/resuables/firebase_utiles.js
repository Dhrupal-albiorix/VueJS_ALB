export async function fetchFirebaseData(url) {
    try {
        const response = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function postFirebaseData(url , UserData) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserData),
        });

        if (response.ok) {
            console.log("User information added successfully!");
        } else {
            console.error("Failed to add information.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

