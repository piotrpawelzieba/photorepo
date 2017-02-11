import React from 'react';
export default({
    title, 
    isPrivate=true,
    addCategory, 
    setTitle, 
    setPrivacy
}) => (
    <form>
        <label for="categoryTitle">Title:</label>
        <input type="text" name="categoryTitle" value={title} onChange={setTitle} />
        <label for="isPrivate">isPrivate</label>
        <input type="checkbox" name="isPrivate" value={isPrivate} onChange={setPrivacy} />
    </form>
);