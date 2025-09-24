// A key to store our data under in localStorage
const HISTORY_KEY = 'cxrVisionHistory';

/**
 * Retrieves the entire analysis history from localStorage.
 * @returns {Array} An array of history items.
 */
export const getHistory = () => {
    try {
        const history = localStorage.getItem(HISTORY_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error("Could not retrieve history from localStorage", error);
        return [];
    }
};

/**
 * Saves a new analysis result to the history.
 * @param {object} newAnalysis - The new analysis data to save.
 */
export const saveAnalysis = (newAnalysis) => {
    try {
        const history = getHistory();
        // Add the new analysis to the beginning of the array
        const updatedHistory = [newAnalysis, ...history];
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
        console.error("Could not save analysis to localStorage", error);
    }
};

/**
 * Clears the entire analysis history.
 */
export const clearHistory = () => {
    try {
        localStorage.removeItem(HISTORY_KEY);
    } catch (error) {
        console.error("Could not clear history from localStorage", error);
    }
};