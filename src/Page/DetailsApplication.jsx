import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApplication from "../coponents/useApplication";
import DetailsTop from "../coponents/DetailsTop";
import { saveInstalledApp, getInstalledApps } from "../localStorage/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import AppReviewChart from "../coponents/AppReviewChart";
import Description from "../coponents/Description";

const DetailsApplication = () => {
  const { id } = useParams();
  const { application, loading, error } = useApplication();
  const [install, setInstall] = useState(false);

  const app = application.find(
    (singleApplication) => singleApplication.id === Number(id)
  );

  
  useEffect(() => {
    if (app) {
      const installedApps = getInstalledApps();
      const already = installedApps.find((item) => item.id === app.id);
      if (already) setInstall(true);
    }
  }, [app]);

  const handleInstall = () => {
    saveInstalledApp(app);
    setInstall(true);
    toast.success("App Uninstalled!");
  };

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div className="p-4">
      <DetailsTop app={app} handleInstall={handleInstall} install={install} />
    <AppReviewChart app={app}></AppReviewChart>
    <Description app={app}></Description>
    </div>
    </>
    
    
    );
};

export default DetailsApplication;

