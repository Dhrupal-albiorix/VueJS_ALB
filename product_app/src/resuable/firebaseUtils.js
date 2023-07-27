// firebaseUtils.js
export async function fetchFirebaseData() {
    try {
        const response = await fetch(
            "https://vuefirebase-c332f-default-rtdb.firebaseio.com/person.json",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        // Convert the object to an array and add an 'id' property to each user object using Object.keys()
        return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}

export async function updateFirebaseData(userId, updatedUserData) {
    try {
        const url = `https://vuefirebase-c332f-default-rtdb.firebaseio.com/person/${userId}.json`;
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUserData),
        });

        if (response.ok) {
            console.log("User information updated successfully!");
        } else {
            console.error("Failed to update user information.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deleteFirebaseData(userId, deleteUserData) {
    try {
        const url = `https://vuefirebase-c332f-default-rtdb.firebaseio.com/person/${userId}.json`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(deleteUserData),
        });

        if (response.ok) {
            console.log("User information deleted successfully!");
        } else {
            console.error("Failed to deleted user information.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}