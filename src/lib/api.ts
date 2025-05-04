// Function to save editor content
export const saveEditorContent = async (content: any) => {
    // Convert content to string and encode in base64
    const contentString = JSON.stringify(content);
    const encodedContent = btoa(contentString);
    
    try {
      const response = await fetch('https://67f7183e42d6c71cca6403bd.mockapi.io/v1/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageContent: encodedContent
        }),
      });
      
      const data = await response.json();
      
      // Save the ID to localStorage
      if (data.id) {
        localStorage.setItem('editorPageId', data.id);
      }
      
      return data;
    } catch (error) {
      console.error('Error saving content:', error);
      throw error;
    }
  };
  
  // Function to load editor content
  export const loadEditorContent = async (id?: string) => {
    // If no ID is provided, try to get it from localStorage
    const pageId = id || localStorage.getItem('editorPageId');
    
    if (!pageId) {
      return null; // No saved content
    }
    
    try {
      const response = await fetch(`https://67f7183e42d6c71cca6403bd.mockapi.io/v1/api/pages/${pageId}`);
      const data = await response.json();
      
      // Decode the content from base64
      const decodedContent = atob(data.pageContent);
      return JSON.parse(decodedContent);
    } catch (error) {
      console.error('Error loading content:', error);
      throw error;
    }
  };