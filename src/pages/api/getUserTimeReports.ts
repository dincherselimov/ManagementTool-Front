const getUserTimeReports = async () => {
    try {
        // Get user ID from localStorage
        const token = localStorage.getItem('token');

        // Check if token exists in localStorage
        if (token) {
            // Decode token to get user ID
            const { userId } = JSON.parse(atob(token.split('.')[1]));
            
            // Construct the URL with userId as a query parameter
            const url = `http://localhost:3000/api/getUserTimeReports?userId=${userId}`;

            // Submit the GET request to the backend
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            // Check if the request was successful
            if (response.ok) {
                const responseData = await response.json();
                return responseData; 
            } else {
                throw new Error(`Failed to fetch data. Server responded with status: ${response.status}`);
            }
        } else {
            throw new Error("Token not found in localStorage");
        }
    } catch (error:any) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export { getUserTimeReports };
