const insertData = async (formData:any) => {
    try {
        const token = localStorage.getItem('token');

        if (token) {
            const { userId } = JSON.parse(atob(token.split('.')[1]));
            
            const formDataWithUserId = { ...formData, userId };

            const response = await fetch('http://localhost:3000/api/insertData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formDataWithUserId)
            });

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



