const insertData = async (formData:any) => {
    try {
        // Get user ID from localStorage
        const token = localStorage.getItem('token');

        // Check if token exists in localStorage
        if (token) {
            // Decode token to get user ID
            const { userId } = JSON.parse(atob(token.split('.')[1]));
            
            // Attach userId to the formData
            const formDataWithUserId = { ...formData, userId };

            // Submit the form data to the backend
            const response = await fetch('http://localhost:3000/api/insertData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formDataWithUserId)
            });

            // Check if the request was successful
            if (response.ok) {
                const responseData = await response.json();
                return responseData; // Return the response data
            } else {
                throw new Error(`Failed to submit form data. Server responded with status: ${response.status}`);
            }
        } else {
            throw new Error("Token not found in localStorage");
        }
    } catch (error:any) {
        throw new Error(`Error submitting form: ${error.message}`);
    }
};

export { insertData };



