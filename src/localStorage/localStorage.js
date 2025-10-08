
export const getInstalledApps = () => {
  const stored = localStorage.getItem("installedApps");
  return stored ? JSON.parse(stored) : [];
};

export const saveInstalledApp = (app) => {
  const existing = getInstalledApps();
  const alreadyInstalled = existing.find((item) => item.id === app.id);
  if (!alreadyInstalled) {
    existing.push(app);
    localStorage.setItem("installedApps", JSON.stringify(existing));
  }
};
export const removeInstalledApp = (id) => {
  const existing = getInstalledApps();
  const updated = existing.filter((item) => item.id !== id);
  localStorage.setItem("installedApps", JSON.stringify(updated));
};