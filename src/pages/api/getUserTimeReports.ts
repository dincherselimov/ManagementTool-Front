const getUserTimeReports = async () => {
    try {
        const token = localStorage.getItem('token');

        if (token) {
            const { userId } = JSON.parse(atob(token.split('.')[1]));
            
            const url = `http://localhost:3000/api/getUserTimeReports?userId=${userId}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

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
