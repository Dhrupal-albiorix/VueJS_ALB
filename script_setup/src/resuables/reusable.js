import { ref , watch} from "vue";

export function fetchData(url, searchQuery) {
    let isLoading = ref(true);
    let isError = ref(false);
    let data = ref(null);

    async function myFun() {
        console.log(`${searchQuery}`);
        try {
            const response = await fetch(`${url}/${searchQuery}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            data.value = await response.json();
            console.log(data.value);
            isLoading.value = false;
        } catch (error) {
            console.error("Error:", error);
            isError.value = true;
        }
        isLoading.value = false;
    }

    // Call myFun initially when the component mounts
    myFun();

    // Create a watch on searchQuery.value
    watch(searchQuery, (newValue, oldValue) => {
        console.log(oldValue)
        console.log("searchQuery changed:", newValue);
        myFun();
    });

    return {
        isLoading,
        isError,
        data,
    };
}
