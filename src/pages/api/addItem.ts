const addItem = async (itemName: string, itemDescription: string, itemSize: string) => {
    try {
      const response = await fetch("http://localhost:3001/api/addItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          item_name: itemName,
          items_description: itemDescription,
          item_size: itemSize
        })
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error:any) {
      throw new Error(error.message);
    }
  };
  
  export { addItem };
  