const manageLocalData = (variableName, action, data) => {
  let retrievedData;
  let parsedData;

  if (localStorage.getItem(`${variableName}`)) {
    retrievedData = localStorage.getItem(`${variableName}`);
    parsedData = JSON.parse(retrievedData);
  }
  
  if (!data && !parsedData) {
    return
  } else if (!data && parsedData) {
    action(parsedData);
  } else {
    action(data);
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(`${variableName}`, stringifiedData);
  }
}

export {
  manageLocalData
}