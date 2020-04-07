const _getLocal = key => {
    let data;
    try {
      data = JSON.parse(localStorage.getItem(key));
    } catch {
      data = localStorage.getItem(key);
    }
    return data;
  };
  
  const _saveLocal = (key, value) => {
    value =
      typeof value === "object" && value !== null ? JSON.stringify(value) : value;
    return localStorage.setItem(key, value);
  };
  
  const _removeLocal = key => {
    return localStorage.removeItem(key);
  };
  
  const _clearLocal = () => {
    return localStorage.clear();
  };
  
  const _getSession = key => {
    let data;
    try {
      data = JSON.parse(sessionStorage.getItem(key));
    } catch {
      data = sessionStorage.getItem(key);
    }
    return data;
  };
  
  const _saveSession = (key, value) => {
    value =
      typeof value === "object" && value !== null ? JSON.stringify(value) : value;
    return sessionStorage.setItem(key, value);
  };
  
  const _removeSession = key => {
    return sessionStorage.removeItem(key);
  };
  
  const _clearSession = key => {
    sessionStorage.clear();
  };
  
  export const storage = {
    local: {
      get: _getLocal,
      save: _saveLocal,
      remove: _removeLocal,
      clear: _clearLocal
    },
    session: {
      get: _getSession,
      save: _saveSession,
      remove: _removeSession,
      clear: _clearSession
    }
  };
  